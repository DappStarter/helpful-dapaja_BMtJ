require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth muscle come gesture fantasy equal gasp'; 
let testAccounts = [
"0xfcbafbf5a5bd0d55b12a0cfe9e8d2094a18ce5a8cd113fafc3614787b4c2f6a2",
"0x2482855c1fbdfe315552fa005efdeb542095810820339f89eb4375db6de375ec",
"0x2d1b041986a866ab63eb87de558e050acfc235087abfaf4b83ed4a051581a6c4",
"0x6dfc9129f47966aaddbc9c45f6bf26582c963cfd7b4934b22b1a9afeeb0ad0c9",
"0xc4b73597f6c9e3f2879dbcc8b777ecb5d2530ae528548236d5ea108d39c5a546",
"0x6f9557878f8addfaa1370bf64a9771200cf697d20909b0be049a191d25530c46",
"0x96e1a1d4d467b91e90f41e8b0d172d3343202313bfb36d85bce0f6204b7ba5ef",
"0x00413c564787c892b0fec2d38ffbff333ed39bee3aa56a39b76272e0d0ce3d15",
"0x5f9edb16ae3d4874a9ef9c521b21386cccbc0d3c0f629d895253548a7714d731",
"0x4a8ce4dadbd80fe5e0f7167447981004ac40230980d6b9d35f05a7086f88b6dd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


