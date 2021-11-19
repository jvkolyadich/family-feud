import React from 'react'
import LoadSaveButtons from './editor/LoadSaveButtons'
import RoundsEditor from './editor/RoundsEditor'

const GameEditor = () => {
    return (
        <>
            <LoadSaveButtons className='mb-3' />
            <RoundsEditor />
        </>
    )
}

export default GameEditor
