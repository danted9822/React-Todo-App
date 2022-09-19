import { Heading, Stack, HStack, VStack, IconButton } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useEffect, useState } from 'react';


function App() {

  const initailTodos = [
    {
      id: 1,
      body: 'Something',
    },
    {
      id: 2,
      body: 'Do something',
    }

  ]

  const [todos, setTodos] = useState(initailTodos);

  function deleteTodo(id) {

    const newTodos = todos.filter(todo => {

      return todo.id !== id;

    } )
      setTodos(newTodos)
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }


  return (
    <VStack p={4}>
      <IconButton
        icon={<MdLightMode />}
        isRound="true"
        size="lg"
        alignSelf={'flex-end'} />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, #2D2926FF, #E94B3CFF)"
        bgClip="text">
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
