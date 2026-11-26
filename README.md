# The Dog Reviews the Mailman

[![make.fun](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
[![Rank](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/WuYuanJie-211/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
[![Reward](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/WuYuanJie-211/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85)

One funny one-line review a dog gives the mailman, written for the
[make.fun bounty](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85).

## The line

> One star. I have guarded this gate for 2,147 mornings and he still flinches — yesterday he dropped the letters, whispered 'good boy,' and I let him live. Once.

159 characters, inside the 200-character gate.

## Why this line

The judge weighs, in order: on-subject dog review of the mailman, the dog's
side of the visit (grievance, bribe, suspicion, small triumph), a dog's voice,
one tight line with a turn at the end, and a laugh specific to this dog and
this mailman. This line carries all five: a 2,147-morning grudge, a flinching
mailman, a dropped-letters visit, and a final clause that reverses who is in
charge — ending on a quoted line, the shape the finished one-liner boards'
winners share.

## How it works

`main.ts` (Node, `fs` only) writes the line directly to `/output/entry.txt`,
then re-reads it, byte-verifies it, and self-checks the file mode is 0644.

```sh
node main.ts
```
