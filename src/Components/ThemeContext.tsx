import {Children, FunctionComponent} from 'react'
import {theme} from './theme.ts'
import {createContext} from 'react'

type ThemeContext = {
    children: React.ReactNode
}
interface ThemeContextProps {}

export const ThemeContext = createContext(theme)

const ThemeContextProvider: FunctionComponent<ThemeContextProps> = () => {

    return (
        <>
            <ThemeContext.Provider value={theme} {...Children}></ThemeContext.Provider>
        </>
    )
}

export default ThemeContextProvider
