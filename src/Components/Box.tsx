import {FunctionComponent} from 'react'
import { useContext} from 'react'
import ThemeContext from './ThemeContext.tsx'


interface BoxProps {
}

const Box: FunctionComponent<BoxProps> = () => {

    const theme = useContext(ThemeContext)
    return (
        <>
            <div >
                <p>enige inhoud</p>
            </div>

        </>
    )
}

export default Box
