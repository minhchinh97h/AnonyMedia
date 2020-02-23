import { FunctionComponent } from "react";
import SearchBar from "./search-bar/SearchBar";

interface HeaderProps {

}

const Header: FunctionComponent = (props: HeaderProps) => {

    return (
        <div className="header-container">
            <SearchBar />


            <style jsx>{`
                    .header-container {
                        display: flex;
                        height: 15vh;
                        background-color: transparent;
                        justify-content: space-between;
                        padding: 10px 10vw;
                    }
                `}</style>
        </div>
    )
}

export default Header