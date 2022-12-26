import React from "react";
import s from './services.module.css'
import {services} from "./services";
import {MyService} from "./MyService";

export const MyServices = () => {
    let myServices = services.myServices
    return (
        <div className={s.myServices}>
            <div className={s.myServicesHeader}>Популярные курсы</div>
            <div className={s.myServicesContainer}>
                {myServices.map((el, i) => <MyService key={i} src={el.picture} title={el.title} items={el.items} price={el.price}/>)}
            </div>
        </div>
    )
}