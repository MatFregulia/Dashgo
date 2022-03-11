import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Matheus Fregulia</Text>
                <Text color="gray.300" fontSize="small">
                    mat.fregulia@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Matheus Fregulia" src="https://github.com/MatFregulia.png" />
        </Flex>
    );
}