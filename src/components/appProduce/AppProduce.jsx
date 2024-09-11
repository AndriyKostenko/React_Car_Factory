import part_1 from '../../resources/img/parts/image Radiator.png';
import part_2 from '../../resources/img/parts/image Center Body.png';
import part_3 from '../../resources/img/parts/Rail Outer.png';
import part_4 from '../../resources/img/parts/Rocker Outer.png';
import part_5 from '../../resources/img/parts/Brake Pedal.png';
import part_6 from '../../resources/img/parts/image Parking Pedal.png';


import './appProduce.scss';


const AppProduce = () => {
    return (
        <section className="app__produce dark__bg">
            <div className="container">
                <div className="app__produce_wrapper">
                    <div className="app__produce_title section__title-light">
                        We produce
                    </div>
                    
                    <div className="app__produce_sect-descr">
                        Our mainstay products use technologies such as 
                        ultra high-tensile steel, hot stamps, and structural adhesive.
                    </div>

                    <div className="app__produce_part-card" data-index-number="1">
                        <img src={part_1} alt="part_radiator" className='app__produce_part-card-photo'/>
                        <div className="app__produce_part-card-subtitle">
                            Radiator Support
                        </div>
                        <div className="app__produce_part-card-descr">
                            Parts that are attached to the front of the body to support radiators and headlamps that cool the engine.
                        </div>
                    </div>

                    <div className="app__produce_part-card" data-index-number="2">
                        <img src={part_2} alt="part_pillar" className='app__produce_part-card-photo'/>
                        <div className="app__produce_part-card-subtitle">
                            Center Body Pillar
                        </div>
                        <div className="app__produce_part-card-descr">
                            It is a columnar part located between the front and rear doors and connecting from the floor to the roof.
                        </div>
                    </div>

                    <div className="app__produce_part-card" data-index-number="3">
                        <img src={part_3} alt="part_rail" className='app__produce_part-card-photo'/>
                        <div className="app__produce_part-card-subtitle">
                            Rail Outer
                        </div>
                        <div className="app__produce_part-card-descr">
                            It is a columnar part located between the front and rear doors and connecting from the floor to the roof.
                        </div>
                    </div>

                    <div className="app__produce_part-card" data-index-number="4">
                        <img src={part_4} alt="part_rocket" className='app__produce_part-card-photo'/>
                        <div className="app__produce_part-card-subtitle">
                            Rocker Outer
                        </div>
                        <div className="app__produce_part-card-descr">
                            This is a long part located between the front and rear tires of an automobile and where passengers straddle when getting in the car.
                        </div>
                    </div>

                    <div className="app__produce_part-card" data-index-number="5">
                        <img src={part_5} alt="part_pedal" className='app__produce_part-card-photo'/>
                        <div className="app__produce_part-card-subtitle">
                            Brake Pedal
                        </div>
                        <div className="app__produce_part-card-descr">
                        The brake pedal is the interface for the brake system.
                        </div>
                    </div>

                    <div className="app__produce_part-card" data-index-number="6">
                        <img src={part_6} alt="part_parking_brake" className='app__produce_part-card-photo'/>
                        <div className="app__produce_part-card-subtitle">
                            Parking Brake Pedal
                        </div>
                        <div className="app__produce_part-card-descr">
                            The parking brake is used to stop the car when it is parked, and the hand lever type 
                            and foot release type pedal type are the mainstream.
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default AppProduce;