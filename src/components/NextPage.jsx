import { useEffect, useState } from "react";
import { ethers } from "ethers";
import BottomEffect from "./BottomEffect";
import CoinSection from "./CoinSection";
import Etheruem from "./Etheruem";
import InputSection from "./InputSection";
import PropTypes from 'prop-types';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../contract.js";

export default function NextPage({ account, currentIndex, startAnimation }) {
    const [betAmount, setBetAmount] = useState("1");
    const [maxProfit, setMaxProfit] = useState("0");
    const [resultMessage, setResultMessage] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [contractBalance, setContractBalance] = useState('0');

    useEffect(() => {
        const fetchContractBalance = async () => {
            try {

                if (!window.ethereum) {
                    console.error('MetaMask is not installed');
                    return;
                }

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const balance = await provider.getBalance(CONTRACT_ADDRESS);

                setContractBalance(ethers.utils.formatEther(balance));
            } catch (error) {
                console.error('Error fetching contract balance:', error);
            }
        };

        fetchContractBalance();
    }, [resultMessage]);

    useEffect(() => {
        let intervalId;

        if (isAnimating) {
            intervalId = setInterval(() => {
                startAnimation();
            }, 100);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isAnimating, startAnimation]);

    const flipCoin = async (guess) => {

        if (!window.ethereum) {
            setResultMessage('MetaMask is not installed');
            return;
        }

        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const coinFlipContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

            setResultMessage("WAITING FOR RESULT");

            coinFlipContract.once("CoinFlipResult", async (player, guess, outcome, winner) => {
                const userAddress = await signer.getAddress();
                if (player.toLowerCase() === userAddress.toLowerCase()) {
                    setIsAnimating(false);
                    if (winner) {
                        setResultMessage(`YOU WON THE BET`);
                        setGameStarted(true);
                        const weiAmount = ethers.utils.parseUnits(betAmount, "wei");
                        const currentMaxProfit = ethers.utils.parseUnits(maxProfit, "wei");
                        setMaxProfit(ethers.utils.formatUnits(currentMaxProfit.add(weiAmount), "wei"));
                    } else {
                        setResultMessage(`YOU LOST THE BET`);
                        setGameStarted(true);
                    }
                }
            });

            const weiAmount = ethers.utils.parseUnits(betAmount, "wei");

            setIsAnimating(true);
            const tx = await coinFlipContract.flipCoin(guess, { value: weiAmount });
            await tx.wait();
        } catch (error) {
            console.error('Transaction failed:', error);
            setResultMessage('TRANSACTION FAILED');
            setIsAnimating(false);
        }
    };

    return (
        <>
            <Etheruem />
            <InputSection flipCoin={flipCoin} betAmount={betAmount} maxProfit={maxProfit} setBetAmount={setBetAmount} contractBalance={contractBalance} />
            <CoinSection currentIndex={currentIndex} resultMessage={resultMessage} gameStarted={gameStarted} account={account} />
            <BottomEffect />
        </>
    );
}

NextPage.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    startAnimation: PropTypes.func.isRequired,
    account: PropTypes.string,
};
