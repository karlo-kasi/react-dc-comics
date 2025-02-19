import logo from "../img/dc-logo.png"



const Header = () => {
    return (
        <div className="bg-body-tertiary">
            <div className="container-lg">
                <nav class="navbar navbar-expand-lg">
                    
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="DC Logo" height="60" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link text-dark" href="#">CHARACTERS</a></li>
                                <li className="nav-item"><a className="nav-link text-primary border-bottom border-primary" href="#">COMICS</a></li>
                                <li className="nav-item"><a className="nav-link text-dark" href="#">MOVIES</a></li>
                                <li className="nav-item"><a className="nav-link text-dark" href="#">TV</a></li>
                                <li className="nav-item"><a className="nav-link text-dark" href="#">GAMES</a></li>
                                <li className="nav-item"><a className="nav-link text-dark" href="#">COLLECTIBLES</a></li>
                                <li className="nav-item"><a className="nav-link text-dark" href="#">VIDEOS</a></li>
                                <li className="nav-item"><a className="nav-link text-dark" href="#">FANS</a></li>
                                <li className="nav-item"><a className="nav-link text-dark" href="#">NEWS</a></li>
                                <li className="nav-item"><a className="nav-link text-dark" href="#">SHOP</a></li>
                            </ul>
                        </div>
                   
                </nav>
            </div>
        </div>
    )
}

export default Header