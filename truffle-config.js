require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain equip give narrow fortune text'; 
let testAccounts = [
"0xd94dd765ea1d888ed4f4a2cc22ca131167e5b4480ed814d6f95bb7e218705dbc",
"0x7c6e4b299ed916cef3d09845fc5a2ce35da7fec5e76a4dde61a68a4c6cdb5ae5",
"0x3ac82e95ba41d7f4b68bb872c2099f6bc00976d77db6aed2df6f40a670279f72",
"0x57b6ba5d94795d5bfb9c7ce97213b88bcd0b9bb89fbc2a420f925e63f9044711",
"0x7aa8900ec94a90a62a728d9da11fc990dcdba0a586f05481748eaf7a4426c4fb",
"0x08ffc45e05d194c472b9737f8294cb8ef3a8ff0464acc54bf49a0c739f5bd2c6",
"0xc1d03fd1cde0e1c5d7472f0c87ccb7b17e205e4d7866561f6c41147b88cad2f5",
"0xce1f020a2d4558a6f8286c5fc3eebfc009b31216ba0726f8e68bdcdfdcde33a5",
"0xf411c0595ba25fe2366b5b1373510ad3e86d45d8993d99da79214b2c8cc6e00b",
"0xd3a0f6b199b21b7c7298b41f7502e093892f62161a421086053640141b99f8fc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
