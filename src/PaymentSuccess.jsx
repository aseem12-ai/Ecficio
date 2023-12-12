import React from 'react'
import { Box,Heading,VStack,Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'




function PaymentSuccess() {

const searchQuery=useSearchParams()[0]

const referenceNum=searchQuery.get("reference")



  return (
    <Box>

      <VStack h="100vh" justifyContent={"center"}>

        <Heading textTransform={"uppercase"}>order Successful</Heading>
        <Text>
          Reference No:{referenceNum}
        </Text>
      </VStack>

    </Box>
  )
}

export default PaymentSuccess