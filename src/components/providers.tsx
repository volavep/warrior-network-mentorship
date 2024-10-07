"use client";
import { Component } from "@/types/common";
import { MantineProvider } from "@mantine/core";
import { theme } from "../../theme";
import { Toaster } from "react-hot-toast";

const Providers: Component = ({ children }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
      <Toaster />
    </MantineProvider>
  );
};

export { Providers };
