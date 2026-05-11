# studio/

このリポジトリ内で実際にデザイン制作を行うワークスペース。**配布対象外**（npm tarball に含まれない）。

## ディレクトリ

- `decks/` — Reveal/Marp/Slidev のスライド
- `pdfs/` — React-PDF レポート・スライド
- `mockups/` — UI モック（`.html` / `.tsx`）

## サンプル

| ファイル | 種類 | 実行例 |
|---------|------|--------|
| `decks/sample-reveal.html` | Reveal.js | ブラウザで直接開く |
| `decks/sample-marp.md` | Marp | `pnpm dlx @marp-team/marp-cli studio/decks/sample-marp.md --theme packages/presets/marp/theme.css -o /tmp/sample.html` |
| `decks/sample-slidev/slides.md` | Slidev | `pnpm dlx slidev studio/decks/sample-slidev/slides.md` |
| `pdfs/report-sample.tsx` | React-PDF | `@react-pdf/renderer` の `renderToFile` で出力 |
