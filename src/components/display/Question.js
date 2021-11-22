import React from 'react'
import { useSelector } from 'react-redux'
import backsplashImg from '../../assets/backsplash.png'

const Question = () => {
    const isShowing = useSelector(state =>  state.game.isQuestionShowing)
    const currentRoundId = useSelector(state =>  state.game.currentRoundId)
    const rounds = useSelector(state =>  state.rounds.rounds)
    return (
        <div
            style={{
                position: 'absolute',
                width: '100.5%',
                height: '100%',
                top: '50%',
                left: '49.95%',
                transform: 'translate(-50%, -50%)',
                opacity: isShowing ? '100%' : '0%',
                transition: 'opacity 0.3s ease-in-out'
            }}
        >
            <img
                src={backsplashImg}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontFamily: 'Impact, sans-serif',
                    fontSize: '3.2vmax',
                    textAlign: 'center',
                    textShadow: '-1px -1px 0 #000,' +
                                '1px -1px 0 #000,' +
                                '-1px 1px 0 #000,' +
                                '1px 1px 0 #000',
                }}
            >
                {currentRoundId && rounds.find(round => round.id === currentRoundId)?.question}
            </div>
        </div>
    )
}

export default Question
