import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Tokens",
};
export default meta;

type Story = StoryObj;

const colors = [
  { name: "background", value: "#000000" },
  { name: "surface", value: "#222222" },
  { name: "surface-alt", value: "#1C1C1C" },
  { name: "text", value: "#FFFFFF" },
  { name: "text-muted", value: "#999999" },
  { name: "accent", value: "#C0FE04" },
  { name: "accent-hover", value: "#D4FF4D" },
  { name: "warning", value: "#FF5500" },
  { name: "info", value: "#3860BE" },
  { name: "success", value: "#00CC66" },
  { name: "error", value: "#FF3333" },
];

export const Palette: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3 p-6">
      {colors.map((c) => (
        <div key={c.name} className="flex items-center gap-3">
          <div
            className="h-12 w-12 rounded-sm border border-border-muted"
            style={{ background: c.value }}
          />
          <div className="font-mono text-xs">
            <div className="text-foreground">{c.name}</div>
            <div className="text-muted">{c.value}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h1 className="text-6xl font-bold uppercase tracking-tighter">H1 — 80px</h1>
      <h2 className="text-5xl font-bold uppercase tracking-tighter">H2 — 56px</h2>
      <h3 className="text-3xl font-bold uppercase tracking-tight">H3 — 32px</h3>
      <h4 className="text-xl font-semibold uppercase tracking-tight">H4 — 20px</h4>
      <p className="text-base">Body — Inter 16px, line-height relaxed (1.6).</p>
      <p className="text-sm text-muted">Muted body — 14px @ #999</p>
      <code className="font-mono text-accent">code — JetBrains Mono, accent color</code>
    </div>
  ),
};
