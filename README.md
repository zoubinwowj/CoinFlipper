# 🪙 CoinFlipper DApp

**This is a decentralized application (DApp) that allows users to flip a coin using Ethereum smart contracts. The application integrates with MetaMask and uses a Solidity smart contract deployed on the Ethereum Sepolia testnet.**

## 🌐 Live Demo
**You can try the live version of the project here**: [CoinFlipper](https://coinflipper-demo.vercel.app)

## ✨ Features

- **Flip a Coin**: Users can bet on the outcome of a coin flip and receive double their bet amount if they win.
- **Wallet Integration**: Connects seamlessly with MetaMask for transaction signing.
- **Secure Smart Contract**: Built using Solidity and deployed on the Ethereum Sepolia testnet.
- **Real-time Event Logging**: Displays results and transaction details of the coin flip.

## 🛠️ Technologies Used

- <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
- <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>
- <a href="https://hardhat.org" target="_blank" rel="noreferrer"> <img src="https://moralis.io/wp-content/uploads/web3wiki/24hardhat/6381641b6a60932fb3c3c2d9_crsLQ2lVok-0X37hZ_7RSl62vTm5GRP0Ws4xyPt4E5I.jpeg" alt="hardhat" width="40" height="40"/> </a>
- <a href="https://soliditylang.org" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/386px-Solidity_logo.svg.png" alt="Solidity" width="40" height="40"/> </a>
- <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>
- <a href="https://docs.ethers.org" target="_blank" rel="noreferrer"> <img src="https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png" alt="Ether" width="40" height="40"/> </a>
- <a href="https://metamask.io" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png" alt="Metamask" width="40" height="40"/> </a>

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/devansh-chouhan/CoinFlipper-Blockchain.git
   ```
2. **Install dependencies**:
   ```bash
   npm install --force
   ```
3. **Start the frontend**:
   ```bash
   npm run dev
   ```

## 📖 How to Use

1. **Connect your MetaMask wallet to the Sepolia testnet.**
2. **Enter the bet amount in the input field.**
3. **Click the "Flip" button to place your bet and flip the coin.**
4. **If you win, your reward will be automatically sent to your wallet.**

## 📜 Smart Contract Details

- **Contract Address**: 0x07A89533d524FD745f3a43719eaa83b2C1975Afd
- **Network**: Ethereum Sepolia testnet

## 📊 Event Logging

The contract emits a **'CoinFlipResult'** event after each flip, providing information on:
- Player address
- Guess (heads or tails)
- Outcome of the flip
- Winner status (whether the player won or not)
- Bet amount
