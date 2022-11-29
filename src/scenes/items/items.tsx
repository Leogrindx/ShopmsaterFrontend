import {useParams} from 'react-router-dom'
import s from './items.module.scss'
import Filter from './filter/filter'
import RenderItems from './RenderItems/RenderItems'
import Menu from '../../components/menu/menu'

const Items = () => {
    return (
        <>
            <Menu />
            <div className={s.itemsContainer}>
                <Filter />
                <RenderItems/>
            </div>
            
        </>
    )
}

export default Items