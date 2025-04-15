# Solidity Simple Storage 🛠️

This is a simple Solidity project for learning how to create and interact with a basic smart contract. It is a basic contract that allows users to store and update a number on the Ethereum blockchain.

---

## 🚀 Project Structure

The project has the following structure:

```
solidity-simple-storage/
├── contracts/
│   └── SimpleStorage.sol         # Solidity contract code
├── scripts/
│   └── deploy.js                 # Script to deploy the contract
├── test/
│   └── simpleStorage-test.js     # Unit tests for the contract
├── .gitignore                    # Git ignore file
├── README.md                     # Project documentation
├── hardhat.config.js             # Hardhat configuration file
├── package.json                  # Node.js package file
└── LICENSE                       # MIT License
```

---

## 💡 Features

- **Store a number**: Users can store a number on the blockchain.
- **Update a number**: The stored number can be updated.
- **Testable**: Automated tests to ensure the contract behaves as expected.

---

## 📋 Prerequisites

To get started with this project, ensure you have the following tools installed:

- **Node.js**: The runtime environment for running JavaScript code.
- **Hardhat**: Ethereum development environment to compile, test, and deploy Solidity contracts.
- **npm**: Package manager for managing dependencies.

---

## ⚡ Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Zaskki/solidity-simple-storage.git
    cd solidity-simple-storage
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Compile the contract:
    ```bash
    npx hardhat compile
    ```

4. Run the tests:
    ```bash
    npx hardhat test
    ```

5. Deploy the contract (optional):
    ```bash
    npx hardhat run scripts/deploy.js --network <network-name>
    ```

---

## 📝 Contract Details

### `SimpleStorage.sol`

This smart contract allows a user to store a number on the blockchain and update it later. The contract has the following functions:

- **store(uint256 _number)**: Stores a number on the blockchain.
- **retrieve()**: Retrieves the stored number.

---

## 🧑‍🏫 What I Learned

- How to set up a Solidity project using Hardhat.
- How to write and deploy a simple Solidity contract.
- How to interact with the blockchain by storing and retrieving data.
- How to write automated tests for smart contracts.
- How to manage dependencies and use npm in a blockchain project.

---

## 📚 Acknowledgements

This project was created as part of my learning journey in the **Solidity** course by **Patrick Collins**. The resources from the course have been invaluable for understanding the core concepts of smart contract development.

- **Patrick Collins' Solidity Course**: [Link to course](https://updraft.cyfrin.io/courses/solidity)
- **Hardhat Documentation**: [Link to Hardhat](https://hardhat.org/)
- **Solidity Documentation**: [Link to Solidity](https://soliditylang.org/docs/)

---

## 🛠️ Next Steps

- Learn more about contract optimization.
- Explore more advanced features like events and access control.
- Build a more complex dApp (Decentralized Application) that interacts with the contract.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
