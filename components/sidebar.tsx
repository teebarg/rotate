import React from "react";
import { Box, Button, Flex, Text, VStack, HStack, Heading, Icon } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

interface RoadMapItem {
    status: "Planned" | "In-Progress" | "Live";
    count: number;
    color: string;
}

const roadmapData: RoadMapItem[] = [
    { status: "Planned", count: 2, color: "coral" },
    { status: "In-Progress", count: 3, color: "primary" },
    { status: "Live", count: 1, color: "skyBlue" },
];

export const Sidebar: React.FC = () => (
    <>
        {/* Header Card Mobile */}
        <Box
            display={{ base: "flex", md: "none" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={6}
            color="white"
            bgGradient="to-r"
            gradientFrom="blue"
            gradientTo="primary"
            className="light"
        >
            <Box>
                <Heading as="h1" size="md" fontWeight="bold">
                    Frontend Mentor
                </Heading>
                <Text opacity={0.75} fontWeight="medium" fontSize="13px" color="white">
                    Feedback Board
                </Text>
            </Box>
            <Icon fontSize="30px">
                <FaBars />
            </Icon>
        </Box>

        <Box
            w={{ base: "full", lg: "250px" }}
            display={{ base: "none", md: "flex" }}
            alignItems="stretch"
            gap={6}
            flexDirection={{ md: "row", lg: "column" }}
        >
            {/* Header Card Tablet */}
            <Flex
                w="full"
                minH="125px"
                p={6}
                borderRadius="10"
                color="white"
                direction={"column"}
                justifyContent={"end"}
                bgGradient="to-r"
                gradientFrom="blue"
                gradientTo="primary"
                className="light"
            >
                <Heading as="h1" size="xl" fontWeight="bold">
                    Frontend Mentor
                </Heading>
                <Text opacity={0.75} textStyle="md" fontWeight="medium">
                    Feedback Board
                </Text>
            </Flex>

            {/* Filter Tags */}
            <Flex w="full" p={6} bg="white" borderRadius="10">
                <HStack wrap="wrap">
                    {["All", "UI", "UX", "Enhancement", "Bug", "Feature"].map((item: string, index: number) => (
                        <Badge key={index} isActive={index == 0}>
                            {item}
                        </Badge>
                    ))}
                </HStack>
            </Flex>

            {/* Roadmap Card */}
            <Box w="full" p={6} bg="white" borderRadius="10">
                <Flex justify="space-between" align="center" mb={2}>
                    <Heading size="lg" fontWeight="bold" color="darkBlue">
                        Roadmap
                    </Heading>
                    <Button color="blue" fontWeight="semibold" fontSize="sm" textDecoration="underline" bg="inherit">
                        View
                    </Button>
                </Flex>
                <VStack align="stretch">
                    {roadmapData.map((item: RoadMapItem, index: number) => (
                        <Flex key={index} justify="space-between" align="center">
                            <HStack>
                                <Box w={2} h={2} borderRadius="full" bg={item.color} />
                                <Text color="mutedBlue" textStyle="md" fontWeight="normal">
                                    {item.status}
                                </Text>
                            </HStack>
                            <Text fontWeight="bold" color="mutedBlue" textStyle="md">
                                {item.count}
                            </Text>
                        </Flex>
                    ))}
                </VStack>
            </Box>
        </Box>
    </>
);
