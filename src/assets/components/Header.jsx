import logo from "../img/dc-logo.png"
import NavBar from "./NavBar"


const Header = (props) => {
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
                        
                            <NavBar links={props.links} />

                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Header