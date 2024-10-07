import { createTheme } from "@mantine/core";

const theme = createTheme({
  colors: {
    primary: [
      "#FFF5F0",
      "#FFE8DA",
      "#FFBFA6",
      "#FF8F5E",
      "#FF7739",
      "#FF4E00",
      "#E64700",
      "#CC3F00",
      "#B23700",
      "#992F00",
    ],
  },
  primaryColor: "primary",
  components: {
    Button: {
      defaultProps: {
        color: "#FF4E00",
      },
    },
    Title: {
      defaultProps: {
        c: "white",
      },
    },
    Text: {
      defaultProps: {
        c: "white",
      },
    },
    Card: {
      defaultProps: {
        bg: "#232627",
      },
    },
    Paper: {
      defaultProps: {
        bg: "#1B1E1F",
      },
    },
    Badge: {
      styles: {
        label: {
          textTransform: "capitalize",
          fontWeight: 400,
          fontSize: 13,
        },
        root: {
          padding: "7px 10px !important",
        },
      },
    },
  },
});

export { theme };
