export const debounce_trailing = (callback, timeout) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => callback(...args), timeout)
    }
}

export const debounce_leading = (callback, timeout) => {
    let timer
    return (...args) => {
        if (!timer) callback(...args)
        clearTimeout(timer)
        timer = setTimeout(() => timer = undefined, timeout)
    }
}

export const debounce_leading_trailing = (callback, timeout) => {
    let timer
    return (...args) => {
        if (!timer) callback(...args)
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = undefined
            callback(...args)
        }, timeout)
    }
}
