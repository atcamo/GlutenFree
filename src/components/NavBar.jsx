import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading, Link, Text, Menu,  MenuButton,  MenuList,  MenuItem,  Button,} from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons";



const NavBar = ()=>{

  return(
    <>
      <Container  bg="#5e4c41" maxW="100%">
          <Flex  gap='24px' justifyContent='space-around'>


          <Box pl="20" color="black" w="150px" mt="65px" fontSize={20}>
            <Menu>
              <Link to={"/catalogue"}>
                  <MenuButton
                    as={Button}
                    size="lg"
                    variant="outline"
                    colorScheme="blue"
                    m="5"
                  >
                    Catalogue
                  </MenuButton>
                </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5">
                Categories
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"MTB"}`}>
                  <MenuItem>MTB</MenuItem>
                </Link>
                <Link to={`/category/${"Route"}`}>
                  <MenuItem>Route</MenuItem>
                </Link>
                <Link to={`/category/${"BMX"}`}>
                  <MenuItem>BMX</MenuItem>
                </Link>
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