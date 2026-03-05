# @kiharagaku/design-system

**Dark × Neon × Sharp × Industrial** — 全プロジェクト共通のデザイントークン。

Marathon (Bungie) にインスパイアされたビジュアルテイスト：
- 純黒ベース + ネオンライム (`#C0FE04`) アクセント
- シャープな角丸 (2px)
- uppercase 見出し + タイトなレタースペーシング
- インダストリアルなボーダー表現

## クイックスタート

### 1. インストール

```bash
# ローカルリンク（monorepo外の場合）
cd design-system && npm link
cd your-project && npm link @kiharagaku/design-system
```

### 2. Tailwind CSS で使う

```ts
// tailwind.config.ts
import preset from '@kiharagaku/design-system/tailwind'

export default {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}'],
}
```

これだけで `bg-background`, `text-accent`, `border-border`, `rounded-sm` 等がトークンの値で使えます。

### 3. CSS変数として使う

```css
@import '@kiharagaku/design-system/css';

body {
  background: var(--color-background);
  color: var(--color-text);
}
```

### 4. JavaScript/TypeScript から使う

```ts
import { ColorAccent, ColorBackground, FontSizeXl } from '@kiharagaku/design-system'
```

### 5. Reveal.js スライドで使う

```js
import '@kiharagaku/design-system/reveal-theme'
```

### 6. React-PDF で使う

```tsx
import { styles, colors } from '@kiharagaku/design-system/react-pdf'

<Page style={styles.page}>
  <Text style={styles.h1}>タイトル</Text>
  <Text style={styles.accent}>強調テキスト</Text>
</Page>
```

## トークン構造

```
tokens/
├── color.json       — カラーパレット (18色)
├── typography.json   — フォント・サイズ・行間・字間
├── spacing.json      — 余白・角丸・影・ボーダー
└── animation.json    — デュレーション・イージング
```

## ビルド

```bash
npm run build    # tokens/ → build/ に変換
```

出力:
- `build/css/variables.css` — CSS変数
- `build/tailwind/preset.js` — Tailwindプリセット
- `build/js/tokens.js` — ES6定数
- `build/js/tokens.d.ts` — TypeScript型定義

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
