import React from "react";
import s from './start.module.css'
import Yana from "../imports/photo/yana.png"
import {ReactComponent as Vk} from "../imports/icons/vk.svg"
import {ReactComponent as Inst} from "../imports/icons/inst.svg"
import {ReactComponent as Telegram} from "../imports/icons/telegram.svg"

export const Start = () => {
    return (
        <div className={s.startBlock}>
            <div className={s.startContainer}>
                <div className={s.info}>
                    <div className={s.header}>ИСТОРИЯ | ОБЩЕСТВОЗНАНИЕ | ЕГЭ</div>
                    <div className={s.myName}>Привет! <br/>
                        Я Выграновская Яна Олеговна!
                    </div>
                    <div className={s.aboutMe}>
                        Со мной даже троечник сдает на максимум, а путь к 90+ проходит без слез и лишнего стресса!
                    </div>
                    <div className={s.icons}>
                       <a href={"https://vk.com/yanavygranovska9"} target="_blank"> <div className={s.icon}><Vk/></div></a>
                        <a href={'https://www.instagram.com/yanavygranovska9/'} target="_blank"><div className={s.icon}><Inst/></div></a>
                        <a href={'https://t.me/+3rKBb4YT2yVmZDUy'} target="_blank"><div className={s.icon}><Telegram/></div></a>
                    </div>
                </div>
                <div className={s.photo}>
                    <img src={Yana} alt={"Yana"} style={{maxWidth: "100%"}}/>
                </div>
            </div>
        </div>
    )
}