import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Home from '../Components/Home/Home';
import Menu from '../Components/Menu/Menu';
import Orders from '../Components/Orders/Orders';

const AppRouter = () => {
    return (
        <section className="allPage">
            <BrowserRouter>
                <Navbar />
                <Header />
                <div className="body">
                    <Routes>
                        <Route exact path={"/"} element={<Home />} />
                        <Route exact path={"/Menu"} element={<Menu />} />
                        <Route exact path={"/Orders"} element={<Orders />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </section>

    )
}
export default AppRouter;