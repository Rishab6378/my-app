import React, { Component } from 'react'
import './DollarShop.css';
import CaRd from './CaRd';

export class DollarShop extends Component {
    articles = [
        {
            "Price": "$82.66",
            "title": "Serpico Irpinia Aglianico",
            "description": "A robust Italian red with dark fruit, spice, and velvety tannins...",
            //"url": "https://www.washingtonpost.com/climate-environment/2023/09/06/biden-alaska-oil-drilling-ban-willow/",
            "urlToImage": "https://cdn-s3.touchofmodern.com/products/001/959/994/e50f107b747def1511810c849d5c7d19_large.jpg?1600202147"
        },
        {
            "Price": "$52",
            "title": "Slatnik Radikon Wines",
            "description": "A dynamic fusion of tradition and innovation in winemaking...",
            //"url": "https://www.cnn.com/2023/09/06/politics/hunter-biden-gun-charges-indictment/index.html",
            "urlToImage": "https://cdn.shopify.com/s/files/1/0011/8148/3072/products/slatnik-radikon-natural-Orange-wine-Friuli-venezia-Giulia-Italy-back.jpg?v=1618341270"
        },
        {
            "Price": "$39.95",
            "title": "Chinuri Saperavi",
            "description": "A Georgian blend, harmonizing crisp Chinuri with bold Saperavi...",
            //"url": "https://www.theverge.com/2023/9/6/23861763/apple-ai-language-models-ajax-gpt-training-spending",
            "urlToImage": "https://cdn.shopify.com/s/files/1/0011/8148/3072/products/chinuri-saperavi-kortavebis-marani-natural-red-wine-kakheti-georgia-back.jpg?v=1611646775"
        },
        {
            "Price": "$16",
            "title": "Vinícola Aurora Wine",
            "description": "A special wine release to honor their rich history...",
            //"url": "https://variety.com/2023/tv/news/kourtney-kardashian-fetal-surgery-baby-safe-travis-barker-1235715436/",
            "urlToImage": "https://engarrafadormoderno.com.br/wp-content/uploads/2021/04/Materia-principal-Vinicola-Aurora-lanca-vinho-comemorativo-aos-90-anos-1.jpg"
        },
        {
            "Price": "$40.88",
            "title": "Elevate liquor mockup",
            "description": "Discover a high-quality, free liquor bottle mockup...",
            //"url": "https://www.espn.com/nfl/story/_/id/38340390/source-49ers-nick-bosa-highest-paid-defensive-player",
            "urlToImage": "https://www.uidownload.com/files/538/478/417/free-liquor-bottle-mockup.jpg"
        },
        {
            "Price": "$76.40",
            "title": "Pirate's Grog No.13",
            "description": "Embark on a Flavorful Swashbuckling Journey with Every Sip...",
            //"url": "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xlZ2FsL3RydW1wLWxvc2VzLWtleS1ydWxpbmctYWhlYWQtd3JpdGVyLWNhcnJvbGxzLWRlZmFtYXRpb24tdHJpYWwtMjAyMy0wOS0wNi_SAQA?oc=5",
            "urlToImage": "https://piratesgrogrum.com/cdn/shop/products/1_PGBlackEi8htBottle_grande.jpg?v=1671015757"
        },
        {
            "Price": "$48.58",
            "title": "Snowflake Serenity",
            "description": "A refreshing and elegant wine, delivering pure delight with each sip...",
            //"url": "https://www.nfl.com/news/nine-last-minute-predictions-for-2023-nfl-season-josh-allen-wins-mvp-49ers-win-s",
            "urlToImage": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8c0c8d11361165.560f7f6b01883.jpg"
        },
        {
            "Price": "$18.66",
            "title": "Rosso Piceno",
            "description": "A harmonious blend of Montepulciano and Sangiovese grapes Italy's elegance...",
            //"url": "https://www.nbcnews.com/politics/congress/rand-paul-doubts-capitol-doctor-provided-valid-medical-diagnosis-mitch-rcna103633",
            "urlToImage": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d634d034156293.5ea0c0640428f.jpg"
        },
        {
            "Price": "$50.55",
            "title": "Wine Bottle Mock-Up",
            "description": "Discover a high-quality wine bottle mock-up realism...",
            //"url": "https://abcnews.go.com/US/fulton-county-judge-hears-arguments-splitting-election-interference/story?id=102947647",
            "urlToImage": "https://mir-s3-cdn-cf.behance.net/project_modules/fs/db68fc28228631.56371a77d7e53.jpg"
        },
        {
            "Price": "$340",
            "title": "Bordeaux Wine",
            "description": "Renowned for its rich history, diverse terroirs, and timeless excellence...",
            //"url": "https://www.nfl.com/news/nfl-fantasy-2023-start-em-sit-em-week-1-quarterbacks",
            "urlToImage": "https://cdn.dribbble.com/userupload/4463634/file/original-541b79a36a0c18eebac1900246a0ad6a.jpg?compress=1&resize=1200x900&vertical=top   "
        },
        {
            "Price": "$11.94",
            "title": "Tropica Wine",
            "description": "Transport your senses to a tropical paradise with each sip...",
            //"url": "https://www.nbcnews.com/health/health-news/fda-green-light-new-covid-boosters-early-friday-rcna103379",
            "urlToImage": "https://images.examples.com/wp-content/uploads/2018/10/Classic-Wine-Bottle-Label-Template.jpg"
        },
        {
            "Price": "$40.74",
            "title": "Vivi Greto",
            "description": "Vivi Greto Italy's heritage, offering a journey through its diverse terroirs...",
            //"url": "https://www.nbcnews.com/news/nbcblk/ava-duvernay-makes-history-first-black-woman-film-compete-venice-film-rcna103674",
            "urlToImage": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2fece034885483.56e1496682c5e.jpg"
        },
        {
            "Price": "$18",
            "title": "Herdade do Portocarro",
            "description": "Herdade do Portocarro blends Portugal's heritage...",
            //"url": "https://www.macrumors.com/2023/09/06/apple-modem-in-2025-kuo/",
            "urlToImage": "https://cdn.shopify.com/s/files/1/0001/0763/products/herdade-do-portocarro-herdade-do-portacarro-flasche-0-75-liter-29296466788435_800x800.jpg?v=1664132852"
        },
        {
            "Price": "$6.88",
            "title": "Verger Belliveau",
            "description": "Meticulously crafting Vins NB capturing orchard-fresh flavors in every bottle...",
            //"url": "https://www.bloomberg.com/news/articles/2023-09-05/stock-market-today-dow-s-p-live-updates",
            "urlToImage": "https://vinsnbwines.com/media/photos/Crooked_FondBlanc_VinBleuet_FrontBack.jpg"
        },
        {
            "Price": "$13",
            "title": "Celler Masroig",
            "description": "A winery dedicated to exceptional wines in Catalonia's Tarragona...",
            //"url": "https://www.etonline.com/sophie-turner-looks-happy-at-wrap-party-days-before-joe-jonas-files-for-divorce-pics-210853",
            "urlToImage": "https://i.pinimg.com/originals/dd/ef/6f/ddef6f0aa201d99b60add8e76c8dcfd2.jpg"
        },
        {
            "Price": "$17.86",
            "title": "MASSERIA - Più Blu",
            "description": "A journey into Italian excellence, embodying tradition and flavor...",
            //"url": "https://news.yahoo.com/across-northern-hemisphere-nows-time-172305713.html",
            "urlToImage": "https://i0.wp.com/www.piublusolutions.it/wp-content/uploads/2015/04/IMG_9447.jpg?fit=770%2C609&ssl=1"
        },
        {
            "Price": "$114.66",
            "title": "Tenuta San Leonardo",
            "description": "Discover the union of Tenuta San Leonardo and Andrea Brusa Vini...",
            //"url": "https://fortune.com/2023/09/06/uaw-strike-nightmare-scenario-for-carmakers-detroit-big-3-union/",
            "urlToImage": "https://andreabrusavini.it/wp-content/uploads/2021/03/BOTT-SAN-LEONARDO-600x600.jpg"
        },
        {
            "Price": "$120.85",
            "title": "Drink Like a King",
            "description": "Get the best home enjoyment with our curated mixed packs - exclusive deals...",
            //"url": "https://www.rockpapershotgun.com/baldurs-gate-3-has-created-a-new-audience-for-rpgs-thanks-to-how-it-expresses-rules-says-larian-ceo",
            "urlToImage": "https://images.squarespace-cdn.com/content/v1/5e900418a3123868fd3b4183/1625195073617-LFWPVTUYWZK2O37R7GQ5/InVinus_Mixed_Pack_1_3.jpg"
        },
        {
            "Price": "$6.98",
            "title": "Rediscover Merlot",
            "description": "the resurgence of Merlot versatile grape diverse and delightful flavors...",
            //"url": "https://removed.com",
            "urlToImage": "https://www.chicagotribune.com/resizer/RHOnoFDaNrY9kYJ_dmrhFB4mbgs=/1600x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archive.tronc/OLWEGHXN3JEPLG5D25623S32TI.jpg"
        },
        {
            "Price": "$29.33",
            "title": "Motto Wine",
            "description": "Meticulously handcrafted wines driven by passion, embodying...",
            //"url": "https://abcnews.go.com/Politics/group-sues-block-trump-2024-ballot-citing-14th/story?id=102964534",
            "urlToImage": "https://doubleknotcreative.com/2018/wp-content/uploads/2017/12/Work_Motto_04-1146x1146.jpg"
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
                        <CaRd title={element.title} description={element.description} imageUrl={element.urlToImage} priCe={element.Price} />
                    </div>
                })}
            </div>
        )
    }
}

export default DollarShop
