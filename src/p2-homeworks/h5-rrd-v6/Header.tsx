import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./HW5.module.css"
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.dropdown}>
            <div className={s.dropbtn}/>
            <div className={s.dropdownContent}>
                <NavLink className={s.Navlink} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
                <NavLink className={s.Navlink} to={PATH.JUNIOR}>JUNIOR</NavLink>
                <NavLink className={s.Navlink} to={PATH.JUNIOR_PLUS}>JUNIOR_PLUS</NavLink>

            </div>
        </div>
    )
}

export default Header
