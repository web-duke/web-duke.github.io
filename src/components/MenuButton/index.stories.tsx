import type { Meta, StoryObj } from "@storybook/react";
import MenuButton from ".";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Components/MenuButton",
  component: MenuButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div
          style={{
            minHeight: "10rem",
          }}
        >
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
