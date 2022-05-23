import { Route,  Routes } from "react-router-dom";
import Home from "./layouts/client/Home";
import SignIn from "./layouts/client/SignIn";
import Register from "./layouts/client/Register";

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </div>
  );
}

export default App;
