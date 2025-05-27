import type { Meta, StoryObj } from "@storybook/react";
import Box from ".";

const meta = {
  title: "Components/Box",
  component: Box,
  decorators: [() => <Box>Content Wrapper</Box>],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
