import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return(
    //REACT FRAGMENT
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
