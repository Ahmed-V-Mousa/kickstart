const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json') 

const provider = new HDWalletProvider(
    'ball siren that fragile jewel garment clown razor poet walnut harvest slow', 'https://ropsten.infura.io/v3/853d15a48f6e424da0934ae5f1ae4acd'
);

const web3 = new Web3(provider);


const deploy = async () => {
const accounts = await web3.eth.getAccounts();
console.log('Attempting to deploy from account', accounts[0]);

const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
    )
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: 1000000 });

        console.log('Contract deployed to', result.options.address);
        provider.engine.stop();
};
deploy();