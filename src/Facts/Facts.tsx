import React from "react";
import s from './facts.module.css'
import OnePicture from "../imports/photo/one.png"
import TwoPicture from "../imports/photo/two.png"
import ThreePicture from "../imports/photo/three.png"

export const Facts = () => {
    return (
        <div className={s.facts}>
            <div className={s.factsContainer}>
                <div className={s.factBlock}>
                    <div className={s.photo}>
                        <img src={OnePicture}/>
                    </div>
                    <div className={s.factInfo}>8 лет опыта</div>
                </div>
                <div className={s.factBlock}>
                    <div className={s.photo}>
                        <img src={TwoPicture}/>
                    </div>
                    <div className={s.factInfo}>индивидуальный подход</div>
                </div>
                <div className={s.factBlock}>
                    <div className={s.photo}>
                        <img src={ThreePicture}/>
                    </div>
                    <div className={s.factInfo}>онлайн обучение</div>
                </div>
            </div>
        </div>
    )
}