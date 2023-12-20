import webDesign from '../../../assets/web-design.png';
import coding from '../../../assets/coding.png';
import responsiveDesign from '../../../assets/responsive-design.png';
import search from '../../../assets/search.png';
import graphic from '../../../assets/graphic.png';
import technicalSupport from '../../../assets/technical-support.png';

const Services = () => {

    const services = [
        {
            img: webDesign,
            title: 'WEB DESIGN',
            description: 'Design A Professional Look Website For Your Business.'
        },
        {
            img: coding,
            title: 'WEB DEVELOPMENT',
            description: 'Develop Your Custom Build Website From scratch.'
        },
        {
            img: responsiveDesign,
            title: 'RESPONSIVE DESIGN',
            description: 'Responsive Website Design For Desktop, Tablet, Phone.'
        },
        {
            img: search,
            title: 'SEO FRIENDLY DESIGN',
            description: 'Seo Friendly Website Design To Get Rank On Google.'
        },
        {
            img: graphic,
            title: 'GRAPHIC DESIGN',
            description: 'Website Logo, Website Banner Design, UX/UI Design.'
        },
        {
            img: technicalSupport,
            title: 'GREAT SUPPORT',
            description: 'Get Lifetime Free Support After Build Your Website.'
        },
    ]

    return (
        <section className='max-w-[1200px] mx-auto px-5'>
            <div className="space-y-5 mb-10">
                <h3 className="md:text-3xl text-2xl text-center font-extrabold text-headning-color">I CAN HELP YOU WITH</h3>
                <div className='border border-headning-color w-40 mx-auto'></div>
            </div>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    services.map((service, index) => <div
                        key={index}
                        className='border border-[#D5DCE1] shadow-md hover:shadow-xl p-6 rounded-lg duration-300 sm:flex space-y-2'
                    >
                        <figure className='max-w-[20%] items-center flex mx-auto sm:mx-0'>
                            <img className='w-3/4' src={service.img} alt="Card-Image" />
                        </figure>
                        <div className='sm:space-y-3 space-y-1 grid content-center text-center sm:text-left'>
                            <h3 className='text-xl font-bold text-headning-color'>{service.title}</h3>
                            <p className='text-[#506690]'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Services;