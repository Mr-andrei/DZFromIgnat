import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state => state.them.theme) // useSelector

    // useDispatch, onChangeCallback

    const dispatch = useDispatch()
   const  changeTheme = (theme:string) => {
        dispatch(changeThemeC(theme))
   }

    return (
        <div className={s[theme]}>

            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>


            <hr/>
            <SuperRadio
                options={themes}
                onChangeOption={changeTheme}
                value={theme}


            />
        </div>
    );
}

export default HW12;
