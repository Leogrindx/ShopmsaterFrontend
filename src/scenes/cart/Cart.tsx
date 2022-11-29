import {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import {Context} from '../../index'
import {observer} from 'mobx-react-lite'
import s from './Cart.module.scss'
import g from '../../Index.module.scss'
import ImageCheck from '../../components/imageCheck/ImageCheck'
import classNames from 'classnames'
const Cart = () => {
    const {auth} = useContext(Context)
    return (
    <>
    {auth.isAuth === false &&
        <Navigate to="/" />}
        {auth.isAuth ?
        <div className={classNames(g.flex_row, s.between)}>
            <div className={s.cart_items}>
                <div className={classNames(s.cart_item, g.flex_row)} id={'id'}>
                <label className={classNames(s.cursor_pointer, g.flex_row)} htmlFor={'id'}>
                    <div className={classNames(s.block_cart1, g.flex_row)}>
                    <div className={s.img_cart}><img src={`/img/woman/shoes/000000000001/15f95bc98102e7.webp`} alt="item"/></div>
                    <div className={s.brand}>
                        <p>{'brand'}</p>
                    </div>
                    <div className={s.name_cart}>
                        <p>{'Name'}</p>
                    </div>
                    </div>
                </label>

                <div className={classNames(s.block_cart2, g.flex_row)}>
                <label className={classNames(s.cursor_pointer, g.flex_row)} htmlFor={'id'}>
                    <div className={s.size_item}>
                    <p><span className={s.span}>roz:</span>L</p>
                    </div>
                    <div className={s.price_cart}>
                    <p>400 zł</p>
                    </div>
                </label>
                    <div className={s.number_cart}>
                    <select name={`size`} className={s.select_cart}>
                        <option value="l">L</option>
                    </select>
                    </div>
                    
                    <div className={s.delete_cart}>
                        <img src="/img/quit.png" alt="delete" />
                    </div>
                </div>
                </div>
            </div>
            <div className={s.sale}>
                <div className={s.discount}>
                    <div>
                        <p id="text">Yuo have coupon?</p>
                        <img className={s.img} id="arrow" src="/img/black-left-arrow.png" alt="" />
                    </div>
                    <div className={s.disabled} id="switch">
                        <input className={classNames(g.input, s.margin)} type="text" name="discount" id="" placeholder="Wpisz" size={10} />
                        <div>
                            <button className={classNames(g.button, s.margin)}>Activate</button>
                        </div>
                    </div>
                </div>
                <div className={classNames(g.flex, s.total_price)}>
                    <p>total price:</p>
                    <h1 id="total_price">400 zł</h1>
                    <div className={classNames(s.purchass)}><button className={classNames(g.button, s.margin)}>kupuj i plac</button></div>
                </div>
            </div>
        </div>        
        :
        <div className={s.cart_empty}>
            <div className={s.title}>
                <h1>Cart empty</h1>
                <h3>Choose item</h3>
            </div>
            <ImageCheck />
        </div>
        }
    </>
    )
}

export default observer(Cart)