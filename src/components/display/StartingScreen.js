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
import Lights from './Lights'
import RightMiniScreen from './RightMiniScreen'
import BlackScreen from './BlackScreen'

const StartingScreen = () => {
    const isStarting = useSelector(state => state.game.starting)
    return (
        <Background>
            <Board>
                <TopMiniScreen>
                    <Logo />
                </TopMiniScreen>
                <LeftMiniScreen>
                    <Lights turnedOn={isStarting} />
                </LeftMiniScreen>
                <RightMiniScreen>
                    <Lights turnedOn={isStarting} />
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

export default StartingScreen
