
# 📦 Solidity Simple Storage

This is a simple Solidity project that demonstrates how to create and test a basic smart contract using Hardhat. The contract is designed to store and update a number. The main goal of this repository is to help beginners get familiar with Solidity, smart contract development, and Hardhat testing.

## 📁 Project Structure

```
.
├── contracts/                 # Solidity smart contracts
│   └── SimpleStorage.sol      # The simple storage smart contract
├── test/                      # Test scripts
│   └── simpleStorage-test.js  # Tests for the SimpleStorage contract
├── hardhat.config.js          # Hardhat configuration file
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Dependency lock file
└── README.md                  # This file
```

## ⚙️ Features

- **SimpleStorage Contract**: A smart contract that stores a number and allows for updating the stored value.
- **Tests**: Test cases to ensure the contract works correctly using Hardhat.

## 📜 Prerequisites

To run this project, you need to have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)

## ⚡ Setup

1. Clone the repository:

```
git clone https://github.com/Zaskki/solidity-simple-storage.git
```

2. Install dependencies:

```
npm install
```

3. Compile the smart contract:

```
npx hardhat compile
```

4. Run the tests:

```
npx hardhat test
```

### Test Results

When you run the tests, you should see the following output:

```
  SimpleStorage Contract
    √ should deploy the contract
    √ should store a number
    √ should update the stored number

  3 passing (400ms)
```

## 📚 Contract Details

- **SimpleStorage.sol**: A basic Solidity smart contract with a `store()` function to store a number and a `retrieve()` function to get the stored number.
- The contract is deployed and tested using Hardhat.

## 🎓 What I Learned

- How to write and deploy a basic Solidity contract.
- How to test a Solidity contract using Hardhat.
- How to interact with the Ethereum blockchain using JavaScript.

## 🚀 Next Steps

- Continue to build more complex smart contracts.
- Explore deploying contracts to a test network (like Rinkeby or Sepolia).
- Learn how to interact with smart contracts from a frontend application.
This is just the beginning. Stay tuned for more smart contracts and deeper learning as I progress through the course!
