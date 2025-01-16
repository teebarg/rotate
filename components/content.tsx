import React from "react";
import { Box, Button, Flex, Text, VStack, Heading, Icon } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp, FaComment, FaLightbulb } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

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

export const Content = () => (
    <>
        <Box flex={1}>
            {/* Header */}
            <Flex bg="secondary" p={{ base: 3, md: 6 }} borderRadius={{ base: "none", md: "lg" }} mb={4} justify="space-between" color="white">
                <Flex gap={6}>
                    <Box display={{ base: "none", md: "flex" }} alignItems="center" gap={2}>
                        <Icon fontSize="24px">
                            <FaLightbulb />
                        </Icon>
                        <Heading size="lg" fontWeight="bold">
                            6 Suggestions
                        </Heading>
                    </Box>
                    <Flex alignItems="center" justifyContent="center" gap={1} color="lightBlue">
                        <Text fontWeight="normal" textStyle="sm">
                            Sort By:
                        </Text>
                        <Text fontWeight="bold" textStyle="sm">
                            Most Upvotes
                        </Text>
                        <Icon fontSize="8px">
                            <FaChevronDown />
                        </Icon>
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
                    color="white"
                >
                    + Add Feedback
                </Button>
            </Flex>

            {/* Feedback List */}
            <VStack spaceY="4" px={{ base: 4, md: 0 }} pb={4}>
                {feedbackData.map((feedback: FeedbackItem, index: number) => (
                    <Box key={index} w="full" p={10} bg="white" borderRadius="10">
                        <Box gap={{ base: 4, md: 8 }} display={{ base: "grid", md: "flex" }} gridTemplateColumns="repeat(2, 1fr)">
                            <Flex
                                textAlign="center"
                                w="fit-content"
                                p={3}
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
                                    justifyContent={feedback.type === "Feature" ? "flex-end" : feedback.type === "Bug" ? "center" : "flex-start"}
                                >
                                    <FaChevronUp />
                                </Box>
                                <Text fontWeight="bold" color="darkBlue" textStyle="sm">
                                    {feedback.votes}
                                </Text>
                            </Flex>
                            <Box flex={1} color="darkBlue" order={{ base: "1", md: "2" }} style={{ gridColumn: "span 2/ span 2" }}>
                                <Heading size="lg" fontWeight="bold" color="darkBlue">
                                    {feedback.title}
                                </Heading>
                                <Text mb="2" color="mutedBlue" textStyle="md">
                                    {feedback.description}
                                </Text>
                                <Badge key={index}>{feedback.type}</Badge>
                            </Box>
                            <Flex align="center" gap={2} color="darkBlue" order="3" justifyContent="end">
                                <FaComment color="#CDD2EE" />
                                <Text fontWeight="bold" textStyle="md">
                                    {feedback.comments}
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                ))}
            </VStack>
        </Box>
    </>
);
