import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import ShoppingCart from "./pages/ShoppingCart";
// import ProductsContextProvider from "./context/ProductsContextProvider";
import Products from "./pages/Products";
// import CartContextProvider from "./context/CartContextProvider";
import Layout from "./layout/Layout";

function App() {
  return (
    //  <CartContextProvider>
    // <ProductsContextProvider>
    <Layout>
      <Routes>
        <Route index path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Layout>
    // </ProductsContextProvider>
    //  </CartContextProvider>
  );
}

export default App;
