import React, { useState } from "react";
import logo from "../asset/images/logo.png";
import "../css/css.css";
import "../css/Header.css";
import { Link, NavLink } from "react-router-dom";
import useHeaderColor from "../hooks/userHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../utils/Command";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <section className=" h-wrapper" style={{ background: headerColor }}>
      <div className="h-container flexCenter innerWidth paddings ">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo" width={100} />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:cucghach6lo@gmail.com">Contact</a>
            {/* DANGNHAP */}

            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <div>
                <ProfileMenu user={user} logout={logout} />
              </div>
            )}
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
