// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    address public owner;

    event CoinFlipResult(
        address player,
        bool guess,
        bool outcome,
        bool winner,
        uint256 amount
    );

    constructor() {
        owner = msg.sender;
    }

    function flipCoin(bool guess) external payable returns (bool) {
        require(msg.value > 0, "You need to bet some ETH");
        require(
            address(this).balance >= msg.value * 2,
            "Not enough funds in contract"
        );

        bool outcome = (block.timestamp % 2 == 0);
        bool winner = (guess == outcome);

        if (winner) {
            payable(msg.sender).transfer(msg.value * 2);
        }

        emit CoinFlipResult(msg.sender, guess, outcome, winner, msg.value);

        return winner;
    }
        
    receive() external payable {}

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
