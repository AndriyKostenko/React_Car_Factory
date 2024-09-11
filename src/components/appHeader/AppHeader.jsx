import './appHeader.scss';

//import logo from '../../resources/icons/ttca_logo.png';



const AppHeader = () => {


    return (
        <div className="container">
            <header className="app__header">
                    <div className="app__header-wrapper">

                        {/* <div className="app__header-logo">
                            <a href="#company"><img src={logo} alt="ttca_logo"/></a>
                        </div> */}

                        <ul className="app__header-menu">
                            
                            <li className="app__header-menu-item"><a href="#company" className="app__header-menu-link">Company</a></li>
                            <li className="app__header-menu-item"><a href="#careers" className="app__header-menu-link">Careers</a></li>
                            <li className="app__header-menu-item"><a href="#news" className="app__header-menu-link">News</a></li>
                            <li className="app__header-menu-item"><a href="#contacts" className="app__header-menu-link">Contacts</a></li>

                        </ul>
                    </div>
            </header>
        </div>
    )
}

export default AppHeader;


