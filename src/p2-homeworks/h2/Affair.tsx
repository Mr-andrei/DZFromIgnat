import React from 'react'
import {AffairType} from "./HW2";
import style from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div className={style.block}>
            <div className={style.line_block}>
                <span className={style.text}>{props.affair.name}</span>
                <span className={style.text}>{props.affair.priority}</span>
                <button className={style.delete_btn} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
