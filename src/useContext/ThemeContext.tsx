import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext({});
// const ThemeUpdateContext = React.createContext({toggleDarkTheme:()=> {}});
const ThemeUpdateContext = React.createContext(()=>{});

export function useTheme() {
    return useContext(ThemeContext);
}


export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}:{children:React.ReactNode}) {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);
    // const ThemeMode = React.useMemo(()=>({

    //     toggleDarkTheme:()=> {
    //             setDarkTheme(preDarkTheme => !preDarkTheme);
    //         }   
    // }),[])

     function toggleTheme() {
        setDarkTheme(preDarkTheme => !preDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}