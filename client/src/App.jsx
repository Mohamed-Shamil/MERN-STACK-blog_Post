import { BrowserRouter } from "react-router-dom";
import UserRouter from "./Routes/userRouter";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
