import CountUp from 'react-countup';

const Counter = () => {

    const counterValue = [
        { start: 1000, end: 2010, text: 'Successfull Projects' },
        { start: 0, end: 1490, text: 'Happy Clients' },
        { start: 0, end: 15, text: 'Running Projects' },
        { start: 0, end: 90, text: 'Line Of Codes' }
    ]

    return (
        <section className="border-t mt-20 py-12">
            <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-4 gap-5 text-4xl font-semibold">
                {
                    counterValue.map((v, i) => <div
                        key={i}
                        className='text-center bg-[#222] text-white rounded py-10'
                    >
                        <CountUp
                            start={v.start}
                            end={v.end}
                            duration={3}
                        />
                        <span>+</span>
                        <p className='text-base font-normal'>{v.text}</p>
                    </div>)}
            </div>
        </section>
    );
};

export default Counter;