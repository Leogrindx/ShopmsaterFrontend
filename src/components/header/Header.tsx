import {FC} from 'react'
import {Link, useNavigate, NavLink} from 'react-router-dom'
import {routes} from '../../config/routes'
import s from './Header.module.scss'
import Search from './search/Search'
import AccountPanel from './accountPanel/AccountPanel'
const Header: FC = () =>{
    console.log('HeaderRender')
    return(
        <div className={s.header}>
            <div className={s.navBar}>
                <NavLink to={routes.man} className={({ isActive }) => isActive ? s.linkActive : s.linkNotActive}>man</NavLink>
                <NavLink to={routes.woman} className={({ isActive }) => isActive ? s.linkActive : s.linkNotActive}>woman</NavLink>
                <NavLink to={routes.baby} className={({ isActive }) => isActive ? s.linkActive : s.linkNotActive}>baby</NavLink>
            </div>

            <div className={s.logo} id="logo">
                <Link to={routes.home}><img src="/img/logo.png" width="200" alt="Logo"/></Link>
            </div>
            <Search />
            <div className={s.block_user}>
                <AccountPanel />
                <div className={s.cart}>
                <Link to={routes.cart}>
                    <div className={s.number_item_cart} id="number_item_cart"></div>
                    <img className={s.basket_img_login} src="/img/basket.png" alt="cart"/>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Header