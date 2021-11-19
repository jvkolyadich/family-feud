import React from 'react'
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

const StartingScreen = () => {
    return (
        <Background>
            <Board>
                <TopMiniScreen>
                    <Logo />
                </TopMiniScreen>
                <LeftMiniScreen>
                    <Lights />
                </LeftMiniScreen>
                <RightMiniScreen>
                    <Lights />
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
        </Background>
    )
}

export default StartingScreen
