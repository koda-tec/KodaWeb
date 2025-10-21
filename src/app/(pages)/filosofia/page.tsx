"use client";

import dynamic from "next/dynamic";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IntroSlide } from "@/app/components/about-slides/IntroSlide";
import { HistorySlide } from "@/app/components/about-slides/HistorySlide";
import { MissionVisionSlide } from "@/app/components/about-slides/MissionVisionSlide";
import { DifferentiatorsSlide } from "@/app/components/about-slides/DifferentiatorsSlide";
import { TeamSlide } from "@/app/components/about-slides/TeamSlide";
import { CtaSlide } from "@/app/components/about-slides/CtaSlide";

const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), { ssr: false });

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-4xl"
      >
        <SwiperSlide><IntroSlide /></SwiperSlide>
        <SwiperSlide><HistorySlide /></SwiperSlide>
        <SwiperSlide><MissionVisionSlide /></SwiperSlide>
        <SwiperSlide><DifferentiatorsSlide /></SwiperSlide>
        <SwiperSlide><TeamSlide /></SwiperSlide>
        <SwiperSlide><CtaSlide /></SwiperSlide>
      </Swiper>
    </div>
  );
}
