import { emailjs } from 'emailjs-com';
import React, { useRef } from 'react';
import ContactImage from '../../../images/contact-leftimage.png'
import '../../CustomStyle/Style.css'

const Contact = () =>
{
    const form = useRef();
    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_nozw578', form.current,'user_CjOTjqPP0jaEpowwo1XI3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div className='flex justify-between container'>
            <div className='contactLeft w-2/4'>
                <img src={ContactImage} alt='Contact'/>
            </div>
            <div className='w-2/4'>
                <form onSubmit={sendEmail}>
                    <div>
                        <input type='text' placeholder='First Name'/>
                        <input type='text' placeholder='Last Name'/>
                    </div>
                    <div>
                        <input type='email' placeholder='Email'/>
                        <input type='number' placeholder='Phone'/>
                    </div>
                    <div>
                        <textarea rows="4" cols="50"/>
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default Contact;