import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <header className="w-auto flex place-content-between items-center mb-8">
            <img src= {logo} alt="Web site logo" />
            <Navbar />
        </header>
    )
}

