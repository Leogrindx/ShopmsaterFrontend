import {FC, useState} from 'react'
import s from './Search.module.scss'
import g from '../../../Index.module.scss'
import classNames from 'classnames'

const Seacrh: FC = () => {
    const [value, setValue] = useState<string>('')
    const open = (e: any) => {
        e.target.classList.add(s.activeInput)
        document.getElementById('close')?.setAttribute('style', 'visibility: visible; transform: rotate(-90deg)')
        document.getElementById('logo')?.setAttribute('style', 'z-index: 0')
        document.getElementById('search')?.setAttribute('style', 'border-radius: 5px 5px 0px 0px')

    }
    const close = (e: any) => {
        e.target.setAttribute('style', 'visibility: hidden')
        document.getElementById('logo')?.setAttribute('style', 'z-index: 1')
        document.getElementById('item_search')?.setAttribute('style', 'display: none')
        document.getElementById('search')?.setAttribute('style', 'border: 5px 5px 5px 5px')
        const tag = document.getElementById('search')
        setValue('')
        tag?.classList.remove(s.activeInput)
    }

    const change = (e: any) =>{
        setValue(e.target.value)
        if(e.target.value === 0){
            document.getElementById('item_search')?.setAttribute('style', 'display: none')
        }else{
            document.getElementById('item_search')?.setAttribute('style', 'display: block')
        }
    }

    return (
    <div className={s.track}>
        <div className={s.search_block}>
            <div id="search_panel">
                <input onClick={open} onChange={change} className={classNames(g.input, s.input)}
                 type="text" id="search" placeholder="Search" value={value}/>
                <button className={s.close} onClick={close} id="close">&#x2715;</button>
                {/* <button className={s.button} id="send"><img src="/img/search.png" alt="search"/></button> */}
            </div>
            <div className={s.search_panel} id="item_search">
                <div className={s.item}>
                    <p>Nike</p>
                    <div className={s.partition}></div>
                </div>
                <div className={s.item}>
                    <p>Nike</p>
                    <div className={s.partition}></div>
                </div><div className={s.item}>
                    <p>Nike</p>
                    <div className={s.partition}></div>
                </div><div className={s.item}>
                    <p>Nike</p>
                    <div className={s.partition}></div>
                </div><div className={s.item}>
                    <p>Nike</p>
                    <div className={s.partition}></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Seacrh
