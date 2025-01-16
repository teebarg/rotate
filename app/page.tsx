"use client";

import React from "react";
import { Badge, Box, Button, Container, Flex, Text, VStack, HStack, Heading } from "@chakra-ui/react";
import { FaBars, FaChevronDown, FaChevronUp, FaComment, FaLightbulb, FaPlus } from "react-icons/fa";

interface FeedbackItem {
    id: number;
    votes: number;
    title: string;
    description: string;
    type: string;
    comments: number;
}

const feedbackData: FeedbackItem[] = [
    {
        id: 112,
        title: "Add tags for solutions",
        description: "Easier to search for solutions based on a specific stack.",
        type: "Enhancement",
        comments: 2,
        votes: 112,
    },
    {
        id: 99,
        title: "Add a dark theme option",
        description: "It would help people with light sensitivities and who prefer dark mode.",
        type: "Feature",
        comments: 4,
        votes: 112,
    },
    {
        id: 65,
        title: "Q&A within the challenge hubs",
        description: "Challenge-specific Q&A would make for easy reference.",
        type: "Feature",
        comments: 1,
        votes: 112,
    },
    {
        id: 51,
        title: "Allow image/video upload to feedback",
        description: "Images and screencast can enhance comments on solutions.",
        type: "Enhancement",
        comments: 2,
        votes: 112,
    },
    {
        id: 42,
        title: "Ability to follow others",
        description: "Stay updated on comments and solutions other people post.",
        type: "Feature",
        comments: 3,
        votes: 112,
    },
    {
        id: 3,
        title: "Preview images not loading",
        description: "Challenge preview images are missing when you apply a filter.",
        type: "Bug",
        comments: 0,
        votes: 112,
    },
];

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

export default function Home() {
    return (
        <Flex bg="softPurple" direction="column">
            <Container py={{ base: 0, md: 8 }} px={{ base: 0, md: 8 }}>
                <Flex gap={{ base: 0, md: 6 }} flexDirection={{ base: "column", lg: "row" }} w="full">
                    {/* Left Sidebar */}
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

                    {/* Main Content */}
                    <Box flex={1}>
                        {/* Header */}
                        <Flex
                            bg="secondary"
                            p={6}
                            borderRadius={{ base: "none", md: "lg" }}
                            mb={4}
                            justify="space-between"
                            align="center"
                            color="white"
                        >
                            <Flex alignItems="center" gap={4}>
                                <Box display={{ base: "none", md: "flex" }} alignItems="center" gap={2}>
                                    <FaLightbulb width={6} height={6} />
                                    <Heading size="md" fontWeight="bold">
                                        6 Suggestions
                                    </Heading>
                                </Box>
                                <Flex alignItems="center" justifyContent="center" gap={1} color="lightBlue" fontSize="sm">
                                    <Text fontWeight="normal">Sort By:</Text>
                                    <Text fontWeight="bold">Most Upvotes</Text>
                                    <FaChevronDown />
                                </Flex>
                            </Flex>

                            <Button
                                bg="primary"
                                size={"md"}
                                _hover={{
                                    bg: "#C75AF6",
                                }}
                                px={6}
                                py={4}
                                fontWeight="bold"
                                borderRadius="10"
                            >
                                <FaPlus /> Add Feedback
                            </Button>
                        </Flex>

                        {/* Feedback List */}
                        <VStack spaceY="4" px={{ base: 4, md: 0 }} pb={4}>
                            {feedbackData.map((feedback) => (
                                <Box key={feedback.id} w="full" p={10} bg="white" borderRadius="10">
                                    <Box gap={{ base: 4, md: 8 }} display={{ base: "grid", md: "flex" }} gridTemplateColumns="repeat(2, 1fr)">
                                        <Flex
                                            textAlign="center"
                                            w="fit-content"
                                            py={3}
                                            px={3}
                                            bg="lightBlue"
                                            _hover={{ bg: "blueXs" }}
                                            borderRadius="10"
                                            direction={{ base: "row", md: "column" }}
                                            order={{ base: "2", md: "1" }}
                                            alignSelf="baseline"
                                        >
                                            <Box
                                                color="blue"
                                                w="full"
                                                display="flex"
                                                justifyContent={
                                                    feedback.type === "Feature" ? "flex-end" : feedback.type === "Bug" ? "center" : "flex-start"
                                                }
                                            >
                                                <FaChevronUp />
                                            </Box>
                                            <Text fontWeight="bold" color="darkBlue" fontSize="13px">
                                                {feedback.votes}
                                            </Text>
                                        </Flex>
                                        <Box flex={1} color="darkBlue" order={{ base: "1", md: "2" }} style={{ gridColumn: "span 2/ span 2" }}>
                                            <Heading size="xl" mb={1} fontWeight="bold" color="darkBlue">
                                                {feedback.title}
                                            </Heading>
                                            <Text mb={2} color="mutedBlue" fontSize="16px">
                                                {feedback.description}
                                            </Text>
                                            <Badge mb={2} bg="lightBlue" color="blue" _hover={{ bg: "blueXs" }} py={3} px={4} fontWeight="semibold">
                                                {feedback.type}
                                            </Badge>
                                        </Box>
                                        <Flex align="center" gap={2} color="darkBlue" order="3" justifyContent="end">
                                            <FaComment color="#CDD2EE" />
                                            <Text fontWeight="bold">{feedback.comments}</Text>
                                        </Flex>
                                    </Box>
                                </Box>
                            ))}
                        </VStack>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    );
}
