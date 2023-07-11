import { Box, Image, VStack, Heading, Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg from "../assets/1.jpg";
import bg1 from "../assets/2.jpg";
import bg2 from "../assets/3.jpg";
import bg3 from "../assets/4.jpg";
import bg4 from "../assets/5.jpg";
import img5 from "../assets/Pikachu.svg";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransfrom: "uppercase",
  size: "3xl",
  p: "2",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container 
        minH={"100vh"} 
        maxW={"container.xl"} 
        p={"16"}
      >
          <Heading 
            textTransform={"uppercase"}
            py={"2"}
            w={"fit-content"}
            borderBottom={"2px solid"}
            margin={"auto"}
            >
            Services</Heading>

            <Stack 
              h={'full'}
              p={"4"}
              direction={["column","row"]}
              alignItems={'center'}
            >

            <Image src={img5} />

            </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={"full"} h={"100vh"}>
        <Image src={bg} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Welcome to the world
        </Heading>
      </Box>
      <Box h={"100vh"}>
        <Image src={bg1} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Future is gaming
        </Heading>
      </Box>
      <Box h={"100vh"}>
        <Image src={bg2} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Get Started with VR
        </Heading>
      </Box>
      <Box h={"100vh"}>
        <Image src={bg3} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Welcome to Robotics
        </Heading>
      </Box>
      <Box h={"100vh"}>
        <Image src={bg4} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Welcome to the world
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
