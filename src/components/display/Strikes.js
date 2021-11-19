import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import strikeImg from '../../assets/strike.png'

let hideStrikesTimeout

const Strikes = () => {
    const teams = useSelector(state => state.teams.teams)
    const currentTeamId = useSelector(state => state.game.currentTeamId)
    const [strikes, setStrikes] = useState(
        teams.find(team => team.id === currentTeamId)?.strikes
    )
    const [shouldShowStrikes, setShouldShowStrikes] = useState(false)

    const hideStrikes = () => {
        hideStrikesTimeout = null
        setShouldShowStrikes(false)
    }

    const showStrikes = () => {
        if (hideStrikesTimeout) hideStrikesTimeout = clearTimeout(hideStrikesTimeout)
        hideStrikesTimeout = setTimeout(hideStrikes, 1000)
        setShouldShowStrikes(true)
    }

    useEffect(() => {
        const currentTeam = teams.find(team => team.id === currentTeamId)
        const newStrikes = currentTeam ? currentTeam.strikes : 0
        if (newStrikes !== strikes) {
            setStrikes(newStrikes)
            if (newStrikes > 0) showStrikes()
        }
    }, [teams])
    return (
        <div
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: shouldShowStrikes ? '100%' : '0%',
                transition: 'opacity 0.3s ease-in-out'
            }}
        >
            {[...Array(strikes)].map((_, index) => (
                <img
                    key={index}
                    src={strikeImg}
                    style={{
                        width: '24%',
                        padding: '0 0.9%'
                    }}
                />
            ))}
        </div>
    )
}

export default Strikes
