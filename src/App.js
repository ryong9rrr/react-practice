import ColorBox from './ColorBox'
import { ColorProvider } from './context'
import SelectColors from './SelectColors'
import SelectColorsClass from './SelectColors.class'

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColorsClass />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App
