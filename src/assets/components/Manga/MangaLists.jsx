

const MangaList = (props) => {

    const { comics } = props

    return (
        <div className="container">
            <div className="row ">
                {
                    comics.map((element) => {

                        const { id, title, thumb } = element;

                        return (
                            <div key={id} className="col col-sm-6 col-md-3 col-lg-2 my-3">
                                <div className="card bg-transparent border-0">
                                    <img src={thumb} className="mx-auto d-block square-image" alt={title} />
                                    <div className>
                                        <h5 className="card-title text-white text-center">{title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>

    )
}

export default MangaList;