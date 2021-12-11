import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/NavBar/NavBar";
import Stickers from './Pages/Stickers';
import Detalles from './Pages/Detalles';
import Categorias from './Pages/Categorias';
import { DarkContextProvider } from './Contexts/DarkContext';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <DarkContextProvider>
        <NavBar/>
        <Switch>

          <Route exact path="/aeStickersFREE/detalles/:id">
            <Detalles/>
          </Route>

          <Route exact path="/aeStickersFREE/categoria/:ctg">
            <Categorias/>
          </Route>

          <Route exact path="/aeStickersFREE/">
            <Stickers/>
          </Route>

        </Switch>
        <Footer/>
      </DarkContextProvider>
    </BrowserRouter>
  );

};

export default App;