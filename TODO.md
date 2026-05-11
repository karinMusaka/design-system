# TODO

## Phase 1: モノレポ土台移行（完了）
- [x] pnpm workspaces 化（packages/* + apps/*）
- [x] tokens/presets を packages/ へ移植
- [x] 互換 meta-package `@karinMusaka/design-system` 作成
- [x] npm scope を `@karinMusaka` に統一

## Phase 2: コンポーネント層立ち上げ
- [x] packages/components の足場作成（tsup ビルド）
- [x] Button / Card / Badge / Divider / Container 実装
- [x] apps/storybook の Storybook 8 + Vite 構築
- [ ] スクリーンショットを docs/research/screenshots/ に保存（次セッション: `pnpm -F storybook dev` 起動 → 6006 ポートで playwright スクショ）

## Phase 3: プレゼン・PDF 制作環境
- [x] presets/marp の CSS テーマ
- [x] presets/slidev のテーマパッケージ
- [x] studio/decks にサンプル Reveal/Marp/Slidev deck
- [x] studio/pdfs に React-PDF サンプル

## Phase 4: アセット・リサーチ整備
- [x] packages/assets（fonts / icons / logos / lottie）
- [x] docs/decisions/0001-color-palette.md
- [x] docs/decisions/0002-typography.md
- [x] docs/decisions/0003-sharp-2px-radius.md
- [x] docs/research/ 運用ルールを README に追記

## 他プロジェクトへの展開（将来）
- [ ] biz-buddy / life-protocol / mission-control / line_cp_intro / gmail-agent に preset 導入
- [ ] biz-buddy 固有テーマ（ローズ/ネイビー/ゴールド）の検討
