import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading, Link, Text, Menu,  MenuButton,  MenuList,  MenuItem,  Button,} from '@chakra-ui/react';



const NavBar = ()=>{

  return(
    <>
      <Container  bg="#5e4c41" maxW="100%">
          <Flex  gap='24px' justifyContent='space-around'>


          <Box pl="20" color="black" w="150px" mt="65px" fontSize={20}>
            <Menu>
              <MenuButton>Productos</MenuButton>
              <MenuList>
                <MenuItem as='a' href='#'>Harinas</MenuItem>
                <MenuItem as='a' href='#'>Harinas tostadas</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Spacer/>

          <Box  color="white" w="330" p='1' rounded='250' >
            <Text  p="0" fontSize={80} textShadow='1px 1px #ff0000' m='1' fontFamily={'Sassy Frass, cursive'}>Titi Gluten free</Text>
          </Box>

          <Spacer/>          
          
          <Box  color="black" w="300px" mt="65px" fontSize={20}> {/* color despues de personalizar el menu #fcf1d0*/ }
            <Link>Quienes Somos</Link>
          </Box>

          <Spacer/>


          <Box p="2" color="white" mt="50px" >
            <CartWidget/>
          </Box>

        </Flex>
      </Container>
    </>
  );
};

export default NavBar;