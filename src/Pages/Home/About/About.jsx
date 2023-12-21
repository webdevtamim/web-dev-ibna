import ibnaImg from "../../../assets/ibna.webp";
import fiverr from "../../../assets/fiverr-logo.png";
import upwork from "../../../assets/upwork.png";
import Quote from "../../../Shared/Header/Quote";

const About = () => {

    const listItems = [
        'Create a Website from scratch',
        'Develop Custom Website',
        'Re-designing of Websites',
        'Figma/PSD to WordPress',
        'Build Custom Website.',
        'Build an Ecommerce Website',
        'Business Websites Design',
        'Create a landing page',
        'Fully Responsive Design',
        'Fix any error',
        'Web Hosting Migration.',
        'WordPress speed optimization',
        'Website Security',
        'Logo Design',
        'Google My Business.',
        'Top Class SEO.'
    ]

    return (
        <section id="about">
            <div className="grid lg:grid-cols-2 max-w-[1200px] mx-auto px-5 gap-4 pt-20">
                <div className="lg:pr-5 space-y-4 pt-2">
                    <img data-aos="fade-zoom-in" className="rounded-md shadow-xl" src={ibnaImg} alt="Mr. Ibna" />
                    <h3 className="text-xl text-center font-extrabold text-headning-color pt-5 tracking-[0.5px]">YOU CAN ALSO HIRE ME ON</h3>
                    <div className="sm:flex grid items-center gap-5 justify-center">
                        <a href="https://www.fiverr.com/ibnasina16" target="_blank" className="inline-block">
                            <img className="hover:scale-110 duration-300" src={fiverr} alt="Fiverr-logo" />
                        </a>
                        <a href="https://www.upwork.com/freelancers/~012cb95e8213067fd5" target="_blank" className="inline-block">
                            <img className="w-28 hover:scale-110 duration-300  mx-auto sm:mx-0" src={upwork} alt="Upwork-logo" />
                        </a>
                    </div>
                </div>
                <div className="space-y-6 p-2 text-center lg:text-left max-w-[750px] mx-auto lg:mx-0">
                    <h3 className="md:text-3xl text-2xl font-extrabold text-headning-color pt-5 md:pt-0">WEBSITE DESIGNER & DEVELOPER.</h3>
                    <div className="text-[rgb(80,102,144)] leading-[28px] pb-2 text-left md:text-center lg:text-left">
                        <p>Hi, I'm Ibna Sina. A professional WordPress Website Designer & Developer having more than 4 years of experience. I'm specialized in</p>
                        <ul className="list-image list-inside">
                            {listItems.map((listItem, index) => <li key={index}>{listItem}</li>)}
                        </ul>
                        <p>
                            I will provide you the best quality of work with 100% client satisfaction and lifetime support. Thank You.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="inline-block w-4 h-4 ml-2"><path fill="#DD2E44" d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z" /></svg>
                        </p>
                    </div>
                    <button
                        className="bg-[#282828] text-white hover:bg-btn-hover font-semibold text-[15px] tracking-[1px] py-[14px] px-12 rounded leading-[15px] duration-300 active:scale-x-95"
                        onClick={() => document.getElementById('my_modal_3').showModal()}
                    >HIRE ME</button>
                    <Quote></Quote>
                </div>
            </div>
        </section>
    );
};

export default About;