import { Button, HStack, Input } from '@chakra-ui/react'
import { nanoid } from 'nanoid';
import React, { useState } from 'react'



function AddTodo({ addTodo }) {

  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      body: content
    }

    addTodo(todo)

  }

  const [content, setContent] = useState("")

  return (
    <form onSubmit={handleSubmit}>

      <HStack mt="8">
        <Input variant="filled"
          placeholder="Add Something"
          value={content}
          onChange={(e) => setContent(e.target.value)} />
        <Button
          bgColor={"#E94B3CFF"}
          px="8"
          type='submit'>
          Add Todo
        </Button>
      </HStack>

    </form>
  )
}

export default AddTodo