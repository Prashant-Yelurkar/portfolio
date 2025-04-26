import React, { Component } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./photo.module.css"
import Image from 'next/image';

const PhotoSwipper = ({ data, onSelect }) => {
    return (
        <div className={styles.bottom_oc}>
            <Swiper
                loop={true}
                slidesPerView={"auto"}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={
                    {
                        "0": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 20
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 20
                        }
                    }
                }

                pagination={{ clickable: true }}
                modules={[Autoplay, Navigation, Pagination]}
                className={styles.swiper}
            >
                {data.map((photo, index) => (

                    <SwiperSlide className={styles.swiper_slide}
                        onClick={() => onSelect(photo)} >
                        <div

                            className={styles.photos}>
                            <Image
                                key={index}
                                src={photo}
                                alt="photo"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default PhotoSwipper