import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const jost = Jost({
    subsets: ["latin"], // Use 'latin' or other subsets you need
    weight: ["400", "500", "700"], // Specify required font weights
    display: "swap", // Optional: Improves loading performance
});


export const metadata: Metadata = {
    title: "Mentor Board",
    description: "A dashboard for mentors",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${jost.className} antialiased`}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
