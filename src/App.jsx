import React from "react"
import airbnblogo from "../public/images/airbnb-logo.png"
import Hero from "./Hero"
import Card from "./Card"
import Data from "./Data"


export default function App() {
  const data = Data.map(words => {
        return (
        <Card 
        img = {words.coverImg}
        rating = {words.stats.rating}
        reviewCount = {words.stats.reviewCount}
        location = {words.location}
        Title = {words.title}
        Price = {words.price}
        openSpots = {words.openSpots}
        />
    )
})

return(
  <div>
      <nav>
            <img src = {airbnblogo} className="nav-logo"></img>
      </nav>  
        <Hero/>
        <section className="cards">
        {data}
        </section>
  </div>
)
}