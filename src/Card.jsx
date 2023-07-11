import React from "react"
import Star from "../public/images/Star 1.png"

export default function Card(props){
    let badgeText = "";
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } 
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    console.log(badgeText)

    return (
        <div className="card">
           {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src = {props.img} className="katie-logo" />
        <div className="stats">
        <img src = {Star} className="Star-logo" />
        <span  >{props.rating} </span>
        <span  className="gray">({props.reviewCount}) •</span>
        <span  className="gray">{props.Country}</span>
        </div>
        <p className="life">{props.Title}</p>
        <p className="price1"><span className="bold">From ${props.Price} </span>/ Person</p>
        </div>
    )
}