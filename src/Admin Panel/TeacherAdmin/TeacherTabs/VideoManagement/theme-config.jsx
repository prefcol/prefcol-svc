// Theme configuration with orange and dark teal colors
const themeConfig = {
  token: {
    colorPrimary: "#FF7A00", // Orange
    colorSuccess: "#00A878", // Dark teal
    colorInfo: "#0096C7",
    colorWarning: "#FFB347",
    colorError: "#FF5252",
    colorTextBase: "#333333",
    colorBgBase: "#FFFFFF",
    borderRadius: 6,
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    Button: {
      colorPrimary: "#FF7A00",
      colorPrimaryHover: "#FF9A3D",
      colorPrimaryActive: "#E56C00",
    },
    Menu: {
      colorItemBg: "transparent",
      colorItemText: "#333333",
      colorItemTextSelected: "#FF7A00",
      colorItemBgSelected: "rgba(255, 122, 0, 0.1)",
      colorItemTextHover: "#FF7A00",
    },
    Card: {
      colorBorderSecondary: "#E8E8E8",
    },
    Table: {
      colorBgContainer: "#FFFFFF",
      headerBg: "#F5F5F5",
    },
    Layout: {
      colorBgHeader: "#FFFFFF",
      colorBgBody: "#F5F5F5",
      colorBgTrigger: "#FFFFFF",
      colorBgContainer: "#FFFFFF",
    },
    Statistic: {
      colorTextDescription: "#666666",
    },
  },
}

export default themeConfig

