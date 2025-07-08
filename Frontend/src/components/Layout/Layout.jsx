import React from "react";
// eslint-disable-next-line
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Container } from "./style.jsx";
import Routes from "../../Routes.js";
import { BrowserRouter, useLocation } from "react-router-dom";

function LayoutContent(props) {

    const location = useLocation();
    const isLogin = location.pathname === "/"

    return (
        <Container>
            {!isLogin && <Header handleChangeTheme={props.handleChangeTheme} theme={props.theme} />}
            <Routes />
            {!isLogin && <Footer />}
        </Container>
    );
}

export default function Layout(props) {
    return (
        <BrowserRouter>
            <LayoutContent {...props}/>
        </BrowserRouter>
    )
}