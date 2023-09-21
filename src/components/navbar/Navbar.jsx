import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'
import { flushSync } from "react-dom";

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
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineMenuUnfold className="text-3xl"></AiOutlineMenuUnfold> : <AiOutlineMenuFold className="text-3xl"></AiOutlineMenuFold>
                }
            
            </div>
            <ul className="md:flex gap-4">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    )
};

export default Navbar;