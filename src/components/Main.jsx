import WalletIcon from './WalletIcon';
import PropTypes from 'prop-types';

export default function Main({ connectWallet, metaMaskInstalled }) {

    const gradientStyle = {
        background: 'linear-gradient(45deg, #ff01e6, #ff5f51 39%, #00ffa3 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '4.3rem',
        fontWeight: '500',
    }
    const h1 = `mx-auto
        mt-16
        tracking-wide
        bg-transparent
        px-4 text-center
        text-white
        md:px-16
        lg:text-[4rem] lg:leading-[4rem]
        custom-title`
    return (
        <>
            <div id="goey"></div>
            <video className="absolute z-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 mt-40" autoPlay loop playsInline muted>
                <source src="https://ultrasound.money/bat-480.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="text-center z-10 mt-20 relative">
                <h1 style={gradientStyle} className={h1}>Welcome to the Coin Flipper!</h1>
                <p className="text-xl md:text-[1.6rem] mt-32 mb-6 tracking-wider text-[rgb(181,189,219)]">Please Connect Your Wallet:</p>
                <button onClick={connectWallet} className="px-8 py-4 mx-auto bg-[rgb(27,34,54)] border rounded-lg text-lg font-medium flex items-center space-x-2 text-white relative overflow-hidden transition duration-10 ease-in-out hover:bg-[linear-gradient(90deg,#c766ef,#7928d2_51.04%,#2b0c52)] hover:border-transparent">
                    <WalletIcon />
                    <span>Connect a Wallet</span>
                </button>
                {!metaMaskInstalled && <p className="text-xl mt-10 font-semibold text-red-500">MetaMask is not installed. Please install MetaMask to use this application.</p>}
            </div>
        </>
    )
}

Main.propTypes = {
    connectWallet: PropTypes.func.isRequired,
    metaMaskInstalled: PropTypes.bool.isRequired,
};
