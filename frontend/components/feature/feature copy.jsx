import React, { useState } from 'react';
import KungFuPanda from '../../../app/assets/images/kung-fu-panda.jpg';
// import DespicableMe2 from '../../../app/assets/images/despicable-me-2.png';
import { IoPlaySharp, IoInformationCircleOutline } from "react-icons/io5";


export default function Feature() {
    return (
        <div className="feature-video">
            <img src={KungFuPanda} alt="Kung Fu Panda Poster" className="poster"/>
            <div className="video-info">
                <div className="title">Kung Fu Panda</div>
                <span className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nulla beatae dolorum necessitatibus molestiae omnis vitae labore nam a, quis quisquam repellat itaque id at amet pariatur, aut sint? Eligendi?</span>
                <div className="buttons">
                    <button className="button-play">
                        <IoPlaySharp className="icon"/>
                        <span>Play</span>
                    </button>
                    <button className="button-more-info">
                        <IoInformationCircleOutline className="icon info"/>
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}