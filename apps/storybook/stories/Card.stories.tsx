import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardBody, Button, Badge, Stack } from "@karinMusaka/components";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  argTypes: {
    variant: { control: "select", options: ["default", "outline", "accent"] },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader>
        <CardTitle>Mission Control</CardTitle>
      </CardHeader>
      <CardBody>
        <Stack gap={4}>
          <p className="text-muted">All systems nominal. Awaiting deployment authorization.</p>
          <Stack direction="row" gap={2}>
            <Badge variant="accent">LIVE</Badge>
            <Badge variant="info">v0.1.0</Badge>
          </Stack>
          <Button variant="primary" size="md">DEPLOY</Button>
        </Stack>
      </CardBody>
    </Card>
  ),
};

export const Accent: Story = { ...Default, args: { variant: "accent" } };
export const Outline: Story = { ...Default, args: { variant: "outline" } };
