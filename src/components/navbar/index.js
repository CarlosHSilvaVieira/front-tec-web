import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    renderSelected() {
        return (
            <span class='sr-only'>(current)</span>
        )
    }

    render() {

        return (
            <div>
                <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                    <Link className='navbar-brand' href='/'>BookStore</Link>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                        <ul className='navbar-nav'>
                            <li className='nav-item active'>
                                <Link className='nav-link' href='/'>Home </Link>
                            </li>
                            
                            <li className='nav-item dropdown'>
                                <button type={'button'} style={{
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                }} className='nav-link dropdown-toggle' href='' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                    Categorias
                                </button>
                                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    <Link className='dropdown-item' href='#'>Action</Link>
                                    <Link className='dropdown-item' href='#'>Another action</Link>
                                    <Link className='dropdown-item' href='#'>Something else here</Link>
                                </div>
                            </li>

                            <li className='nav-item'>
                                <Link className='nav-link' href='#'>Entrar</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
