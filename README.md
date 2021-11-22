# Smart Real Estate - Chainlink Hackathon

https://chainlink-fall-hackathon-2021.devpost.com/?ref_feature=challenge&ref_medium=discover.

ChooseRealEstate. smartzip chainlink and store data to ceramic profile. 

https://market.link/data-providers/c8fc4b66-66a5-4e24-8d11-85d19553c03c/integrations

ceramic:
store data - update price feed - see history price.

Prototype: https://github.com/anhnt4288/SmartRealEstate/blob/master/Smart_RealEstate_Prototype.PPTX 

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/nomiclabs/hardhat-hackathon-boilerplate.git
cd hardhat-hackathon-boilerplate
npm install
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```

> Note: There's [an issue in `ganache-core`](https://github.com/trufflesuite/ganache-core/issues/650) that can make the `npm install` step fail. 
>
> If you see `npm ERR! code ENOLOCAL`, try running `npm ci` instead of `npm install`.

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. You will
need to have [Metamask](https://metamask.io) installed and listening to
`localhost 8545`.

## User Guide

You can find detailed instructions on using this repository and many tips in [its documentation](https://hardhat.org/tutorial).

- [Project description (Token.sol)](https://hardhat.org/tutorial/4-contracts/)
- [Setting up the environment](https://hardhat.org/tutorial/1-setup/)
- [Testing with Hardhat, Mocha and Waffle](https://hardhat.org/tutorial/5-test/)
- [Setting up Metamask](https://hardhat.org/tutorial/8-frontend/#setting-up-metamask)
- [Hardhat's full documentation](https://hardhat.org/getting-started/)

For a complete introduction to Hardhat, refer to [this guide](https://hardhat.org/getting-started/#overview).

## What’s Included?

Your environment will have everything you need to build a Dapp powered by Hardhat and React.

- [Hardhat](https://hardhat.org/): An Ethereum development task runner and testing network.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/ethers.js/html/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.
- [A sample frontend/Dapp](./frontend): A Dapp which uses [Create React App](https://github.com/facebook/create-react-app).

## Troubleshooting

- `Invalid nonce` errors: if you are seeing this error on the `npx hardhat node`
  console, try resetting your Metamask account. This will reset the account's
  transaction history and also the nonce. Open Metamask, click on your account
  followed by `Settings > Advanced > Reset Account`.

## Feedback, help and news

We'd love to have your feedback on this tutorial. Feel free to reach us through
this repository or [our Discord server](https://invite.gg/HardhatSupport).

Also you can [follow us on Twitter](https://twitter.com/HardhatHQ).

**Happy _buidling_!**
