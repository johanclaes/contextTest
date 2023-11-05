import {Children, FunctionComponent} from 'react'
import {theme} from './theme.ts'
import {createContext} from 'react'

type ThemeContext = {
    children: React.ReactNode
}
interface ThemeContextProps {}

const ThemeContext: FunctionComponent<ThemeContextProps> = () => {
    const ThemaContext = createContext(theme)
    return (
        <>
            <ThemaContext.Provider value={theme} {...Children}></ThemaContext.Provider>
        </>
    )
}

export default ThemeContext
