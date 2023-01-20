import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
import darkImg from "../../assets/dark.svg";
import lightImg from "../../assets/light.svg";
import Background from "../Background";
import "./style.css";
import { BorderColor, ThemeColor } from "./styles";
import { DARK, LIGHT } from "../../global/colors";

const NavBar = () => {
  const color = localStorage.getItem("themeColor");
  const [isDark, setIsDark] = useState<boolean>(
    color ? JSON.parse(color) : true
  );
  const [isActive, setIsActive] = useState<string>("home");

  useEffect(() => {
    localStorage.setItem("themeColor", JSON.stringify(isDark));
  }, [isDark]);

  const _handleTheme = async () => {
    isDark ? setIsDark(false) : setIsDark(true);
  };

  return (
    <Background color={isDark ? DARK : LIGHT}>
      <header>
        <div className="nav-container">
          <NavLink to={"/home"}>
            <img
              src={isDark ? (darkImg as string) : (lightImg as string)}
              className="logo"
            />
          </NavLink>
          <BorderColor theme={isDark ? DARK : LIGHT}>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to={"/home"}
                    onClick={() => setIsActive("home")}
                    className={"active"}
                  >
                    {isActive === "home" ? (
                      "Home"
                    ) : (
                      <ThemeColor theme={isDark ? DARK : LIGHT}>
                        Home
                      </ThemeColor>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    onClick={() => setIsActive("about")}
                  >
                    {isActive === "about" ? (
                      "Sobre nós"
                    ) : (
                      <ThemeColor theme={isDark ? DARK : LIGHT}>
                        Sobre nós
                      </ThemeColor>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"} onClick={() => setIsActive("menu")}>
                    {isActive === "menu" ? (
                      "Cardápio"
                    ) : (
                      <ThemeColor theme={isDark ? DARK : LIGHT}>
                        Cardápio
                      </ThemeColor>
                    )}
                  </NavLink>
                </li>

                <li>
                  <ThemeColor theme={isDark ? DARK : LIGHT}>
                    <a onClick={() => _handleTheme()}>
                      <span className="material-icons-outlined">
                        {!isDark ? "dark_mode" : "light_mode"}
                      </span>
                    </a>
                  </ThemeColor>
                </li>
              </ul>
            </nav>
          </BorderColor>
          <BorderColor theme={isDark ? DARK : LIGHT}>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to={"/home"}
                    onClick={() => setIsActive("home")}
                    className={"active"}
                  >
                    {isActive === "home" ? (
                      "Home"
                    ) : (
                      <ThemeColor theme={isDark ? DARK : LIGHT}>
                        Home
                      </ThemeColor>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    onClick={() => setIsActive("about")}
                  >
                    {isActive === "about" ? (
                      "Sobre nós"
                    ) : (
                      <ThemeColor theme={isDark ? DARK : LIGHT}>
                        Sobre nós
                      </ThemeColor>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"} onClick={() => setIsActive("menu")}>
                    {isActive === "menu" ? (
                      "Cardápio"
                    ) : (
                      <ThemeColor theme={isDark ? DARK : LIGHT}>
                        Cardápio
                      </ThemeColor>
                    )}
                  </NavLink>
                </li>

                <li>
                  <ThemeColor theme={isDark ? DARK : LIGHT}>
                    <a onClick={() => _handleTheme()}>
                      <span className="material-icons-outlined">
                        {!isDark ? "dark_mode" : "light_mode"}
                      </span>
                    </a>
                  </ThemeColor>
                </li>
              </ul>
            </nav>
          </BorderColor>
        </div>
      </header>
    </Background>
  );
};

export default NavBar;
