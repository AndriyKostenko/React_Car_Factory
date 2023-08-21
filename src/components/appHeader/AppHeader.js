import './appHeader.scss';

import Logo from '../../resources/icons/ttca_logo.png';


const AppHeader = () => {
    return (
        <div className="main__bg dark__bg">
            <div className="container">
                <div className="app__header">
                    <div className="app__header-wrapper">

                        <div className="app__header-logo">
                            <img src={Logo} alt="ttca_logo" />
                        </div>

                        <div className="app__header-title">
                            <h1>TOYOTETSU CANADA</h1>
                        </div>

                        <div className="app__header-subtitle">
                            <p>We produce automotive parts for RAV4 & Lexus</p>
                        </div>
           
                    </div>
                </div>
            </div>
        </div>




    )
}

export default AppHeader;