# 0003 — Sharp 2px Radius の採用

Status: Accepted
Date: 2026-03-05

## Context

ラウンド角の値はデザインの方向性を決定づける。Material 4px、shadcn 6〜8px、iOS 12px+ が主流。本デザインシステムでは「インダストリアル/シャープ」を表現する必要があった。

## Decision

- `radius.sm` = **`2px`**（デフォルト）
- `radius.md` = `4px`（控えめに使う）
- `radius.lg` = `8px`（モーダル等の大きい面のみ）
- `radius.full` = `9999px`（バッジのピル形状用）
- **`radius.none` = `0` は積極的に使わない**（角張りすぎてレトロになる）

Tailwind preset 上で `rounded-sm` がデフォルト、`rounded` も同値（`DEFAULT: 2px`）。

## Why 2px か

- **`0px`（角張り）はレトロ/ブルータリズム寄り** → このシステムが目指す Marathon 風から離れる
- **`4px+` はモダン UI 一般化** → 識別性が薄れる
- **`2px` は「ほぼ直角だがエッジに微かな処理を入れた工業製品」感** が出る
  - 切削加工された金属パーツの面取りのような印象
  - ネオンライムの硬質さと釣り合う

## Consequences

- 全コンポーネントが角張って見える → 一覧性は高い、温かみは弱い
- ブランド一貫性を保つには `rounded-md` `rounded-lg` の濫用を避けるガイドラインが必要
- shadcn/ui などのコピペ系コードを取り込む際は border-radius を 2px に上書きする必要あり
