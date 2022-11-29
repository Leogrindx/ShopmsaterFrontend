import {FC} from 'react'
import s from './Loading.module.scss'
import {rootLoading} from '../../index'


const loading = (position: boolean) => {
    if(position){
        rootLoading.render(<Animation />)
    }else{
        rootLoading.render(<></>)
    }
}

const Animation: FC = () => {
    return(
        <div className={s.loading}>
            <div className="img">
                <img src="/img/loading.gif" alt="Loading" />
            </div>
        </div>
    )
}


export default loading