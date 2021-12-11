import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logoBlack from '../../multimedia/logoBlack.svg';
import logoWhite from '../../multimedia/logoWhite.svg';
import "./NavBarStyle.css";
import { FiSun, FiMoon } from 'react-icons/fi';
import { ImEye } from 'react-icons/im';
import { GiNoseFront, GiLips } from 'react-icons/gi';
import { DarkContextUse } from '../../Contexts/DarkContext';

const NavBar = () => {

    const { dark, setDark } = DarkContextUse();

    const cambiarModo = () => {

        if(dark){
            setDark(false)
        } else{
            setDark(true)
        }
    }
    
    return (
        <div className={`${dark? 'navBarDark' : 'navBarLight'} fixed-top col-12 row m-0 p-0 justify-content-center`}>
            
            <div className={`${dark? 'logoDark' : 'logoLight'} col-10 col-sm-8 col-md-6 col-lg-5 col-xxl-4 my-3`}>
                <Link to="/aeStickersFREE/">
                    <img className="logo__img" src={dark? logoWhite : logoBlack} alt="logo"/>
                </Link>
            </div>

            <div className="nav col-12 col-md-10 col-lg-8 col-xxl-9 row justify-content-center">
                <button id="modoClaro"
                        onClick={cambiarModo}
                        className={`${dark? 'nav__itemDark' : 'nav__itemLight'} btn my-1 p-1`}>
                    {
                    dark?
                        <FiMoon/>
                        :
                        <FiSun/>
                    }
                </button>
                
                <div className="col-6 col-sm-5 col-md-4 col-xxl-3 row flex-nowrap p-0 me-auto">
                    <div className={`${dark? 'nav__itemDark' : 'nav__itemLight'} col-1 m-1 p-1`}>
                        <NavLink to="/aeStickersFREE/categoria/ojos" activeClassName={`${dark? 'nav__itemSelectedDark' : 'nav__itemSelectedLight'}`}>
                            <ImEye/>
                        </NavLink>
                    </div>

                    <div className={`${dark? 'nav__itemDark' : 'nav__itemLight'} col-1 m-1 p-1`}>
                        <NavLink to="/aeStickersFREE/categoria/narices" activeClassName={`${dark? 'nav__itemSelectedDark' : 'nav__itemSelectedLight'}`}>
                            <GiNoseFront/>
                        </NavLink>
                    </div>

                    <div className={`${dark? 'nav__itemDark' : 'nav__itemLight'} col-1 m-1 p-1`}>
                        <NavLink to="/aeStickersFREE/categoria/bocas" activeClassName={`${dark? 'nav__itemSelectedDark' : 'nav__itemSelectedLight'}`}>
                            <GiLips/>
                        </NavLink>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;
