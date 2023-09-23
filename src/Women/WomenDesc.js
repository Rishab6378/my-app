import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function WomenDesc() {
    const [dec, setDec] = useState(true)
    const [show, setShow] = useState(false)
    const handleClick = () => {
        if (show == false) {
            setShow(true)
            setDec(false)
        }
        else {
            setShow(false)
        }
    }
    return (
        <>
            <section className="text-gray-600 body-font h-fit" style={{ overflowY: "hidden" }}>
                <div className="container mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-60 truncate">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-7">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="mt-4 font-sarif text-gray-950 font-bold text-2xl">The Francis</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base font-sans">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4 font-sans">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                                {dec && <Link className="text-indigo-500 inline-flex items-center cursor-pointer" onClick={handleClick}>Learn More
                                </Link>}
                            </div>
                        </div>
                    </div>
                </div>
                {show && <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto w-fit	">
                        <div className="xl:w-fit lg:w-fit w-full mx-auto text-center">
                            <p className="leading-relaxed text-lg">Margaret Leonardi's role as the mastermind behind LED's winemaking process is a tale of passion, expertise, and an unceasing pursuit of perfection. Here's an in-depth exploration of her remarkable journey <br />

                                <span className='text-red-900 text-2xl'> 1. A Legacy of Winemaking:</span>
                                Margaret's journey begins with a deep-rooted connection to winemaking. Her family, spanning generations, has been immersed in the world of viticulture and oenology. As a child, she was captivated by the sight of her grandparents and parents tending to the vineyards and crafting wines in time-honored traditions. This familial connection instilled in her a profound respect for the craft, inspiring her to carry the family legacy forward.
                                <br />

                                <span className='text-red-900 text-2xl'>2. Education and Mastery: </span>
                                Driven by her passion, Margaret pursued formal education in viticulture and oenology. She immersed herself in the scientific aspects of winemaking, gaining a comprehensive understanding of grape cultivation, fermentation, and cellar techniques. Her academic background provided her with a strong foundation to complement her familial wisdom. <br />

                                <span className='text-red-900 text-2xl'>3. Harvesting Expertise:</span>
                                Margaret is the architect of LED's grape harvesting process. She possesses an intimate knowledge of the vineyards and the precise timing required for harvesting each varietal. Her discerning eye identifies the optimal moment when grapes are at their peak ripeness, ensuring that they contribute the perfect balance of sugars, acidity, and flavor to the wine. <br />

                                <span className='text-red-900 text-2xl'>4. Art of Crushing:</span>
                                With the harvested grapes in her hands, Margaret takes on the role of curator, overseeing the crushing process. She carefully selects the method of crushing, whether gentle pressing for white wines or the more robust approach for reds. Her attention to detail extends to monitoring temperatures during fermentation, guaranteeing the grapes' full potential is realized. <br />

                                <span className='text-red-900 text-2xl'>5. Blending Alchemy:</span>
                                One of Margaret's most distinctive talents is her artful blending of different grape varieties. This is where her palate shines brightest. With precision, she balances the characteristics of various grapes to create wines that are harmonious and complex. Her expertise allows her to adjust acidity, tannin levels, and fruitiness, ensuring that each bottle bears the signature taste of LED. <br />

                                <span className='text-red-900 text-2xl'>6. Aging Gracefully:</span>
                                Margaret is also the guardian of time in the winemaking process. She meticulously selects the type of oak barrels used for aging and determines the optimal duration. Her expertise in storage conditions allows her to orchestrate the aging process, guiding the wine's transformation into something truly special. <br />

                                <span className='text-red-900 text-2xl'>7. Quality Control:</span>
                                At every stage of production, Margaret's rigorous quality control measures are in place. She frequently samples and evaluates the wines, assessing their progress and ensuring they align with her exacting standards. Her commitment to consistency and excellence is unwavering. <br />

                                <span className='text-red-900 text-2xl'>8. Innovation and Adaptation:</span>
                                While deeply rooted in tradition, Margaret is not content to rest on her laurels. She eagerly embraces innovative winemaking techniques and technology, always seeking ways to refine LED's wines further. Her willingness to adapt and evolve ensures that LED remains at the forefront of the industry. <br />

                                <span className='text-red-900 text-2xl'>9. Passion for Perfection:</span>
                                Above all, Margaret's work is driven by an unbridled passion for winemaking. Her dedication to the craft is palpable in every bottle of LED wine. For her, each vintage is an opportunity to create a sensory masterpiece, a testament to her relentless pursuit of perfection. <br />

                                In summary, Margaret Leonardi's role as the winemaker for LED is a symphony of heritage, education, and boundless passion. Her expertise touches every aspect of the winemaking process, from the vines in the vineyard to the meticulously crafted bottles on the shelves. Her unwavering commitment to quality and innovation ensures that every sip of LED wine is a transcendent experience, a testament to her mastery of the winemaker's art.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-10 mb-6"></span>
                            <h2 className="text-gray-900 font-serif italic font-bold title-font text-4xl">The Nation Francis</h2>
                            <p className="text-gray-950 font-sans text-5xl">Senior Product Developer</p>
                        </div>
                    </div>
                </section>}
            </section>
        </>
    )
}

export default WomenDesc
