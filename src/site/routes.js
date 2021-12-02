import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Pag1 from "./Pag1";
import Pag2 from "./Pag2";
import Pag3 from "./Pag3";
import Pag4 from "./Pag4";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Pag1 }  path="/" exact />
           <Route component = { Pag2 }  path="/Pag2" />
           <Route component = { Pag3 }  path="/Pag3" />
           <Route component = { Pag4 }  path="/Pag4" />
       </BrowserRouter>
   );
}
export default Routes;