import type { Meta, StoryObj } from "@storybook/react";
import HeaderContent from ".";

const meta = {
  title: "Components/HeaderContent",
  component: HeaderContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HeaderContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
