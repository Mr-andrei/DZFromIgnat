import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "./Api/api";


export const Request = () => {
    const [checked, setChecked] = useState(false)
    const [responseValue, setResponseValue] = useState<string>()

    const onChangeChecked = (checked: boolean) => {
        setChecked(checked)
    }

    const clickHandler = () => {

        RequestAPI.RequestAPIPost(checked)
            .then(res => setResponseValue(res.data.info))
            .catch(error => setResponseValue(error.response ? error.response.data.errorText : error.message))
    }

    return (
        <div>
            <div>
                <SuperButton onClick={clickHandler}>Push</SuperButton>
                <SuperCheckbox onChangeChecked={onChangeChecked}/>
            </div>
            <div style={{marginTop: "40px"}}>{responseValue}</div>
        </div>
    )
}