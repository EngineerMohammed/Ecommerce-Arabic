import HomePage from "./Components/Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Components/Pages/Auth/LoginPage";
import RegisterPage from "./Components/Pages/Auth/RegisterPage";
import AllCategoryPage from "./Components/Pages/Catogery/AllCategoryPage";
// boot strap library

import AllBrandPage from "./Components/Pages/Brand/AllBrandPage";
import ShopProductPage from "./Components/Pages/Product/ShopProductPage";
function App() {
  return (
    <div className="App font-sans font-semibold">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
