import React, { useEffect, useRef } from 'react';
import { ReactComponent as Helmet } from '../../../svg/racer.svg';
import { useStyles } from './RacerStyles';
import { User } from '../../../App';

interface RacerProps {
    racer: User,
    index: number,
    activeFunc: (e: number) => void,
    active: null | number
}
const Racer: React.FC<RacerProps> = ({ racer, index, activeFunc, active }) => {
    const classes = useStyles()

    return (
        <div className={classes.container} onClick={() => activeFunc(index)}>
            <h2 className={`${classes.indexNumber} ${active === index ? classes.active : ''}`}>
                {index}
            </h2>
            <div>
                <Helmet
                    fill={racer.color}
                    className={active === index ? classes.activeBorder : ''}
                />
            </div>
            <div className={classes.infoBlock}>
                <h5 className={classes.infoName}>{racer.name}</h5>
                <div className={classes.infoSpan}>
                    <span className={classes.infoTime}>
                        00:{racer.time}:00
                    </span>
                    <span className={classes.infoSpeed}>
                        <span style={{ margin: '0 5px' }}>|</span>
                        {racer.speed} км/ч
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Racer;