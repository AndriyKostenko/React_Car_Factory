import React, { useState } from 'react';

import factory_worker from '../../resources/img/workers/worker.png';
import factory_workers from '../../resources/img/workers/workers_team.png';
import line_1 from '../../resources/img/workers/image1.png';
import line_2 from '../../resources/img/workers/image2.png';
import line_3 from '../../resources/img/workers/image3.png';
import line_4 from '../../resources/img/workers/image4.png';

import './appTeam.scss';


const AppTeam = () => {
    return (
        <section className="app__team light__bg" id='careers'>
            <div className="container">
                <div className="app__team_manuf-wrapper">
                    <div className="app__team_manuf-title section__title-dark">
                        Interested to join our world class manufacturing team?
                    </div>
                    <div className="app__team_manuf-descr section__descr-dark ">
                        TTCA is actively recruiting Production Team Members.
                        <br></br>
                        <br></br>
                        We have immediate openings as Material Handlers, Robotic Welding Cell Operators and Stamping Press  Off-Loaders.
                        <br></br>
                        <br></br>
                        <span>No experience needed!</span>
                    </div>
                    <img src={factory_worker} alt="factory_worker" className="app__team_manuf-worker" />
                </div>

                <div className="app__team_adv-wrapper">
                    <div className="app__team_adv-subtitle">
                        Advantages to working with us
                    </div>
                    
                    <div className="app__team_adv-li">
                        <AdvList/>
                    </div>

                    <img src={factory_workers} alt="" className="app__team_adv-workers" />

                    <div className="app__team_adv-slider">
                        <CardCarousel/>
                    </div>
                </div>

                <div className="app__team_break-line"></div>

                <div className="app__team_line-wrapper">
                    <h2 className="app__team_line-title section__title-dark">On the line</h2>
                    <div className="app__team_line-info">Here's how we make RAV4 and Lexus models each and every day.</div>
                    <LineCards/>
                </div>

            </div>
        </section>
    )
};


const AdvList = () => {
    // list with all advantages
    const advList = ['Benefit package', 'Pension', 
    'Growth opportunities', 'Shift premiums', 'Service awards', 
        'Employee Lunches and events', 'Uniforms'];

    return (
        <ul>
        {advList.map((item, index) => {
            return (
                <li key={index} className='app__team-adv-li-item'>
                    <svg className='icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#1DC2FF"/>
                        <path d="M17.5386 6.16621C17.4271 6.09247 17.3024 6.04183 17.1717 6.0172C17.0409 5.99256 16.9067 5.99441 16.7767 6.02264C16.6467 6.05087 16.5234 6.10492 16.4139 6.18171C16.3044 6.2585 16.2108 6.35653 16.1385 6.47018L10.4659 15.3799L7.69948 12.7734C7.60188 12.6815 7.48746 12.61 7.36275 12.5631C7.23804 12.5162 7.10548 12.4948 6.97265 12.5001C6.70439 12.5108 6.45129 12.6296 6.26903 12.8305C6.08676 13.0314 5.99027 13.2978 6.00078 13.5711C6.01128 13.8445 6.12792 14.1024 6.32504 14.2881L9.95738 17.7102C9.95738 17.7102 10.0616 17.8016 10.1099 17.8336C10.2214 17.9074 10.3461 17.9581 10.4769 17.9828C10.6076 18.0074 10.7419 18.0056 10.8719 17.9774C11.002 17.9491 11.1253 17.8951 11.2349 17.8182C11.3444 17.7414 11.438 17.6434 11.5103 17.5297L17.8369 7.59288C17.9093 7.47925 17.9589 7.35221 17.9831 7.21901C18.0073 7.08581 18.0055 6.94906 17.9778 6.81657C17.9501 6.68409 17.897 6.55846 17.8217 6.44687C17.7463 6.33528 17.6501 6.23991 17.5386 6.16621Z" fill="white"/>
                    </svg> 
                    <span>{item}</span>
                </li>)
                }
            )
        }
    </ul>
    )
}


const LineCards = () => {
    const data = [{img: line_1, title:'Stamping', descr:'Our stamping lines form steel parts with stamping dies under high pressure. Once each piece passes inspection, it moves on to welding.'},
                  {img: line_2, title:'Welding', descr:'We use robotics welders to join sub-assemblies, made up of multiple types of materials.'},
                  {img: line_3, title:'Production Control', descr:'We ensure that our automotive parts are assembled with a high degree of quality. .'},
                  {img: line_4, title:'Ready to go', descr:'Then we ready to supply Automotive Parts to Toyota Manufacturing Facilities located in Norfolk County.'}
                ];
    return (
        <div className="cards">
            {data.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <img src= {item['img']} alt="" />
                        <h4 className='card__title'>{item['title']}</h4>
                        <p className='card__descr'>{item['descr']}</p>
                    </div>
                )
            })}
        </div>

    )
}


