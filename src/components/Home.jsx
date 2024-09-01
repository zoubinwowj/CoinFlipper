import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import PurpleStone from "./PurpleStone";
import TopLeftBg from "./TopLeftBg";
import RightSideBg from "./RightSideBg";
import Ring from "./Ring";
import Main from "./Main";
import NextPage from "./NextPage";


export default function Home() {
    const [account, setAccount] = useState(null);
    const [metaMaskInstalled, setMetaMaskInstalled] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(40);
    const [isAnimating, setIsAnimating] = useState(false);


    const connectWallet = async () => {
        if (window.ethereum) {
            setMetaMaskInstalled(true);
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                setAccount(await signer.getAddress());
            } catch (error) {
                console.error('Error connecting to wallet:', error);
            }
        } else {
            setMetaMaskInstalled(false);
            console.error('MetaMask is not installed');
        }
    };

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                } else {
                    setAccount(null);
                }
            });

            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });
        }
    }, []);


    const startAnimation = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        let index = 0;
        const interval = setInterval(() => {
            setCurrentIndex(index);
            index++;
            if (index > 150) {
                clearInterval(interval);
                setCurrentIndex(40);
                setIsAnimating(false);
            }
        }, 25);
    };

    const firstStone = `absolute bottom-28 left-20 h-40 w-40 -z-1 animate-scale`;
    const secondStone = `absolute right-28 top-1/2 transform -translate-y-1/2 h-40 w-40 -z-1 animate-scale`;

    return (
        <div className="flex relative justify-center h-screen bg-[rgb(19,24,39)] text-white overflow-hidden">
            <Ring className="absolute -top-20 -left-64 z-0 h-[48vw] w-[48vw] opacity-40" />
            <Ring className="absolute top-0 -right-40 z-0 h-[48vw] w-[48vw] opacity-40" />
            <TopLeftBg className="absolute top-0 left-0 z-0 h-[30vw] w-[30vw] opacity-30" />
            <RightSideBg className="absolute top-0 right-0 z-0 h-[44vw] w-[44vw] opacity-30" />
            <PurpleStone stone={firstStone} />
            <PurpleStone stone={secondStone} />

            {account ? (
                <NextPage account={account} currentIndex={currentIndex} startAnimation={startAnimation} />
            ) : (
                <Main connectWallet={connectWallet} metaMaskInstalled={metaMaskInstalled} />
            )}
        </div>
    );
}
