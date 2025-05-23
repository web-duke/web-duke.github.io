import type { Meta, StoryObj } from "@storybook/react";
import LangButton from ".";

const meta = {
  title: "Components/LangButton",
  component: LangButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LangButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
