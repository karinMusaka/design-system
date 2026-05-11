import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@karinMusaka/components";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
  args: { children: "ENGAGE", variant: "primary", size: "md" },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Danger: Story = { args: { variant: "danger", children: "ABORT" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">PRIMARY</Button>
      <Button variant="secondary">SECONDARY</Button>
      <Button variant="ghost">GHOST</Button>
      <Button variant="danger">DANGER</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">SMALL</Button>
      <Button size="md">MEDIUM</Button>
      <Button size="lg">LARGE</Button>
    </div>
  ),
};
