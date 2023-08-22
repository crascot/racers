import React, { useEffect, useRef, useState } from 'react'
import Racer from './Racer/Racer';
import { User } from '../../App';

interface RacersProps {
    racers: User[],
    isIntersecting: boolean,
    setIsIntersecting: React.Dispatch<React.SetStateAction<boolean>>
}

const Racers: React.FC<RacersProps> = ({ racers, isIntersecting, setIsIntersecting }) => {
    const [active, setActive] = useState<null | number>(null)
    const activeFunc = (e: number) => {
        if (e === active) setActive(null)
        else setActive(e)
    }

    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsIntersecting(entry.isIntersecting);
                },
                { rootMargin: "0px" }
            );
            observer.observe(ref.current);

            return () => observer.disconnect();
        }
    }, [isIntersecting]);

    return (
        <div>
            {
                racers.map((racer, i) => (
                    <Racer
                        racer={racer}
                        key={i}
                        index={i + 1}
                        active={active}
                        activeFunc={activeFunc}
                    />
                ))
            }
            <div ref={ref} />
        </div>
    )
}

export default Racers;