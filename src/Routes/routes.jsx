import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Home: Subimos um nível (../) para sair de 'Routes' e entrar em 'pages'
import Home from "../pages/Home";

// 2. Cadastro: Note o 'C' maiúsculo em 'Cadastros' e o '../' para subir de nível
import Cadastro from "../Cds/Cadastros";

// 3. Vinculação: Ela está dentro de 'assets', então o caminho é mais longo
import Vinculacao from "../assets/pagesVincular/vinculacao/vinculacao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/vinculacao" element={<Vinculacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
