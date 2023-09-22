import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        {id: 1, path: '/', name: 'Home'},
        {id: 2, path: '/about', name: 'About'},
        {id: 3, path: '/services', name: 'Services'},
        {id: 4, path: '/contact', name: 'Contact'},
        {id: 5, path: '*', name: 'Not Found'}
    ];
    return (
        <nav className="bg-yellow-300 text-white p-4">
            <div onClick={() => setOpen(!open)} className="text-3xl md:hidden">
                {
                    open === true ? <AiOutlineMenuFold></AiOutlineMenuFold> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }
                
                
            </div>
            <ul className={`md:flex absolute duration-1000 bg-yellow-300 px-3 ${open ? 'top-15' : '-top-60'} md:static`}>
            {
                routes.map(route => <Link key={route.id}route={route}></Link>)
            }
            </ul>


        </nav>
    )
};

export default Navbar;