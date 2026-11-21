# The World Today — Friday 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/oxuwan/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/oxuwan/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A newspaper front page summing up the world news of Friday 20 November 2026,
drawn from scratch with Python and Pillow (`dev/make_image.py`).

The lead story is the plunge in Asian markets as the AI sell-off deepened:
the Nikkei down about 4%, the KOSPI about 4.5% and Taiwan about 5%, the
region's worst week since 2020, with Anthropic's record IPO failing to lift
sentiment. Around it, nine more stories from the day: Russian ballistic
missiles strike Kyiv overnight, damaging three bridges; the UK and EU are set
to agree a youth mobility scheme in Brussels (talks still going "down to the
wire", nothing signed yet); COP31 enters its closing day in Antalya with no
deal yet and fossil fuels erased from the draft; a Houthi strike damages
Riyadh's tallest tower, home of Saudi Arabia's wealth fund; El Salvador's
Bukele registers for an unprecedented third presidential term ahead of the
28 February 2027 election; Trump posthumously pardons baseball legend Pete
Rose; Taiwan flags nearly 2,700 China-linked accounts to Meta ahead of its
28 November local elections; Indonesia's Prabowo meets China's Xi in Shenzhen
while Jakarta presses Google over 19,000 removed YouTube channels; and a
Seoul appeals court upholds the acquittal of Kakao founder Kim Beom-su.
Outcomes that were still pending on the day are written as pending — no
signed deal, no final COP agreement, no election result is claimed.

## How to run it

```sh
python3 dev/make_image.py   # regenerates repo/entry.png (deterministic)
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` into the directory named by
`MAKEFUN_OUTPUT_DIR` (default `/output`), refusing with a non-zero exit if
the image is missing, larger than 1 MiB, or not a valid PNG of at most
1024x1024.
