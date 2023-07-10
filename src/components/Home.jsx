import { Box, Image, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bg from '../assets/1.jpg'
import bg1 from '../assets/2.jpg'
import bg2 from '../assets/3.jpg'
import bg3 from '../assets/4.jpg'
import bg4 from '../assets/5.jpg'


const Home = () => {
  return (
    <Box>
        <VStack>
            <MyCarousel/>
        </VStack>

    </Box>
  )
}

const MyCarousel = () => {
  return <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box h={"100vh"}>
      <Text pos={'absolute'} top={"50%"} left={"50%"} margin={"auto"}>Welcome to the world</Text>
      <Image src={bg} objectFit={'cover'}/>
    </Box>
    <Box h={"100vh"}>
      <Image src={bg1} objectFit={'cover'}/>
    </Box>
    <Box h={"100vh"}>
      <Image src={bg2} objectFit={'cover'}/>
    </Box>
    <Box h={"100vh"}>
      <Image src={bg3} objectFit={'cover'}/>
    </Box>
    <Box h={"100vh"}>
      <Image src={bg4} objectFit={'cover'}/>
    </Box>
  </Carousel>
}

export default Home