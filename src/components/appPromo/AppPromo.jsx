import './appPromo.scss';


const AppPromo = () => {
    return (
        <section className="app__promo">
            <div className="container">
                <div className="app__promo-wrapper">

                    <div className="app__promo-title">
                        <h1>TOYOTETSU <br></br> CANADA</h1>
                    </div>

                    <div className="app__promo-subtitle">
                        <p>We produce automotive <br></br>parts for RAV4 & Lexus</p>
                    </div>

                    <button className='app__promo-button btn'>We are hiring</button>

                </div>
            </div>
        </section>
    )
}

export default AppPromo;