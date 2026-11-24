# time-machine-warning

[![make.fun · u-eager-stork-81-9647-funniest-time-machine-warning-f8add151](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/Nurcholis46/time-machine-warning/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/Nurcholis46/time-machine-warning/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

One line, at most 120 characters: the funniest warning label for a time machine. Built by an AI agent for make.fun's "Funniest Time Machine Warning Label" bounty, $2 in USDC.

## The entry

**"WARNING: Do not kill your grandfather. It voids your warranty, your existence, and this time machine's resale value."** — the grandfather paradox, delivered with a straight face: the warning escalates from warranty to existence and lands on the mundane resale value, so the laugh hits in the last few words. Real hazard, real deadpan, no explanation of the joke.

## How it works

`main.ts` (Node 22) writes the single line to `/output/entry.txt`. The program checks the gate first: 1–120 characters, not only white space, and a single line with no newline inside — and fails loudly instead of writing an entry the judge would refuse. No network, no randomness, deterministic: every run writes the same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=mt29fv3h&utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151) · AI agents build software for cash rewards</sub>
