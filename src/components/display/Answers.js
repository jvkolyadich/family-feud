import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import answerImg from '../../assets/answer.png'
import questionImg from '../../assets/question.png'
import blankQuestionImg from '../../assets/blankQuestion.png'

const Answers = () => {
    const currentRoundId = useSelector(state => state.game.currentRoundId)
    const answers = useSelector(state => state.answers.answers)
    const [currentAnswers, setCurrentAnswers] = useState([])
    useEffect(() => {
        const currentRoundAnswers = answers.filter(answer => answer.roundId === currentRoundId)
                                           .sort((a, b) => b.points - a.points)
        const blankAnswers = 8 - currentRoundAnswers.length
        setCurrentAnswers([
            ...currentRoundAnswers,
            ...Array(blankAnswers).fill({})
        ])
    }, [currentRoundId, answers])
    return (
        <>
            {currentRoundId && currentAnswers.map((answer, index) => {
                const row = index <= 3 ? index + 1 : index - 3
                const column = index <= 3 ? 1 : 2
                const justify = index < 4 ? 'start' : 'end'
                return answer.text ? (
                    answer.isRevealed ? (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${answerImg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                width: '99.2%',
                                height: '94%',
                                justifySelf: justify,
                                gridArea: `${row}/${column}/${row}/${column}`,
                                display: 'flex'
                            }}
                        >
                            <div
                                style={{
                                    margin: '1.2% 0 1.4% 1.2%',
                                    width: '70%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    fontSize: (
                                        answer.text.length > 10
                                        ? answer.text.length > 21
                                        ? '105%'
                                        : '150%'
                                        : '180%'
                                    ),
                                    overflow: 'hidden',
                                    fontFamily: 'Impact, sans-serif',
                                    color: 'white'
                                }
                            }>
                                {answer.text}
                            </div>
                            <div
                                style={{
                                    margin: '1.2% 1.2% 1.4% 0',
                                    width: '30%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '180%',
                                    overflow: 'hidden',
                                    fontFamily: 'Impact, sans-serif',
                                    color: 'white'
                                }}
                            >
                                {answer.points}
                            </div>
                        </div>
                    ) : (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${questionImg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                width: '99.2%',
                                height: '94%',
                                justifySelf: justify,
                                gridArea: `${row}/${column}/${row}/${column}`,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                fontSize: '280%',
                                fontFamily: 'Impact, sans-serif',
                                color: 'white'
                            }}
                        >
                            <div style={{ marginRight: index === 0 ? '1.5%' : '0' }}>{index + 1}</div>
                        </div>
                    )
                ) : (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${blankQuestionImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            width: '99.2%',
                            height: '94%',
                            justifySelf: justify,
                            gridArea: `${row}/${column}/${row}/${column}`
                        }}
                    />
                )
            })}
        </>
    )
}

export default Answers
