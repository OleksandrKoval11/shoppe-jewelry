import { useSelector } from 'react-redux';
import AddReview from './AddReview';

import ReviewItem from './ReviewItem';

const Reviews = () => {
    const { selectedItemId } = useSelector(state => state.item);

    if (selectedItemId && Array.isArray(selectedItemId.reviews)) {
        return (
            <div className="reviews">
                <div className="reviews__wrapper">
                    <div className="reviews__items">
                        <div className="reviews__title">
                            {selectedItemId.reviews.length} Reviews for {selectedItemId.name}
                        </div>
                        {selectedItemId.reviews.map((review, i) => (
                            <ReviewItem
                                key={i}
                                name={review.name}
                                rating={review.rating}
                                descr={review.descr}
                            />
                        ))}
                    </div>
                    <AddReview/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="reviews">
                <div className="reviews__wrapper">
                    <div className="reviews__items">
                        <div className="reviews__title">No Reviews for {selectedItemId.name}</div>
                    </div>
                    <AddReview/>
                </div>
            </div>
        );
    }
}

export default Reviews;
