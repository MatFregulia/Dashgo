import Link from "next/link";
import { Box, Flex, Button, Heading, Icon, Table, Thead, Tr, Th, Checkbox, Td, Tbody, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { useQuery } from 'react-query'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useEffect } from "react";

export default function UserLIst() {
    const { data, isLoading, error } = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()

        return data;
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Link href="/users/create" passHref>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="26" />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter os dados do usuário</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        { isWideVersion && <Th>Data de cadastro</Th> }
                                        <Th width="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td px={["4", "4", "6"]}>
                                            <Checkbox colorScheme="pink" />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">Matheus Fregulia</Text>
                                                <Text fontSize="sm" color="gray.300">mat.fregulia@gmail.com</Text>
                                            </Box>
                                        </Td>
                                        { isWideVersion && <Td>08 de Março, 2022</Td> }
                                        {/* <Td>
                                            <Button 
                                                as="a" 
                                                size="sm" 
                                                fontSize="sm" 
                                                colorScheme="purple"
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                            >
                                                { isWideVersion && Editar }
                                            </Button>
                                        </Td> */}
                                    </Tr>
                                </Tbody>
                            </Table>

                            <Pagination />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}