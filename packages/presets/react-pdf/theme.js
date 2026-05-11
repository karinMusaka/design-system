/**
 * @kiharagaku/design-system — React-PDF Theme
 * Dark × Neon × Sharp × Industrial
 *
 * Usage:
 *   import { styles, colors, fonts } from '@kiharagaku/design-system/react-pdf'
 *   <Document><Page style={styles.page}>...</Page></Document>
 */

const colors = {
  background: "#000000",
  surface: "#222222",
  surfaceAlt: "#1C1C1C",
  text: "#FFFFFF",
  textMuted: "#999999",
  accent: "#C0FE04",
  warning: "#FF5500",
  info: "#3860BE",
  success: "#00CC66",
  error: "#FF3333",
  border: "#1C1C1C",
  borderMuted: "#333333",
};

const fonts = {
  heading: "Inter",
  body: "Inter",
  mono: "JetBrains Mono",
};

const styles = {
  page: {
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: fonts.body,
    fontSize: 12,
    padding: 40,
    lineHeight: 1.6,
  },
  h1: {
    fontFamily: fonts.heading,
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: -1.5,
    textTransform: "uppercase",
    color: colors.text,
    marginBottom: 16,
    lineHeight: 1.1,
  },
  h2: {
    fontFamily: fonts.heading,
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: -1,
    textTransform: "uppercase",
    color: colors.text,
    marginBottom: 12,
    lineHeight: 1.1,
  },
  h3: {
    fontFamily: fonts.heading,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: -0.5,
    textTransform: "uppercase",
    color: colors.text,
    marginBottom: 8,
    lineHeight: 1.2,
  },
  body: {
    fontSize: 12,
    color: colors.text,
    lineHeight: 1.6,
  },
  muted: {
    color: colors.textMuted,
    fontSize: 10,
  },
  accent: {
    color: colors.accent,
    fontWeight: 700,
  },
  card: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: 2,
    padding: 16,
    marginBottom: 12,
  },
  divider: {
    borderBottom: `1px solid ${colors.border}`,
    marginTop: 16,
    marginBottom: 16,
  },
  code: {
    fontFamily: fonts.mono,
    fontSize: 10,
    backgroundColor: colors.surfaceAlt,
    color: colors.accent,
    padding: "2px 6px",
    borderRadius: 2,
  },
  badge: {
    backgroundColor: colors.accent,
    color: colors.background,
    fontSize: 9,
    fontWeight: 700,
    padding: "2px 8px",
    borderRadius: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  stripeBar: {
    height: 3,
    marginTop: 12,
    marginBottom: 12,
  },
};

module.exports = { colors, fonts, styles };
