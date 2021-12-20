import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import s from "./bll/HW10.module.css"

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    console.log(isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 4000)
    };

    return (
        <div className={s.main_container}>
            {
                isLoading
                    ?
                    (<div className={s.lds_ring}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>)
                    :
                    (<div><SuperButton onClick={setLoading}>set loading...</SuperButton></div>)
            }
        </div>
    )
}

export default HW10
