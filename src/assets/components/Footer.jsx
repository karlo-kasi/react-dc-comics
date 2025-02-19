import backgroundImage from "../img/footer-bg.jpg";
import social1 from "../img/footer-facebook.png"
import social2 from "../img/footer-periscope.png"
import social3 from "../img/footer-pinterest.png"
import social4 from "../img/footer-youtube.png"

const Footer = () => {
    return (
        <footer>
            <div className="text-white py-5"
                style={{
                    background: `url(${backgroundImage}) no-repeat center center/cover`,
                }}>

                <div className="container">
                    <div className="row justify-content-start">

                        <div className="col-2">
                            <h5 className="fw-bold">DC COMICS</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none">Characters</a></li>
                                <li><a href="#" className="text-decoration-none">Comics</a></li>
                                <li><a href="#" className="text-decoration-none">Movies</a></li>
                                <li><a href="#" className="text-decoration-none">TV</a></li>
                                <li><a href="#" className="text-decoration-none">Games</a></li>
                                <li><a href="#" className="text-decoration-none">Videos</a></li>
                                <li><a href="#" className="text-decoration-none">News</a></li>
                            </ul>
                            <h5 className="fw-bold">SHOP</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none">Shop DC</a></li>
                                <li><a href="#" className="text-decoration-none">Shop DC Collectibles</a></li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <h5 className="fw-bold">DC</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none">Terms Of Use</a></li>
                                <li><a href="#" className="text-decoration-none">Privacy Policy (New)</a></li>
                                <li><a href="#" className="text-decoration-none">Ad Choices</a></li>
                                <li><a href="#" className="text-decoration-none">Advertising</a></li>
                                <li><a href="#" className="text-decoration-none">Jobs</a></li>
                                <li><a href="#" className="text-decoration-none">Subscriptions</a></li>
                                <li><a href="#" className="text-decoration-none">Talent Workshops</a></li>
                                <li><a href="#" className="text-decoration-none">CPSC Certificates</a></li>
                                <li><a href="#" className="text-decoration-none">Ratings</a></li>
                                <li><a href="#" className="text-decoration-none">Shop Help</a></li>
                                <li><a href="#" className="text-decoration-none">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <h5 className="fw-bold">SITES</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-decoration-none">DC</a></li>
                                <li><a href="#" className="text-decoration-none">MAD Magazine</a></li>
                                <li><a href="#" className="text-decoration-none">DC Kids</a></li>
                                <li><a href="#" className="text-decoration-none">DC Universe</a></li>
                                <li><a href="#" className="text-decoration-none">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                    backgroundColor: `#303030 `,
                }}>
                <div className="container py-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-auto">
                            <button type="button" class="btn btn-outline-primary text-white">SIGN-UP NOW!</button>
                        </div>
                        <div className="col-auto d-flex align-items-center gap-2">
                            <h5 className="mb-0 d-flex align-items-center text-primary fs-">FOLLOW US</h5>
                            <img src={social1} alt="" />
                            <img src={social2} alt="" />
                            <img src={social3} alt="" />
                            <img src={social4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;