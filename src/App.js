import React, { useState } from 'react'
import { Box, Button, HStack, VStack, Stack, Grid, Flex } from '@chakra-ui/react'
import uuid from 'react-uuid'
import {CloseIcon} from '@chakra-ui/icons'

const App = () => {

  const [cards, setCards] = useState([])

  const create = () => {
    const newCard = {id: uuid(), num: Math.floor(Math.random()*1000)}
    setCards([...cards, newCard]) 
  }

  const onDelete = (id) => {
    const filteredCards = cards.filter((item) => item.id !== id)
    setCards(filteredCards)
  }

  const onSort = () => {
    const sorted = cards.sort((a, b) => a.num - b.num)
    setCards([...sorted])
  }
  
  return (
    <Stack direction="row" spacing="5">
    <Box ml="30px" minW="65rem">
      <HStack spacing="5" 
      borderBottom='1px solid black' 
      pb="10px" pt="10px">
   <Button onClick={() => create()}>
   Add Card
   </Button>
   <Button onClick={() => onSort()}>
   Sort Card
   </Button>
   </HStack>
   <Box mx="50px" h="80vh"
   overflowY="scroll">
   <Grid templateColumns='repeat(2, 1fr)'
   gap={5} pt="20px">
   {cards.map((item) => 
   <Box border="1px solid grey" w="300px">
     <Box float="right" m="5px"
     onClick={() => onDelete(item.id)}>
     <CloseIcon/>
     </Box>
   <Flex h="200px"
    alignItems="center" 
    justifyContent="center">
     <Box fontWeight="bold">{item.num}</Box>
     </Flex>
     </Box>)}
      </Grid>
      </Box>
   </Box>
   <Flex 
   borderLeft="1px solid grey" h="100vh"
   justifyContent="center"
    alignItems="center">
   <Box m="4px" fontWeight="bold">
     Press the "Add Card" button to add the new Card.
     Use the "Sort Cards" button to sort the Cards by the Increase.
     Press an X icon on the top right to delete them.
   </Box>
   </Flex>
   </Stack>
  )
}

export default App