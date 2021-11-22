import React, { useEffect, useState, useRef } from 'react'
import { tab } from '../../tab'
import maxFontSize from '../../util/maxFontSize'

const MaxTextSize = ({
    text,
    font = 'Impact',
    style = {},
    minPercentFontSize = 0,
    maxPercentFontSize = 100
}) => {
    const ref = useRef(null)
    const [fontSize, setFontSize] = useState(0)
    const resizeText = () => {
        const width = ref.current.offsetWidth
        const height = ref.current.offsetHeight
        setFontSize(
            maxFontSize(
                text,
                font,
                width,
                height,
                height * minPercentFontSize,
                height * maxPercentFontSize
            )
        )
    }
    const handleResize = () => tab.requestAnimationFrame(resizeText)
    useEffect(() => {
        resizeText()
        tab.addEventListener('resize', handleResize)
        return () => tab.removeEventListener('resize', handleResize)
    }, [text])
    return (
        <div
            ref={ref}
            style={{
                fontSize: `${fontSize}px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                fontFamily: font,
                textAlign: 'center',
                textShadow: '-1px -1px 0 #000,' +
                            '1px -1px 0 #000,' +
                            '-1px 1px 0 #000,' +
                            '1px 1px 0 #000',
                ...style
            }}
        >
            {fontSize && text}
        </div>
    )
}

export default MaxTextSize
