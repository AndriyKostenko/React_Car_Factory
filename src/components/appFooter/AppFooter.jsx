import './appFooter.scss';


import linkedIn from '../../resources/icons/linked_in.svg';
import facebook from '../../resources/icons/facebook.svg';
import instagram from '../../resources/icons/instagram.svg';




const AppFooter = () => {


    return (
        <footer className="app__footer dark__bg" id='contacts'>
            <div className="container">
                <div className="app__footer-wrapper">
                    <div className="app__footer-socials">
                        <a href="#">
                            <img src={linkedIn} alt="linkedIn_social" />
                        </a>
                        
                        <a href="#">
                            <img src={facebook} alt="linkedIn_social" />
                        </a>

                        <a href="#">
                            <img src={instagram} alt="instagram_social" />
                        </a> 
                        
                    </div>

                    <div className="app__footer-contact">
                        <div className='app__footer-contact-title'>Contact us</div>
                        <div className='app__footer-contact-p-title'>Phone:</div>
                        <div className='app__footer-contact-phone' >(111) 111-1111</div>
                        <div className='app__footer-contact-em-title'>Email:</div>
                        <div className='app__footer-contact-email'>email@gmail.com</div>
                    </div>

                    <div className="app__footer-hours">
                        <div className='app__footer-hours-title'>Hours of operation</div>
                        <div className='app__footer-hours-date'>Mon-Fri:</div>
                        <div className='app__footer-hours-hours'>7am-16pm</div>
                        <div className='app__footer-hours-date'>Sat-Sun:</div>
                        <div className='app__footer-hours-hours'>Closed</div>
                    </div>

                    <div className="app__footer-location">
                        <div className='app__footer-location-title'>Location</div>
                        <div className='app__footer-location-adress'>11 Park r., Universe</div>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.062516822283!2d-80.33484992343003!3d42.85041310398107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c4f735fb90e0d%3A0xa777b01776a38bfa!2s88%20Park%20Rd%2C%20Simcoe%2C%20ON%20N3Y%204J9!5e0!3m2!1sru!2sca!4v1695158404871!5m2!1sru!2sca" width="150" height="100"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;


