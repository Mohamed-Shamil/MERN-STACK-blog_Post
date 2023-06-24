import { BrowserRouter } from "react-router-dom";
import UserRouter from "./Routes/userRouter";
import AdminRouter from './Routes/adminRouter'

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserRouter />
        <AdminRouter/>
      </BrowserRouter>
    </>
  );
}

export default App;
