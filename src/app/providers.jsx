"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import React from "react";

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
