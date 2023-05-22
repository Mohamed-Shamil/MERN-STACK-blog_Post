import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LodignSpinners from "../Components/loginSpinners/lodignSpinners";

const UserSignup = lazy(() => import("../Pages/User/signUpPage"));
const LandingPage = lazy(() => import("../Pages/User/LandingPage"));
const LoginPage = lazy(() => import("../Pages/User/loginPage"));
const HomePage = lazy(() => import("../Pages/User/feed"));
const AddPost = lazy(()=> import("../Pages/User/addPost"))
const Preview = lazy(()=> import("../Pages/User/preview"))

function UserRouter() {
  return (
    <div>
      {/*SignUp page  */}
      <Routes>
        <Route
          exact
          path="/signup"
          element={
            <Suspense fallback={<LodignSpinners />}>
              <UserSignup />
            </Suspense>
          }
        >
          {" "}
        </Route>
      </Routes>
      {/* Landing Page */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<LodignSpinners />}>
              <LandingPage />
            </Suspense>
          }
        ></Route>
      </Routes>

      {/* //Login page */}
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <Suspense fallback={<LodignSpinners />}>
              <LoginPage />
            </Suspense>
          }
        ></Route>
      </Routes>

      {/* Feed Page */}
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<LodignSpinners />}>
              <HomePage />
            </Suspense>
          }
        ></Route>
      </Routes>

      {/* Post Creaing Page */}
      <Routes>
        <Route
          exact
          path="/addPost"
          element={
            <Suspense fallback={<LodignSpinners />}>
              <AddPost />
            </Suspense>
          }
        ></Route>
      </Routes>

      {/* Post Preview Page */}
      <Routes>
        <Route
          exact
          path="/preview"
          element={
            <Suspense fallback={<LodignSpinners />}>
              <Preview />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default UserRouter;
