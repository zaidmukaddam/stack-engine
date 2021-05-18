import React from 'react';
import "./SearchPage.css";
import {useStateValue} from "../StateProvider/StateProvider";
import useStackSearch from "../useStackSearch";
// import Response from "../response";
import {Link} from "react-router-dom";
import Search from "../components/Search";
import he from 'he'

function SearchPage() {

    // eslint-disable-next-line no-unused-vars
    const [{term}, dispatch] = useStateValue();

    //LIVE API Call *****************************************
    const {data} = useStackSearch(term);

    // const data = Response;

    // https://cse.google.com/cse/create/new
    console.log(data);

    return (
        <div className="searchPage">
            {/*<h1>This is search page WoW!!!!!</h1>*/}
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="searchPage_logo"
                        src="apple-touch-icon.png"
                        alt=""/>
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons/>
                </div>
            </div>

            {term && (
                <div className="searchPage_results">

                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a className="searchPage_resultTitle" href={item.link} target="_blank">
                                <h2 style={{ color: "#e1701a" }}>{he.decode(item.title)}</h2>
                            </a>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href={item.link} target="_blank" style={{ color: "#ff7b54" }}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt=''
                                    />
                                )}
                                {item.link} ✔
                            </a>
                            <br/>
                            <br/>
                            <hr/>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}

export default SearchPage;
