import React, {FC, useState} from "react";
import s from './services.module.css'
import ReactCardFlip from "react-card-flip";


type MyServicePropsType = {
    src: string,
    title: string,
    items: Array<string>
    price: string
}

export const MyService:FC<MyServicePropsType> = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    return (
        <div className={s.myService}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div>
                    <figure className={s.cardImg} onClick={()=>setIsFlipped(!isFlipped)}>
                                    <img src={require(`../imports/images/img${props.src}.png`)} className={s.cardPic}/>
                                    <figcaption className={s.cardTitle}>
                                        {props.title}
                                    </figcaption>
                    </figure>
                </div>
                <div>
                    <figure className={s.cardImg} onClick={()=>setIsFlipped(!isFlipped)}>
                                <img src={require(`../imports/images/img${props.src}.png`)} className={s.cardPic} />
                                <figcaption className={s.cardTitleBack}>
                                    {props.items.map((el, i) => <div key={i} style={{marginBottom: "5px"}}>● {el}</div>)}
                                    <div style={{textAlign: "center", fontSize: "22px"}}>{props.price}</div>
                                </figcaption>
                    </figure>
                </div>
            </ReactCardFlip>

        </div>
    )
}