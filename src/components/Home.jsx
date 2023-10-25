import React from "react";
import "../style/Home.scss";
import vg from "../assets/2.webp"

const Home = ()=>{
    return(
        <>
        <div className="home">
            <main>
                <h1>Super Dev</h1>
                <p>Solution to all you problems</p>
            </main>
        </div>
        <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem fugiat aut ea repudiandae alias officiis voluptates optio dignissimos voluptate ad eius, vel esse saepe provident iusto impedit ullam debitis?
            </p>
        </div>
        
        </div>

        </>
    );
}

export default Home;