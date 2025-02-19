
const links = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: false },
    { id: 3, text: "MOVIES", url: "#", current: true },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: false },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: false },
    { id: 9, text: "SHOP", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: false }
]

const NavBar = () => {
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