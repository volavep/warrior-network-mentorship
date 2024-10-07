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
    dark: [
      "#262728",
      "#222424",
      "#1F2121",
      "#1C1E1F",
      "#191B1C",
      "#16191A",
      "#141718",
      "#121515",
      "#111213",
      "#0F1011",
      "#0E0F0F",
      "#0D0D0D",
      "#0B0C0C",
    ],
  },
  black: "#141718",
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
  },
});

export { theme };
