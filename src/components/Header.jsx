import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"4.5"} shadow={"dark-lg"} bgColor={"white"}>
        <Button variant={"ghost"} color={"orange.900"}>
            <Link to = "/">Home</Link>
        </Button>

        <Button variant={"ghost"} color={"orange.900"}>
            <Link to = "/exchanges">Exchanges</Link>
        </Button>

        <Button variant={"ghost"} color={"orange.900"}>
            <Link to = "/coins">Coins</Link>
        </Button>

    </HStack>
  )
}

export default Header