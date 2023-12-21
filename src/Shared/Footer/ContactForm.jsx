import Swal from 'sweetalert2';

const ContactForm = () => {

    const handleContact = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const messageObj = { name, email, phone, subject, message }

        fetch('https://ibnas-serer.vercel.app/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messageObj)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Welcome!',
                        text: 'Send message successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        e.target.reset();
    }

    const inputs = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Name'
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email'
        },
        {
            name: 'phone',
            type: 'text',
            placeholder: 'Phone Number'
        },
        {
            name: 'subject',
            type: 'text',
            placeholder: 'Subject'
        }
    ]

    return (
        <div>
            <form className="space-y-5" onSubmit={handleContact}>
                <div className="grid grid-cols-2 gap-5">
                    {
                        inputs.map((input, index) => <input
                            key={index}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            className="bg-white text-[#1f2124] border border-white min-h-[40px] py-2 px-3 focus:border-[#69727d] focus:border focus:outline-none rounded"
                        />)
                    }
                </div>
                <textarea className="w-full bg-white text-[#1f2124] border border-white py-2 px-3 focus:border-[#69727d] focus:border focus:outline-none rounded" name="message" rows="5" placeholder="Your Message"></textarea>
                <input className="bg-[#282828] text-white hover:bg-btn-hover font-semibold text-[15px] tracking-[1px] py-[14px] px-7 rounded leading-[15px] duration-300 active:scale-x-95 w-full" type="submit" value="SEND MESSAGE" />
            </form>
        </div>
    );
};

export default ContactForm;