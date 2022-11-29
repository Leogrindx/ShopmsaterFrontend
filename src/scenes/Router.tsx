import {Routes, Route} from "react-router-dom"
import { routes } from '../config/routes'
import Home from './home/Home'
import Items from './items/items'
import ItemView from './items/itemViev/ItemView'
import Error404 from './error/Error404'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Forgot from './auth/forgotPassword/Forgot'
import Cart from './cart/Cart'
const Routers = () => {
    return (
        <>
        <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path={routes.forgot_password} element={<Forgot/>} />
                <Route path=":type" element={<Items />}/>
                <Route path=":type/:filter" element={<Items />}/>
                <Route path="item/:ean" element={<ItemView />}/>
                <Route path={routes.cart} element={<Cart/>}/>
                <Route path={'*'} element={<Error404/>} />
            </Routes>
        <Footer />
        </>
    )
}

export default Routers;