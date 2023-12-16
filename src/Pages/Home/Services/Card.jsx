import card from '../../../assets/card.png';

const Card = () => {
    return (
        <section id='services' className='pt-20'>
            <div className='max-w-[520px] mx-auto'>
                <div>
                    <img data-aos="fade-zoom-in" className="border-[10px] border-[#EAF2FC] rounded-xl" src={card} alt="" />
                </div>
                <h3 className="text-xl text-center font-bold text-headning-color tracking-[0.5px] pt-5">I'M A VERIFIED WEB DEVELOPER & FREELANCER <br /> BY BANGLADESH GOVERNMENT.</h3>
            </div>
            <div className='-mt-24 overflow-hidden max-h-64'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className='h-[1000px] w-[100%]'>
                    <path d="M 500.003 12.027 C 200.007 12.033 0 0 0 0 V 5 C 0 5 200.007 17.02 500.033 17.028 C 800.074 17.017 1005 5 1006.957 5.013 l 0 -0.023 V 0.015 C 1006.957 0.015 799.979 12.095 500.013 12.027 z" fill="#F1F4FF"></path>
                </svg>
            </div>
        </section>
    );
};

export default Card;