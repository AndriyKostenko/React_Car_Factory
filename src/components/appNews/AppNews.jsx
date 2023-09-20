import Carousel from "react-multi-carousel";
import React, { useEffect, useState } from 'react';

import "react-multi-carousel/lib/styles.css";

import './appNews.scss';





const AppNews = () => {

    return (
        <section className="app__news light__bg" id="news">
            <div className="container">
				<div className="app__news-wrapper">
					<h2 className='app__news-title section__title-dark'>Latest news</h2>
					<div className="app__news-carousel">
						<Cards/>
					</div>
				</div>
            </div>
        </section>
    )
}



const Cards = () => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [clickedCard, setClickedCard] = useState(null);



	const handleButtonClick = (item) => {
		setClickedCard(item);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	}

	const cardsData = [{title:'Save our environment', 
						descr:'Celebrating Environmental Month with saplings for all our Team Members!!  Thank you Hockley\'s Landscaping & Tree Service for supplying us with a selection of white spruce, pine and cedar. Happy planting!',
						date: '28 April 2023'},

						{title:'Annual Spirit of Norfolk Awards', 
						descr:'The 5th Annual Spirit of Norfolk Awards is now open for voting. Our community is filled with amazing people and businesses. TTCA is honored to be nominated for Best Local Employer.',
						date: '20 April 2023'},

						{title:'Support local bussiness', 
						descr:'Today TTCA and Charles Jones presented Elgin Avenue Public School with a cheque for $4,570.00 for their Children’s Nutrition Network Program which provides 3 healthy snacks per day to all students from kindergarten to grade 8.',
						date: '17 April 2023'},

						{title:'Walk-in job fairs', 
						descr:'Walk-in Wednesday is here again.  Come and meet HR staff, bring your resume, and have a plant tour.  This opportunity could be the beginning of your career at TTCA. Hope to see you there.  Today 4 pm till 6 pm.',
						date:'10 April 2023'}
					];

	
	//cutting the descr length.
	const truncateDescr = (descr) => {
		const maxLength = 180;
		if (descr.length > maxLength) {
			return descr.substring(0, maxLength) + '...';
		} else {
			return descr;
		}
	}

	// responsivr sett. for carousel
	const responsive = {
					desktop: {
					breakpoint: { max: 3000, min: 1024 },
					items: 3,
					slidesToSlide: 3 // optional, default to 1.
					},
					tablet: {
					breakpoint: { max: 1024, min: 464 },
					items: 2,
					slidesToSlide: 2 // optional, default to 1.
					},
					mobile: {
					breakpoint: { max: 464, min: 0 },
					items: 1,
					slidesToSlide: 1 // optional, default to 1.
					}
	};


	return (
		<div>
			<Carousel responsive={responsive} arrows={false}  customButtonGroup={<ButtonGroup />} renderButtonGroupOutside={true}>
				{cardsData.map((item, index) => {
					return (
						<div className="app__news-card" key={index}>
							<h4 className='app__news-card__title' onClick={() => handleButtonClick(item)}>{item['title']}</h4>
							<div className='app__news-card__descr'>{truncateDescr(item['descr'])}</div>
							<div className="app__news-card__date">{item['date']}</div>
						</div>
					)
				})}
			</Carousel>
			
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<h4 className='app__news-card__title modal-title'>{clickedCard ? ( clickedCard['title']) : (<div></div>)}</h4>
				<div className='app__news-card__descr modal-descr'>{clickedCard ? (clickedCard['descr']) : (<div></div>)}</div>
				<div className="app__news-card__date modal-date">{clickedCard ? (clickedCard['date']) : (<div></div>)}</div>					
			</Modal>
		</div>


	)
}


const ButtonGroup = ({ next, previous }) => {

	return (
	  <div className="carousel-button-group">
		<button className="carousel-button-group-left"  onClick={() => previous()}>
			<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="Arrow 1" d="M0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L5.74264 0.696699C6.03553 0.403806 6.51041 0.403806 6.8033 0.696699C7.09619 0.989593 7.09619 1.46447 6.8033 1.75736L2.56066 6L6.8033 10.2426C7.09619 10.5355 7.09619 11.0104 6.8033 11.3033C6.51041 11.5962 6.03553 11.5962 5.74264 11.3033L0.96967 6.53033ZM12.5 6.75H1.5V5.25H12.5V6.75Z" fill="#042835"/>
			</svg>
		</button>
		<button className="carousel-button-group-right" onClick={() => next()} >
			<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="Arrow 1" d="M12.0303 6.53033C12.3232 6.23744 12.3232 5.76256 12.0303 5.46967L7.25736 0.696699C6.96447 0.403806 6.48959 0.403806 6.1967 0.696699C5.90381 0.989593 5.90381 1.46447 6.1967 1.75736L10.4393 6L6.1967 10.2426C5.90381 10.5355 5.90381 11.0104 6.1967 11.3033C6.48959 11.5962 6.96447 11.5962 7.25736 11.3033L12.0303 6.53033ZM0.5 6.75H11.5V5.25H0.5V6.75Z" fill="#042835"/>
			</svg>
		</button>
	  </div>
	);
};


const Modal = ({ isOpen, onClose, children }) => {

	// tracking the state of modal and freezing the modal window 
	useEffect(()=> {

		if (isOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

		//cleanup
		return () => {
			document.body.classList.remove('no-scroll');
		};
	}, [isOpen]);


	const showHideClassName = isOpen ? "modal display-block" : "modal display-none";

  
	return (
	  <div className={showHideClassName}>
		<div className="modal-content">
		  <button className="close-button" onClick={onClose}>x</button>
		  {children}
		</div>
	  </div>
	);
  };
  




export default AppNews;