import React from "react";
import Slider from "react-slick";
import "./about.css"
const Banner2 = () =>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return(
        <div className="bodyr">
            <h2>Улирлын онцлох</h2>
           <Slider {...settings}>
           <div className="banner">
            <img src="https://cdn.cody.mn/img/150349/300x0xwebp/ulirliin_ontslokh_angilal-owliin_sport.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
            <h2 className="text">Өвлийн спорт</h2>  
          </div>
          <div className="banner">
            <img src="https://cdn.cody.mn/img/150350/300x0xwebp/ulirliin_ontslokh_angilal-gaduur_huwtsas.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
            <h2 className="text">Гадуур хувцас</h2>
          </div>
          <div className="banner">
            <img src="https://cdn.cody.mn/img/150351/300x0xwebp/owoldoo_beldey_angilal-owliin_gutal.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
            <h2 className="text">Өвлийн гутал</h2>
          </div>
          <div className="banner">
            <img src="https://cdn.cody.mn/img/150352/300x0xwebp/owoldoo_beldey_angilal-agaar_tsewershuulegch.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
            <h2 className="text">Агааржуулагч & Агаар цэвэршүүлэгч</h2>
          </div>
          <div className="banner">
            <img src="https://cdn.cody.mn/img/150354/300x0xwebp/owoldoo_beldey_angilal-malgai_oroolt.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
            <h2 className="text">Хүүхдийн дулаан цамц</h2>
          </div>
          <div className="banner">
            <img src="https://cdn.cody.mn/img/150355/300x0xwebp/ulirliin_ontslokh_angilal-vitamin.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
            <h2 className="text">Малгай & Ороолт бээлий</h2>
          </div>    
         
        </Slider>


        </div>
    );
};
export default Banner2