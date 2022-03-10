import React from 'react'
import { Box, Flex, Stack, Image, Text, Heading } from '@chakra-ui/react'

const Card = ({values}) => {
  return(
   <Box pt="50px">
     <Flex alignItems="center" justifyContent="center">
       <Stack spacing={10}>
         <Box>
           <Heading size='lg'>{values.name}</Heading>
           <Image src={values.src} w="250px" h="400px"/>
           <Text>(2008)</Text>
         </Box>
       </Stack>
     </Flex>
   </Box>
  )
}

export default Card;