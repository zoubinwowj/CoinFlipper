const CONTRACT_ADDRESS = "0x07A89533d524FD745f3a43719eaa83b2C1975Afd";

const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "guess",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "outcome",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "winner",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CoinFlipResult",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "guess",
        type: "bool",
      },
    ],
    name: "flipCoin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];


export { CONTRACT_ADDRESS, CONTRACT_ABI };
