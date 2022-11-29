import {FC, useState, useEffect, useRef} from 'react'
import s from './color.module.scss'
import g from '../filter.module.scss'
import classNames from 'classnames'
import {useParams, useNavigate} from 'react-router-dom'
import {colors} from '../../../../config/colors'
import BussinesLogic from '../LogicFilters'


const Color: FC<{title: string,tougle: string;
    setTougle: (tougle: string) => void}> = (props) => {
    const show = useRef(true)
    const [state, setState] = useState<string[]>([])
    let {type, filter} = useParams()
    const navigate = useNavigate()
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
                <div className={classNames(g.arrow, g.hideArrow)} id="colorArrow">〱</div>
            </div>
            <div id="color" className={classNames(g.hideEffect, g.hidePanel)}>
                <div className={g.scroll}>
                    {colors.map((val, i) =>
                        <div className={g.checkBlock} key={i}>
                            <input id={val} className={classNames(g.checkbox_input, props.title)}
                             onChange={e => filterClick()} type="checkbox" 
                            name="color" value={val} checked={BussinesLogic.checked(val, state)}/>
                            <label className={classNames(g.checkbox_label, g.color)} htmlFor={val}>
                                <div className={s.content}>           
                                    <div className={s.box} style={{backgroundColor: val}}>
                                    </div>
                                    <p className={s.text}>{val}</p>
                                </div>
                            </label>
                        </div>
                    )}
                    <div className={g.checkBlock}>
                        <input id="colored" className={classNames(g.checkbox_input, props.title)}
                         onChange={e => filterClick()} type="checkbox" name="color" value="colored" 
                         checked={BussinesLogic.checked('colored', state)}/>
                        <label className={g.checkbox_label} htmlFor="colored" >
                            <div className={s.content}>           
                                <div className={s.colorfb}>
                                    <div className={classNames(s.colorf, s.y)}></div>
                                    <div className={classNames(s.colorf, s.g)}></div>
                                    <div className={classNames(s.colorf, s.p)}></div>
                                    <div className={classNames(s.colorf, s.b)}></div>
                                </div>
                                <p className={s.text}>colored</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className={g.buttons}>
                    <button className={g.button} onClick={e => clear()}>clear</button>
                    <button className={g.button} onClick={e => submit()}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Color