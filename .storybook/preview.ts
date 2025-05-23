import type { Preview } from "@storybook/react";
import "../src/styles/main.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#f0f0f0" },
        { name: "dark", value: "#2f2f2f" },
      ],
    },
  },
};

export default preview;
