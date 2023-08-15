import Home from "./components/Home";
import Tedamoslabienvenida from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/tedamoslabienvenida";
import Queeseldesarrolloweb from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/queeseldesarrolloweb";
import Principiosbasicosdeldesarrolloweb from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/principiosbasicosdeldesarrolloweb";
import Editoresdecodigo from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/editoresdecodigo";
import Estructuradelhtml from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/estructuradelhtml";
import Desafiodeldia from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/desafiodeldia";
import Resoluciondeldesafio from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/resoluciondeldesafio";
import Validatusconocimientos from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/validatusconocimientos";
import Mapadeconceptosvistosyencuestafinal from "./pages/testingautomation/introduccionaldesarrolloweb/introduccionaldesarrollowebhtml/mapadeconceptosvistosyencuestafinal";

const routeConfig = [
  { path: "/home", component: Home },
  { path: "/tedamoslabienvenida", component: Tedamoslabienvenida },
  { path: "/queeseldesarrolloweb", component: Queeseldesarrolloweb },
  {
    path: "/principiosbasicosdeldesarrolloweb",
    component: Principiosbasicosdeldesarrolloweb,
  },
  { path: "/editoresdecodigo", component: Editoresdecodigo },
  { path: "/estructuradelhtml", component: Estructuradelhtml },
  { path: "/desafiodeldia", component: Desafiodeldia },
  { path: "/resoluciondeldesafio", component: Resoluciondeldesafio },
  { path: "/validatusconocimientos", component: Validatusconocimientos },
  {
    path: "/mapadeconceptosvistosyencuestafinal",
    component: Mapadeconceptosvistosyencuestafinal,
  },
];

export default routeConfig;
