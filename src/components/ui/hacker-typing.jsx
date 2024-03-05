import React, { useEffect, useRef } from 'react';

const AnimatedText = ({ text, delay = 0 }) => {
    const h1Ref = useRef(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        let iteration = 0;
        let interval = null;

        const startAnimation = () => {
            interval = setInterval(() => {
                h1Ref.current.innerText = h1Ref.current.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return h1Ref.current.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= h1Ref.current.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 60);
        };

        const timeout = setTimeout(startAnimation, delay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            if (h1Ref.current) {
                h1Ref.current.innerText = h1Ref.current.dataset.value;
            }
        };
    }, [delay]);

    return (
        <div className="w-min">
            <h1
                ref={h1Ref}
                className="text-[#1C1C1C] text-9xl font-bold font-mono tracking-widest cursor-pointer uppercase bg-gradient-to-r from-[#474747] via-white to-[#474747] bg-clip-text text-transparent animate-shine"
                data-value={text}
            >
                {text}
            </h1>
        </div>
    );
};

export default AnimatedText;