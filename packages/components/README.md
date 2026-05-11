# @karinMusaka/components

React + Tailwind コンポーネント集 — Dark × Neon × Sharp × Industrial。

## インストール

```bash
pnpm add @karinMusaka/components @karinMusaka/tokens
```

`peerDependencies`: `react >= 18`, `react-dom >= 18`

## 前提 (Tailwind)

`tailwind.config.ts` で `@karinMusaka/tokens` の preset を読み込み、`content` に本パッケージを含めます。

```ts
import preset from '@karinMusaka/tokens/tailwind'

export default {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@karinMusaka/components/dist/**/*.js',
  ],
}
```

## 使い方

```tsx
import { Button, Card, CardTitle, CardBody, Badge, Stack } from '@karinMusaka/components'

<Card variant="accent">
  <CardTitle>Mission Control</CardTitle>
  <CardBody>
    <Stack gap={4}>
      <Badge variant="accent">LIVE</Badge>
      <Button variant="primary" size="md">Engage</Button>
    </Stack>
  </CardBody>
</Card>
```

## 提供コンポーネント

| Component | Variants |
|-----------|----------|
| `Button` | `primary` / `secondary` / `ghost` / `danger` × `sm` / `md` / `lg` |
| `Card` (+ `CardHeader`, `CardTitle`, `CardBody`) | `default` / `outline` / `accent` |
| `Badge` | `accent` / `warning` / `info` / `success` / `error` / `muted` |
| `Divider` | `line` / `stripe` × `horizontal` / `vertical` |
| `Container` | `sm` / `md` / `lg` / `xl` / `full` |
| `Stack` | `row` / `col` × gap × align × justify |
