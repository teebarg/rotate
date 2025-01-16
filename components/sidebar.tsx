import React from "react";
import { Badge, Box, Button, Flex, Text, VStack, HStack, Heading } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

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

export const Sidebar = () => (
    <>
        <Box
            display={{ base: "flex", md: "none" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            // w="full"
            paddingX={6}
            paddingY={5}
            color="white"
            bgGradient="to-r"
            gradientFrom="blue"
            gradientTo="primary"
        >
            <Box>
                <Heading as="h1" size="4xl" fontWeight="bold">
                    Frontend Mentor
                </Heading>
                <Text textStyle="sm" opacity={0.75} fontWeight="medium" fontSize="15px" color="white">
                    Feedback Board
                </Text>
            </Box>
            <FaBars />
        </Box>

        <Box
            // w={{ base: "full", md: "full", lg: "250px" }}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            gap={6}
            flexDirection={{ md: "row", lg: "column" }}
            w="full"
            lg={{ width: "250px" }}
        >
            {/* Header Card */}
            <Flex
                w="full"
                minH="137px"
                p={6}
                borderRadius="10"
                color="white"
                direction={"column"}
                justifyContent={"end"}
                alignItems={"baseline"}
                bgGradient="to-r"
                gradientFrom="blue"
                gradientTo="primary"
            >
                <Heading as="h1" size="2xl" fontWeight="bold">
                    Frontend Mentor
                </Heading>
                <Text textStyle="sm" opacity={0.75} fontSize="15px" fontWeight="medium">
                    Feedback Board
                </Text>
            </Flex>

            {/* Filter Tags */}
            <Flex w="full" p={6} background="white" borderRadius="lg">
                <HStack wrap="wrap">
                    <Badge
                        bg="blue"
                        _hover={{
                            bg: "blueXs", // Background on hover
                            color: "blue",
                        }}
                        cursor="pointer"
                        borderRadius="10"
                        minW="48px"
                        display="flex"
                        justifyContent="center"
                        fontSize="sm"
                        py="2"
                        fontWeight="semibold"
                    >
                        All
                    </Badge>
                    {["UI", "UX", "Enhancement", "Bug", "Feature"].map((item, index) => (
                        <Badge
                            key={index}
                            bg="lightBlue"
                            _hover={{
                                bg: "blueXs", // Background on hover
                                color: "blue",
                            }}
                            cursor="pointer"
                            borderRadius="10"
                            minW="48px"
                            display="flex"
                            justifyContent="center"
                            fontSize="sm"
                            py="3"
                            fontWeight="semibold"
                            color="blue"
                        >
                            {item}
                        </Badge>
                    ))}
                </HStack>
            </Flex>

            {/* Roadmap Card */}
            <Box w="full" p={6} background="white" borderRadius="lg">
                <Flex justify="space-between" align="center" mb={2}>
                    <Heading size="sm" fontWeight="bold" color="darkBlue">
                        Roadmap
                    </Heading>
                    <Button color="blue" fontWeight="semibold" fontSize="sm" textDecoration="underline">
                        View
                    </Button>
                </Flex>
                <VStack align="stretch">
                    {roadmapData.map((item) => (
                        <Flex key={item.status} justify="space-between" align="center">
                            <HStack>
                                <Box w={2} h={2} borderRadius="full" bg={item.color} />
                                <Text color="mutedBlue" fontSize="16px">
                                    {item.status}
                                </Text>
                            </HStack>
                            <Text fontWeight="bold" color="mutedBlue" fontSize="16px">
                                {item.count}
                            </Text>
                        </Flex>
                    ))}
                </VStack>
            </Box>
        </Box>
    </>
);
