import './appMajor.scss';
import factory_photo from '../../resources/img/factory/outside_factory.png';


const AppMajor = () => {
    return (
        <section className="app__major dark__bg">
            <div className="container">
                <div className="app__major-wrapper">
                    <div className="app__major-title section__title-light">
                        A major parts manufacturer <br></br> in Norfolk County
                    </div>
                    <img src={factory_photo} alt="outside_factory_photo" className="app__major-factory" />
                    <p className="app__major-descr section__descr-light">
                        Toyotetsu Canada was founded in 2006, in Simcoe, Ontario. <br></br> We produce high quality automotive parts to Toyota Manufacturing <br></br> Facilities located in the heart of Norfolk County.
                        <br></br>
                        <br></br>
                        We utilize state of the art technology to ensure our automotive <br></br> parts are assembled with a high degree of quality.
                    </p>
                </div>
            </div>
        </section>




    )
}

export default AppMajor;