import React from "react";
import Header from "../header/Header";
import { connect } from "react-redux";
import { RootState } from "../../reducers";

interface LayoutProps {
    test: string
}

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <p>{props.test}</p>
            <Header></Header>
            {}
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

const mapStateToProps = (state: RootState) => ({
    test: state.test
})

export default connect(mapStateToProps, null)(Layout)