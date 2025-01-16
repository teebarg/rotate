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
                blue: {
                    solid: { value: "{colors.blue}" },
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
