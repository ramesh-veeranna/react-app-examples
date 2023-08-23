import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Navbar(props) {
    const location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">
                        {props.title}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={ location.pathname == "/" ? 'nav-link active' : 'nav-link' } aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ location.pathname == "/users" ? 'nav-link active' : 'nav-link' } to="/users">
                                    Users
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ location.pathname == "/posts" ? 'nav-link active' : 'nav-link' } to="/posts">
                                    Posts
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={ location.pathname == "/hooks" ? 'nav-link active' : 'nav-link' } to="/hooks">
                                    Hooks
                                </Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Examples
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/hooks">
                                            Hooks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/hooks-2">
                                            Hooks 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/render">
                                            Render
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/formik">
                                            Formik
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/hook-form">
                                            Hook Form
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link disabled"
                                    href="#"
                                    tabIndex={-1}
                                    aria-disabled="true"
                                >
                                    Disabled
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
