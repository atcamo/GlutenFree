import Item from "./Item";
import { Container } from "@chakra-ui/react";


const ItemList = ({ harinas }) => {
    return (
    <>
        <Container maxW="container.sm">
        {harinas?.map((harina) => (
            <Item
            key={harina.id}
            id={harina.id}
            name={harina.name}
            description={harina.description}
            price={harina.price}
            stock={harina.stock}
            category={harina.category}
            />
        ))}
        </Container>
    </>
    );
};

export default ItemList;