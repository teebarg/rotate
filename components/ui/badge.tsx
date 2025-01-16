import React from "react";
import { Badge as ChakraBadge } from "@chakra-ui/react";

interface BadgeProps {
    children: React.ReactNode;
    isActive?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ children, isActive = false }) => {
    return (
        <React.Fragment>
            <ChakraBadge
                bg={isActive ? "blue" : "lightBlue"}
                _hover={{
                    bg: "blueXs",
                    color: "blue",
                }}
                cursor="pointer"
                borderRadius="10"
                fontSize="sm"
                py={2.5}
                px={4}
                fontWeight="semibold"
                color={isActive ? "white" : "blue"}
            >
                {children}
            </ChakraBadge>
        </React.Fragment>
    );
};

export { Badge };
