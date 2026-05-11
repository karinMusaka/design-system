import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@karinMusaka/components";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  args: { children: "ACCENT" },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const All: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="accent">ACCENT</Badge>
      <Badge variant="warning">WARNING</Badge>
      <Badge variant="info">INFO</Badge>
      <Badge variant="success">SUCCESS</Badge>
      <Badge variant="error">ERROR</Badge>
      <Badge variant="muted">MUTED</Badge>
    </div>
  ),
};
