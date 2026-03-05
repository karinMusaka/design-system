/**
 * @kiharagaku/design-system — Tailwind CSS Preset
 * Auto-generated tokens + hand-crafted Tailwind integration.
 *
 * Usage in tailwind.config.ts:
 *   import preset from '@kiharagaku/design-system/tailwind'
 *   export default { presets: [preset], ... }
 */

const tokens = require("./_tokens.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: tokens.ColorBackground,
        surface: {
          DEFAULT: tokens.ColorSurface,
          alt: tokens.ColorSurfaceAlt,
        },
        foreground: tokens.ColorText,
        muted: {
          DEFAULT: tokens.ColorTextMuted,
          dim: tokens.ColorTextDim,
        },
        accent: {
          DEFAULT: tokens.ColorAccent,
          hover: tokens.ColorAccentHover,
          dim: tokens.ColorAccentDim,
        },
        warning: {
          DEFAULT: tokens.ColorWarning,
          hover: tokens.ColorWarningHover,
        },
        info: {
          DEFAULT: tokens.ColorInfo,
          hover: tokens.ColorInfoHover,
        },
        success: tokens.ColorSuccess,
        error: tokens.ColorError,
        border: {
          DEFAULT: tokens.ColorBorder,
          accent: tokens.ColorBorderAccent,
          muted: tokens.ColorBorderMuted,
        },
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: tokens.FontSizeXs,
        sm: tokens.FontSizeSm,
        base: tokens.FontSizeBase,
        lg: tokens.FontSizeLg,
        xl: tokens.FontSizeXl,
        "2xl": tokens.FontSize2xl,
        "3xl": tokens.FontSize3xl,
        "4xl": tokens.FontSize4xl,
        "5xl": tokens.FontSize5xl,
        "6xl": tokens.FontSize6xl,
      },
      fontWeight: {
        regular: tokens.FontWeightRegular,
        medium: tokens.FontWeightMedium,
        semibold: tokens.FontWeightSemibold,
        bold: tokens.FontWeightBold,
      },
      letterSpacing: {
        tighter: tokens.FontLetterSpacingTighter,
        tight: tokens.FontLetterSpacingTight,
        normal: tokens.FontLetterSpacingNormal,
        wide: tokens.FontLetterSpacingWide,
        wider: tokens.FontLetterSpacingWider,
      },
      lineHeight: {
        tight: tokens.FontLineHeightTight,
        snug: tokens.FontLineHeightSnug,
        normal: tokens.FontLineHeightNormal,
        relaxed: tokens.FontLineHeightRelaxed,
      },
      borderRadius: {
        none: tokens.RadiusNone,
        sm: tokens.RadiusSm,
        DEFAULT: tokens.RadiusSm,
        md: tokens.RadiusMd,
        lg: tokens.RadiusLg,
        full: tokens.RadiusFull,
      },
      borderWidth: {
        DEFAULT: tokens.BorderWidthDefault,
        2: tokens.BorderWidthThick,
      },
      boxShadow: {
        sm: tokens.ShadowSm,
        md: tokens.ShadowMd,
        lg: tokens.ShadowLg,
        accent: tokens.ShadowAccent,
      },
      transitionDuration: {
        fast: tokens.AnimationDurationFast,
        normal: tokens.AnimationDurationNormal,
        slow: tokens.AnimationDurationSlow,
      },
      transitionTimingFunction: {
        DEFAULT: tokens.AnimationEasingDefault,
        in: tokens.AnimationEasingIn,
        out: tokens.AnimationEasingOut,
        "in-out": tokens.AnimationEasingInOut,
        spring: tokens.AnimationEasingSpring,
      },
    },
  },
};
