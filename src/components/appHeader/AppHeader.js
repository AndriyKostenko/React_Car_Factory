import './appHeader.scss';

import logo from '../../resources/icons/ttca_logo.png';



const AppHeader = () => {
    return (
        <div className="main__bg dark__bg">
            <div className="container">
                <div className="app__header">
                    <div className="app__header-wrapper">

                        <div className="app__header-logo">
                            <a href="#"><img src={logo} alt="ttca_logo"/></a>
                            {/* <img src={Logo} alt="ttca_logo" /> */}
                        </div>

                        <div className="app__header-title">
                            <h1>TOYOTETSU <br></br> CANADA</h1>
                        </div>

                        <div className="app__header-subtitle">
                            <p>We produce automotive <br></br>parts for RAV4 & Lexus</p>
                        </div>

                        <button className='app__header-button btn'>We are hiring</button>
        
                        <ul class="app__header-menu">
                            <li class="app__header-menu-item"><a href="#" class="app__header-menu-link">Company</a></li>
                            <li class="app__header-menu-item"><a href="#" class="app__header-menu-link">Careers</a></li>
                            <li class="app__header-menu-item"><a href="#" class="app__header-menu-link">News</a></li>
                            <li class="app__header-menu-item"><a href="#" class="app__header-menu-link">Contacts</a></li>

                        </ul>
        
                    </div>
                </div>
            </div>
        </div>


        

    )
}

export default AppHeader;