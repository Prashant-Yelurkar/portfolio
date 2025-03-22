import React, { Component } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./swiper.module.css"
import profileIcon from '@/Assets/Images/profile1.png'
import Image from 'next/image';
const IndustrySwiper = ({ data }) => {
    return (
        <div className={styles.bottom_oc}>
            <Swiper
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={
                    {
                        "0": {
                            "slidesPerView": 1,
                            "spaceBetween": 10
                        },
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 50
                        }
                    }
                }

                pagination={{ clickable: true }}
                modules={[Autoplay, Navigation, Pagination]}
                className={styles.swiper}
            >
                {data.map((testmonianl, index) => (

                    <SwiperSlide className={styles.swiper_slide}  >
                        <div
                            className={styles.card}>
                            <div
                                className={styles.card_inner}>
                                <div
                                    className={styles.details}>
                                    <Image src={profileIcon} alt='' />
                                    <p>{testmonianl.name}</p>
                                </div>
                                <p>{testmonianl.description}</p>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default IndustrySwiper