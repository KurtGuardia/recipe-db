import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

//components
import Searchbar from '../Searchbar/Searchbar'
//styles
import './Navbar.css'

export default function Navbar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to='create'>Create Recipe</Link>
      </nav>
    </div>
  )
}
