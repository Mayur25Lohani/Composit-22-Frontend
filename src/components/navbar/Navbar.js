import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ScrollContext from "../../store/scroll-context";
import DarkContext from "../../store/DarkMode";
import classes from "./Navbar.module.css";

import logo from "./logo.png";

const Navbar = () => {
    const scrollCtx = useContext(ScrollContext);
    const darkCtx = useContext(DarkContext);

    const menuToggleIcon = !scrollCtx.isSecondaryNavOpen ? (
        <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            className={classes["hamburger"]}
        >
            <rect
                width="100"
                height="10"
                className={
                    classes["hamburger__bar"] +
                    (darkCtx.theme.mode === "dark"
                        ? " " + classes["hamburger__bar__dark"]
                        : "")
                }
            />
            <rect
                y="25"
                width="100"
                height="10"
                className={
                    classes["hamburger__bar"] +
                    (darkCtx.theme.mode === "dark"
                        ? " " + classes["hamburger__bar__dark"]
                        : "")
                }
            />
            <rect
                y="50"
                width="100"
                height="10"
                className={
                    classes["hamburger__bar"] +
                    (darkCtx.theme.mode === "dark"
                        ? " " + classes["hamburger__bar__dark"]
                        : "")
                }
            />
        </svg>
    ) : (
        <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            className={classes["close"]}
        >
            <line
                x1="0"
                y1="0"
                x2="100"
                y2="80"
                className={classes["close__fragment"]}
            />
            <line
                x1="0"
                y1="80"
                x2="100"
                y2="0"
                className={classes["close__fragment"]}
            />
        </svg>
    );

    const secondaryHeaderClasses =
        classes["secondary-header"] +
        (scrollCtx.isSecondaryNavOpen ? ` ${classes["active"]}` : "");

    return (
        <header className={classes["navbar"]}>
            <header
                className={
                    classes["primary-header"] +
                    (darkCtx.theme.mode === "dark"
                        ? " " + classes["primary-header__dark"]
                        : "")
                }
            >
                <div className={classes["logo-container"]}>
                    <img
                        src={logo}
                        alt="Composit"
                        className={classes["logo-img"]}
                    />
                </div>
                <button
                    className={classes["nav-toggle"]}
                    onClick={scrollCtx.onToggleSecondaryNav}
                >
                    {menuToggleIcon}
                </button>
                <nav className={classes["primary-navigation"]}>
                    <ul className={classes["primary-navigation__list"]}>
                        <li>
                            <NavLink
                                to="/home"
                                className={
                                    classes["primary-navigation__link"] +
                                    (darkCtx.theme.mode === "dark"
                                        ? " " +
                                          classes[
                                              "primary-navigation__link__dark"
                                          ]
                                        : "")
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={
                                    classes["primary-navigation__link"] +
                                    (darkCtx.theme.mode === "dark"
                                        ? " " +
                                          classes[
                                              "primary-navigation__link__dark"
                                          ]
                                        : "")
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <div
                                className={
                                    classes["primary-navigation__link"] +
                                    (darkCtx.theme.mode === "dark"
                                        ? " " +
                                          classes[
                                              "primary-navigation__link__dark"
                                          ]
                                        : "")
                                }
                                onClick={scrollCtx.onScrollToEventCarousel}
                            >
                                Event
                            </div>
                        </li>
                        <li>
                            <div
                                className={
                                    classes["primary-navigation__link"] +
                                    (darkCtx.theme.mode === "dark"
                                        ? " " +
                                          classes[
                                              "primary-navigation__link__dark"
                                          ]
                                        : "")
                                }
                                onClick={scrollCtx.onScrollToSchedule}
                            >
                                Schedule
                            </div>
                        </li>
                        <li>
                            <div
                                className={
                                    classes["primary-navigation__link"] +
                                    (darkCtx.theme.mode === "dark"
                                        ? " " +
                                          classes[
                                              "primary-navigation__link__dark"
                                          ]
                                        : "")
                                }
                                onClick={scrollCtx.onScrollToGallery}
                            >
                                Gallery
                            </div>
                        </li>
                        <li>
                            <NavLink
                                to="/team"
                                className={
                                    classes["primary-navigation__link"] +
                                    (darkCtx.theme.mode === "dark"
                                        ? " " +
                                          classes[
                                              "primary-navigation__link__dark"
                                          ]
                                        : "")
                                }
                            >
                                Our Team
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={classes["nav-btn__group"]}>
                    <NavLink
                        to="/login"
                        className={
                            `${classes["nav-btn"]}  ${classes["nav-btn__login"]}` +
                            (darkCtx.theme.mode === "dark"
                                ? " " + classes["nav-btn__dark"]
                                : "")
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={
                            `${classes["nav-btn"]} ${classes["nav-btn__register"]}` +
                            (darkCtx.theme.mode === "dark"
                                ? " " + classes["nav-btn__register__dark"]
                                : "")
                        }
                    >
                        Register
                    </NavLink>
                    <button
                        className={
                            classes["dark-icon"] +
                            (darkCtx.theme.mode === "dark"
                                ? " " +
                                  classes["dark-icon__dark"]
                                : "")
                        }
                        onClick={darkCtx.switchThemeOnClick}
                    >
                        
                    </button>
                </div>
            </header>
            <header className={secondaryHeaderClasses}>
                <ul className={classes["secondary-navigation__list"]}>
                    <li>
                        <NavLink
                            to="/login"
                            className={classes["secondary-navigation__link"]}
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className={classes["secondary-navigation__link"]}
                        >
                            Register
                        </NavLink>
                        <NavLink
                            to="/home"
                            className={classes["secondary-navigation__link"]}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={classes["secondary-navigation__link"]}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <div
                            className={classes["secondary-navigation__link"]}
                            onClick={scrollCtx.onScrollToEventCarousel}
                        >
                            Event
                        </div>
                    </li>
                    <li>
                        <div
                            className={classes["secondary-navigation__link"]}
                            onClick={scrollCtx.onScrollToSchedule}
                        >
                            Schedule
                        </div>
                    </li>
                    <li>
                        <div
                            className={classes["secondary-navigation__link"]}
                            onClick={scrollCtx.onScrollToGallery}
                        >
                            Gallery
                        </div>
                    </li>
                    <li>
                        <NavLink
                            to="/team"
                            className={classes["secondary-navigation__link"]}
                        >
                            Our Team
                        </NavLink>
                    </li>
                </ul>
            </header>
        </header>
    );
};

export default Navbar;
