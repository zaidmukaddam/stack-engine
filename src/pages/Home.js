import React from 'react';
import './Home.css';
import Search from "../components/Search";
const today = new Date();
function Home() {
    
    return (
        
        <div className='home'>

            <div className="home_body">
                <center>
                  <h2>&lt;the<img src="favicon.ico" alt="stack"/><strong style={{ color: "#e1701a" }}>stack</strong>engine/&gt;</h2>
                  {/* <br /> */}
                </center>
                <div className="home_inputContainer">
                    <Search required/>
                </div>
                <div>
                    <footer>
                        <center className="footer"><h4>&copy; {today.getFullYear()} | Made by <a href="https://realzaidmukaddam.tech" className="name">Zaid</a></h4></center>
                    </footer>
                </div>
            </div>
        </div>
    );

}

export default Home;
