require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/x82tLCNGxE7lAhRwzdMH3AY_Ga6ak0gW',
      accounts: ['d31950fadd016cfe68ae273b62037061bba9a14a9b6830e8a340ed08cb51fb27'],
    },
  },
};