import '../Styles/Drones.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import mini3 from '../images/mini3.png';
import flip from '../images/flip.png';
import neo from '../images/djiNeo.png';
import air3s from '../images/advanced3s.png';
import mini4pro from '../images/mini4pro.png';
import mavic3pro from '../images/mavic3pro.png';
import mavic3classic from '../images/m3.png';
import inspire3 from '../images/i3.png';
import inspire2 from '../images/i2.png';
import one from '../images/one.svg';
import two from '../images/two.svg';
import three from '../images/three.svg';
import avata from '../images/avata.png';
import goggles from '../images/gg3.avif';
import motion3 from '../images/mt3.png';



const categories = ['Entry-Level', 'Advanced', 'Flagship', 'Immersive', 'Cinematic'];

function Drones() {
    const navigate = useNavigate();

    const addToCartInstant = (drone) => {
        setCart(prev => {
            if (prev.find(i => i.name === drone.name)) return prev;
            const next = [...prev, drone];
            localStorage.setItem("cart", JSON.stringify(next));

            return next;
        });
    };

    const handleAdd = (drone) => {
        addToCartInstant(drone);
        setAddedMessage(p => ({ ...p, [drone.name]: true }));
        setTimeout(() => setAddedMessage(p => ({ ...p, [drone.name]: false })), 900);
        navigate("/cart");
    };

    const [cart, setCart] = React.useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem("cart") || "[]");
            return Array.isArray(saved) ? saved : [];
        } catch {
            return [];
        }
    });

    const [activeCategory, setActiveCategory] = useState('Entry-Level');
    const [activeAvata, setActiveAvata] = useState('DJI Avata 2');


    const addToCart = (drone) => {
        setCart(prev => {
            if (prev.find(item => item.name === drone.name)) return prev;
            return [...prev, drone];

        });
    };

    const removeFromCart = (name) => {
        setCart(prev => prev.filter(item => item.name !== name));
    };

    React.useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);



    const [addedMessage, setAddedMessage] = useState({});
    return (
        <main>

            <h1 className="head-name">Camera Drones</h1>
            <div className="total-drone">
                <h2>Which Drone Is Right for Me?</h2>


                <div className="category-tabs">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {activeCategory === 'Entry-Level' && (
                    <div className="drone-container">
                        <div className="card card1">
                            <img src={mini3} alt="" />
                            <h2>DJI Mini 3</h2>
                            <p>Premier Entry-Level Camera Drone</p>
                            <h3>From USD $419</h3>
                            <button
                                onClick={() => {
                                    const drone = { name: "DJI Mini 3", price: 419 };
                                    addToCart(drone);
                                    setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                    setTimeout(() => {
                                        setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                    }, 900);
                                }}
                            >
                                {addedMessage["DJI Mini 3"] ? "Added to Cart" : "Buy now"}
                            </button>
                        </div>

                        <div className="card card2">
                            <img src={flip} alt="" />
                            <h2>DJI Flip</h2>
                            <p>All-in-One Vlog Camera Drone</p>
                            <h3>From USD $439</h3>
                            <button
                                onClick={() => {
                                    const drone = { name: "DJI Flip", price: 439 };
                                    if (!cart.find(item => item.name === drone.name)) {
                                        setCart([...cart, drone]);
                                    }
                                    setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                    setTimeout(() => {
                                        setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                    }, 900);
                                }}
                            >
                                {addedMessage["DJI Flip"] ? "Added to Cart" : "Buy now"}
                            </button>
                        </div>

                        <div className="card card3">
                            <img src={neo} alt="" />
                            <h2>DJI Neo</h2>
                            <p>A Palm-Sized Drone for Vlogs</p>
                            <h3>From USD $199</h3>
                            <button
                                onClick={() => {
                                    const drone = { name: "DJI Neo", price: 199 };
                                    if (!cart.find(item => item.name === drone.name)) {
                                        setCart([...cart, drone]);
                                    }
                                    setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                    setTimeout(() => {
                                        setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                    }, 900);
                                }}
                            >
                                {addedMessage["DJI Neo"] ? "Added to Cart" : "Buy now"}
                            </button>
                        </div>
                    </div>
                )}

                {activeCategory === 'Advanced' && (
                    <div className="drone-container">
                        <div className="card card4">
                            <img src={air3s} alt="" />
                            <h2>DJI Air 3S</h2>
                            <p>Dual-Camera Drone for Advanced Travel Photography</p>
                            <h3>From USD $1,099</h3>
                            <button
                                onClick={() => {
                                    const drone = { name: "DJI Air 3S", price: 1099 };
                                    if (!cart.find(item => item.name === drone.name)) {
                                        setCart([...cart, drone]);
                                    }
                                    setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                    setTimeout(() => {
                                        setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                    }, 900);
                                }}
                            >
                                {addedMessage["DJI Air 3S"] ? "Added to Cart" : "Buy now"}
                            </button>
                        </div>

                        <div className="card card5">
                            <img src={mini4pro} alt="" />
                            <h2>DJI Mini 4 Pro</h2>
                            <p>All-In-One Omni Obstacle Sensing Mini Camera Drone</p>
                            <h3>From USD $759</h3>
                            <button
                                onClick={() => {
                                    const drone = { name: "DJI Mini 4 Pro", price: 759 };
                                    if (!cart.find(item => item.name === drone.name)) {
                                        setCart([...cart, drone]);
                                    }
                                    setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                    setTimeout(() => {
                                        setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                    }, 900);
                                }}
                            >
                                {addedMessage["DJI Mini 4 Pro"] ? "Added to Cart" : "Buy now"}
                            </button>
                        </div>
                    </div>
                )}

                {activeCategory === 'Flagship' && (
                    <div className="drone-container">
                        <div className="card card6">
                            <img src={mavic3pro} alt="" />
                            <h2>DJI Mavic 3 Pro</h2>
                            <p>Triple-Lens Flagship Camera Drone</p>
                            <h3>From USD $2,199</h3>
                            <button
                                onClick={() => {
                                    const drone = { name: "DJI Mavic 3 Pro", price: 2199 };
                                    if (!cart.find(item => item.name === drone.name)) {
                                        setCart([...cart, drone]);
                                    }
                                    setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                    setTimeout(() => {
                                        setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                    }, 900);
                                }}
                            >
                                {addedMessage["DJI Mavic 3 Pro"] ? "Added to Cart" : "Buy now"}
                            </button>
                        </div>

                        <div className="card card7">
                            <img src={mavic3classic} alt="" />
                            <h2>DJI Mavic 3 Classic</h2>
                            <p>Cost-Efficient Professional Camera Drone</p>
                            <h3>From USD $1,179</h3>
                            <button
                                onClick={() => {
                                    const drone = { name: "DJI Mavic 3 Classic", price: 1179 };
                                    if (!cart.find(item => item.name === drone.name)) {
                                        setCart([...cart, drone]);
                                    }
                                    setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                    setTimeout(() => {
                                        setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                    }, 900);
                                }}
                            >
                                {addedMessage["DJI Mavic 3 Classic"] ? "Added to Cart" : "Buy now"}
                            </button>
                        </div>
                    </div>
                )}

                {activeCategory === 'Immersive' && (
                    <div className="drone-container ">
                        <div className="avata-container">
                            <div className="avata-top-container">

                                <div className="about">
                                    <p className='head-name-avata'>DJI Avata 2</p>
                                    <p className="description">DJI Avata 2 delivers FPV flight with improved performance. Pair Avata 2 with DJI Goggles 3 and DJI RC Motion 3 for more fun.</p>
                                </div>

                                <div className="sale">
                                    <p>From USD $999</p>
                                    <button
                                        onClick={() => {
                                            const drone = { name: "DJI Avata 2", price: 999 };
                                            if (!cart.find(item => item.name === drone.name)) {
                                                setCart([...cart, drone]);
                                            }
                                            setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                            setTimeout(() => {
                                                setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                            }, 900);
                                        }}
                                    >
                                        {addedMessage["DJI Avata 2"] ? "Added to Cart" : "Buy now"}
                                    </button>
                                </div>

                            </div>

                            <div className="avata-total">

                                <div className="avata-selection">
                                    {['DJI Avata 2', 'DJI Goggles 3', 'DJI RC Motion 3'].map((item) => (
                                        <div
                                            key={item}
                                            className={`avata ${activeAvata === item ? 'active' : ''}`}
                                            onClick={() => setActiveAvata(item)}
                                        >
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="avata-main-container">
                                    {activeAvata === 'DJI Avata 2' && (
                                        <div className="avata-section">
                                            <div className="left-panel">
                                                <div className="details detail1">
                                                    <img src={one} alt="" />
                                                    <p>A 1/1.3-inch image sensor enables low- <br />light fidelity, 4K HDR video, and great videos at a 155° FOV.</p>
                                                </div>

                                                <div className="details detail2">
                                                    <img src={two} alt="" />
                                                    <p>Featuring an integrated propeller guard and improved visual positioning for seamless navigation.</p>
                                                </div>

                                                <div className="details detail3">
                                                    <img src={three} alt="" />
                                                    <p>Use the One-Tap Edit function in the LightCut app to create engaging content.</p>
                                                </div>
                                            </div>

                                            <div className="right-panel">
                                                <img width={'450px'} height={'450px'} src={avata} alt="" />
                                            </div>
                                        </div>
                                    )}

                                    {activeAvata === 'DJI Goggles 3' && (
                                        <div className="avata-section">
                                            <div className="left-panel">
                                                <div className="details detail1">
                                                    <img src={one} alt="" />
                                                    <p>The Micro-OLED high-definition display combined with ultra-low-latency video transmission.</p>
                                                </div>

                                                <div className="details detail2">
                                                    <img src={two} alt="" />
                                                    <p>The new Real View PiP lets you conveniently observe your surroundings without removing the goggles.</p>
                                                </div>

                                                <div className="details detail3">
                                                    <img src={three} alt="" />
                                                    <p>O4 video transmission offers as low as 24ms latency and up to 60Mbps transmission bitrate.</p>
                                                </div>
                                            </div>

                                            <div className="right-panel">
                                                <img width={'450px'} height={'450px'} src={goggles} alt="" />
                                            </div>
                                        </div>
                                    )}

                                    {activeAvata === 'DJI RC Motion 3' && (
                                        <div className="avata-section">
                                            <div className="left-panel">
                                                <div className="details detail1">
                                                    <img src={one} alt="" />
                                                    <p>Perform flips, sideway rolls, or 180° drifts with a single push—making aerobatics accessible.</p>
                                                </div>

                                                <div className="details detail2">
                                                    <img src={two} alt="" />
                                                    <p>Use the RC Motion 3 to control an AR cursor and navigate the menu on the screen of the goggles.</p>
                                                </div>

                                                <div className="details detail3">
                                                    <img src={three} alt="" />
                                                    <p>A natural layout of various function buttons on its compact body enables convenient operation.</p>
                                                </div>
                                            </div>

                                            <div className="right-panel">
                                                <img width={'450px'} height={'450px'} src={motion3} alt="" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {activeCategory === 'Cinematic' && (
                    <div className="drone-container">
                        <div className="card card9">
                            <img src={inspire3} alt="" />
                            <h2>DJI Inspire 3 (Zenmuse X9-8K Air)</h2>
                            <p>8K Full-frame Professional Cinematography Drone</p>
                            <h3>From USD $16,499</h3>
                            <button
                                onClick={() => {
                                    const drone = { name: "DJI Inspire 3 (Zenmuse X9-8K Air)", price: 16499 };
                                    if (!cart.find(item => item.name === drone.name)) {
                                        setCart([...cart, drone]);
                                    }
                                    setAddedMessage(prev => ({ ...prev, [drone.name]: true }));
                                    setTimeout(() => {
                                        setAddedMessage(prev => ({ ...prev, [drone.name]: false }));
                                    }, 900);
                                }}
                            >
                                {addedMessage["DJI Inspire 3 (Zenmuse X9-8K Air)"] ? "Added to Cart" : "Buy now"}
                            </button>
                        </div>

                        <div className="card card10">
                            <img src={inspire2} alt="" />
                            <h2>DJI Inspire 2 (Zenmuse X9-8K Air)</h2>
                            <p>8K Full-frame Professional Cinematography Drone</p>
                            <h3>Out of Stock</h3>
                            <button>Notify Me</button>
                        </div>
                    </div>
                )}

            </div>
        </main>

    )
}

export default Drones;