

const MangaList = (props) => {

    const { comics } = props

    return (
        <div className="container">
            <div className="row ">
                <div className="col-12 col-md-3 col-lg-4 justify-content-between">
                    {
                        comics.map((element) => {

                            const { id, title, thumb } = element;

                            return (
                                <div key={id} className="card">
                                    <img src={thumb} className="card-img-top" alt={title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>

    )
}

export default MangaList;