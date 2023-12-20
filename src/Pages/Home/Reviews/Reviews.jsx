import TextReviews from "./textReviews";
import VideoReviews from "./videoReviews";

const Reviews = () => {
    return (
        <section id="reviews">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="space-y-5 mb-10 pb-5 pt-[70px]">
                    <h3 className="sm:text-3xl text-2xl text-center font-extrabold text-headning-color">WHAT MY HAPPY CLIENT'S SAY</h3>
                    <div className='border border-headning-color w-40 mx-auto'></div>
                </div>
                <VideoReviews></VideoReviews>
                <TextReviews></TextReviews>
            </div>
        </section>
    );
};

export default Reviews;