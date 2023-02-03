import React from "react"

import "./about.css"
import Slider from "react-slick";

import Zurag from "./assets/eregtei/20230129_160449.jpg"
import Zurag1 from "./assets/eregtei/20EWO75M21.jpg"
import Zurag2 from "./assets/eregtei/A02411C-01.jpg"
import Zurag3 from "./assets/eregtei/c_1101610_bkov.jpg"
import Zurag4 from "./assets/eregtei/ladydrugheartshop_45140952.jpg"
import Zurag5 from "./assets/eregtei/open-uri20190311-104254-17gwswu_.jpeg"
import Zurag6 from "./assets/eregtei/open-uri20211229-2827581-13y5nuq_.jpeg"
import Zurag7 from "./assets/eregtei/open-uri20220624-1787302-1rp7ryg_.jpeg"
import Zurag8 from "./assets/eregtei/open-uri20221101-1291740-l8s46q_.jpeg"
import Zurag9 from "./assets/eregtei/open-uri20221103-1429753-5zjm5p_.jpeg"
import Zurag10 from "./assets/eregtei/open-uri20221103-1430113-1t9iefz_.jpeg"
import Zurag11 from "./assets/eregtei/open-uri20221122-2832809-1x0l0fo_.jpeg"
import Zurag12 from "./assets/eregtei/open-uri20230106-1137019-vwlweg_.jpeg"
import Zurag13 from "./assets/eregtei/open-uri20230112-1323928-1dtnivp_.jpeg"
import Zurag14 from "./assets/eregtei/open-uri20230126-2182883-1o82m61_.jpeg"
import Zurag15 from "./assets/eregtei/open-uri20230130-2428914-16c0gj3_.jpeg"
import Zurag16 from "./assets/eregtei/open-uri20230112-1324055-1ilny22_.jpeg"
import Zurag17 from "./assets/eregtei/open-uri20230201-2603464-g01g9f_.jpeg"
import Zurag18 from "./assets/eregtei/open-uri20230201-2604078-1w9i42b_.jpeg"
import Zurag19 from "./assets/eregtei/open-uri20230118-1673380-boow2f_.jpeg"


const Banner5 = () =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1
    }
    const data = [
        {
            key:1,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",
            img: Zurag,

        },
        {
            key:2,
            img: Zurag1,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:3,
            img: Zurag2,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:4,
            img: Zurag3,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",
        },
        {
            key:5,
            img: Zurag4,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:6,
            img: Zurag5,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:7,
            img: Zurag6,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",
        },
        {
            key:8,
            img: Zurag7,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:9,
            img: Zurag8,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",
        },
        {
            key:10,
            img: Zurag9,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:11,
            title:"Хямдрал",
            description:"",
            img: Zurag10,

        },
        {
            key:12,
            img: Zurag11,
            title:"Гэрийн тавилга",
            description:"$",
            

        },
        {
            key:13,
            img: Zurag12,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:14,
            img: Zurag13,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",
        },
        {
            key:15,
            img: Zurag14,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",
        },
        {
            key:16,
            img: Zurag15,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",
        },
        {
            key:17,
            img: Zurag16,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:18,
            img: Zurag17,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        },
        {
            key:19,
            img: Zurag18,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",
        },
        {
            key:20,
            img: Zurag19,
            title:"Цамц",
            description:"Хасас Цахилгаантай",
            title2:"124,444",

        }
    ]
    return(
        <div className="bodys">

            
                <div className="grid">
                    <h1>Улирлын онцлох эрэгтэй</h1>
                <Slider {...settings}>
                {
                data.map((row)=>(
                    <div className="text">
                        <img src={row.img} alt="/"/>
                        <h2>{row.title}</h2>
                        <p>{row.description}</p>
                        <h3>{row.title2}</h3>
                    </div>
                ))
            }
            </Slider>
            </div>
          
        </div>
    );
};
export default Banner5