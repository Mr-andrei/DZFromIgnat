import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import "./HW7.css"




const arr: Array<string> = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[0])

    return (
        <div className={"container_main"}>

            homeworks 7

            {/*should work (должно работать)*/}
            <div className={"container_flex"}>
            <div className={"select_contsiner"}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={"radio_container"}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
