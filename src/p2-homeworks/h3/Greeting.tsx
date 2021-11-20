import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: any // need to fix any
    keyPress: (e:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, keyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.no_error // need to fix with (?:)

    return (
        <div className={s.container_main}>
            <span className={s.counter_users}>{totalUsers}</span>
            <div className={s.input_btn_container}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={keyPress}/>
            <button className={s.some_btn} onClick={addUser}>add</button></div>
            <span className={s.error_class}>{error ? "Stop, Repeat please": ""}</span>
        </div>
    )
}

export default Greeting
