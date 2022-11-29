import {FC, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import s from './ItemView.module.scss'
import classnames from 'classnames'
import axios from 'axios'
import {API_URL} from '../../../http/Htttp'
import {ItemResponse} from '../../../models/ItemResponse'
import LogicItem from './Logic'
const Item: FC = () => {
    const {ean} = useParams()
    const [item, setItem] = useState<ItemResponse[]>([])
    const [slider, setSlider] = useState(0)
    const result = async () =>{
        const res = await axios.get(`${API_URL}/item/${ean}`)
        setItem(res.data)
    }
    useEffect(() => {
        result()
    },[])
    return (
        <div className={s.ItemView}>
            {item.map((e,i) => 
            <div className={s.top_details} key={i}>
                <div className={s.image_block}>
                    <div className={s.slider}>
                        {e.img.map((e, i) => 
                        <img className={s.image_button_slider} src={e} key={i} onClick={e => setSlider(i)}/>
                        )}
                    </div> 
                    <div className={s.image} id="image" onMouseMove={LogicItem.increase} onMouseOut={LogicItem.reduction}>
                        <img id="image_itemDetails" src={e.img[slider]} alt="" />
                    </div>
                </div>
                <div className={s.name_item_details}>
                    <h1>{e.brand}</h1>
                    <br />
                    <h3>{e.name}</h3>
                    <br />
                    <div className={s.selects}>
                        <div className={s.flex}>
                            <div className={s.size_details}>
                                <p>Size</p>
                                <select className={s.size_select} name="size" id="size_select">
                                {e.size.map((e,i) =>
                                    <option className={s.up} value={e} key={i}>{e}</option>
                                )}
                                </select>
                            </div>
                        </div>
                        <h1 className={s.price_details}>{e.price}$</h1>
                    </div>
                    <br />
                    <div className={classnames(s.color_details, s.flex)}>
                        <p>color: <span>{e.color}</span> </p>
                    </div>
                    <div className={classnames(s.color_details, s.flex)}>
                        <p>material: <span>{e.material}</span></p>
                    </div>
                    <button id="<?php echo $param['items']['EAN'] ?>" type="submit"
                    value="<?php echo $table . ',' . $param['items']['EAN'] . ',' . $param['items']['price'] . ',' . 1 ?>" 
                    name="<?php echo $param['items']['size']?>" className={s.cart}>add to basket</button>
                    <div className={s.info_from_item}>
                        <div className={s.details}><h3>Details:</h3></div>
                        <p><strong>{'material'}</strong>: {e.material}</p>
                        <p><strong>{'cutting'}</strong>: {e.cutting}</p>
                        <p><strong>{'fasion'}</strong>: {e.fasion}</p>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Item