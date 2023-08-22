import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen',
        cursor: 'pointer',
        userSelect: 'none'
    },
    indexNumber: {
        marginRight: 20
    },
    infoBlock: {
        marginLeft: 10
    },
    infoName: {
        margin: 0
    },
    infoSpan: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#B9B6F1'
    },
    infoTime: {
        color: '#A59FED'
    },
    infoSpeed: {
        color: '#5296E3'
    },

    active: {
        color: '#A59FED'
    },
    activeBorder: {
        borderRadius: 30,
        border: '4px solid #A59FED'
    }
})