---
id: zipdistributionrulesactivity
title: ZIP Distribution Rules For Each Activity
slug: /airdrop/zeebuprotocolsevolutionzips/zipdistributionrulesactivity
sidebar_label: ZIP Distribution Rules For Each Activity
sidebar_position: 1
hide_title: true
---
<h2> ZIP Distribution Rules For Each Activity </h2>

| #  | Activity               | Asset     | ZIPs per Activity                                            | Activity Frequency  | Type      | Minimum Qualifying Value |
|----|------------------------|-----------|--------------------------------------------------------------|---------------------|-----------|---------------------------|
| 1  | Register to Zeebu.fi  | -         | 2,500                                                        | OneTime             | Social    | Not Applicable            |
| 2  | Generate Invite Code  | -         | 2,500                                                        | OneTime             | Social    | Not Applicable            |
| 3  | Invite                | -         | 2,500                                                        | OneTime             | Social    | Not Applicable            |
| 4  | Hold                  | ZBU       | 625                                                          | Recurring Every Day | Financial | 10 ZBU                    |
| 5  | Stake                 | veZBU     | 2,500                                                        | Recurring Every Day | Financial | -                         |
| 6  | Hold                  | LP        | 625                                                          | Recurring Every Day | Financial | 100 LP                    |
| 7  | Stake                 | veLP      | 2,500                                                        | Recurring Every Day | Financial | -                         |
| 8  | Swap                  | ZBU/USDC  | 625                                                          | Recurring Every Day | Financial | ~ $50                     |
| 9  | Invited Users         | -         | 4%, 6%, 8% ZIP Points on every Financial Activity (based on Tier) | -                   | Social    | -                         |


## Zeebu.Fi Qualifying Quests

Zeebu will float minimum qualifying quests for all its waitlist participants, to ensure true beliveres and early backers of $ZBU are given priority over bots. Any number ZIPs farmed by any participant, will not be eligible for claim if the minimum qualifying quests are not performed.

### 1. Hold ZBU Tokens
- **Rate**: 1 ZBU = 625 base ZIP
    - User gets 625 base ZIP on first day.
    - User gets 1/4th of base ZIP everyday, 2nd day onwards, until expiry of season 1.
- **Condition**:
    - Minimum hold of 10 ZBU
    - Users must **maintain the same amount of ZBU** they held when Base ZIPs were credited.
    - **Disqualification**: If users transfer even **one ZBU**, they lose eligibility for ZIPs during that period.
    - **Exception**: Staked ZBU remains unaffected by transfer penalties.

**Claim**: Users see a Claim Option if they hold ZBU in their wallet.

### 2. Stake ZBU Tokens
- **Stake in**: Voting Escrow Vault
- **Farm**: VeZBU proportional to staked ZBU and lock duration.
- **ZIP Rate**: 1 VeZBU = 2500 base ZIP
    - The user gets 100% multiplier everyday on the base ZIP
- **Daily Check**: Cron validates the total VeZBU and credits daily ZIPs.

**Note**: Unstaked tokens do not affect previously farmed ZIPs.

### 3. Hold LP Tokens (ZBU-USDC)
- **Rate**: 1 ZBU = 625 base ZIP
    - User gets 1/4th of base ZIP everyday
- **Condition**:
    - Minimum hold of $100 ~ LP
    - Users must **maintain the same amount of LP tokens** held during the reward period.
    - **Disqualification**: Any reduction in LP holdings disqualifies ZIPs farmed in that duration.
    - **Exception**: Staked LP tokens remain unaffected by transfer penalties.

### 4. Stake LP Tokens
- **Stake in**: Voting Escrow Vault
- **Farm**: VeZBU (VeLP) proportional to locked LPs and lock duration.
- **ZIP Rate**: 1 VeZBU = 2500 base ZIP
    - The user gets 100% multiplier everyday on the base ZIP
- **Daily Check**: Cron job validates the total VeLP and credits daily ZIPs.

### 5. Swap on Balancer Pool (ZBU-USDC) via Zeebu.fi/swap
- **Goal**: Encourage on-chain activity by rewarding swaps.
    - **ZIP Rate for Swaps**: 625 on 1st swap of the day it can be either USDC-ZBU or ZBU-USDC swaps
        - 1st USDC-ZBU swap of the day: 625 ZIPs per swap if transaction is bigger than $50.
        - 1st ZBU-USDC swap of the day: 625 ZIPs per swap if transaction is bigger than $50.
    - **Condition**:
        - ZIPs are credited in T+1 timeline only for completed swaps.
- **Calculation**:
    - Cron job tracks the total swap volume per user within a 24-hour window to credit ZIPs accordingly.