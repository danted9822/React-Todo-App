import { Heading, Stack, HStack, VStack, IconButton, useColorMode } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useEffect, useState } from 'react';


function App() {


  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])



  function deleteTodo(id) {

    const newTodos = todos.filter(todo => {

      return todo.id !== id;

    } )
      setTodos(newTodos)
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const {colorMode, toggleColorMode } = useColorMode();


  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? < MdLightMode /> : <MdDarkMode/>}
        isRound="true"
        size="lg"
        alignSelf={'flex-end'}
        onClick={toggleColorMode} />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, #FDD20EFF, #E94B3CFF)"
        bgClip="text">
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
