import img from "../img/buy-comics-digital-comics.png"
import img2 from "../img/buy-comics-merchandise.png"
import img3 from "../img/buy-comics-shop-locator.png"
import img4 from "../img/buy-comics-subscriptions.png"
import img5 from "../img/buy-dc-power-visa.svg"
import MangaList from "./Manga/MangaLists"


const Main = (props) => {
    return (
        <>
            <div className="bg-jumbo position-relative">
                {/* <div className="container">
                    <button type="button" class="btn btn-primary position-absolute top-100 start-40 translate-middle">Primary</button>
                </div> */}
            </div>
            <div className="bg-dark">
                <MangaList comics={props.comics} />
            </div>

            <div className="bg-primary text-white text-center py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-2 d-flex align-items-center justify-content-center gap-2 m-2">
                            <img src={img} width="40px" alt="Digital Comics" className="img-fluid" />
                            <p className="m-1">DIGITAL COMICS</p>
                        </div>
                        <div className="col-6 col-md-2 d-flex align-items-center justify-content-center gap-2 m-2">
                            <img src={img2} width="45px" alt="DC Merchandise" className="img-fluid" />
                            <p className="m-1">DC MERCHANDISE</p>
                        </div>
                        <div className="col-6 col-md-2 d-flex align-items-center justify-content-center gap-2 m-2">
                            <img src={img3} width="30px" alt="Subscription" className="img-fluid" />
                            <p className="m-1">SUBSCRIPTION</p>
                        </div>
                        <div className="col-6 col-md-2 d-flex align-items-center justify-content-center gap-2 m-2">
                            <img src={img4} width="45px" alt="Comic Shop Locator" className="img-fluid" />
                            <p className="m-1">COMIC SHOP LOCATOR</p>
                        </div>
                        <div className="col-12 col-md-2 d-flex align-items-center justify-content-center gap-2">
                            <img src={img5} width="45px" alt="DC Power Visa" className="img-fluid" />
                            <p className="m-1">DC POWER VISA</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main