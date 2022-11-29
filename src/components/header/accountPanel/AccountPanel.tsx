import {FC, useContext} from 'react'
import s from './Account.module.scss'
import g from '../../../Index.module.scss'
import {routes} from '../../../config/routes'
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import {Context} from '../../../index'
import { observer } from 'mobx-react-lite'
const AccountPanel: FC = () => {
    const {auth} = useContext(Context)
    const logout = () =>{
        auth.logout()
    }
    return (
        <>
        <div className={s.login}>
            <img src="/img/login.png" className={s.img_login} alt=""/>
            {auth.isAuth ?
                <div className={classnames(s.panel, s.accountPanel)}>
                    <div className={s.partition_user}></div>
                    <p className={s.black}>zmien hasło</p>
                    <div className={s.partition_user}></div>
                    <button onClick={() => logout()} className={g.button}>wyjście</button>
                </div>
                :
                <div className={classnames(s.panel, s.authPanel)}>
                    <Link to={routes.login}><button className={g.button}>Login</button></Link>
                    <div className={s.block_partition_login}>
                        <div className={s.partition_login}></div>
                        <h5>or</h5>
                        <div className={s.partition_login}></div>
                    </div>
                    <Link to={routes.register}><button className={g.button}>Registration</button></Link>
                </div>
            }
        </div>
        </>
    )
}

export default observer(AccountPanel)