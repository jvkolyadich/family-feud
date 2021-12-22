import React from 'react'
import { useSelector } from 'react-redux'
import Background from './Background'
import Board from './Board'
import TopMiniScreen from './TopMiniScreen'
import Logo from './Logo'
import LeftMiniScreen from './LeftMiniScreen'
import RightMiniScreen from './RightMiniScreen'
import CenterScreen from './CenterScreen'
import Answers from './Answers'
import Strikes from './Strikes'
import Lights from './Lights'
import Question from './Question'
import BlackScreen from './BlackScreen'
import MaxTextSize from './MaxTextSize'

const GameScreen = () => {
    const teams = useSelector(state => state.teams.teams)
    const currentTeamId = useSelector(state => state.game.currentTeamId)
    const pendingPoints = useSelector(state => state.game.pendingPoints)
    return (
        <Background>
            <Board>
                <TopMiniScreen>
                    {pendingPoints === 0 ? (
                        <Logo />
                    ) : (
                        <MaxTextSize
                            text={'' + pendingPoints}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80%',
                                height: '60%'
                            }}
                        />
                    )}
                </TopMiniScreen>
                <LeftMiniScreen>
                    <MaxTextSize
                        text={'' + teams[0].score}
                        style={{
                            width: '70%',
                            height: '35%'
                        }}
                    />
                    <Lights
                        turnedOn={teams[0].id === currentTeamId}
                        animated={false}
                    />
                </LeftMiniScreen>
                <RightMiniScreen>
                    <MaxTextSize
                        text={'' + teams[1].score}
                        style={{
                            width: '70%',
                            height: '35%'
                        }}
                    />
                    <Lights
                        turnedOn={teams[1].id === currentTeamId}
                        animated={false}
                    />
                </RightMiniScreen>
                <CenterScreen
                    style={{
                        display: 'grid',
                        alignItems: 'center',
                        gridTemplateRows: 'repeat(4, 25%)',
                        gridTemplateColumns: 'repeat(2, 50%)',
                    }}
                >
                    <Answers />
                    <Question />
                </CenterScreen>
                <Strikes />
            </Board>
            <BlackScreen />
        </Background>
    )
}

export default GameScreen
