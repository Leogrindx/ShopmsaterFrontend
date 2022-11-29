import {useEffect, useContext} from 'react'
import { Context } from './index'

import Routers from './scenes/Router'
import Login from './scenes/auth/login/Login'
import Register from './scenes/auth/register/Register'
import Error404 from './scenes/error/Error404'
import { routes } from './config/routes'
import s from './Index.module.scss'
import {Routes, Route} from "react-router-dom"
const App = () => {
    const {auth} = useContext(Context)
    useEffect(() => {
        if(localStorage.getItem('token')){
            auth.checkAuth()
        }
    },[])
    return (
        <div className={s.container}>
                <Routes>
                    <Route path={routes.login} element={<Login/>} />
                    <Route path={routes.register}element={<Register/>}/>
                    <Route path="/*" element={<Routers />}/>
                    <Route path={'*'} element={<Error404/>} />
                </Routes>
        </div>
        
    )   
}

export default App