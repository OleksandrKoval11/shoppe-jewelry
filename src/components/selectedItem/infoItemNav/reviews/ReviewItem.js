const ReviewItem = ({name, rating, descr}) => {
    return (
        <div className="review__item">
            <div className="review__wrapper">
                <div className="review__name">{name}</div>
                <div className="review__data">6 May, 2020</div>
            </div>
            <div className="review__rate">{rating}</div>
            <div className="review__descr">{descr}</div>
            <div className="review__line"></div>
        </div>
    )
}

export default ReviewItem;