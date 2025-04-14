---
title: Token
slug: /zeebu/token
hide_table_of_contents: false
sidebar_position: 1
hide_title: true
---
<h2> Token </h2>

ZBU is a loyalty utility token based on Ethereum, Binance Smart Chain, and Base that fuels the Zeebu platform for customers and merchants. The token smart contracts are developed with OpenZeppline contracts, leveraging their battle-tested libraries to enhance security and reduce vulnerabilities.

The ZBU token incorporates several technical features, including safeguards to prevent the accidental sending of tokens to the token address itself. This is achieved through the implementation of a “require” function that verifies the recipient is not the same as the token contract address. Additionally, ZBU includes a cliff and vesting function to lock a predetermined amount of tokens for a specified duration within designated contracts, such as liquidity pools. Custom bridges for the Binance Smart Chain and EVM chain have also been developed to facilitate the seamless movement of tokens between pools on different chains.

ZBU also includes several upgradability features. The token and vesting contracts themselves are not upgradeable, but the token outposts, which are the token contracts on other networks, are upgradeable as necessary to respond to changes in bridge contracts. Additionally, the loyalty reward contract is designed to be upgradeable to support the introduction of new loyalty use cases.

### Tokenomics

ZBU, the backbone of the Zeebu ecosystem, is designed to revolutionize telecom settlements. With a fixed supply of 5 billion tokens, ZBU operates on both Ethereum and Binance Smart Chain, offering 18 decimal places for precision. Its deflationary model incorporates quarterly burns to maintain value. ZBU serves multiple functions: transaction settlement between telecom entities, loyalty rewards distribution, governance participation, and fee facilitation. The token's utility extends beyond mere transactions, incentivizing ecosystem participation and long-term engagement.

### Token Allocation

Zeebu's token allocation strategy prioritizes ecosystem development and long-term growth. The largest portion, 23.8%, goes to ZBU Labs for ecosystem development. Private sales account for 11.9%, attracting early backers. Liquid tokens in the market (8.8%) promote accessibility. The team and advisors receive 7.1%, aligning their interests with project success. Settlement and loyalty allocations (19.8%) support the core business model. The treasury/reserve (17.9%) provides financial stability. Smaller allocations for the ZBU CLUB (5.9%) incentivize community engagement. All allocations are team-controlled, with varying lock-up periods. Key dates for future distributions cluster around April and February 2024, signaling planned ecosystem milestones.

<img src="/images/tokenallocation.png" alt="Token Allocation" tiele="Token Allocation" />

### Token Sale

The ZBU token sale is structured in four private rounds, collectively offering 20.4% of the total supply. This tiered approach allows for strategic token distribution and value building:

 - R1: 2% (100 million ZBU)
 - R2: 3.4% (170 million ZBU)
 - R3: 6% (300 million ZBU)
 - R4: 9% (450 million ZBU)

 <img src="/images/tokensale.png" alt="Token Sale" title="Token Sale" />

 This gradual release strategy aims to create a stable token economy, rewarding early adopters while maintaining long-term value for all participants.

 ### Burn Mechanics

 Zeebu's burn mechanics, dubbed the Phoenix Protocol, are designed to maintain ZBU's price stability, crucial for its primary use in invoice settlements. The burn rate equates to fiat redemptions on the platform, with quarterly burns calculated based on total settlement volume and the closing day token price. This adaptive approach allows Zeebu to respond to market conditions and usage patterns. Transparency is key, with detailed quarterly reports and disclosed fund storage addresses. The burn mechanism not only stabilizes the token's value but also creates a deflationary effect, potentially benefiting long-term holders and ecosystem participants.