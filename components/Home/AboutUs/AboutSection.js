"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CardComponent from "./CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "./styles.css";

function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-5/6 flex flex-col items-center justify-center"></div>
      <div className="mt-10 flex flex-col w-4/6 items-center justify-center space-y-8">
        <h2
          id="cotizar"
          className="font-extrabold text-3xl md:text-5xl text-center"
        >
          GALERIA DE RECUERDOS
        </h2>
        <p className="text-center">todavia son muy pocos</p>
      </div>
      <div className="pt-10 w-full flex justify-center">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/assets/img/vertical/v1.jpeg"
              alt="Slide 1"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/img/vertical/v2.jpeg"
              alt="Slide 2"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/img/vertical/v3.jpeg"
              alt="Slide 3"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/img/vertical/v4.jpeg"
              alt="Slide 4"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/img/vertical/v5.jpeg"
              alt="Slide 5"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/img/vertical/pregunta 1.jpg"
              alt="Slide 5"
              width={500}
              height={500}
            />
          </SwiperSlide>
                          <SwiperSlide>
            <Image
              src="/assets/img/vertical/Pregunta 2.jpg"
              alt="Slide 5"
              width={500}
              height={500}
            />
          </SwiperSlide>
                                    <SwiperSlide>
            <Image
              src="/assets/img/vertical/Pregunta 3.jpg"
              alt="Slide 5"
              width={500}
              height={500}
            />
          </SwiperSlide>
                                          <SwiperSlide>
            <Image
              src="/assets/img/vertical/Pregunta 4.jpg"
              alt="Slide 5"
              width={500}
              height={500}
            />
          </SwiperSlide>
                                          <SwiperSlide>
            <Image
              src="/assets/img/vertical/Pregunta 5.jpg"
              alt="Slide 5"
              width={500}
              height={500}
            />
          </SwiperSlide>
                
        </Swiper>
      </div>
    </div>
  );
}

export default AboutSection;
