import React from "react"
import Collage from "../public/images/collage.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={Collage} className="hero-photo" />
            <h1 className="ol-text">Online Experience</h1>
            <p className="ol1-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
}