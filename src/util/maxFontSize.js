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
    if (!text || !containerWidth || !containerHeight) return 0
    context.font = `${containerHeight}px ${font}`
    const textWidth = context.measureText(text).width
    const maxFontWidth = containerHeight * (containerWidth / textWidth) * 0.988
    let fontSize = Math.min(containerHeight, maxFontWidth)
    fontSize = Math.min(fontSize, maxFontSize)
    fontSize = Math.max(fontSize, minFontSize)
    return fontSize
}

export default maxFontSize
