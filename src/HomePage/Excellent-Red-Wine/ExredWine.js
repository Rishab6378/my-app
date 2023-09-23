import React, { Component } from 'react'
import './ExredWine.css';
import ExredCard from './ExredCard';

export class ExredWine extends Component {
    articles = [
        {
            "Price": "$82.66",
            "title": "Sparkling Wine Tasmania",
            "description": " Elegant, cool-climate bubbly, celebrated for quality...",
            "urlToImage": "https://www.moodify.ai/wp-content/uploads/2023/07/smell-buy.jpg"
        },
        {
            "Price": "$52",
            "title": "Drew MW's Cuvée",
            "description": "Barbara Drew MW's expert thoughts on Prestige Cuvée Champagne...",
            "urlToImage": "https://netstorage-briefly.akamaized.net/images/365cc97ec8c7b442.jpg?imwidth=1200"
        },
        {
            "Price": "$39.95",
            "title": "Aldi's Wine Tasters",
            "description": "Join Aldi's tasting panel and savor wines in hidden Manchester...",
            "urlToImage": "https://th.bing.com/th/id/OIP.JX8QhYb-dcVeWnw3EJDMJQHaJu?pid=ImgDet&rs=1"
        },
        {
            "Price": "$16",
            "title": "L'Ermitage Roederer",
            "description": "Discover the exquisite L'Ermitage 2013 from Roederer Estate...",
            "urlToImage": "https://cdn-s3.touchofmodern.com/products/001/608/422/759363532496b9ab681152e721adfb70_large.jpg?1567628704"
        },
        {
            "Price": "$40.88",
            "title": "Indulge Delights",
            "description": "Special savings with vouchers for dining experience...",
            "urlToImage": "https://images.vivino.com/wineries/11291/logos/uOMntKoYSIifWL9LmccIqQ.jpeg"
        },
        {
            "Price": "$76.40",
            "title": "Vinfolio",
            "description": "Vinfolio for exceptional wine storage, acquisition...",
            "urlToImage": "https://www.the360mag.com/wp-content/uploads/2019/01/WSJ-stoudemire-crop-1.jpg"
        },
        {
            "Price": "$48.58",
            "title": "Hidden Gems of Wine",
            "description": "The unsung heroes of wine, perfect for any occasion...",
            "urlToImage": "https://th.bing.com/th/id/OIP.72KujOiBoZJFjAAc0f70yQHaHa?pid=ImgDet&rs=1"
        },
        {
            "Price": "$18.66",
            "title": "Azerbaijan Winery",
            "description": "The unique wines from Azerbaijan's captivating and diverse terroi...",
            "urlToImage": "https://weeklywinejournal.files.wordpress.com/2010/10/womenwine_lo.jpg"
        }
    ]
    constructor() {
        super();
        console.log("welcome back")
        this.state = {
            articles: this.articles
        }
    }
    render() {
        return (
            <div className="ZXS11">
                {this.state.articles.map((element) => {
                    return <div key={element.url}>
                        <ExredCard title={element.title} description={element.description} imageUrl={element.urlToImage} priCe={element.Price} />
                    </div>
                })}
            </div>
        )
    }
}

export default ExredWine
