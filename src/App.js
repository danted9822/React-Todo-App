import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useEffect, useState } from 'react';


function App() {


  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

  const [editItem, setEditItem] = useState(null)

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    document.title = "hpeter-todo-app";
  }, []);

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])



  function deleteTodo(id) {

    const newTodos = todos.filter(todo => {

      return todo.id !== id;

    })
    setTodos(newTodos)
  }



  function addTodo(todo) {
    setTodos([...todos, todo]);
  }



  function findTodo(id) {
    const currentTodo = todos.filter((todo) => todo.id === id);

    console.log("BAZD MEG", currentTodo);

    setEditItem(currentTodo);
  }


  const editTodo = (body, id) => {
    const newTodo = todos.map(task => (task.id === id ? { body, id } : task))

    console.log(newTodo)

    setTodos(newTodo)
    setEditItem(null)
  }




  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? < MdLightMode /> : <MdDarkMode />}
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
      <TodoList todos={todos} deleteTodo={deleteTodo} findTodo={findTodo} />
      <AddTodo addTodo={addTodo} editTodo={editTodo} editItem={editItem} />
    </VStack>
  );
}

export default App;
