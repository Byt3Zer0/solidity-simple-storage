# 📦 Solidity Simple Storage

> A beginner-friendly smart contract to learn the foundations of Solidity and Ethereum development, following the [Patrick Collins Solidity Course](https://updraft.cyfrin.io/courses/solidity).

---

## 🧠 Overview

This project is a basic yet powerful smart contract built with Solidity that allows users to:

- Store and retrieve a favorite number.
- Add people and associate their names with a favorite number.
- Retrieve a person’s favorite number by their name.

It's perfect for understanding core Solidity concepts such as `struct`, `array`, `mapping`, and smart contract interaction.

---

## 🧾 Contract: `SimpleStorage.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public myFavoriteNumber;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    Person[] public listOfPeople;

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        myFavoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return myFavoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        listOfPeople.push(Person(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
```

---

## 🧪 Features

- ✅ Store and update a global favorite number
- ✅ Retrieve the current stored number
- ✅ Add individuals and link them to a number using structs
- ✅ Map names to their favorite numbers using a `mapping`
- ✅ Fully tested with Hardhat and JavaScript

---

## 📁 Project Structure

```
solidity-simple-storage/
├── contracts/
│   └── SimpleStorage.sol         # Solidity smart contract
├── scripts/
│   └── deploy.js                 # Deployment script using Hardhat
├── test/
│   └── simpleStorage-test.js     # Unit tests
├── hardhat.config.js             # Hardhat configuration
├── README.md                     # Project documentation
├── package.json                  # Node dependencies
└── .gitignore                    # Files to ignore in Git
```

---

## ⚙️ Installation & Usage

### 1. Clone the repo

```bash
git clone https://github.com/Zaskki/solidity-simple-storage.git
cd solidity-simple-storage
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the contract

```bash
npx hardhat compile
```

### 4. Run tests

```bash
npx hardhat test
```

### 5. Deploy contract (optional)

```bash
npx hardhat run scripts/deploy.js
```

---

## 📚 What I’ve Learned

- How to use Hardhat to compile, deploy, and test smart contracts
- Working with structs, arrays, and mappings in Solidity
- Writing automated unit tests to verify contract functionality
- Structuring a professional Ethereum development project

---

## 🎯 Next Goals

- Integrate the contract with a frontend using Ethers.js
- Deploy the project to a public testnet (like Sepolia)
- Use Hardhat’s plugin ecosystem (like `hardhat-gas-reporter`, `solidity-coverage`, etc.)
- Add OpenZeppelin contracts for advanced features

---

## 🙏 Acknowledgements

- [Patrick Collins Solidity Course](https://updraft.cyfrin.io/courses/solidity)
- [Hardhat Documentation](https://hardhat.org/)
- [Solidity Docs](https://soliditylang.org/)

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.