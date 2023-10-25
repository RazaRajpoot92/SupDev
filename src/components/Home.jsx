import React from "react";
import "../style/Home.scss";
import vg from "../assets/2.webp";


import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home = ()=>{
    return(
        <>
        <div className="home" id="home">
            <main>
                <h1 className="text-primary">Super Dev</h1>
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

        <div className="home3" id="about">

            <div>
                <h1>Who we are?</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius doloribus soluta consequuntur odit accusamus voluptates, commodi tenetur labore, delectus ex mollitia. Esse tempora id sunt dolore nulla corrupti vero quod.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, ut itaque reiciendis, minima debitis repellat optio odit ipsum quod eaque nam officiis ipsam sit, dolorem expedita id consequuntur et consequatur.

                </p>
            </div>

        </div>

        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>

                <article>

                    <div style={{animationDelay:"0.3s"}}>

                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{animationDelay:"0.5s"}}>

                        <AiFillAmazonCircle />

                        <p>Amazon</p>
                    </div>

                    <div style={{animationDelay:"0.8s"}}>

                        <AiFillInstagram />

                        <p>Instagram</p>

                    </div>

                    <div style={{animationDelay:"1s"}}>

                        <AiFillYoutube />

                        <p>Youtube</p>

                    </div>

                </article>
            </div>
        </div>

        </>
    );

}

export default Home;