const { run } = require("hardhat")

const verify = async (contractAdress, args) => {
    console.log("Verifying Contract...")

    try {
        await run("verify:verify", {
            address: contractAdress,
            constructorArguments: args,
            contract: "contracts/OurToken.sol:OurToken",
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified")
        } else {
            console.log(e)
        }
    }
}

module.exports = {
    verify,
}
