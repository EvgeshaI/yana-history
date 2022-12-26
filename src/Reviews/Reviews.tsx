import React from "react";
import s from "./reviews.module.css"
import ReactElasticCarousel from "react-elastic-carousel";

export const Reviews = () => {
    const screenWidth = document.documentElement.scrollWidth
    let state  = {
        items: [
            {id: 1, title: "rev1"},
            {id: 2, title: "rev2"},
            {id: 3, title: "rev3"},
            {id: 4, title: "rev4"},
            {id: 5, title: "rev5"},
            {id: 6, title: "rev6"},
            {id: 7, title: "rev7"},
            {id: 8, title: "rev8"},
            {id: 9, title: "rev9"},
            {id: 10, title: "rev10"},
            ]
    }

    let itemsToShowCount = () => {
        if(screenWidth < 770) {
            return 1
        }else if(screenWidth < 1030){
            return 2
        }else if(screenWidth > 1030){
            return 3
        }
    }
    // @ts-ignore
    return(
        <div className={s.reviesBox}>
            <div className={s.myReviewsHeader}>Отзывы</div>
                <div className={s.carousel}>
                    <ReactElasticCarousel isRTL={false}  itemsToShow={itemsToShowCount()}>
                        {state.items.map(item => <div key={item.id}>
                            <img src={require(`../imports/reviewsImg/${item.title}.png`)} className={s.reviewsImg}/>
                        </div>)}
                    </ReactElasticCarousel>
                </div>
        </div>
    )
}
