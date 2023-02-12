import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Item from "./components/Item";
import ItemListContainer from "./components/ItemListContainer";
import ImageBack from "./components/ImageBack";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <ImageBack/>

      <Routes>
        <Route exact path="/ItemListContainer" element={<ItemListContainer />} />
        <Route exact path="/Item" element = {<Item/> }/> {/*solo para visualizar, despues se mueve a ItemList*/}
        
      </Routes>
    </BrowserRouter>
  );

}


export default App;
