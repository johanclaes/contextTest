
import './App.css'
import Box from './Components/Box.tsx'
import ThemeContextProvider from './Components/ThemeContext.tsx'

function App() {


  return (
    <>
        <ThemeContextProvider>
            <Box/>
        </ThemeContextProvider>


      <p >
        Click on the Vite and React logos to learn more
      </p>
        <Box/>
    </>
  )
}

export default App
