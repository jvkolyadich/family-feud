import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import GameDisplay from './components/GameDisplay'
import impactFont from './assets/impact.ttf'

export let tab = null

export const openTab = () => {
    if (!tab || tab.closed) {
        if (tab && tab.closed) tab = null
        tab = window.open('', '_blank')
        tab.document.title = 'Family Feud Display'
        tab.document.body.innerHTML = `
            <div id="root"></div>
            <style>
                @font-face {
                    font-family: "Impact";
                    src: url(${impactFont}) format("truetype");
                }
                @keyframes blink {
                    0% {
                        background-color: yellow;
                    }
                    25% {
                        background-color: yellow;
                    }
                    100% {
                        background-color: #4e4e4e;
                    }
                }
            </style>
        `
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    <GameDisplay />
                </Provider>
            </React.StrictMode>,
            tab.document.getElementById('root')
        )
    }
    return tab
}

export const closeTab = () => {
    if (tab && !tab.closed)
        tab.close()
}

window.addEventListener('beforeunload', closeTab)
