import './appPromo.scss';


const AppPromo = () => {
    return (
        <section className="app__promo main__bg dark__bg" id='company'>
            <div className="container">
                <div className="app__promo-wrapper">

                    <div className="app__promo-title">
                        <h1>BREVETSU <br></br> CANADA</h1>
                    </div>

                    <div className="app__promo-subtitle">
                        <p>We produce automotive <br></br>parts for CAR1 & CAR2</p>
                    </div>

                    <a href='#join' className='app__promo-button btn'>We are hiring</a>

                </div>
            </div>
        </section>
    )
}

export default AppPromo;