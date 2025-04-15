const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage Contract", function () {
  let SimpleStorage;
  let simpleStorage;
  let owner;

  // This hook will be executed before each test
  beforeEach(async function () {
    // Obtain the SimpleStorage contract
    SimpleStorage = await ethers.getContractFactory("SimpleStorage");

    // Deploy the contract
    simpleStorage = await SimpleStorage.deploy();

    // Obtain the owner of the contract
    [owner] = await ethers.getSigners();
  });

  it("should deploy the contract", async function () {
    // Verified that the contract was deployed correctly
    expect(simpleStorage.address).to.not.equal("0x0000000000000000000000000000000000000000");
    expect(simpleStorage.address).to.not.equal("");
    expect(simpleStorage.address).to.not.equal(null);
  });

  it("should store a number", async function () {
    // Call the function store
    await simpleStorage.store(42);

    // Obtain the stored number
    const storedNumber = await simpleStorage.retrieve();

    // Call the store function with a new value
    expect(storedNumber).to.equal(42);
  });

  it("should update the stored number", async function () {
    // Call the store function with a new value
    await simpleStorage.store(42);
    await simpleStorage.store(100);

    // Obtain the updated stored number
    const storedNumber = await simpleStorage.retrieve();

    // Verify that the stored number is correct
    expect(storedNumber).to.equal(100);
  });
});
