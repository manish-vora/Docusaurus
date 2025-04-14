---
id: utilityoftoken
title: Utility Of Token
slug: /whyzeebu/utilityoftoken
sidebar_label: Utility Of Token
sidebar_position: 1
hide_title: true
---
<h2> Utility Of Token </h2>
<div align="center">
<img src="/images/utilityoftoken.svg" alt="Utility Of Token" title="Utility Of Token" width="400" />
</div>

ZBU is a loyalty utility token based on Ethereum and the Binance Smart Chain that fuels the Zeebu platform for customers and merchants. The token smart contracts are developed with OpenZeppline contracts, leveraging their battle-tested libraries to enhance security and reduce vulnerabilities.

The ZBU token incorporates several technical features, including safeguards to prevent the accidental sending of tokens to the token address itself. This is achieved through the implementation of a “require” function that verifies the recipient is not the same as the token contract address. Additionally, ZBU includes a cliff and vesting function to lock a predetermined amount of tokens for a specified duration within designated contracts, such as liquidity pools. Custom bridges for the Binance Smart Chain and EVM chain have also been developed to facilitate the seamless movement of tokens between pools on different chains.

ZBU also includes several upgradability features. The token and vesting contracts themselves are not upgradeable, but the token outposts, which are the token contracts on other networks, are upgradeable as necessary to respond to changes in bridge contracts. Additionally, the loyalty reward contract is designed to be upgradeable to support the introduction of new loyalty use cases.


- **Token Name**: ZEEBU
- **Token Ticker**: ZBU
- **Standard**: ERC-20 , BEP-20
- **Max Supply**: 5,000,000,000
- **Circulating Supply**: 369,000,000
- **TGE**: 22-04-2023

import ZeebuContracts from '@site/src/components/SmartContract';

## Smart Contract

Official Smart Contract addresses for the **ZEEBU (ZBU)** token across multiple blockchains.

<ZeebuContracts />

## Coin Listings

ZBU is also listed on popular price discovery websites like CoinMarketCap and CoinGecko

import CoinListings from '@site/src/components/CoinListings';

<CoinListings />