interface SearchBarProps {

}

const SearchBar = (props: SearchBarProps) => {
    return (
        <div className="container">
            <input className="form" placeholder="Search for something..." />

            <style jsx>{`
                .form {
                    width: 500px;
                    height: 25px;
                    border-radius: 3px;
                    border: 1px solid black;
                    padding: 0px 10px
                }

                input:focus {
                    outline: none;
                }
            `}</style>
        </div>
    )
}

export default SearchBar