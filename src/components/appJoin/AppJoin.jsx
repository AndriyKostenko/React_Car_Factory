import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TermsModal from './TermsModal';

import './appJoin.scss';

import workers from '../../resources/img/workers/image_workers.png';



const AppJoin = () => {

    //setting input values
    const [formData, setFormData] =  useState({
        firstName: '',
        lastName:'',
        email: '',
        phoneNumber: '',
        message: '',
        uploadResume: '',
        modalIsOpen: false,
        isChecked: false,
        buttonText: "Send Message"
    });

    const [errors, setErrors] = useState({});

    const [focused, setFocused] = useState(false);

    const form = useRef();


    const handleChange = (event) => {
        const {name, value, type} = event.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: event.target.checked,
            });

        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
        
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName)
            newErrors.firstName = 'Name is required';
        if (!formData.lastName)
            newErrors.lastName = 'Surname is required';
        if (!formData.email)
            newErrors.email = 'Email is required';
        if (!/^\d{10}$/.test(formData.phoneNumber))
            newErrors.phoneNumber = 'Phone number should be a 10-digit number';
        if (!formData.uploadResume)
            newErrors.uploadResume = 'File is required';
        if (!formData.isChecked)
            newErrors.isChecked = 'You must to accept terms and conditions.';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }


    const handleAgree = () => {
        setFormData({...formData, isChecked: true, modalIsOpen: false});
        setErrors({...errors, isChecked: true});
      };
    
    const handleDisagree = () => {
        setFormData({...formData, isChecked: false, modalIsOpen:false});
        setErrors({...errors, isChecked: false});
        
    };



    // ------- working with file input -----
    const handleFileChange = (event) => {

        const file = event.target.files[0];
    

        if (file) {
            // Check if the selected file type is allowed (PDF or Word)
            if (isFileTypeAllowed(file)) {
                setFormData({...formData, uploadResume: file});
             
            } else {
                setErrors({...errors, uploadResume:'The file is bigger 50 KB.'});
                      
            }
            
        }
    };

    const isFileTypeAllowed = (file) => {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 50 * 1024; // 50 kb 

        return (allowedTypes.includes(file.type) && file.size <= maxSize);
    };
    // -----------------------------------



    // ------- working with phone input input -----

    
    const handleKeyDown = (event) => {
        const { key, keyCode } = event;
    
        // Allow only numbers, backspace, delete, left arrow, right arrow, and tab
        if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(key) && 
            (keyCode < 48 || keyCode > 57) && // Numbers
            (keyCode < 96 || keyCode > 105)) { // Numpad numbers
          event.preventDefault();
        }
    };
    // ------- ------------------------------ -----
    

      
    // setting focus to clear data after sending info
    const handleFocus = () => {
        setFocused(true);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        if (validate()) {

            setFormData({buttonText:'Sending...'});

            emailjs.sendForm('service_w2i0wjs', 'template_s65z8tw', form.current, '8sbKbHp2-XUMRl7lP')
            .then((result) => {
                    setFormData({buttonText:'Sent!'});
                    setFocused(false);
                    event.target.reset();
                    setTimeout(() => setFormData({buttonText:'Send Message'}), 3000)
                }, (error) => {
                    setFormData({buttonText: 'Oops...something went wrong. Please contact me in another way. '})
                    setFocused(false);
                    event.target.reset();
                    setTimeout(() => setFormData({buttonText:'Send Message'}), 3000);
                });
            
            console.log('Data is valid:', formData)
        } else {
            console.log('Errors:', errors);
        }


    }



    return (
        <section className="app__join dark__bg" id='join'>
            <div className="container">
                <div className="app__join-wrapper">
                    <div className="app__join-workers">
                        <img src={workers} alt="" />
                    </div>
                    <h2 className='app__join-title section__title-light'>
                        Join our team
                    </h2>

                    <form encType="multipart/form-data" 
                          method="post"
                          ref={form} 
                          className='app__join-form'
                          onSubmit={handleSubmit}>

                        <div className='app__join-form-input-first'>
                            <input type="firstName" 
                                    name='firstName'
                                    id='firstName'
                                    className='input'
                                    placeholder='First name *'
                                    onChange={handleChange}
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                                    value={formData.firstName}/>

                            {errors.firstName && <div className='app__join-error_msg'>{errors.firstName}</div> }
                            
                        </div>
  

                        <div className='app__join-form-input-last'>
                            <input type="lastName"
                                    name='lastName'
                                    id='lastName' 
                                    className='input'
                                    placeholder='Last name *'
                                    onChange={handleChange}
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                                    value={formData.lastName}/>

                            {errors.lastName && <div className='app__join-error_msg'>{errors.lastName}</div> }
                        </div>


                        <div className='app__join-form-input-email'>
                            <input type="email" 
                                    name="email" 
                                    id='email'
                                    className="input" 
                                    placeholder="Email *"
                                    onChange={handleChange} 
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                                    value={formData.email}/>
                                {errors.email && <div className='app__join-error_msg'>{errors.email}</div> }
                           
                        </div>


                        <div className='app__join-form-input-phone'>
                            <input type="phoneNumber" 
                                    name="phoneNumber"
                                    id='phoneNumber'
                                    className="input" 
                                    placeholder="Phone Number *"
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                                    value={formData.phoneNumber}/>

                            {errors.phoneNumber && <div className='app__join-error_msg'>{errors.phoneNumber}</div> }

                            
                        </div>

                       
                        <div className="app__join-form-input-message">
                            <label className="app__join-form-input-message-label">
                                Message
                            </label>
                            <textarea name="message" 
                                    cols="30" 
                                    rows="5" 
                                    className="input"
                                    onChange={handleChange}
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                                    spellCheck="false"
                                    value={formData.message}>      
                            </textarea>
                        </div>



                        <div className="app__join-form-resume">
                            <input type="file" 
                                    name='uploadResume' 
                                    id='uploadResume' 
                                    accept=".pdf,.docx,.doc" 
                                    onChange={handleFileChange} 
                                    className='app__join-form-resume-hide'
                                    onBlur={handleFocus}
                                    
                                />
                            <label htmlFor="uploadResume" 
                                    className="app__join-form-resume-show"
                                    >
                                <span className="app__join-form-resume-icon">
                                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 20C3.96667 20 2.66667 19.4667 1.6 18.4C0.533333 17.3333 0 16.0333 0 14.5V4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0C5.1 0 6.04167 0.391667 6.825 1.175C7.60833 1.95833 8 2.9 8 4V13.5C8 14.2 7.75833 14.7917 7.275 15.275C6.79167 15.7583 6.2 16 5.5 16C4.8 16 4.20833 15.7583 3.725 15.275C3.24167 14.7917 3 14.2 3 13.5V4H4.5V13.5C4.5 13.7833 4.596 14.021 4.788 14.213C4.98 14.405 5.21733 14.5007 5.5 14.5C5.78333 14.5 6.021 14.404 6.213 14.212C6.405 14.02 6.50067 13.7827 6.5 13.5V4C6.5 3.3 6.25833 2.70833 5.775 2.225C5.29167 1.74167 4.7 1.5 4 1.5C3.3 1.5 2.70833 1.74167 2.225 2.225C1.74167 2.70833 1.5 3.3 1.5 4V14.5C1.5 15.6 1.89167 16.5417 2.675 17.325C3.45833 18.1083 4.4 18.5 5.5 18.5C6.6 18.5 7.54167 18.1083 8.325 17.325C9.10833 16.5417 9.5 15.6 9.5 14.5V4H11V14.5C11 16.0333 10.4667 17.3333 9.4 18.4C8.33333 19.4667 7.03333 20 5.5 20Z" fill="#F2F6F8" fillOpacity="0.8"/>
                                    </svg>
                                </span>

                                {formData.uploadResume ? (
                                    <span className='app__join-form-resume-text'>{formData.uploadResume.name}</span>
                                    ) : (
                                    <span className="app__join-form-resume-text">Upload a Resume</span>
                                    )
                                }

                                {errors.uploadResume && <div className='app__join-form-resume-error'>{errors.uploadResume}</div>}
                            </label>
                        </div>

                       

                        <div className="app__join-form-input-terms">
                            <label className='custom-checkbox'>
                                <input type="checkbox" 
                                            checked={formData.isChecked} 
                                            readOnly 
                                            onClick={() => setFormData({...formData, modalIsOpen: true})} 
                                            required
                                            onBlur={handleFocus}
                                            focused={focused.toString()}
                                            value={formData.isChecked}/>
                                <span className='checkmark'></span>
                            </label>

                                <div className='app__join-form-input-terms-rule' 
                                     onClick={(e) => {e.preventDefault(); setFormData({...formData, modalIsOpen: true}) ;}}>
                                        I agree to the terms of use and privacy policy.
                                </div>
                

                            <TermsModal isOpen={formData.modalIsOpen} 
                                        onRequestClose={() => formData({...formData, modalIsOpen: false})}
                                        onAgree={handleAgree}
                                        onDisagree={handleDisagree} 
                            />

                            {errors.isChecked && <div className='app__join-form-input-terms-error'>{errors.isChecked}</div>}
                            
                        </div>
                        

                        <button className="app__join-form-button btn">
                            {formData.buttonText}
                        </button>

                    </form>
                </div>
            </div>
            
            <div className="app__join-white-border"></div>
        </section>
    )
    
}






export default AppJoin;