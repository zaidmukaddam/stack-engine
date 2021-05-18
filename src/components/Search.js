import React, {useState} from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
// import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import {useStateValue} from "../StateProvider/StateProvider";
import {actionTypes} from "../StateProvider/reducer";

function Search({hideButtons = false}) {

    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = zaid => {
        zaid.preventDefault();

        console.log('Click stackoverflow search button>>>', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push("/search");
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input
                    value={input}
                    onChange={zaid => setInput(zaid.target.value)}
                    placeholder="Enter a term to search"
                />
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button
                        onClick={search}
                        type="submit"
                        variant="outlined"
                    >Stack Search</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button
                        className="search_buttonsHidden"
                        onClick={search}
                        type="submit"
                        variant="outlined"
                    >Stack Search</Button>
                </div>
            )}
        </form>
    );
}

export default Search;
