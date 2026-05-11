# design-system

**Dark × Neon × Sharp × Industrial** — デザイン制作の総合スペース。

Marathon (Bungie) インスパイアのビジュアル基盤と、プレゼン・PDF・コンポーネント・アセット・リサーチを一カ所に集約する pnpm workspaces モノレポ。

## 構成

```
design-system/
├── packages/
│   ├── tokens/        @karinMusaka/tokens         デザイントークン
│   ├── components/    @karinMusaka/components     React + Tailwind コンポーネント
│   ├── presets/       @karinMusaka/presets        Reveal/Marp/Slidev/React-PDF テーマ
│   ├── assets/        @karinMusaka/assets         フォント/アイコン/ロゴ/Lottie
│   └── meta/          @karinMusaka/design-system  互換 meta-package
├── apps/
│   └── storybook/                                  コンポーネントプレビュー
├── studio/                                          このリポジトリ内の実制作物
│   ├── decks/                                       Reveal/Marp/Slidev のスライド
│   ├── pdfs/                                        React-PDF 出力
│   └── mockups/                                     UI モック
└── docs/                                            リサーチ・意思決定ログ
    ├── research/                                    design-research 出力先
    ├── moodboards/                                  参考画像
    └── decisions/                                   ADR（採用根拠）
```

## クイックスタート

```bash
pnpm install
pnpm -F @karinMusaka/tokens build
pnpm -F @karinMusaka/design-system build   # 互換 meta-package を作る場合
```

## 各パッケージの README

- [packages/tokens/README.md](packages/tokens/README.md)
- [packages/presets/README.md](packages/presets/README.md)
- [packages/components/README.md](packages/components/README.md) *(Phase 2 で作成)*
- [packages/assets/README.md](packages/assets/README.md) *(Phase 4 で作成)*

## カラーパレット

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#000000` | ページ背景 |
| `surface` | `#222222` | カード・パネル |
| `text` | `#FFFFFF` | 本文テキスト |
| `text-muted` | `#999999` | 補助テキスト |
| `accent` | `#C0FE04` | 主要アクセント（ネオンライム） |
| `warning` | `#FF5500` | 警告・CTA |
| `info` | `#3860BE` | 情報 |
| `success` | `#00CC66` | 成功 |
| `error` | `#FF3333` | エラー |
