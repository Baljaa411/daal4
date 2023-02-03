import React from "react"
import "./home.css"
import Zurag from "../assets/sale.webp"
import Zurag1 from "../assets/geriin-tawilga.webp"
import Zurag2 from "../assets/tsahilgaan-heregsel.webp"
import Zurag3 from "../assets/togloom.webp"
import Zurag4 from "../assets/aris-archilgaa.webp"
import Zurag5 from "../assets/technology.webp"
import Zurag6 from "../assets/eruul-mend.webp"
import Zurag7 from "../assets/unet-edlel.webp"
import Zurag8 from "../assets/sport.webp"
import Zurag9 from "../assets/tejeewer-amitnii-hangamj.webp"
const Home = () =>{
    const data = [
        {
            key:1,
            title:"Хямдрал",
            description:"",
            img: Zurag,

        },
        {
            key:2,
            img: Zurag1,
            title:"Гэрийн тавилга",
            description:"$",
            

        },
        {
            key:3,
            img: Zurag2,
            title:"Цахилгаан хэрэгсэл",
            description:"$",
            

        },
        {
            key:4,
            img: Zurag3,
            title:"Тоглоом & Хобби",
            description:"$",
            

        },
        {
            key:5,
            img: Zurag4,
            title:"Арьс арчилгаа",
            description:"$",
            

        },
        {
            key:6,
            img: Zurag5,
            title:"Технологи",
            description:"$",
            

        },
        {
            key:7,
            img: Zurag6,
            title:"Эрүүл мэнд",
            description:"$",
            

        },
        {
            key:8,
            img: Zurag7,
            title:"Үнэт эдлэл",
            description:"$",
            

        },
        {
            key:9,
            img: Zurag8,
            title:"Спорт",
            description:"$",
            

        },
        {
            key:10,
            img: Zurag9,
            title:"Тэжээвэр амьтны хангамж",
            description:"$",
            

        }
    ]
    return(
        <div>
            <div className="grid">
            {
            data.map((row)=>(
                <div className="text">
                    <img src={row.img} alt="/"/>
                    <h2>{row.title}</h2>
                    <p>{row.description}</p>
                </div>
            ))
           }
            </div>
        </div>
    );
};
export default Home