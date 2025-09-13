import React from "react";
import "../Styles/Accessories.css";
import battery from "../images/battery.jpg";
import cse from "../images/cs.jpg";
import props from "../images/props.png";
import filters from "../images/nd.png";
import nd3 from "../images/nd3.png";
import rc2 from "../images/rc2.png";
import rc from "../images/rc.png";
import rcn3 from "../images/rcn3.png";
import rcpro from "../images/rcpro.png";
import rcpro2 from "../images/rcpro2.png";
import rcplus from "../images/rcplus.webp";
import goggle from "../images/n3g.png";
import chub from "../images/chub.png";
import charger from "../images/chg.png";

const accessories = [
    { name: "Extra Battery", price: 99, img: battery },
    { name: "Carrying Case", price: 59, img: cse },
    { name: "Propellers", price: 29, img: props },
    { name: "ND Filters Set(Mini 4 Pro)", price: 79, img: nd3 },
    { name: "ND Filters Set(Mavic 3 Pro)", price: 139, img: filters },
    { name: "DJI RC 2", price: 369, img: rc2 },
    { name: "DJI RC", price: 309, img: rc },
    { name: "DJI RC 2 (Refurbished Unit)", price: 299, img: rc2 },
    { name: "DJI RC (Refurbished Unit)", price: 369, img: rc },
    { name: "DJI RC-N3", price: 129, img: rcn3 },
    { name: "DJI RC Pro", price: 1199, img: rcpro },
    { name: "DJI RC-N3 (Refurbished Unit)", price: 109, img: rcn3 },
    { name: "DJI RC Pro 2", price: 1399, img: rcpro2 },
    { name: "DJI RC Plus (Inspire 3)", price: 1600, img: rcplus },
    { name: "DJI RC Plus", price: 1500, img: rcplus },
    { name: "DJI RC Pro (Refurbished Unit)", price: 959, img: rcpro },
    { name: "DJI Goggles N3", price: 229, img: goggle },
    { name: "DJI Goggles N3 (Refurbished Unit)", price: 140, img: goggle },
    { name: "DJI Avata 2 Two-Way Charging Hub", price: 59, img: chub },
    { name: "DJI 65W Portable Charger", price: 45, img: charger },
];

function Accessories({ addToCart }) {
    console.log("Accessories addToCart prop:", addToCart);
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // ✅ burda yoxlanılır
    return (

        <div className="accessories-page">
            <h1 className="accessories-header">Accessories</h1>
            <div className="accessories-grid">
                {accessories.map((item, i) => (
                    <div key={i} className="accessory-card">
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button
                            className="orden"
                            onClick={() => {
                                if (!isLoggedIn) {
                                    alert("Please first Log In or Sign Up!");
                                    return;
                                }else{
                                addToCart({ name: item.name, price: item.price });
                                }
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );


}

export default Accessories;
