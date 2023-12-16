import img1 from '../../../assets/reviews/p1.png';
import img2 from '../../../assets/reviews/p2.png';
import img3 from '../../../assets/reviews/p3.png';
import img4 from '../../../assets/reviews/p4.png';
import img5 from '../../../assets/reviews/p5.png';
import img6 from '../../../assets/reviews/p6.png';
import img7 from '../../../assets/reviews/p7.png';
import img8 from '../../../assets/reviews/p8.png';
import img9 from '../../../assets/reviews/p9.png';
import img from '../../../assets/reviews/p.png';

const TextReviews = () => {
    return (
        <div className="grid grid-cols-2 gap-2 pt-16">
            <div className="space-y-3">
                <img className="w-full hover:brightness-50 duration-500" src={img1} alt="" />
                <img className="w-full hover:brightness-50 duration-500" src={img2} alt="" />
                <img className="w-full hover:brightness-50 duration-500" src={img3} alt="" />
                <img className="w-full hover:brightness-50 duration-500" src={img4} alt="" />
                <img className="w-full hover:brightness-50 duration-500" src={img5} alt="" />
            </div>
            <div className="space-y-3">
                <img className="w-full hover:brightness-50 duration-500" src={img6} alt="" />
                <img className="w-full hover:brightness-50 duration-500" src={img7} alt="" />
                <img className="w-full hover:brightness-50 duration-500" src={img8} alt="" />
                <img className="w-full hover:brightness-50 duration-500" src={img9} alt="" />
                <img className="w-full hover:brightness-50 duration-500" src={img} alt="" />
            </div>
        </div>
    );
};

export default TextReviews;