# @karinMusaka/presets

プレゼン・PDF 用テーマ集 — Dark × Neon × Sharp × Industrial

## サブパス

| Path | 用途 |
|------|------|
| `@karinMusaka/presets/reveal` | Reveal.js テーマ (CSS) |
| `@karinMusaka/presets/marp` | Marp テーマ (CSS) |
| `@karinMusaka/presets/slidev` | Slidev テーマ |
| `@karinMusaka/presets/react-pdf` | React-PDF スタイル定義 |

## 使い方

### Reveal.js

```js
import '@karinMusaka/presets/reveal'
```

### Marp

```yaml
---
theme: @karinMusaka/presets/marp
---
```

### Slidev

```yaml
---
theme: '@karinMusaka/presets/slidev'
---
```

### React-PDF

```tsx
import { styles, colors, fonts } from '@karinMusaka/presets/react-pdf'

<Page style={styles.page}>
  <Text style={styles.h1}>タイトル</Text>
  <Text style={styles.accent}>強調テキスト</Text>
</Page>
```
