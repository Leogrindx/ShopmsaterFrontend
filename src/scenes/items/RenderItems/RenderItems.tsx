import {FC, useContext, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import s from './RenderItems.module.scss'
import {observer} from 'mobx-react-lite'
import {Context} from '../../../index'

const RenderItems: FC = () => {
    let {type, filter} = useParams()

    const {items} = useContext(Context)
    useEffect(() => {
        items.route(type!)
    },[type])
    useEffect(() => {
        if(filter) items.filter(`/${type}/${filter}`)
    },[filter])

    return (
        <>
        <div className={s.view_items}>
        {items.items.length !== 0 ? items.items.map((e,i) => 
            <div className={s.view_item} key={i}>
                <div>
                    <button type="submit" className={s.basket_item}>
                        <img src="/img/basket.png"alt="basket" />
                    </button>
                </div>
                <Link to={`/item/${e.ean}`}>
                    <div className={s.item}>
                        <div className={s.pointer}>
                            <div className={s.img}>
                            <div className={s.articl_items}>
                                <img className={s.img} src={e.img.filter(e => e.search('front') > -1)[0]} 
                                alt="item"/>
                                <div className={s.btn_item}>przejdź</div>
                            </div>
                            <div className={s.add_item_in_basket}></div>

                            </div>
                            <div className={s.item_text}>
                                <div className={s.item_name}>
                                    <div className={s.brand}>
                                        <p>{e.brand}</p>
                                    </div>
                                    <div className={s.name}>
                                        <p>{e.name}</p>
                                    </div>
                                </div>
                                <div className={s.item_price}>
                                    <p>{e.price},</p>
                                    <p>{e.cent ? e.cent : '00'}</p>
                                    <p className={s.currency}>zl</p>
                                </div>
                            </div>
                            <div className={s.item_size}>
                                <p>size:</p>{e.size.map(e => `${e}, `)}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            ): 
            <div className={s.notItems}>
                <h1>There is no such product</h1>
            </div> 
            }
        </div>
        </>
    
    )
}

export default observer(RenderItems)