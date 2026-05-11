# docs/

デザイン制作にまつわるリサーチ・意思決定の蓄積。

## ディレクトリ

- `research/` — Web 調査結果、競合キャプチャ、参考リンク集。`/design-research` skill の出力先として固定。
- `moodboards/` — 参考画像・配色案・トーン候補。
- `decisions/` — ADR（Architecture Decision Record）形式の採用根拠ログ。

## ADR 運用ルール

- ファイル名: `NNNN-kebab-title.md`（4桁連番）
- 必須セクション: `Status` / `Date` / `Context` / `Decision` / `Why` / `Consequences`
- 一度 `Accepted` にした内容は書き換えず、覆す場合は新しい ADR で `Supersedes: 0001` を明示
- 索引: [decisions/](decisions/) 配下のファイル一覧

## research/ 運用

`/design-research` 実行時、出力は本ディレクトリの `research/YYYY-MM-DD-<topic>.md` に保存する。
スクリーンショットは同名サブディレクトリ（`research/YYYY-MM-DD-<topic>/`）に置く。
