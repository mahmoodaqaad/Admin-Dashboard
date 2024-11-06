
import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext();



const MyState = ({ children }) => {
    const [DarkMode, setDarkMode] = useState(true)
    const [isOpenBars, SetIsOpenBars] = useState(false)
    const [Profile, setProfile] = useState()

    useEffect(() => {


        if (DarkMode) {
            document.body.style.backgroundColor = 'rgb(32,41,61)';
        }
        else {
            document.body.style.backgroundColor = 'rgb(241, 245, 249)';
        }


    },
        [DarkMode])

    return (
        <MyContext.Provider value={{ DarkMode, setDarkMode, isOpenBars, SetIsOpenBars, Profile, setProfile }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState
