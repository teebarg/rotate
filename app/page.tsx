"use client";

import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import { Sidebar } from "@/components/sidebar";
import { Content } from "@/components/content";

export default function Home() {
    return (
        <Flex bg="lightBlue" direction="column">
            <Container py={{ base: 0, md: 8 }} px={{ base: 0, md: 8 }}>
                <Flex gap={{ base: 0, md: 6 }} flexDirection={{ base: "column", lg: "row" }} w="full">
                    <Sidebar />
                    <Content />
                </Flex>
            </Container>
        </Flex>
    );
}
