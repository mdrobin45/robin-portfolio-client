import emailjs from 'emailjs-com';
import React from 'react';
import Swal from 'sweetalert2';
import ContactImage from '../../../../images/contact-leftimage.png'
import '../../../CustomStyle/Style.css'

const HomeContact = () =>
{
    const sendEmail = (e) =>
    {
        e.preventDefault();
       emailjs.sendForm('gmail', 'email', e.target,'user_CjOTjqPP0jaEpowwo1XI3')
           .then((result) =>
           {
               if (result.text === 'OK') {
                e.target.reset()
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Message successfully sent!'
                  })
            }
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <>
            <div id='HomeContact' className='contactLeft py-20'>
                <div className='md:flex justify-between items-center container'>
                    <div className='md:w-2/4'>
                        <img src={ContactImage} alt='Contact'/>
                    </div>
                    <div className='md:w-2/4'>
                    <div className='myProjectHeader'>
                        <h2 className='font-bold py-6 text-5xl text-gray-800'>Get In Touch With Me</h2>
                        <p className='text-lg text-gray-700'>If you have any question please let me know with this form. I'll reply as soon as possible</p>
                    </div>
                        <form onSubmit={sendEmail}>
                            <div>
                                <input required style={{boxShadow: '2px 2px 30px -15px rgba(43,42,42,0.75)'}} className='focus:outline-none px-3 my-3 py-3 rounded-full text-gray-700 text-lg w-full' type='text' placeholder='Name' name='name'/>
                            </div>
                            <div>
                                <input required style={{boxShadow: '2px 2px 30px -15px rgba(43,42,42,0.75)'}} className='focus:outline-none px-3 my-3 py-3 rounded-full text-gray-700 text-lg w-full' type='email' placeholder='Email' name='email'/>
                                <input required style={{boxShadow: '2px 2px 30px -15px rgba(43,42,42,0.75)'}} className='focus:outline-none px-3 my-3 py-3 rounded-full text-gray-700 text-lg w-full' type='number' placeholder='Phone' name='phone'/>
                            </div>
                            <div>
                                <textarea required style={{boxShadow: '2px 2px 30px -15px rgba(43,42,42,0.75)'}} className='focus:outline-none px-3 my-3 py-2 rounded-3xl text-gray-700 text-lg w-full' rows="4" cols="50" name='message' placeholder='Message'/>
                            </div>
                            <input className='px-10 w-full md:w-1/4 border-2 border-primary bg-primary py-2 shadow-xl cursor-pointer mx-3 rounded-full text-white text-lg inline-block mt-6' type='submit' value='Submit' />
                        </form>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default HomeContact;