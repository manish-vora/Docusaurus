---
id: lockedzbu-vezbu
title: Locked-ZBU(VeZBU)
slug: /zeebuprotocol/stake/lockedzbu-vezbu
sidebar_label: Locked-ZBU(VeZBU)
sidebar_position: 2
hide_title: true
---
<h2> Locked-ZBU(VeZBU) </h2>

veZBU is an acronym for **vote-escrowed ZBU**. Users can lock their ZBU for a **minimum of 1 Day, maximum of 2 years**, in return the user is given veZBU. **veZBU is not transferrable**. The longer you lock the more veZBU you receive, see the locking formula section for a detailed explanation but the simple explanation is:

- 1 ZBU locked for 2 years = 1 veZBU
- 1 ZBU locked for 1 years = 0.75 veZBU
- 1 ZBU locked for 6 month = 0.25 veZBU
- 1 ZBU locked for 1 day = 0.0006845 veZBU

**Locking was a concept created to align incentives for governance**. Many coin voting systems have a problem where someone can buy tokens off the market to influence a governance vote, then sell the tokens after the vote passed/failed. These users can influence governance votes greatly and only take minimal risk by holding tokens for a few days. Locking stops this happening. Users must lock their tokens for a period of time to receive voting power, and users are rewarded with more voting power if they lock their tokens for a longer period of time.

### Infomation

The amount of veZBU shown as a statistic in various places is not a true reflection of the amount of locked ZBU. As 1 veZBU does not equal 1 ZBU due to locking time and decay. Read the locking information section of this page for more information

### veZBU Benefits

Users with veZBU are given the following benefits:

#### ZIP Boosters

- When users stake their ZBU tokens, they earn ZIP points based on the lock-in duration. These ZIP points increase their chances of receiving ZBU airdrops during each epoch announcement and duration, providing additional incentives for users to stake and lock their tokens for longer periods.

#### Earn APY Through Delegation

- Users can delegate their VeZBU tokens to one or up to eight deployer nodes, depending on their preferred lock-in time. This delegation allows them to earn APYs from the deployers based on the deployers' earnings, providing an opportunity for users to maximize their returns by strategically choosing which deployers to delegate their VeZBU to.

#### Governance

The veZBU balance represents the voting power of a user in the Zeebu Foundation, which allows them to **vote on on-chain proposals**.

### Locking Information

When a user locks their ZBU tokens for voting, they will receive veZBU based on the lock duration and the amount locked. Locking is **not reversible** and veZBU tokens are **non-transferable**. If a user decides to vote-lock their ZBU tokens, they will only be able to **reclaim the ZBU tokens after the lock duration has ended**.

Additionally, a user **cannot have multiple locks with different expiry dates**. However, a lock **can be extended**, or **additional ZBU can be added** to it **at any time**.

#### ZBU to veZBU formula

When locking ZBU to veZBU you are rewarded with an amount of veZBU based on how long you lock, the minimum time is 1 day, the maximum time is 2 years:

- 1 ZBU = 0.0006845 VeZBU / Day

### Locked Power Calculation

| Max           |   1 ZBU            |  Locked        |
|---------------|--------------------|----------------|
| One Day       | Locked 2 Years     | 0.001369       |
| One Day       | Unlocked           | 0.0006845      |

| 6 Months                 |   1 Year                 |  2 Year                |
|--------------------------|--------------------------|------------------------|
| 0.125 VeLP               | 0.50 VeLP                | 1 VeLP                 |
| ( 0.001369 X 180 ) / 2   | ( 0.001369 X 365 )       | ( 0.001369 X 730 )     |

***All votes are given daily to delegators.***

The maximum duration of a lock is 2 years, users cannot lock for longer periods to keep the 1 ZBU: 1 veZBU ratio, they must instead continue extending their lock. Users can withdraw their ZBU at any time after their veZBU has decayed to 0 (lock time has expired).

### veZBU decay

The amount of veZBU a user has will decay over time as their unlock date draws closer. The lockTime parameter in the equation above should more aptly be called lockTimeLeft as a user's veZBU is constantly recalculated. There are two ways a user can change their lock. They can add to their lock or they can extend their lock. What happens in both situations and how it affects their veZBU and the decay is shown in the charts below.