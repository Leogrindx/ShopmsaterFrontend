import {FC, useState, useEffect, useRef, memo} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import g from '../filter.module.scss'
import classNames from 'classnames'
import i from '../../../../Index.module.scss'
import BussinesLogic, {FiltersDate} from '../LogicFilters'


const TextFilter: FC<FiltersDate> = (props) => {
    const [items, setItems] = useState(props.value)
    const [input, setInput] = useState<string>('')
    const [state, setState] = useState<string[]>([])
    const navigate = useNavigate()
    let {type, filter} = useParams()
    const search = (e: any) => {
        setInput(e.target.value)
        setItems(props.value.filter(i => i.toLowerCase().
        search(e.target.value.toLowerCase()) > -1))
    }
    useEffect(() =>{
        const data = BussinesLogic.parseUrl(filter!, props.title)
        data ? setState(data) : setState([])
    },[filter])

    const filterClick = () => {
        const data = BussinesLogic.generateDate(props.title)
        setState(data)
    }
    const clear = () => {
        setState([])
        const url = BussinesLogic.generateUrl(filter!, props.title, [])
        navigate(`/${type}/${url}`)
    }

    const submit = () => {
        const url = BussinesLogic.generateUrl(filter!, props.title, state)
        navigate(`/${type}/${url}`)
    }

    return (
        <div className={g.filterType}>
            <div className={g.showHidePanel} onClick={e => BussinesLogic.showHide(props.title, g.arrow, g.hideArrow, g.hideEffect, g.hidePanel, g.showPanel, g.showArrow)}>
                <p>{props.title}</p>
                <p>{state.length > 0 && state.length}</p>
                <div className={classNames(g.arrow, g.hideArrow)} id={`${props.title}Arrow`}>〱</div>
            </div>
            <div id={props.title} className={classNames(g.hideEffect, g.hidePanel)}>
                <div className={g.scroll}>
                    {props.searchWindow &&
                    <div className={g.search}>
                        <input className={i.input} type="text" placeholder="Search" 
                        onChange={e => search(e)} value={input}
                        style={{width: '120px', marginBottom: '20px'}}/>
                    </div>
                    }
                    {items.map((val, i) =>
                        <div className={g.checkBlock} key={i}>
                            <input id={val} className={classNames(g.checkbox_input, props.title)} 
                            onChange={e => filterClick()} type="checkbox" value={val} 
                             checked={BussinesLogic.checked(val, state)}/>
                            <label className={classNames(g.checkbox_label, g.color)} htmlFor={val}>
                                <div className={g.content}>
                                    <div className={g.slider}>
                                        <div className={g.text} onMouseEnter={e => BussinesLogic.sliderAdd(val, e, g.textHover)}
                                         onMouseLeave={e => BussinesLogic.sliderRemove(val, e, g.textHover)}>{val}</div>
                                    </div>           
                                </div>
                            </label>
                        </div>
                    )}
                </div>
                <div className={g.buttons}>
                    <button className={g.button} onClick={e => clear()}>clear</button>
                    <button className={g.button} onClick={e => submit()}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default memo(TextFilter)