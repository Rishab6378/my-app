import React, { Component } from 'react'
import './TopWine1.css';
import TopCard1 from './TopCard1';

export class TopWine1 extends Component {
    articles = [
        {
            "Price": "$82.66",
            "title": "Sparkling Wine Tasmania",
            "description": " Elegant, cool-climate bubbly, celebrated for quality...",
            "urlToImage": "https://quillandpad.com/wp-content/uploads/2019/12/Janz-Single-Vineyard-Chardonnay-1.jpg"
        },
        {
            "Price": "$52",
            "title": "Drew MW's Cuvée",
            "description": "Barbara Drew MW's expert thoughts on Prestige Cuvée Champagne...",
            "urlToImage": "https://blog.bbr.com/wp-content/uploads/2020/11/Champagne-for-the-table-1-1024x1024.jpg"
        },
        {
            "Price": "$39.95",
            "title": "Aldi's Wine Tasters",
            "description": "Join Aldi's tasting panel and savor wines in hidden Manchester...",
            "urlToImage": "https://offloadmedia.feverup.com/secretmanchester.com/wp-content/uploads/2019/05/17102957/aldiuk9-1024x1024.jpg"
        },
        {
            "Price": "$16",
            "title": "L'Ermitage Roederer",
            "description": "Discover the exquisite L'Ermitage 2013 from Roederer Estate...",
            "urlToImage": "https://roedererstaging.b-cdn.net/assets/wine-feature/_1000x1000_crop_center-center_60_line/roederer-estate-lermitage-brut-multi-vintage-individual-wine-page.jpg"
        },
        {
            "Price": "$40.88",
            "title": "Indulge Delights",
            "description": "Special savings with vouchers for dining experience...",
            "urlToImage": "https://th.bing.com/th/id/OIP.xjP3H-bPlx33xjeGT4TPeQHaF7?pid=ImgDet&rs=1"
        },
        {
            "Price": "$76.40",
            "title": "Vinfolio",
            "description": "Vinfolio for exceptional wine storage, acquisition...",
            "urlToImage": "https://blog.vinfolio.com/wp-content/uploads/2019/09/1.jpeg-25.jpg"
        },
        {
            "Price": "$48.58",
            "title": "Hidden Gems of Wine",
            "description": "The unsung heroes of wine, perfect for any occasion...",
            "urlToImage": "https://th.bing.com/th/id/R.8d1bdc49a4958b709d60b8d1093e1193?rik=PB7xOh3oUX53jg&riu=http%3a%2f%2fblog.vinfolio.com%2fwp-content%2fuploads%2f2016%2f08%2fVinfolio-sancerre-and-chablis-2-1024x703.jpg&ehk=ZDNxEG2S4GMBVEngpdxHS1fvYIRHD%2fhfKpSofy%2bPFFc%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            "Price": "$18.66",
            "title": "Azerbaijan Winery",
            "description": "The unique wines from Azerbaijan's captivating and diverse terroi...",
            "urlToImage": "https://bestbakutours.com/wp-content/uploads/2020/07/Azerbaijan-Wine-1024x768.jpg"
        },
        {
            "Price": "$50.55",
            "title": "Walla Walla Wine",
            "description": "Sip, savor, and explore the charm of Walla Walla's wine country...",
            "urlToImage": "https://i.pinimg.com/originals/78/85/c8/7885c8f8bbef0bf592f517bb7fa21f8b.jpg"
        },
        {
            "Price": "$340",
            "title": "Culinary in Rocklin",
            "description": "Experience gourmet dining at The Chef's Table, Rocklin's culinary...",
            "urlToImage": "https://th.bing.com/th/id/OIP._3gjU_-2JD5O-tTx3D7MFwHaHa?pid=ImgDet&rs=1"
        },
        {
            "Price": "$11.94",
            "title": "Preludio",
            "description": "Indulge in an exquisite dining experience at Preludio, a culinary gem...",
            "urlToImage": "https://th.bing.com/th/id/OIP.j8j0dhDqfjSP6itV_TADaQHaJQ?pid=ImgDet&rs=1"
        },
        {
            "Price": "$40.74",
            "title": "Vivi Greto",
            "description": "Vivi Greto Italy's heritage, offering a journey through its diverse terroirs...",
            "urlToImage": "https://blog.vinfolio.com/wp-content/uploads/2018/08/wine-2700088_1920.jpg"
        },
        {
            "Price": "$18",
            "title": "Herdade do Portocarro",
            "description": "Herdade do Portocarro blends Portugal's heritage...",
            "urlToImage": "https://i.pinimg.com/originals/b8/df/88/b8df889ba31fc946cb9a7bafe607f784.jpg"
        },
        {
            "Price": "$6.88",
            "title": "Verger Belliveau",
            "description": "Meticulously crafting Vins NB capturing orchard-fresh flavors in every bottle...",
            "urlToImage": "https://cdn.goodpairdays.com/upload/product/year-wines-mataro-2018-5daf101b03c66/538ad93430ecf99720ee58cbc95deaa9.jpg"
        },
        {
            "Price": "$13",
            "title": "Celler Masroig",
            "description": "A winery dedicated to exceptional wines in Catalonia's Tarragona...",
            "urlToImage": "https://th.bing.com/th/id/OIP.ry04tZuAEQOdYsblh-zX3QHaFs?pid=ImgDet&rs=1"
        },
        {
            "Price": "$17.86",
            "title": "MASSERIA - Più Blu",
            "description": "A journey into Italian excellence, embodying tradition and flavor...",
            "urlToImage": "https://th.bing.com/th/id/OIP.BGunk-e3nB03Nzfe-DUvmwHaJ8?pid=ImgDet&rs=1"
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
                        <TopCard1 title={element.title} description={element.description} imageUrl={element.urlToImage} priCe={element.Price} />
                    </div>
                })
                }
            </div >
        )
    }
}

export default TopWine1
