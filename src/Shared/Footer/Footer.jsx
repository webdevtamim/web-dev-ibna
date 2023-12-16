import ContactForm from "./ContactForm";
import { FaWhatsapp, FaEnvelope, FaFacebookF, FaLinkedinIn, FaSkype, FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {

    const social = [
        {
            logo: <FaFacebookF />,
            link: 'https://www.facebook.com/webdevibna/'
        },
        {
            logo: <FaWhatsapp />,
            link: 'tel:+8801735197402'
        },
        {
            logo: <FaLinkedinIn />,
            link: 'https://www.linkedin.com/in/ibnasina16/'
        },
        {
            logo: <FaSkype />,
            link: 'skype:ibna_sina?call'
        },
        {
            logo: <FaGoogle />,
            link: 'https://g.page/r/CRMMj9_F4-HuEAE'
        }
    ]

    const contactItems = [
        {
            logo: <FaWhatsapp />,
            name: '+8801735197402',
            link: 'tel:+8801735197402'
        },
        {
            logo: <FaEnvelope />,
            name: 'info@webdevibna.com',
            link: 'mailto:info@webdevibna.com'
        },
        {
            logo: <FaLocationDot />,
            name: 'Dhaka, Bangladesh.',
            link: null
        },
    ]

    return (
        <section id="contact" className="bg-bg-color">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
                    <path fill="white" opacity="0.33" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
                    <path fill="white" opacity="0.33" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
                    <path fill="white" opacity="0.33" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
                    <path fill="white" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
                </svg>
            </div>
            <div className="space-y-5 pb-10">
                <h3 className="text-3xl text-center font-extrabold text-headning-color">CONTACT ME</h3>
                <div className='border border-headning-color w-28 mx-auto'></div>
            </div>
            <div className="max-w-[1200px] mx-auto px-5 flex pb-24">
                <div className="space-y-5 pb-10 w-[40%]">
                    <h3 className="text-xl font-bold text-headning-color">CONTACT DETAILS</h3>
                    <div className='border border-headning-color w-14'></div>
                    <ul className="space-y-3 font-medium text-[#222] pt-2 pb-3">
                        {
                            contactItems.map((contactItem, index) => <li
                                key={index}
                                className="flex gap-5 items-center"
                            >
                                <span className="text-lg">{contactItem.logo}</span>
                                <a href={contactItem.link}>{contactItem.name}</a>
                            </li>)
                        }
                    </ul>
                    <div className="flex gap-3 text-[#222]">
                        {
                            social.map((item, index) => <a 
                            key={index}
                            className="bg-white p-2 rounded hover:bg-[#222] hover:text-white duration-500 hover:-translate-y-2"
                            href={item.link}
                            >{item.logo}</a>)
                        }
                    </div>
                </div>
                <div className="w-[60%]"><ContactForm></ContactForm></div>
            </div>
            <div>
                <p className="text-center text-[#506690] py-2">© Copyright Web Dev Tamim. All Rights Reserved.</p>
            </div>
        </section>
    );
};

export default Footer;