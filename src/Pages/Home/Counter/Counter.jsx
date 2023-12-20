import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    const [countersStarted, setCountersStarted] = useState(false);

    const counterValue = [
        { start: 1000, end: 2010, text: 'Successfull Projects' },
        { start: 0, end: 1490, text: 'Happy Clients' },
        { start: 0, end: 15, text: 'Running Projects' },
        { start: 0, end: 90, text: 'Line Of Codes' }
    ]

    const handleCounterMouseEnter = () => {
        if (!countersStarted) {
            setCountersStarted(true);
        }
    };

    return (
        <section
            id="counter-section"
            className="border-t sm:mt-20 mt-12 py-12"
            onMouseEnter={handleCounterMouseEnter}
        >
            <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-4 sm:grid-cols-2 gap-5 lg:text-4xl text-3xl font-semibold">
                {
                    counterValue.map((v, i) => <div
                        key={i}
                        className='text-center bg-[#222] text-white rounded py-10'
                    >
                        {countersStarted && (
                            <CountUp start={v.start} end={v.end} duration={3} />
                        )}
                        <span>+</span>
                        <p className='text-base font-normal pt-2'>{v.text}</p>
                    </div>)}
            </div>
        </section>
    );
};

export default Counter;