import { useState } from "react";
import { Button} from '@chakra-ui/react';

const ItemCount = () => {

    const [suma, setSuma] = useState(0);

    const onAdd = () => {
        setSuma(suma + 1);
    }

    const restar = () => {
        setSuma (suma - 1);
    }

    return (
    <>
        <p>{suma}</p>
        <Button colorScheme='blue' onClick={onAdd}>+</Button>
        <Button colorScheme='blue' onClick={restar}>-</Button>
        <Button colorScheme='blue' onClick={() => setSuma(0)}>Vaciar</Button>

    </>
    )
}

export default ItemCount