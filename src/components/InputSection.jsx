import PropTypes from 'prop-types';
import EtheruemLogo from './EtheruemLogo';


export default function InputSection({ flipCoin, betAmount, maxProfit, setBetAmount, contractBalance }) {

    return (
        <div className="bg-[rgb(27,34,54)] p-12 mt-10 mb-40 mr-2 rounded-xl h-[32vw] w-[26vw] shadow-lg flex flex-col items-center justify-center z-0">
            <form className="w-full flex flex-col items-start">
                <label htmlFor="bet-amount" className="text-[rgb(177,177,177)] text-lg mb-1">Bet Amount</label>
                <div className="relative w-full">
                    <input
                        id="bet-amount"
                        type="number"
                        min="1"
                        step="0.000000000000000001"
                        placeholder="Enter amount"
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                        className="p-2 mb-4 w-full max-w-xs rounded-lg bg-gray-700 text-[rgb(177,177,177)] tracking-normal font-semibold border border-gray-600 focus:outline-none"
                    />
                    <EtheruemLogo />
                </div>
                <label htmlFor="max-profit" className="text-[rgb(177,177,177)] text-lg mb-1 mt-4">Max Profit</label>
                <div className="relative w-full">
                    <input
                        id="max-profit"
                        type="text"
                        className="p-2 mb-4 w-full max-w-xs rounded-lg bg-gray-700 text-[rgb(177,177,177)] font-semibold border border-gray-600 focus:outline-none"
                        readOnly
                        value={`Sepolia ETH ${maxProfit}`}
                        placeholder="ETH 0"
                    />
                    <EtheruemLogo />
                </div>
                <button
                    type="button"
                    className="px-8 py-4 mt-10 mx-auto bg-[rgb(27,34,54)] border rounded-full text-lg font-medium flex items-center space-x-2 text-white relative overflow-hidden transition duration-10 ease-in-out hover:bg-[linear-gradient(90deg,#c766ef,#7928d2_51.04%,#2b0c52)] hover:border-transparent group"
                    onClick={() => flipCoin(Math.random() < 0.5)} >
                    <span className="font-[1rem] font-semibold tracking-widest">FLIP</span>
                    <img src="https://www.cerpow.com/coin/0040.png" alt="coin" className="h-8 w-8 pointer-events-none" />
                </button>
                <p className='text-[0.7rem] tracking-normal font-normal mt-10 text-gray-300'><span className='text-white mr-2'>Available Balance</span>{`${contractBalance} ETH`}</p>
            </form>
        </div>
    );
}

InputSection.propTypes = {
    flipCoin: PropTypes.func.isRequired,
    betAmount: PropTypes.string.isRequired,
    maxProfit: PropTypes.string.isRequired,
    setBetAmount: PropTypes.func.isRequired,
    contractBalance: PropTypes.string.isRequired
};
