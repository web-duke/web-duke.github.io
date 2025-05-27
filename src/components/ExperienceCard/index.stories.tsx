import type { Meta, StoryObj } from "@storybook/react";
import ExperienceCard, { type ExperienceProps } from ".";

const meta = {
  title: "Components/ExperienceCard",
  component: ExperienceCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    data: {
      startDate: "2024-01",
      endDate: "2025-01",
      jobTitle: "Software Engineer",
      companyName: "ACME Corp.",
      location: "Québec, Qc, Canada",
      skills: ["React Js", "Typescript"],
      details: ["Conception et développement d’applications web"],
    } as ExperienceProps,
  },
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
