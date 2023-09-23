import React from 'react'
import { Link } from 'react-router-dom'
import './DollAr.css'

function DollAr() {
    return (
        <>
            <section className="Q1">
                <div className="Q2">
                    <div className="Q3">
                        <div className="Lactus">The True Taste
                            <p className="Locat"> of the Rift Valley </p>
                        </div>
                        <div className="Elenor">Lying along the equator, the grapes enjoy the warmth of the invigorating. sun
                            Temperature range from a cool 6 to a tropical 32 celsius and annual rainfall is 500 to 600mm. This
                            equatorial climate allows each grapes to mature and ripen slowly, patiently developing every nuance
                            of its fine fruity taste. Naivasha's high altitude of 2000 meters preserves the grapes' delicate
                            flavours. </div>
                    </div>
                </div>
            </section>

            <section className="Q1">
                <div className="Q7">
                    <div className="Q8 Q9"></div>
                    <div className="Q8 Q10"></div>
                    <div className="Q8 Q11"></div>
                    <div className="Q8 Q12"></div>
                </div>
            </section>

            <section className="Q13">
                <div className="Q14">
                    <div className="Q15"></div>
                    <div className="Q16"></div>
                </div>
            </section>

            <section className="Q17">
                <div className="Q18">
                    <span> Red wine</span> is a rich and robust variety made from dark-colored grapes, offering a spectrum of
                    hues from deep
                    ruby
                    to nearly black. Its complex flavors often include dark fruits like blackberries, cherries, and plums,
                    complemented by notes of spices, oak, and sometimes earthiness or florals. Red wines can be dry or sweet,
                    with
                    varying levels of tannins contributing to their structure and aging potential. Familiar red wine varieties
                    encompass Cabernet Sauvignon, Merlot, Pinot Noir, and Syrah. <span>black wine </span> is not
                    a
                    standard classification within the wine industry and is typically used informally to describe red wine due
                    to
                    its deep, dark color. White wine, in contrast, is crafted from green or yellowish grapes or juice without
                    the
                    grape skins. It boasts a lighter body, often presenting crisp and refreshing characteristics with flavors of
                    citrus fruits, apples, pears, melon, and florals. White wines can be sweet or dry, best enjoyed when
                    chilled,
                    and popular selections include Chardonnay, Sauvignon Blanc, Riesling, and Pinot Grigio.
                </div>
            </section>

            <div className="Q19">
                <Link className='Q20' to="/shop">Shop Now &rarr;</Link>
            </div>
        </>
    )
}

export default DollAr
