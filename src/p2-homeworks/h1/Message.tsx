import React from 'react'
import style from './Message.module.css'


type MassegePropsType = {
    time: string,
    avatar: string,
    name: string,
    message: string,

}

function Message(props: MassegePropsType) {
    return (
        <div className={style.container}>
            <div className={style.user_icon}><img className={style.iamge_icon} src={(props.avatar)} alt=""/></div>
            <div className={style.arrow}></div>
            <div className={style.massege_window}>
                <div className={style.user_name}>{props.name}</div>
                <div className={style.massege_text}>{props.message}</div>
                <div className={style.massege_time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
