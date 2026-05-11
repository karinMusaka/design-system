# @karinMusaka/design-system

互換用 meta-package。旧 import path をそのまま使い続けたいプロジェクト向け。

新規プロジェクトでは `@karinMusaka/tokens` と `@karinMusaka/presets` を直接 import してください。

## 互換 import path

| 旧 path | 中身 |
|---------|------|
| `@karinMusaka/design-system` | tokens (JS) |
| `@karinMusaka/design-system/css` | tokens (CSS変数) |
| `@karinMusaka/design-system/tailwind` | Tailwind preset |
| `@karinMusaka/design-system/reveal-theme` | Reveal.js テーマ |
| `@karinMusaka/design-system/react-pdf` | React-PDF テーマ |

## ビルド

ワークスペース上で:

```bash
pnpm -F @karinMusaka/tokens build
pnpm -F @karinMusaka/design-system build
```

`packages/meta/dist/` に配布物が生成されます。
