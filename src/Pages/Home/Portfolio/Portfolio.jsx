import React, { useEffect, useState } from 'react';
import img1 from '../../../assets/portfolio/a.webp';
import img2 from '../../../assets/portfolio/b.webp';
import img3 from '../../../assets/portfolio/c.webp';
import img4 from '../../../assets/portfolio/d.webp';
import img5 from '../../../assets/portfolio/e.webp';
import img6 from '../../../assets/portfolio/f.webp';
import img7 from '../../../assets/portfolio/g.png';
import img8 from '../../../assets/portfolio/h.png';
import img9 from '../../../assets/portfolio/i.png';
import img10 from '../../../assets/portfolio/j.png';
import img11 from '../../../assets/portfolio/k.webp';
import img12 from '../../../assets/portfolio/l.png';
import img13 from '../../../assets/portfolio/m.png';
import img14 from '../../../assets/portfolio/n.png';
import img15 from '../../../assets/portfolio/o.png';
import img16 from '../../../assets/portfolio/p.webp';
import img17 from '../../../assets/portfolio/q.png';
import img18 from '../../../assets/portfolio/r.png';

const Portfolio = () => {
    // const [portfolioImg, setPortfolioImg] = useState([]);

    const portfolioImg = [
        { id: 1, img: img1, title: 'Alessandronazha', link: '#' },
        { id: 2, img: img2, title: 'Sarmsup', link: '#' },
        { id: 3, img: img3, title: 'Sound4yoga', link: '#' },
        { id: 4, img: img4, title: 'The Mercadito', link: '#' },
        { id: 5, img: img5, title: 'Life-peace', link: '#' },
        { id: 6, img: img6, title: 'Staffingbird', link: '#' },
        { id: 7, img: img7, title: 'ikedi official', link: '#' },
        { id: 8, img: img8, title: 'Union Wealths Management', link: '#' },
        { id: 9, img: img9, title: 'Grow Bots', link: '#' },
        { id: 10, img: img10, title: 'Mobile Store', link: '#' },
        { id: 11, img: img11, title: 'Optimumaz', link: '#' },
        { id: 12, img: img12, title: 'Speed Of Grace', link: '#' },
        { id: 13, img: img13, title: 'Redshed Studio', link: '#' },
        { id: 14, img: img14, title: 'SRD Mart', link: '#' },
        { id: 15, img: img15, title: 'Black Cube Agency', link: '#' },
        { id: 16, img: img16, title: 'Break Through Money', link: '#' },
        { id: 17, img: img17, title: 'Full Body Scans', link: '#' },
        { id: 18, img: img18, title: 'Ecommerce Website', link: '#' },
    ];

    // useEffect(() => {
    //     fetch('http://localhost:5000/portfolio')
    //         .then(res => res.json())
    //         .then(data => setPortfolioImg(data))
    // }, [])

    const [hiddenButtons, setHiddenButtons] = useState(Array(portfolioImg.length).fill(true));
    const [visibleItems, setVisibleItems] = useState(6);
    const [loading, setLoading] = useState(false);

    const handleMouseEnter = (id) => {
        setHiddenButtons((prevHiddenButtons) =>
            prevHiddenButtons.map((val, index) => (index === id - 1 ? false : val))
        );
    };

    const handleMouseLeave = (id) => {
        setHiddenButtons((prevHiddenButtons) =>
            prevHiddenButtons.map((val, index) => (index === id - 1 ? true : val))
        );
    };

    const handleLoadMore = () => {
        setLoading(true);
    };

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
                setLoading(false);
            }, 1000); // Simulating loading delay
        }
    }, [loading]);

    return (
        <section id="portfolio" className="bg-bg-color z-30 mt-20 pb-16">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
                    <path fill="white" opacity="0.33" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
                    <path fill="white" opacity="0.33" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
                    <path fill="white" opacity="0.33" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
                    <path fill="white" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
                </svg>
            </div>
            <div className="space-y-5 pb-10 sm:pt-0 pt-5">
                <h3 className="sm:text-3xl text-2xl text-center font-extrabold text-headning-color">MY PORTFOLIO</h3>
                <div className='border border-headning-color w-28 mx-auto'></div>
            </div>
            <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-3 gap-10">
                {portfolioImg.slice(0, visibleItems).map(({ id, img, title, link }) => (
                    <a
                        id='portfolio-container'
                        key={id}
                        href={link}
                        target='_blank'
                        className='relative rounded-md'

                    >
                        <div
                            id={`portfolio-container-${id}`}
                            style={{ backgroundImage: `url('${img}')` }}
                            className={`lg:h-[63vh] md:h-[50vh] h-[70vh] bg-no-repeat ${hiddenButtons[id - 1] ? 'bg-top' : 'bg-bottom duration-[4s] ease-in-out'} flex justify-center items-center bg-cover hover:brightness-50 cursor-pointer`}
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={() => handleMouseLeave(id)}
                        >
                            <button
                                id={`portfolio-btn-${id}`}
                                className={`bg-[#000000B3] text-white font-semibold rounded px-4 py-2 ${hiddenButtons[id - 1] ? 'opacity-0 hidden' : 'opacity-100'}`}
                            >
                                Quick View
                            </button>
                        </div>
                        <div className='bg-bg-color text-[#4B4F58] font-semibold text-center py-3 shadow-md'>{title}</div>
                    </a>
                ))}
            </div>

            {loading ? (
                <div className="text-center pt-10">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                visibleItems < portfolioImg.length && (
                    <div className='text-center'>
                        <button
                            onClick={handleLoadMore}
                            className='bg-btn-hover btn border-none mt-14 mb-20 px-8 text-white font-medium'
                        >
                            LOAD MORE
                        </button>
                    </div>
                )
            )}
        </section>
    );
};

export default Portfolio;