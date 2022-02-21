
import {useTheme, useThemeUpdate, } from './ThemeContext';

function FComponent() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        background: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <button onClick={toggleTheme}>mode:{darkTheme?'dark':'light'}</button>
            <div style={themeStyles}>Function Theme</div>
        </>
    )
}

export default FComponent;