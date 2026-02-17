/**
 * PREFCOL Admin Panel – Dark Enchanted Forest theme
 * Deep greens/blues, glowing lime accent, dark background.
 */
export const adminTheme = {
  // Backgrounds
  bgDark: "#0a0e0f",
  bgSidebar: "#0d1416",
  bgCard: "#111a1c",
  bgElevated: "#151f22",
  // Accent – glowing lime/chartreuse
  accent: "#adff2f",
  accentDim: "rgba(173, 255, 47, 0.15)",
  accentGlow: "rgba(173, 255, 47, 0.25)",
  // PREFCOL branding – light teal
  brand: "#5eead4",
  brandDim: "rgba(94, 234, 212, 0.2)",
  // Deep greens/teals
  greenDark: "#0f2e22",
  greenMid: "#1a3d32",
  tealDark: "#0f2847",
  // Text
  textPrimary: "#e6edf0",
  textSecondary: "#8b9ca7",
  textMuted: "#6b7c87",
  // Borders
  border: "rgba(94, 234, 212, 0.12)",
  borderSubtle: "rgba(26, 61, 50, 0.6)",
};

export const antdThemeConfig = {
  token: {
    colorPrimary: adminTheme.accent,
    colorBgContainer: adminTheme.bgDark,
    colorBgElevated: adminTheme.bgCard,
    colorBorder: adminTheme.border,
    colorText: adminTheme.textPrimary,
    colorTextSecondary: adminTheme.textSecondary,
    colorBorderSecondary: adminTheme.borderSubtle,
    borderRadius: 6,
  },
  components: {
    Menu: {
      darkItemBg: adminTheme.bgSidebar,
      darkItemSelectedBg: adminTheme.accentDim,
      darkItemHoverBg: adminTheme.greenDark,
      itemSelectedBg: adminTheme.accentDim,
      itemHoverBg: adminTheme.greenDark,
      itemSelectedColor: adminTheme.accent,
      itemColor: adminTheme.textSecondary,
      itemHoverColor: adminTheme.textPrimary,
      subMenuItemBg: "transparent",
      darkSubMenuItemBg: "transparent",
    },
    Layout: {
      siderBg: adminTheme.bgSidebar,
      bodyBg: adminTheme.bgDark,
      headerBg: adminTheme.bgSidebar,
    },
  },
};
