import React from 'react'
import { Text, HStack, VStack, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function TodoList({ todos, deleteTodo, findTodo }) {


    if (!todos.length) {
        return (
            <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
                No Todos, yay!!!
            </Badge>
        );
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            maxW={{ base: "90vw", sm: "80vw", lg: "50vm", xl: "40vw" }}
            alignItems="stretch"
        >
            {todos.map(todo => (
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton
                        icon={<FaEdit />}
                        isRound="true"
                        onClick={() => findTodo(todo.id)} 
                        />
                    <IconButton
                        icon={<FaTrash />}
                        isRound="true"
                        onClick={() => deleteTodo(todo.id)} 
                        />
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList