# 0002 — タイポグラフィ採用

Status: Accepted
Date: 2026-03-05

## Context

スライド・PDF・ダッシュボードで使うフォントを統一する必要があった。条件:
- 日本語混在で破綻しない（少なくとも欧文部分が綺麗）
- OSS / 無料ライセンス
- monospace と sans-serif の2系統で揃える
- self-host 可能（Fontsource 経由）

## Decision

- 見出し・本文: **Inter**（400 / 500 / 600 / 700）
- 等幅: **JetBrains Mono**（400 / 600）
- 見出しは **uppercase + letter-spacing -0.04em** を必須化
- 本文の `line-height: 1.6`（relaxed）

## Why これらの選択か

### Inter
- 数字の見やすさ（ダッシュボード・財務 UI で必須）
- weight バリエーションが豊富で見出し→本文の階層を1書体で表現できる
- GitHub / Linear など主要 SaaS で実績多数 → モダンUI らしさが安心して出る
- Variable font 版もある（将来の最適化余地）

### JetBrains Mono
- 0/O, 1/l/I の区別がついて識別しやすい
- リガチャ非依存でも美しい
- インダストリアル感（少しメカニカル）が accent ライムと相性◎

### Uppercase 見出し
- Marathon 的・ミリタリー的ボイス
- 日本語見出しと混在しても「見出しらしさ」が文字種で立つ
- letter-spacing -0.04em で詰めると uppercase でも野暮ったくならない

### 行間 1.6
- 黒背景 + 白文字は明色背景より目が疲れやすい → 通常の 1.5 より少し広げる
- 日本語混在時の行送りバランス

## Consequences

- 日本語見出しが本書体に依存（明朝/ゴシック切替は不要、Inter のフォールバックで sans-serif が当たる）
- 等幅は JetBrains Mono のみで Fira Code / Source Code Pro 等を採用しない（一貫性優先）
- Variable font 化や差し替えは Phase 5 以降に検討
