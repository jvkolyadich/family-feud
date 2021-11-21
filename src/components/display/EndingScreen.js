import React from 'react'
import { useSelector } from 'react-redux'
import Background from './Background'
import Board from './Board'
import TopMiniScreen from './TopMiniScreen'
import CenterScreen from './CenterScreen'
import Logo from './Logo'
import backsplashImg from '../../assets/backsplash.png'
import logoImg from '../../assets/logo.png'
import LeftMiniScreen from './LeftMiniScreen'
import RightMiniScreen from './RightMiniScreen'
import Lights from './Lights'
import BlackScreen from './BlackScreen'

const EndingScreen = () => {
    const isEnding = useSelector(state => state.game.ending)
    const teams = useSelector(state => state.teams.teams)
    return (
        <Background>
            <Board>
                <TopMiniScreen>
                    <Logo />
                </TopMiniScreen>
                <LeftMiniScreen>
                    {teams[0].score}
                    <Lights
                        turnedOn={teams[0].score >= teams[1].score}
                        animated={isEnding}
                        stripes={4}
                    />
                </LeftMiniScreen>
                <RightMiniScreen>
                    {teams[1].score}
                    <Lights
                        turnedOn={teams[1].score >= teams[0].score}
                        animated={isEnding}
                        stripes={4}
                    />
                </RightMiniScreen>
                <CenterScreen>
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%'
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
                        <img
                            src={logoImg}
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                </CenterScreen>
            </Board>
            <BlackScreen />
        </Background>
    )
}

export default EndingScreen
