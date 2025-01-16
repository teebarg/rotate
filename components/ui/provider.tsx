"use client";

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { Jost } from "next/font/google";

const jost = Jost({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                // Primary colors
                primary: { value: "#AD1FEA" },
                secondary: { value: "#373F68" },
                blue: { value: "#4661E6" },
                blueXs: { value: "#CFD7FF" },
                navy: { value: "#354074" },
                white: { value: "#FFFFFF" },

                // Secondary colors
                lightBlue: { value: "#F2F4FF" },
                softPurple: { value: "#F7F8FD" },
                darkBlue: { value: "#3A4374" },
                mutedBlue: { value: "#647196" },

                // Accent colors
                coral: { value: "#F49F85" },
                skyBlue: { value: "#62BCFA" },
            },
            fonts: {
                body: { value: jost.style.fontFamily }, // Use Jost for body text
                heading: { value: jost.style.fontFamily }, // Use Jost for headings
            },
            radii: {
                10: { value: "10px" },
            },
        },
        semanticTokens: {
            colors: {
                white: {
                    value: { _light: "white", _dark: "#252A41" },
                },
                blue: {
                    value: { _light: "#4661E6", _dark: "#3B4CB3" },
                },
                darkBlue: {
                    value: { _light: "#3A4374", _dark: "white" },
                },
                lightBlue: {
                    value: { _light: "#F2F4FF", _dark: "black" },
                },
                mutedBlue: {
                    value: { _light: "#647196", _dark: "A0AEC0" },
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);

export function Provider(props: ColorModeProviderProps) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    );
}
