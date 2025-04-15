const { expect } = require("chai");

describe("SimpleStorage Contract", function () {
  let SimpleStorageFactory, simpleStorage;

  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.waitForDeployment(); // 👈 este es el correcto en Hardhat
  });

  it("should deploy the contract", async function () {
    const address = await simpleStorage.getAddress();
    console.log("Contract Address:", address);
    expect(address).to.properAddress;
  });

  it("should store a number", async function () {
    await simpleStorage.store(42);
    const result = await simpleStorage.retrieve();
    expect(result.toString()).to.equal("42");
  });

  it("should add a person and store their favorite number", async function () {
    await simpleStorage.addPerson("Alice", 7);
    const person = await simpleStorage.listOfPeople(0);
    expect(person.name).to.equal("Alice");
    expect(person.favoriteNumber.toString()).to.equal("7");
  });

  it("should retrieve a person's favorite number by name", async function () {
    await simpleStorage.addPerson("Bob", 99);
    const favorite = await simpleStorage.nameToFavoriteNumber("Bob");
    expect(favorite.toString()).to.equal("99");
  });
});
