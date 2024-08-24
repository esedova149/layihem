import React, { useState, useEffect } from 'react';
import './about.css'
import Navbar from './Navbar';
const About = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  
  return (
    <div className="home-page">
      {" "}
      <div id="div1" className="hidden">
        <div className="container">
          <Navbar />
          <div id="div1-center" className="container">
            <div>About</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium egestas nisi,
              nunc, purus sit vitae nisi, etiam.{" "}
            </p>
            <div className="btn2">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    <div id='um-a'>
      
      <div id='div2-a' className='hidden'>
      <div id='div2-top-a' className='container'>
          <div></div>
          <div>
            <div>About InterQ</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl elementum, mattis amet, elementum, cras elementum morbi. Aliquet ut mus arcu, ornare nunc nisi, dignissim in. Diam mus fermentum volutpat arcu pulvinar scelerisque auctor sed. Feugiat turpis vitae porttitor in odio lacus praesent mauris. At massa lobortis mi id molestie nibh sociis. Sem quis sed quisque fames urna elit molestie nisl. Auctor sit tellus sed nunc cursus nibh tempus.</p>
          </div>
        </div>
        <div id="div2-center-a" className="container">
      <div>
        <div>Why Choose InterQ</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.
        </p>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 34 30" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7926 14.2258C13.3217 15.9518 14.8507 17.6777 16.3844 19.4037C16.9721 20.0651 17.8584 19.458 17.9502 18.765C18.8318 12.1375 23.2078 6.1578 29.2001 3.10003C30.2516 2.56548 29.324 0.998079 28.2725 1.53716C21.6557 4.91204 17.0823 11.5078 16.1181 18.765C16.6415 18.5521 17.165 18.3391 17.6839 18.1262C16.1548 16.4003 14.6258 14.6743 13.0921 12.9483C12.3115 12.065 11.0166 13.3515 11.7926 14.2258V14.2258Z" fill="#D94A3D"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M20.0979 1.02418C15.092 -1.02832 9.11704 0.136117 4.95618 3.45274C0.689682 6.85998 -0.862607 12.51 0.446276 17.6888C1.08924 20.2306 2.42108 22.641 4.327 24.4761C6.62789 26.6917 9.70491 28.0192 12.8233 28.64C18.6191 29.7953 25.315 28.9435 29.8157 24.8748C33.6964 21.3588 35.1799 14.9295 32.1442 10.4258C31.7768 9.87757 31.3497 9.37007 30.8721 8.91246C30.027 8.0969 28.7227 9.37915 29.5724 10.1947C32.9341 13.4298 32.4519 19.1342 29.5632 22.5187C26.0728 26.6101 20.1622 27.7338 15.0047 27.1584C12.1022 26.8321 9.21352 25.9124 6.83454 24.2088C4.9516 22.8631 3.51872 20.8967 2.70583 18.7581C1.04791 14.3903 1.70006 9.24776 5.04804 5.82239C8.73127 2.05723 14.7016 0.761394 19.6111 2.76858C20.0703 2.95435 20.6214 2.56469 20.7409 2.13425C20.8878 1.61773 20.5618 1.20995 20.0979 1.02419L20.0979 1.02418Z" fill="#6C8947"/>
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 34 30" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7926 14.2258C13.3217 15.9518 14.8507 17.6777 16.3844 19.4037C16.9721 20.0651 17.8584 19.458 17.9502 18.765C18.8318 12.1375 23.2078 6.1578 29.2001 3.10003C30.2516 2.56548 29.324 0.998079 28.2725 1.53716C21.6557 4.91204 17.0823 11.5078 16.1181 18.765C16.6415 18.5521 17.165 18.3391 17.6839 18.1262C16.1548 16.4003 14.6258 14.6743 13.0921 12.9483C12.3115 12.065 11.0166 13.3515 11.7926 14.2258V14.2258Z" fill="#D94A3D"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M20.0979 1.02418C15.092 -1.02832 9.11704 0.136117 4.95618 3.45274C0.689682 6.85998 -0.862607 12.51 0.446276 17.6888C1.08924 20.2306 2.42108 22.641 4.327 24.4761C6.62789 26.6917 9.70491 28.0192 12.8233 28.64C18.6191 29.7953 25.315 28.9435 29.8157 24.8748C33.6964 21.3588 35.1799 14.9295 32.1442 10.4258C31.7768 9.87757 31.3497 9.37007 30.8721 8.91246C30.027 8.0969 28.7227 9.37915 29.5724 10.1947C32.9341 13.4298 32.4519 19.1342 29.5632 22.5187C26.0728 26.6101 20.1622 27.7338 15.0047 27.1584C12.1022 26.8321 9.21352 25.9124 6.83454 24.2088C4.9516 22.8631 3.51872 20.8967 2.70583 18.7581C1.04791 14.3903 1.70006 9.24776 5.04804 5.82239C8.73127 2.05723 14.7016 0.761394 19.6111 2.76858C20.0703 2.95435 20.6214 2.56469 20.7409 2.13425C20.8878 1.61773 20.5618 1.20995 20.0979 1.02419L20.0979 1.02418Z" fill="#6C8947"/>
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 34 30" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7926 14.2258C13.3217 15.9518 14.8507 17.6777 16.3844 19.4037C16.9721 20.0651 17.8584 19.458 17.9502 18.765C18.8318 12.1375 23.2078 6.1578 29.2001 3.10003C30.2516 2.56548 29.324 0.998079 28.2725 1.53716C21.6557 4.91204 17.0823 11.5078 16.1181 18.765C16.6415 18.5521 17.165 18.3391 17.6839 18.1262C16.1548 16.4003 14.6258 14.6743 13.0921 12.9483C12.3115 12.065 11.0166 13.3515 11.7926 14.2258V14.2258Z" fill="#D94A3D"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M20.0979 1.02418C15.092 -1.02832 9.11704 0.136117 4.95618 3.45274C0.689682 6.85998 -0.862607 12.51 0.446276 17.6888C1.08924 20.2306 2.42108 22.641 4.327 24.4761C6.62789 26.6917 9.70491 28.0192 12.8233 28.64C18.6191 29.7953 25.315 28.9435 29.8157 24.8748C33.6964 21.3588 35.1799 14.9295 32.1442 10.4258C31.7768 9.87757 31.3497 9.37007 30.8721 8.91246C30.027 8.0969 28.7227 9.37915 29.5724 10.1947C32.9341 13.4298 32.4519 19.1342 29.5632 22.5187C26.0728 26.6101 20.1622 27.7338 15.0047 27.1584C12.1022 26.8321 9.21352 25.9124 6.83454 24.2088C4.9516 22.8631 3.51872 20.8967 2.70583 18.7581C1.04791 14.3903 1.70006 9.24776 5.04804 5.82239C8.73127 2.05723 14.7016 0.761394 19.6111 2.76858C20.0703 2.95435 20.6214 2.56469 20.7409 2.13425C20.8878 1.61773 20.5618 1.20995 20.0979 1.02419L20.0979 1.02418Z" fill="#6C8947"/>
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>
      </div>
      <div></div>
    </div>
        <div id='div2-bottom-a'>
          <div>Meet Our Best Team</div>
          <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          </div>
        </div>
      </div>
      <div id='div3-a' className='hidden'>
        <div className='div5-top'>Need a consultation<br />for your home?</div>
        <form className='div5-center' onSubmit={handleSubmit}>
          <div className='div5-center1'>
            <div>
              <label>Your Name</label>
              <input 
                type='text' 
                name='name'
                placeholder='Your Full Name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Your Email</label>
              <input 
                type='email' 
                name='email'
                placeholder='Your Email Address'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='div5-center2'>
            <label>Your Message</label>
            <input 
              type='text' 
              name='message'
              placeholder='Write Here'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className='btn5'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default About;



