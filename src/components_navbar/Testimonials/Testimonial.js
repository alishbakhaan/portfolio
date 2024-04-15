import React from "react";
import '../Testimonials/Testimonial.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProfilePic1 from '../../img/profile1.jpg';
import ProfilePic2 from '../../img/profile2.jpg';
import ProfilePic3 from '../../img/profile3.jpg';
import ProfilePic4 from '../../img/profile4.jpg';
import ProfilePic5 from '../../img/profile5.jpg';
import ProfilePic6 from '../../img/profile6.jpg';
import { Pagination } from "swiper";
import 'swiper/modules/pagination.css';
import 'swiper/css';

const Testimonial = () =>{
  const clients=[
    {
      img: ProfilePic1,
      review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      img: ProfilePic2,
      review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      img: ProfilePic3,
      review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      img: ProfilePic4,
      review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      img: ProfilePic5,
      review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      img: ProfilePic6,
      review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ]
    return(
   <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional work</span>
        <span>From me.....</span>
        <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background:"skyblue"}}></div>
      </div>
      {/* slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
     {clients.map((client, index)=>{
     return(
      <SwiperSlide key={index}>
          <img src={client.img} alt=""/>
          <span>{client.review}</span>
      </SwiperSlide>
           );
     })}
      </Swiper>
   </div>
    )
}

export default Testimonial;