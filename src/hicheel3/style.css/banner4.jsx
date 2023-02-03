import React from "react"

import "./about.css"
import Slider from "react-slick";

import Zurag from "./assets/emegtei/20230129_163453.jpg"
import Zurag1 from "./assets/emegtei/BBB07006.jpg"
import Zurag2 from "./assets/emegtei/BBB09699.jpg"
import Zurag3 from "./assets/emegtei/E1_MD5_12_01_01_001.jpg"
import Zurag4 from "./assets/emegtei/open-uri20220616-1330189-6k9434_.jpeg"
import Zurag5 from "./assets/emegtei/open-uri20220811-3887030-1e8pvf2_.jpeg"
import Zurag6 from "./assets/emegtei/open-uri20221018-104356-13zxb7v_.jpeg"
import Zurag7 from "./assets/emegtei/open-uri20221018-104356-gvbgcp_.jpeg"
import Zurag8 from "./assets/emegtei/open-uri20221018-104625-1pbcwud_.jpeg"
import Zurag9 from "./assets/emegtei/open-uri20221206-3774352-10yzryg_.jpeg"
import Zurag10 from "./assets/emegtei/open-uri20221229-745958-n963qn_.jpeg"
import Zurag11 from "./assets/emegtei/open-uri20230118-1673422-2nw6uj_.jpeg"
import Zurag12 from "./assets/emegtei/open-uri20230125-2028182-1jumqop_.jpeg"
import Zurag13 from "./assets/emegtei/open-uri20230125-2028182-kf95v8_.jpeg"
import Zurag14 from "./assets/emegtei/open-uri20230125-2028183-3stjfi_.jpeg"
import Zurag15 from "./assets/emegtei/open-uri20230126-2182781-idryi2_.jpeg"
import Zurag16 from "./assets/emegtei/open-uri20230130-2502517-9zvone_.jpeg"
import Zurag17 from "./assets/emegtei/open-uri20230130-2502533-1hpm8za_.jpeg"
import Zurag18 from "./assets/emegtei/open-uri20230201-2604078-1dr1xnx_.jpeg"
import Zurag19 from "./assets/emegtei/PO-761_white1.png"


const Banner4 = () =>{
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
                <h1>Улирлын онцлох эмэгтэй</h1>
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
export default Banner4