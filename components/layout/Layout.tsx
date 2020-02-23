import React, { FunctionComponent } from "react";
import Header from "../header/Header";

const Layout: FunctionComponent = (props) => {
    return (
        <div>
            <Header></Header>
            {props.children}
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

export default Layout