---
marp: true
theme: karinmusaka-dark
paginate: true
---

<!--
Marp テーマ動作確認用サンプル。
ローカルプレビュー:
  pnpm dlx @marp-team/marp-cli studio/decks/sample-marp.md --theme packages/presets/marp/theme.css -o /tmp/sample.html
PDF 出力:
  pnpm dlx @marp-team/marp-cli studio/decks/sample-marp.md --theme packages/presets/marp/theme.css --pdf -o /tmp/sample.pdf
-->

# Mission **Briefing**

<span class="muted">Operative — 木原 学</span>

<div class="stripe-bar"></div>

---

## Status: <span class="accent">Operational</span>

- All systems nominal
- Awaiting deployment authorization
- ETA: **T-minus 24h**

---

## Threat Vectors

| Target | Severity | Note |
|--------|----------|------|
| Frontend | LOW | Tailwind preset 適用済 |
| Backend  | MED | API rate-limit 監視中 |
| Comm     | HIGH | スパム検知ルール強化 |

---

## Code

```python
def engage(target: str) -> bool:
    print(f"engaging {target}…")
    return True
```

---

<!-- _class: title -->

# **GO** for Launch.

<span class="glow accent">karinmusaka.io</span>
