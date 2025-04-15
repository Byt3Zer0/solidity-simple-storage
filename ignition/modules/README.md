# Ignition Modules

This folder is used by [Hardhat Ignition](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-ignition) to manage deployment modules.

Currently, it contains internal files like `lock.js` used to track and lock deployment state.

Do not delete `lock.js`. It's automatically managed by Hardhat and required for consistent deployment behavior.

As the project evolves, this folder will include custom deployment modules for smart contracts.
