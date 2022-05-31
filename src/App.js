import { Route, Routes } from "react-router-dom";
import Home from "./pages/client/Home";
import SignIn from "./pages/client/SignIn";
import Register from "./pages/client/Register";
import New from "./pages/client/New";
import TopSeller from "./pages/client/TopSeller";
import Error from "./pages/Error";
import Basket from "./pages/client/Basket";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import AOS from 'aos'
import 'aos/dist/aos.css';
import ShowProduct from "./pages/client/ShowProduct";
AOS.init();


function App() {
  // let { id } = useParams();
  
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/new-products" element={<New />} />
        <Route path="/top-seller" element={<TopSeller />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<Basket />} />
        <Route path="/show-product/:id" element = {<ShowProduct/>}/>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
