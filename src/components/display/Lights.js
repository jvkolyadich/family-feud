import React from 'react'

const Lights = ({
    rows = 7,
    columns = 11,
    stripes = 2,
    turnedOn = true,
    animated = true,
    duration = 1.5,
    size = 45
}) => {
    const perimeterCount = (rows * 2) + ((columns - 2) * 2)
    const delayInterval = (duration * 1000 * stripes) / perimeterCount
    const maxDelay = delayInterval * (perimeterCount - 1)
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'grid',
                gridTemplateRows: `repeat(${rows}, auto)`,
                gridTemplateColumns: `repeat(${columns}, auto)`
            }}
        >
            {[...Array(perimeterCount)].map((_, i) => {
                const row = (
                    i < columns
                    ? 0
                    : i < (columns + rows - 1)
                    ? i - columns + 1
                    : i < (((columns - 1) * 2) + rows)
                    ? rows - 1
                    : (rows - 2) - (i - (((columns - 1) * 2) + rows))
                )
                const column = (
                    i < columns
                    ? i
                    : i < (columns + rows - 1)
                    ? columns - 1
                    : i < (((columns - 1) * 2) + rows)
                    ? (columns - 2) - (i - (columns + rows - 1))
                    : 0
                )
                const isInFirstRow = row === 0
                const isInLastRow = row === (rows - 1)
                const isInFirstColumn = column === 0
                const isInLastColumn = column === (columns - 1)
                const isCorner = (
                    (isInFirstRow && isInFirstColumn) ||
                    (isInFirstRow && isInLastColumn) ||
                    (isInLastRow && isInFirstColumn) ||
                    (isInLastRow && isInLastColumn)
                )
                return <div
                    key={i}
                    style={{
                        // -5 to make it a circle because parent aspect ratio is not 1:1
                        width: `${size - 5}%`,
                        height: `${size}%`,
                        borderRadius: '50%',
                        backgroundColor: turnedOn && !animated ? 'yellow' : '#4e4e4e',
                        gridArea: `${row + 1}/${column + 1}/${row + 1}/${column + 1}`,
                        // blink animation is defined in tab.js
                        animation: turnedOn && animated ? `${duration}s blink infinite` : '',
                        animationDelay: turnedOn && animated ? `${(delayInterval * i) - maxDelay}ms` : '',
                        alignSelf: (
                            isCorner
                            ? 'center'
                            : isInFirstRow
                            ? 'start'
                            : isInLastRow
                            ? 'end'
                            : 'center'
                        ),
                        justifySelf: (
                            isCorner
                            ? 'center'
                            : isInFirstColumn
                            ? 'start'
                            : isInLastColumn
                            ? 'end'
                            : 'center'
                        ),
                    }}
                />
            })}
        </div>
    )
}

export default Lights
