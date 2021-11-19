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
                        pendingPoints
                    )}
                </TopMiniScreen>
                <LeftMiniScreen>
                    {teams[0].score}
                    <Lights
                        turnedOn={teams[0].id === currentTeamId}
                        animated={false}
                    />
                </LeftMiniScreen>
                <RightMiniScreen>
                    {teams[1].score}
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
        </Background>
    )
}

export default GameScreen
