"use client";
import { Component } from "@/types/common";
import { MantineProvider } from "@mantine/core";
import { theme } from "../../theme";

const Providers: Component = ({ children }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
};

export { Providers };