const CardCarousel = () => {
    // list with all worker's comments
    const cardData = [
        {   name: 'Clark Tardif ',
            position: 'General Labour',
            content: 'I moved to Simcoe a few days before starting my employment at TTCA & I can say this iseasily one of my favourite jobs I’ve had. You can tell this is a place that genuinely cares about their workers & makes sure to show it.', 
            
        },
        {   name:'Andrew Kostenko',
            position:'General Labour', 
            content: 'Such a great place for new opportunities',        
        },
        {   name: 'Diana Star',
            position: 'QA', 
            content: 'That place always inspires me and keeps in good physical condition.',
        }
    
      ];

    const [currentCard, setCurrentCard] = useState(0);

    const handleNextClick = () => {
        setCurrentCard((prevCard) => (prevCard + 1) % cardData.length);
    };

    const handlePrevClick = () => {
        setCurrentCard((prevCard) => (prevCard - 1 + cardData.length) % cardData.length);
    };


    return (
        <div className="card-carousel">

            <h2 className='card-carousel__title'>What our teammembers say</h2>

            <div className="card-carousel__quotes">
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.4733 14.9008C26.4733 15.6173 26.3104 16.2524 25.9847 16.8061C25.6916 17.3272 25.3008 17.7669 24.8122 18.1252C24.3237 18.4835 23.7863 18.7603 23.2 18.9557C22.6463 19.1186 22.1252 19.2 21.6366 19.2C20.8875 19.2 20.1221 19.0372 19.3405 18.7115C18.5913 18.3532 17.9074 17.8483 17.2885 17.1969C16.6697 16.5455 16.1649 15.7639 15.774 14.8519C15.3832 13.9399 15.1878 12.9303 15.1878 11.8229C15.1878 9.90127 15.5461 8.25649 16.2626 6.88855C17.0117 5.52061 17.8911 4.38066 18.9008 3.4687C19.943 2.52417 21.0015 1.79135 22.0763 1.27023C23.1837 0.71654 24.0957 0.3257 24.8122 0.0977099V1.66107C24.1608 2.05191 23.4606 2.47532 22.7114 2.9313C21.9949 3.38728 21.3272 3.92468 20.7084 4.54351C20.1221 5.16234 19.6336 5.8626 19.2427 6.64428C18.8519 7.42595 18.6565 8.30534 18.6565 9.28244C18.6565 9.77099 18.7053 10.1618 18.8031 10.455C18.9008 10.7481 19.0148 10.9761 19.145 11.1389C19.3079 11.3018 19.4545 11.4158 19.5847 11.4809C19.7476 11.5461 19.8779 11.5786 19.9756 11.5786C20.3338 11.5786 20.7735 11.4809 21.2947 11.2855C21.8158 11.0575 22.3043 10.9435 22.7603 10.9435C23.1837 10.9435 23.6071 11.0412 24.0305 11.2366C24.4865 11.3995 24.8936 11.6601 25.2519 12.0183C25.6102 12.344 25.9033 12.7511 26.1313 13.2397C26.3593 13.7282 26.4733 14.2819 26.4733 14.9008ZM11.2366 14.8031C11.2366 15.5196 11.0738 16.1547 10.7481 16.7084C10.455 17.2621 10.0641 17.7181 9.57557 18.0763C9.08702 18.402 8.54962 18.6626 7.96336 18.858C7.40967 19.0209 6.87226 19.1023 6.35114 19.1023C5.60204 19.1023 4.85293 18.9394 4.10382 18.6137C3.35471 18.2555 2.67074 17.7669 2.05191 17.1481C1.43308 16.4967 0.928244 15.715 0.537405 14.8031C0.179135 13.8911 0 12.8814 0 11.774C0 9.85242 0.35827 8.20763 1.07481 6.83969C1.82392 5.43919 2.70331 4.28295 3.71298 3.37099C4.75522 2.42646 5.81374 1.69364 6.88855 1.17252C7.96336 0.61883 8.85903 0.22799 9.57557 0V1.61221C8.92417 2.00305 8.22392 2.42646 7.47481 2.88244C6.75827 3.33842 6.09058 3.87583 5.47176 4.49466C4.8855 5.11349 4.38066 5.81374 3.95725 6.59542C3.56641 7.34453 3.37099 8.22392 3.37099 9.23359C3.37099 10.1455 3.55013 10.7481 3.9084 11.0412C4.29924 11.3344 4.59237 11.4809 4.78779 11.4809C5.11349 11.4809 5.5369 11.3832 6.05801 11.1878C6.57913 10.9924 7.06768 10.8947 7.52366 10.8947C7.94707 10.8947 8.37048 10.9924 8.79389 11.1878C9.24987 11.3506 9.657 11.6112 10.0153 11.9695C10.3735 12.2952 10.6667 12.7023 10.8947 13.1908C11.1226 13.6468 11.2366 14.1842 11.2366 14.8031Z" fill="#1DC2FF"/>
                </svg>
            </div>

            <p className='card-carousel__content'>{cardData[currentCard].content}</p>
            <p className='card-carousel__name'>{cardData[currentCard].name}</p>
            <p className='card-carousel__position'>{cardData[currentCard].position}</p>

            <div className="card-carousel__button">
                <button className='card-carousel__button-left' onClick={handlePrevClick}>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Arrow 1" d="M0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L5.74264 0.696699C6.03553 0.403806 6.51041 0.403806 6.8033 0.696699C7.09619 0.989593 7.09619 1.46447 6.8033 1.75736L2.56066 6L6.8033 10.2426C7.09619 10.5355 7.09619 11.0104 6.8033 11.3033C6.51041 11.5962 6.03553 11.5962 5.74264 11.3033L0.96967 6.53033ZM12.5 6.75H1.5V5.25H12.5V6.75Z" fill="#042835"/>
                    </svg>
                </button>
                <button className='card-carousel__button-right' onClick={handleNextClick}>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Arrow 1" d="M12.0303 6.53033C12.3232 6.23744 12.3232 5.76256 12.0303 5.46967L7.25736 0.696699C6.96447 0.403806 6.48959 0.403806 6.1967 0.696699C5.90381 0.989593 5.90381 1.46447 6.1967 1.75736L10.4393 6L6.1967 10.2426C5.90381 10.5355 5.90381 11.0104 6.1967 11.3033C6.48959 11.5962 6.96447 11.5962 7.25736 11.3033L12.0303 6.53033ZM0.5 6.75H11.5V5.25H0.5V6.75Z" fill="#042835"/>
                    </svg>
                </button>
            </div>
        </div>
      );

}


export default AppTeam;

