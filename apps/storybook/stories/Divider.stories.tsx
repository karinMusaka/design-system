import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@karinMusaka/components";

const meta: Meta<typeof Divider> = {
  title: "Primitives/Divider",
  component: Divider,
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Line: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <p className="text-foreground">Section A</p>
      <Divider variant="line" />
      <p className="text-foreground">Section B</p>
    </div>
  ),
};

export const Stripe: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <p className="text-foreground">Section A</p>
      <Divider variant="stripe" />
      <p className="text-foreground">Section B</p>
    </div>
  ),
};
