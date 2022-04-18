import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home/Home";
import Checkout from "./Pages/Home/Services/Checkout/Checkout";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SignIn from "./Pages/Login/SignIn/SignIn";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/Notfound/NotFound";
import RedirectToHome from "./RedirectToHome/RedirectToHome";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<RedirectToHome />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
