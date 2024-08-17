import { Canvas } from '@react-three/fiber'
import './App.scss'
import Plane from './components/Plane'

function App() {
  return (
    <>
     <Canvas>
      <Plane />
    </Canvas>
    </>
  )
}

export default App
