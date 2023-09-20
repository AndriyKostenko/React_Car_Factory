import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TermsModal from './TermsModal';

import './appJoin.scss';

import workers from '../../resources/img/workers/image_workers.png';



const AppJoin = () => {

    //setting input values
    const [values, setValues] =  useState({
        firstName: '',
        lastName:'',
        email: '',
        phoneNumber: '',
        uploadResume:'',
        uploadCover: '',
        modalIsOpen: false,
        isChecked: false,
        buttonText: "Send Message"
    });

    const [errorMessage, setErrorMessage] = useState({
        firstName: 'First name should be more than 2 characters',
        lastName: 'Last name should be more than 2 characters',
        email: 'Email is not valid',
        phoneNumber: 'Phone number is empty or incorrect',
        uploadResume:false,
        isCheckedError: false,
        uploadCover: 'The file is incorrect format.', 
    });

    const [focused, setFocused] = useState(false);


    const handleAgree = () => {
        setValues({...values, isChecked: true, modalIsOpen:false});
        setErrorMessage({...errorMessage, isCheckedError:false});
        // console.log(errorMessage.isCheckedError)
      };
    
    const handleDisagree = () => {
        setValues({...values, isChecked:false, modalIsOpen:false});
        setErrorMessage({...errorMessage, isCheckedError:true});
        // console.log(errorMessage.isCheckedError)
    };



    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Check if the selected file type is allowed (PDF or Word)
            if (isFileTypeAllowed(file)) {
                setErrorMessage({...errorMessage, uploadResume: ''});
                setValues({...values, [event.target.name]: file});
             
            } else {
                setErrorMessage({...errorMessage, uploadResume:'The file is bigger 500 KB.'});
                      
            }
            
        }
    };

    const handleInputChange = (event) => {
        let { value } = event.target;
       
    
        // Retain only numbers from the input
        let cleaned = ('' + value).replace(/\D/g, '');
    
        // Limit to 10 characters
        cleaned = cleaned.slice(0, 10);
    
        // Format the number
        let match = cleaned.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    
        if (match) {
          cleaned = '(' + match[1] + ')' + match[2] + (match[3] ? '-' + match[3] : '');
        }
    
        setValues({...values, [event.target.name]: cleaned});
        
    };
    
    const handleKeyDown = (event) => {
        const { key, keyCode } = event;
    
        // Allow only numbers, backspace, delete, left arrow, right arrow, and tab
        if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(key) && 
            (keyCode < 48 || keyCode > 57) && // Numbers
            (keyCode < 96 || keyCode > 105)) { // Numpad numbers
          event.preventDefault();
        }
      };
    

    const isFileTypeAllowed = (file) => {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 500 * 1024; // 500 kb 

        return (allowedTypes.includes(file.type) && file.size <= maxSize);
    };

    const form = useRef();
    


    const handleFocus = () => {
        setFocused(true);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        setValues({buttonText:'Sending...'});

        if (!values.uploadResume || !values.isChecked) {
            setErrorMessage({...errorMessage, uploadResume:'Please Upload CV'});
            return;
        }

        

        emailjs.sendForm('service_w2i0wjs', 'template_s65z8tw', form.current, '8sbKbHp2-XUMRl7lP')
        .then((result) => {
                setValues({buttonText:'Sent!'});
                setFocused(false);
                event.target.reset();
                setTimeout(() => setValues({buttonText:'Send Message'}), 5000)
            }, (error) => {
                setValues({buttonText: 'Oops...something went wrong. Please contact me in another way. '})
                setFocused(false);
                event.target.reset();
                setTimeout(() => setValues({buttonText:'Send Message'}), 5000);
            });

    }

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
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
                                    onChange={onChange}
                                    required
                                    pattern='^((?:\p{Ll}|\p{Lu}){1,30}\s?){2,4}$'
                                    onBlur={handleFocus}
                                    focused={focused.toString()}/>
                            <div className="app__join-error_msg">
                                <span>{errorMessage.firstName}</span>
                            </div>
                        </div>
  

                        <div className='app__join-form-input-last'>
                            <input type="lastName"
                                    name='lastName'
                                    id='lastName' 
                                    className='input'
                                    placeholder='Last name *'
                                    onChange={onChange}
                                    required
                                    pattern='^((?:\p{Ll}|\p{Lu}){1,30}\s?){2,4}$'
                                    onBlur={handleFocus}
                                    focused={focused.toString()}/>
                            <div className="app__join-error_msg">
                                <span>{errorMessage.lastName}</span>
                            </div>
                        </div>


                        <div className='app__join-form-input-email'>
                            <input type="email" 
                                    name="email" 
                                    id='email'
                                    className="input" 
                                    placeholder="Email *"
                                    onChange={onChange} 
                                    required
                                    pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,14})$"
                                    onBlur={handleFocus}
                                    focused={focused.toString()}/>
                            <div className='app__join-error_msg'>
                                <span>{errorMessage.email}</span>
                            </div>
                        </div>


                        <div className='app__join-form-input-phone'>
                            <input type="phoneNumber" 
                                    name="phoneNumber"
                                    id='phoneNumber'
                                    className="input" 
                                    placeholder="Phone Number *"
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    // pattern="\(\d{3}\)\d{3}-\d{4}"
                                    required
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                                    // value={values.phoneNumber}
                                    />

                            <div className='app__join-error_msg'>
                                {<span>{errorMessage.phoneNumber}</span>}
                            </div>
                        </div>

                       
                        <div className="app__join-form-input-message">
                            <label className="app__join-form-input-message-label">
                                Message
                            </label>
                            <textarea name="message" 
                                    cols="30" 
                                    rows="5" 
                                    className="input"
                                    onChange={onChange}
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                                    spellCheck="false">      
                            </textarea>
                        </div>



                        <div className="app__join-form-resume">
                            <input type="file" 
                                    name='uploadResume' 
                                    id='uploadResume' 
                                    accept=".pdf,.docx,.doc" 
                                    onChange={handleFileChange} 
                                    required={true}
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

                                {values.uploadResume ? (
                                    <span className='app__join-form-resume-text'>{values.uploadResume.name}</span>
                                    ) : (
                                    <span className="app__join-form-resume-text">Upload a Resume</span>
                                    )
                                }

                                {errorMessage.uploadResume && <div className='app__join-form-resume-error'>{errorMessage.uploadResume}</div>}
                            </label>
                        </div>

                       

                        <div className="app__join-form-input-terms">
                            <label className='custom-checkbox'>
                                <input type="checkbox" 
                                            checked={values.isChecked} 
                                            readOnly 
                                            onClick={() => setValues({...values, modalIsOpen:true})} 
                                            required
                                            onBlur={handleFocus}
                                            focused={focused.toString()}/>
                                <span className='checkmark'></span>
                            </label>

                                <div className='app__join-form-input-terms-rule' onClick={(e) => {e.preventDefault(); setValues({...values, modalIsOpen:true}) ;}}>I agree to the terms of use and privacy policy.</div>
                

                            <TermsModal isOpen={values.modalIsOpen} 
                                        onRequestClose={() => setValues({...values, modalIsOpen:false})}
                                        onAgree={handleAgree}
                                        onDisagree={handleDisagree} 
                            />

                            {errorMessage.isCheckedError && <div className='app__join-form-input-terms-error'>Please agree to the terms and conditions before proceeding.</div>}
                            
                        </div>
                        

                        <button className="app__join-form-button btn">
                            {values.buttonText}
                        </button>

                    </form>
                </div>
            </div>
            
            <div className="app__join-white-border"></div>
        </section>
    )
    
}






export default AppJoin;