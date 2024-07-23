import burgerMenu from '../assets/images/icon-menu.svg'

export const Navbar = () => {
    return (
        <>
            <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">New</a>
                </li>
                <li>
                    <a href="#">Popular</a>
                </li>
                <li>
                    <a href="#">Trending</a>
                </li>
                <li>
                    <a href="#">Categories</a>
                </li>
            </ul>
            <img className='w-8 h-5 cursor-pointer sm:hidden' src={burgerMenu} alt="Burger Menu" />
        </>
    )
}




