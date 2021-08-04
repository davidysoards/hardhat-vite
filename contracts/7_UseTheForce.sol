// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UseTheForce {
    address payable addr;

    constructor(address _address) {
        addr = payable(_address);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function kill() public payable {
        selfdestruct(addr);
    }
}
