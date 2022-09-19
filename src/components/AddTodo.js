import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react'


function AddTodo({ addTodo, editTodo, editItem }) {


  const toast = useToast()

  const [title, setTitle] = useState('')


  function handleSubmit(e) {
    e.preventDefault();

    if (!title) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    if (!editItem) {
      const todo = {
        id: nanoid(),
        body: title
      }

      addTodo(todo)
      setTitle('')
    } else {
      editTodo(title, editItem[0].id)
    }

  }

  const handleChange = e => {
    setTitle(e.target.value)
  }



  useEffect(() => {
    if (editItem) {
      setTitle(editItem[0].body)
      console.log("Anyád", editItem)
    } else {
      setTitle('')
    }
  }, [editItem])


  return (
    <form onSubmit={handleSubmit}>

      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add Something"
          value={title}
          onChange={handleChange}
        />
        <Button
          bgColor={"#E94B3CFF"}
          px="8"
          type='submit'>
          {editItem ? 'Edit Todo' : 'Add Todo'}
        </Button>
      </HStack>

    </form>
  )
}

export default AddTodo