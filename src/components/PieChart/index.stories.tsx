import type { Meta, StoryObj } from "@storybook/react";
import PieChart from ".";

const meta = {
  title: "Components/PieChart",
  component: PieChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    data: [
      { name: "React Js", value: 3.3 },
      { name: "TypeScript", value: 2.5 },
      { name: "JavaScript", value: 6.0 },
    ],
  },
};
