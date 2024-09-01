import PropTypes from 'prop-types';

export default function CoinSection({ account, currentIndex, resultMessage, gameStarted }) {
    const defaultStyle = "p-6 mt-[16vw] w-full max-w-xs text-[1.1rem] rounded-full font-bold tracking-widest bg-gray-700 border border-gray-600 focus:outline-none flex items-center justify-center text-center";
   
    const winStyle = {
        border: '#6366F1 2px solid',
        background: 'linear-gradient(to right, #67E8F9, #6366F1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }
    const lostStyle = {
        border: '#FB923C 2px solid',
        background: 'linear-gradient(to right, #FDE047, #F56E00)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }

    const messageStyle = ((resultMessage.includes("LOST") && lostStyle) || (resultMessage.includes("WON") && winStyle)) || {}

    return (
        <div className="bg-[rgb(27,34,54)] p-12 mt-10 mb-40 mr-2 rounded-xl h-[32vw] w-[40vw] shadow-lg flex flex-col items-center justify-start z-0">
            <div id="yellowgoey"></div>
            <img src={`https://www.cerpow.com/coin/${currentIndex.toString().padStart(4, '0')}.png`} alt="coin" className="absolute z-10 h-[12vw] w-[12vw]" />
            <input
                type="text"
                className={defaultStyle}
                style={gameStarted ? messageStyle : {}}
                value={resultMessage || "PLACE YOUR BET"}
                readOnly
            />
            <p className='text-[1vw] tracking-normal font-semibold mt-8 text-gray-300'><span className='text-white mr-2'>Connected Wallet :</span>{`${account}`}</p>
        </div>
    );
}

CoinSection.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    resultMessage: PropTypes.string.isRequired,
    gameStarted: PropTypes.bool.isRequired,
    account: PropTypes.string,
};
