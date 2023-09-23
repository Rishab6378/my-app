import './HomePage.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
    const [show, setShow] = useState(true)
    const handleClick = () => {
        if (show == true) {
            setShow(true)
            setShow1(false)
            setShow2(false)
        }
        else {
            setShow(true)
            setShow1(false)
            setShow2(false)

        }
    }

    const [show1, setShow1] = useState(false)
    const handleClick1 = () => {
        if (show1 == false) {
            setShow1(true)
            setShow(false)
            setShow2(false)
        }
    }

    const [show2, setShow2] = useState(false)
    const handleClick2 = () => {
        if (show2 == false) {
            setShow2(true)
            setShow(false)
            setShow1(false)
        }
    }

    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])

    return (
        <>

            <header className="text-gray-50 body-font bg-neutral-950">
                <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 not-italic text-4xl text-gray-50">The Francis</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-10 text-bold text-blue-500" to="/">MEN</Link>
                        <Link className="mr-10 hover:text-blue-500" to="/women" target='blank'>WOMEN</Link>
                        <Link className="mr-10 hover:text-blue-500" to="/child" target='blank'>KIDS</Link>
                    </nav>
                </div>
            </header>


            <section className="section">
                <div className="main">
                    <div className="collect">EXCELLENT WINE COLLECTION</div>
                    <div className="cold"><span className="V6">T</span>he <span className="V6">W</span>ine <span className="V6">C</span>ountry</div>
                    <div className="intro">
                        We introduce excellent collection of white and red wines <br />Feel the scent of sun and happiness.
                    </div>
                    <Link className="discover" to="/Discover" target='blank'>DISCOVER MORE</Link>

                </div>
            </section>

            <section className="section1">
                <div className="making">Winemaking Philosophy</div>
                <div className="philosophy">
                    <div className="contain">
                        <div className="gold">
                            <img className="img" src="https://static.vecteezy.com/system/resources/previews/020/599/449/original/grape-fruits-sign-icon-in-flat-style-grapevine-illustration-on-black-round-background-with-long-shadow-wine-grapes-business-concept-vector.jpg" alt="" />
                        </div>
                        <div className="tag">
                            Vineyard
                        </div>
                        <div className="content45">
                            A vineyard is a plantation of grape-bearing vines, grown mainly for winemaking, but also raisins,
                            table
                            grapes and non-alcoholic grape juice. The science, practice and study of vineyard production is
                            known as
                            viticulture1.
                        </div>
                    </div>
                    <div className="contain">
                        <div className="gold">
                            <img className="img" src="https://static.vecteezy.com/system/resources/thumbnails/008/441/914/small_2x/wine-glass-and-splashing-symbol-design-illustration-on-white-background-glass-wine-icon-drink-silhouette-symbol-isolated-on-white-free-vector.jpg" alt="" />
                        </div>
                        <div className="tag">
                            Restaurent
                        </div>
                        <div className="content45">
                            Borrowing from a European format, The Wine Company is a combo retail store plus bar. Browse, pick a
                            bottle, and if you choose to drink it there the staff will chill it for you.the wines are priced in
                            MRP.
                        </div>
                    </div>
                    <div className="contain">
                        <div className="gold">
                            <img className="img" src="https://i.pinimg.com/originals/fd/bd/76/fdbd7658a567dac5de5ad30fb2808b3e.jpg" alt="" />
                        </div>
                        <div className="tag">
                            Wine Store
                        </div>
                        <div className="content45">
                            Welcome! We created Wine.com to revolutionize the way people like you discover, buy and enjoy wine.
                            Being wine lovers ourselves, we’re extremely proud to bring you the world’s largest selection.I
                            found a few wine stores near you.
                        </div>
                    </div>
                    <div className="contain">
                        <div className="gold">
                            <img className="img" src="https://th.bing.com/th/id/OIP.gUeDwGSJjpwIYMc8v5_v3AHaHa?pid=ImgDet&rs=1" alt="" />
                        </div>
                        <div className="tag">
                            Our Story
                        </div>
                        <div className="content45">
                            For the first time since its inception in 2007, Fratelli is proud to present its award winning
                            wines.
                            The same wines, much loved across India, now have a new look!Brought together by
                            love and driven forward by passion.
                        </div>
                    </div>
                </div>
                <div className="Doker">
                    <div className="pndot">
                        <div className="pn1dot"><span className="V6">D</span>iscover. <span className="V6">T</span>aste. <span className="V6">E</span>njoy</div>
                        <div className="pn2dot">When you Start smelling Wine, thibk big to small Are their Fruits? think of broad
                            Categories first,
                            citrus, or tropical fruits in Whites or, When testing reds, red fruits, blue fruits or black fruits.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section2">
                <div className="centered">RIESLING</div>
                <img className="dead" src="https://images.vivino.com/thumbs/ZPT8KyUqTl6kY6Ndn5wgFg_pb_x600.png" alt="" />
                <div className="sunny">
                    <Link className="new" to="/newdetail" target='blank'>What's New?</Link>
                    <div className="new1">A <span className="V6">S</span>unny <span className="V6">W</span>ine <span className="V6">I</span>con</div>
                </div>

                <div className="sunny1">
                    <Link to="" className="dollar">$99.99</Link>
                    <div className="timing">
                        <div className="">{time.getHours()}</div>
                        <div className="">{time.getMinutes()}</div>
                        <div className="">{time.getSeconds()}</div>
                    </div>
                    <div className="timing1">
                        <div className="">Hours</div>
                        <div className="">Minutes</div>
                        <div className="">Seconds</div>
                    </div>
                    <Link to="/Dollar" target='blank' className="novel">Shop Now &larr;</Link>
                </div>
            </section>

            <section className="section2 merchant">
                <div className="product">
                    Our Product
                </div>
                <div className="various">
                    <Link to="/all" target='blank'>All</Link>
                    <Link to="/red" target='blank'>Red Wines</Link>
                    <Link to="/white" target='blank'>White Wines</Link>
                    <Link to="/rose" target='blank'>Rose Wines</Link>
                </div>
                <div className="variety">
                    <div className="bottle">
                        <img className="Riesling" src="https://cdn.shopify.com/s/files/1/0293/4466/1609/products/Untitleddesign-2020-11-05T132837.359.png?v=1604548739" alt="" />
                    </div>
                    <div className="bottle">
                        <img className="Riesling" src="https://www.rathbonewinegroup.com/wp-content/uploads/2017-reserve-pinot-noir.png" alt="" />
                    </div>
                    <div className="bottle">
                        <img className="Riesling" src="https://th.bing.com/th/id/R.fd5b1df6607032964b8faa885e803b6e?rik=M71OfywflQ%2bzgQ&riu=http%3a%2f%2fwww.alhamracellar.com%2fwp-content%2fuploads%2f3323-600x975.png&ehk=1caIQAh1dzQVTQMrw7G4OCBobl6fIAom0bcXWyLtdvI%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>
                    <div className="bottle">
                        <img className="Riesling" src="https://s3.amazonaws.com/boissetfamilyestates-assets/images/bottle-shots/Estate_Merlot_2012_transparent.png" alt="" />
                    </div>
                </div>
                <div className="bcontent">
                    <div className="b1content">Riesling</div>
                    <div className="b1content">Pinot Noir</div>
                    <div className="b1content">Pinot Griglo</div>
                    <div className="b1content">Merlot</div>
                </div>
                <div className="bcontent">
                    <div className="b1content price">$165.3</div>
                    <div className="b1content price">$165.3</div>
                    <div className="b1content price">$165.3</div>
                    <div className="b1content price">$165.3</div>
                </div>
            </section>

            <section className="section3">
                <div className="todle1"></div>
                <div className="todle">
                    <div className="solet">Since 2010</div>
                    <div className="sigma1">
                        <span className="V6">P</span>erfect <span className="V6">W</span>hite <span className="V6">W</span>ines
                    </div>
                    <div className="dockel">
                        After the harvest, the grapes are taken into a winary and prepared for primary format. At this stage red
                        wine making diverges form white wine making.
                    </div>
                    <ul>
                        <li className="soccer1">Chardonnay</li>
                        <li className="soccer1">Sauvignon Blanc</li>
                        <li className="soccer1">Riesling</li>
                    </ul>
                    <Link className="norway" to="/riesling" target='blank'>Shop Now</Link>
                </div>
            </section>

            <section className="section3">
                <div className="todle  kost1">
                    <div className="solet">Since 2010</div>
                    <div className="sigma1">
                        <span className="V6">E</span>xcellent <span className="V6">R</span>ed <span className="V6">W</span>ines
                    </div>
                    <div className="dockel">
                        After the harvest, the grapes are taken into a winary and prepared for primary format. At this stage red
                        wine making diverges form white wine making.
                    </div>
                    <ul>
                        <li className="soccer1">Chardonnay</li>
                        <li className="soccer1">Sauvignon Blanc</li>
                        <li className="soccer1">Riesling</li>
                    </ul>
                    <Link className="norway" to="/exred" target='blank'>Shop Now</Link>
                </div>
                <div className="todle1 kost"></div>
            </section>

            <section className="section4">
                <div className="globel">
                    <div className="pick1"><span className='span'>W</span>hat <span className="V6">G</span>et people say</div>
                    <div className="picture">
                        <div onClick={handleClick} className="pcot denim1"></div>
                        <div onClick={handleClick1} className="pcot denim2"></div>
                        <div onClick={handleClick2} className="pcot denim3"></div>
                    </div>
                    {show && <div className="namedot">DARRELL FLORES</div>}
                    {show && <div className="locate">Designer, London</div>}
                    {show && <div className="descp">"Duis aute irure dolor in reprehenderit in esse voluptate velit cillum dolore eu fugial
                        nulla pariatur excepteur sint occaecat"</div>}

                    {show1 && <div className="namedot">KYLE STEVE</div>}
                    {show1 && <div className="locate">choreographer, Uk</div>}
                    {show1 && <div className="descp">"A choreographer designs dance routines, synchronizes movements with music, and collaborates with dancers and production teams to create performances."</div>}

                    {show2 && <div className="namedot">DOCTOR STRANGE</div>}
                    {show2 && <div className="locate">Developer, Africa</div>}
                    {show2 && <div className="descp">"Certainly! A developer is a professional who designs, creates, and maintains software applications, websites, or other digital solutions."</div>}
                </div>
            </section>

            <section className="section5">
                <div className="blog">Wize Blog</div>
                <div className="mount">
                    <div className="m1">
                        <div className="zack dop1 "></div>
                        <div className="jack1">Process of Our Award Winning Wines</div>
                        <div className="jack2">January 15,2017</div>
                    </div>
                    <div className="m1">
                        <div className="zack dop2"></div>
                        <div className="jack1">Varietal Labelling Of New World Wines</div>
                        <div className="jack2">January 15,2017</div>
                    </div>
                    <div className="m1">
                        <div className="zack dop3"></div>
                        <div className="jack1">Daily Wine News: In Favor of Reds </div>
                        <div className="jack2">January 15,2017</div>
                    </div>
                    <div className="m1">
                        <div className="zack dop4"></div>
                        <div className="jack1">Good Barolo Comes To Those Who Wait</div>
                        <div className="jack2">January 15,2017</div>
                    </div>
                </div>
            </section>

            <footer className="bg-white dark:bg-gray-800 w-full py-8" style={{ backgroundColor: "#0e0e0e" }}>
                <div className="max-w-screen-xl px-4 mx-auto">
                    <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
                        <li className="my-2">
                            <Link className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" to="#">
                                FAQ
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" to="#">
                                Configuration
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" to="#">
                                Github
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" to="#">
                                LinkedIn
                            </Link>
                        </li>
                    </ul>
                    <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
                        <Link to="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                </path>
                            </svg>
                        </Link>
                        <Link to="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                                </path>
                            </svg>
                        </Link>
                        <Link to="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792">
                                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                </path>
                            </svg>
                        </Link>
                        <Link to="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                                </path>
                            </svg>
                        </Link>
                        <Link to="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                                </path>
                            </svg>
                        </Link>
                    </div>
                    <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
                        <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                            </div>
                            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                        Created by Francis
                    </div>
                </div>
            </footer>

        </>
    )
}
export default HomePage