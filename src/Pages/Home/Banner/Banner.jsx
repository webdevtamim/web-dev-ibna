import bannerImg from "../../../assets/banner.jpg";

const Banner = () => {
    return (
        <section id="Home" className="bg-bg-color">
            <div className="flex-col-reverse flex lg:grid grid-cols-2 max-w-[1200px] mx-auto px-5 lg:gap-2 gap-10 items-center md:py-20 pt-16 pb-10">
                <div className="lg:space-y-5 space-y-3">
                    <h2 className="lg:text-5xl md:text-3xl text-2xl font-extrabold text-headning-color leading-[55px] text-center lg:text-left">LET'S BUILD YOUR WEBSITE TOGETHER.</h2>
                    <p className="md:text-lg text-base max-w-[500px] text-[#222] pb-5 text-center lg:text-left">
                        I can build a professional website for you that can take your business to the next level of success.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="inline-block w-[18px] h-[18px] ml-2">
                            <path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" />
                            <circle fill="#FF7892" cx="7" cy="18" r="5" />
                            <circle fill="#FF7892" cx="29" cy="18" r="5" />
                            <path fill="#664500" d="M27.335 21.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 22.472 11.788 27.5 18 27.5s9.301-5.028 9.429-5.243c.123-.205.084-.468-.094-.628zM7.999 15c-.15 0-.303-.034-.446-.106-.494-.247-.694-.848-.447-1.342C7.158 13.448 8.424 11 12 11c3.577 0 4.842 2.449 4.894 2.553.247.494.047 1.095-.447 1.342-.492.245-1.085.049-1.336-.436C15.068 14.379 14.281 13 12 13c-2.317 0-3.099 1.433-3.106 1.447-.175.351-.528.553-.895.553zm20.002 0c-.367 0-.72-.202-.896-.553C27.08 14.401 26.299 13 24 13s-3.08 1.401-3.112 1.46c-.26.481-.859.67-1.345.42-.485-.252-.682-.839-.438-1.328C19.157 13.449 20.423 11 24 11s4.843 2.449 4.895 2.553c.247.494.047 1.095-.447 1.342-.144.071-.297.105-.447.105z" />
                        </svg>
                    </p>
                    <div className="text-center lg:text-left"><a href="#about"><button className="bg-[#282828] text-white hover:bg-btn-hover font-semibold text-[15px] tracking-[1px] py-[14px] px-7 rounded leading-[15px] duration-300 active:scale-x-95">GET STARTED</button></a></div>
                </div>
                <div>
                    <img data-aos="fade-zoom-in" className="border-[10px] border-[#EAF2FC] rounded-xl md:max-w-[75%] lg:max-w-full mx-auto lg:mx-0" src={bannerImg} alt="Banner" />
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" height="30" width="100%">
                    <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" fill="white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Banner;