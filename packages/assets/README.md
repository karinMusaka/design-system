# @karinMusaka/assets

フォント・アイコン・ロゴ・Lottie アセットを集約した npm パッケージ。

## 使い方

### フォント

Fontsource をラッパで提供。

```ts
// Inter（全weight）を import
import '@karinMusaka/assets/fonts/inter'

// JetBrains Mono
import '@karinMusaka/assets/fonts/jetbrains-mono'
```

特定 weight だけ欲しい場合は直接 `@fontsource/inter/400.css` を使ってください。

### アイコン

`icons/` 配下の SVG を直接 import:

```ts
import logoMark from '@karinMusaka/assets/icons/mark.svg'
```

### ロゴ

`logos/` 配下に各種バリエーション（dark, light, mono）を配置。

### Lottie

`lottie/*.json` を `lottie-web` 等で読み込み。

## ディレクトリ

```
assets/
├── fonts/      ← @fontsource ラッパ（実体は dependencies）
├── icons/      ← SVG アイコン
├── logos/      ← ブランドロゴ
└── lottie/     ← Lottie JSON アニメーション
```

## カラー前提

アセットは原則として **#000000 背景 + #C0FE04 アクセント** の前提で作成。
背景が明色の場合は inverse バリエーション（`logos/*-light.svg` 等）を別途用意。
