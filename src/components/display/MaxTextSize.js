import React, { useEffect, useState, useRef } from 'react'
import { tab } from '../../tab'
import maxFontSize from '../../util/maxFontSize'
import { debounce_leading_trailing } from '../../util/debounce'

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
        setFontSize(
            maxFontSize(
                text,
                font,
                ref.current.offsetWidth,
                ref.current.offsetHeight,
                ref.current.offsetHeight * (minPercentFontSize / 100),
                ref.current.offsetHeight * (maxPercentFontSize / 100)
            )
        )
    }
    const scheduleResizeText = () => tab.requestAnimationFrame(resizeText)
    const handleResize = debounce_leading_trailing(scheduleResizeText, 500)
    useEffect(() => {
        tab.addEventListener('resize', handleResize)
        return () => tab.removeEventListener('resize', handleResize)
    }, [])
    useEffect(scheduleResizeText, [text])
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
            {text}
        </div>
    )
}

export default MaxTextSize
