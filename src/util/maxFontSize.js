const context = document.createElement('canvas').getContext('2d')

const maxFontSize = (
    text,
    font,
    containerWidth,
    containerHeight,
    minFontSize = 0,
    maxFontSize = Infinity
) => {
    text = text.trim()
    context.font = `${containerHeight}px ${font}`
    let textMetrics = context.measureText(text)
    let textHeight = textMetrics.fontBoundingBoxAscent + textMetrics.fontBoundingBoxDescent
    const maxFontToFitHeight = containerHeight * (containerHeight / textHeight)
    let widthScaleFactor = containerWidth / textMetrics.width
    const maxFontToFitWidth = containerHeight * widthScaleFactor * 0.99
    let fontSize = Math.min(maxFontToFitHeight, maxFontToFitWidth)
    if (!text.includes(' ') || textMetrics.width < containerWidth) {
        fontSize = Math.min(fontSize, maxFontSize)
        fontSize = Math.max(fontSize, minFontSize)
        return fontSize
    }
    let lineCount = 2
    let prevFontSize
    do {
        prevFontSize = fontSize
        const words = text.split(' ')
        const maxLineLength = Math.floor((text.length - (lineCount - 1)) / lineCount)
        const lines = words.reduce((lines, word) => {
            if (lines.length && (lines[lines.length - 1].join(' ').length + word.length + 1) <= maxLineLength)
                lines[lines.length - 1].push(word)
            else
                lines.push([word])
            return lines
        }, []).map(line => line.join(' '))
        const longestLine = lines.reduce((prev, current) => (
            context.measureText(prev).width > context.measureText(current).width
            ? prev
            : current
        ))
        context.font = `${containerHeight}px ${font}`
        textMetrics = context.measureText(longestLine)
        widthScaleFactor = containerWidth / textMetrics.width
        fontSize = containerHeight * widthScaleFactor * 0.99
        context.font = `${fontSize}px ${font}`
        textMetrics = context.measureText(longestLine)
        textHeight = textMetrics.fontBoundingBoxAscent + textMetrics.fontBoundingBoxDescent
        fontSize = Math.min(fontSize, fontSize * (containerHeight / (textHeight * lines.length)))
        fontSize = Math.min(fontSize, (containerHeight / lines.length))
        lineCount++
    } while (fontSize > prevFontSize)
    fontSize = Math.min(prevFontSize, maxFontSize)
    fontSize = Math.max(prevFontSize, minFontSize)
    return prevFontSize
}

export default maxFontSize
