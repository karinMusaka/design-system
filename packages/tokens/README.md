# @karinMusaka/tokens

**Dark × Neon × Sharp × Industrial** — Design tokens.

Marathon (Bungie) インスパイアのビジュアル:
- 純黒ベース + ネオンライム (`#C0FE04`) アクセント
- シャープな角丸 (2px)
- uppercase 見出し + タイトなレタースペーシング
- インダストリアルなボーダー表現

## インストール

```bash
pnpm add @karinMusaka/tokens
```

## 使い方

### Tailwind CSS

```ts
// tailwind.config.ts
import preset from '@karinMusaka/tokens/tailwind'

export default {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}'],
}
```

`bg-background`, `text-accent`, `border-border`, `rounded-sm` 等がトークン値で使えます。

### CSS 変数

```css
@import '@karinMusaka/tokens/css';

body {
  background: var(--color-background);
  color: var(--color-text);
}
```

### JavaScript / TypeScript

```ts
import { ColorAccent, ColorBackground, FontSizeXl } from '@karinMusaka/tokens'
```

## トークン構造

```
tokens/
├── color.json       — カラーパレット (18色)
├── typography.json  — フォント・サイズ・行間・字間
├── spacing.json     — 余白・角丸・影・ボーダー
└── animation.json   — デュレーション・イージング
```

## ビルド

```bash
pnpm build
```

出力:
- `build/css/variables.css` — CSS変数
- `build/js/tokens.js` — ES6定数
- `build/js/tokens.d.ts` — TypeScript型定義
- `build/tailwind/_tokens.js` — Tailwind用定数（`tailwind-preset.cjs` が消費）

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
