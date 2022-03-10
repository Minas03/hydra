import { useEffect, useState } from 'react'
import Card from './Card'
import { Input, Flex, Text, Stack, VStack, HStack, } from '@chakra-ui/react'

const pictures = [
  { name: 'Iron Man', src: '/photos/iron.jpg' },
  { name: 'Iron Man 2', src: '/photos/iron2.jpg' },
  { name: 'Iron Man 3', src: '/photos/iron3.jpg' },
  { name: 'Man of Steel', src: '/photos/steel.jpg' },
];

const Header = () => {

const [pics, setPics] = useState([]);

  useEffect(() => {
    setPics(pictures);
  }, [pictures]);

  return(
    <Flex direction="column">
      <VStack>
        <Text fontSize="5xl" backgroundColor="#4A5568" color="white">Hooked</Text>
          <Input placeholder='Search' maxW="300px" 
           onChange={event =>
           setPics(
           pictures?.filter(item => item.name.includes(event.target.value))
           )
          }/> 
        <Text fontSize="2xl">Sharing a few of our favourite movies</Text> 
      </VStack> 
       <Flex alignItems="center" justifyContent="center">
           <HStack spacing={10}>
             {pics?.map((item, disp) => (
             <Card values={item} />
             ))} 
           </HStack>
       </Flex>
    </Flex>
  )
}

export default Header;