import {FC, useState} from 'react'
import s from './filter.module.scss'
import Price from './price/Price'
import Color from './color/Color'
import TextFilter from './text/TextFilter'
import {brands} from '../../../config/brand'
import {materials} from '../../../config/materials'
import {fashions} from '../../../config/fashions'
import {cuttings} from '../../../config/cutting'


const Filter: FC = () => {
    const [tougle, setTougle] = useState<string>('')
    return (
        <div className={s.filter}>
            <Price title={'price'} tougle={tougle} setTougle={setTougle}/>
            <Color title={'color'} tougle={tougle} setTougle={setTougle}/>
            <TextFilter title={'brand'} value={brands}  searchWindow={true} 
            tougle={tougle} setTougle={setTougle}/>
            <TextFilter title={'material'} value={materials} tougle={tougle} setTougle={setTougle}/>
            <TextFilter title={'fashion'} value={fashions} tougle={tougle} setTougle={setTougle}/>
            <TextFilter title={'cutting'} value={cuttings} tougle={tougle} setTougle={setTougle}/>
        </div>
        
    )
}

export default Filter