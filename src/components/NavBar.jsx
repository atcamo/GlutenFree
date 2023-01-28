import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading, Link } from '@chakra-ui/react';

const NavBar = ()=>{
  return(
    <>
      <Container maxW="100rem" bg="#5e4c41" color="red">
        <Flex alignItems="center" gap-="2">

          <Box p="2" color="#fcf1d0">
            <Link>Harinas</Link>
          </Box>

          <Spacer/>

          <Box p="2" color="#fcf1d0">
            <Link>Cereales</Link>
          </Box>

          <Spacer/>

          <Box p="2" color="white">
            <Heading size="md"  fontSize='50px' >Titi Gluten free</Heading>
          </Box>

          <Spacer/>          
          
          <Box p="2" color="#fcf1d0">
            <Link>Harinas tostadas</Link>
          </Box>

          <Spacer/>

          <Box p="2" color="#fcf1d0">
            <Link>Harinas mezclas</Link>
          </Box>

          <Spacer/>



          <Box p="2" color="white">
            <CartWidget/>
          </Box>

        </Flex>
      </Container>
    </>
  );
};

export default NavBar;