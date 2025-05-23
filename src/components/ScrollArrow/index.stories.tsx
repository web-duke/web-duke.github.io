import type { Meta, StoryObj } from "@storybook/react";
import ScrollArrow from ".";

const meta = {
  title: "Components/ScrollArrow",
  component: ScrollArrow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ScrollArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
