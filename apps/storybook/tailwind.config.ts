import type { Config } from "tailwindcss";
import preset from "@karinMusaka/tokens/tailwind";

export default {
  presets: [preset],
  content: [
    "./stories/**/*.{ts,tsx}",
    "../../packages/components/src/**/*.{ts,tsx}",
    "../../packages/components/dist/**/*.{js,cjs}",
  ],
} satisfies Config;
