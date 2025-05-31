import { ReviewType } from '../../mocks/reviews';
import Review from '../review/review';

type ReviewsListProps = {
  reviews: ReviewType[];
}

export default function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} review={review}/>)}
      </ul>
    </>
  );
}
