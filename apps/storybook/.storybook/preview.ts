import type { Preview } from "@storybook/react";
import "./preview.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "industrial-black",
      values: [
        { name: "industrial-black", value: "#000000" },
        { name: "surface", value: "#222222" },
      ],
    },
    layout: "centered",
  },
};

export default preview;
