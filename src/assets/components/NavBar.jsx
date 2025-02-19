


const NavBar = (props) => {
    const {links} = props
  
    return (
                        <ul className="navbar-nav ms-auto">
                            {
                                links.map((element) => {

                                    const { id, text, url, current } = element;

                                    return (
                                        <li key={id} className={current ? "active" : ""}>
                                            <a className="nav-link text-dark" href={url}>
                                                {text}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    
    )
}

export default NavBar