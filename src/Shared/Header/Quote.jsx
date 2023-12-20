const Quote = () => {

    const inputs = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Your Name'
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Your Email Address'
        },
        {
            name: 'phone',
            type: 'text',
            placeholder: 'Your WhatsApp Number'
        },
        {
            name: 'skype',
            type: 'text',
            placeholder: 'Your Skype ID'
        }
    ]
    
    const handleQuote = e => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <dialog id="my_modal_3" className="modal text-white bg-[#000000b3]">
            <div className="modal-box bg-gradient-to-b from-[#4C6EF5] to-[#293D7C] sm:max-w-[650px] w-full max-h-screen rounded-none">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-semibold text-3xl border-b mb-7 pb-7">Web Dev Ibna.</h3>
                <h3 className="font-semibold text-3xl text-center leading-10">Ready To Discuss <br /> Your Dream Project?</h3>
                <p className="py-4 text-center font-semibold">I will make all your dreams come true in a successful Website project.</p>
                <form className="space-y-7 mt-7" onSubmit={handleQuote}>
                    {
                        inputs.map((input, index) => <input
                            key={index}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            className="bg-white text-[#1f2124] border border-white py-2 px-3 focus:border-[#69727d] focus:border focus:outline-none rounded w-full"
                        />)
                    }
                    <textarea className="w-full bg-white text-[#1f2124] border border-white py-2 px-3 focus:border-[#69727d] focus:border focus:outline-none rounded" name="message" rows="3" placeholder="Your Projects Details"></textarea>
                    <input type="file" name="file" className="text-black font-medium" />
                    <input className="bg-[#4C6EF5] text-white hover:bg-[#708BF7] font-semibold text-[15px] tracking-[1px] py-[14px] px-7 rounded duration-300 active:scale-x-95 w-full" type="submit" value="Send Your Projects" />
                </form>
            </div>
        </dialog>
    );
};

export default Quote;