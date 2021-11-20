import React from 'react'
import { NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import "./header.css"

function Header() {
    return (
        <div className={"dropdown"}>
        <button className={"dropbtn"} > Hover me </button>
            <div className={"dropdown-content "}>
            <NavLink className={"header_link"} to={PATH.PRE_JUNIOR}>PreJun</NavLink>
            <NavLink className={"header_link"} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={"header_link"} to={PATH.JunPlus}>JunPlus</NavLink>
            </div>

        </div>
    )
}

export default Header
