import React from 'react';
import './blog.css';
import Navbar from './Navbar';

const Blog= () =>{
    const menuItems = ["Home", "About Us", "Portfolio", "Service", "Pages"];
    const updates = [
      {
        date: "12 May 2022",
        title: "Lorem ipsum dolor sit amet",
        description: "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet"
      },
      {
        date: "12 May 2022",
        title: "Lorem ipsum dolor sit amet",
        description: "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet"
      },
      {
        date: "12 May 2022",
        title: "Lorem ipsum dolor sit amet",
        description: "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet"
      }
      
    ];
    

  return (
    <div className="home-page">
    <div id='div1-a' >
      <div id='div1-header-a' className='container'>
      <Navbar/>
      </div>
      <div id='div1-center-a' className='container'>
        <div>Blog</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
      </div>
    </div >
 <div id='um-b'>
      <div id='div2-b' >
          {updates.map((update, index) => (
            <div className='div3-center' key={index}>
              <div className='div3-center1'></div>
              <div className='div3-center2'>
                <p>{update.date}</p>
                <p>{update.title}</p>
                <p>{update.description}</p>
              </div>
              <div className='btn3'><button>Read More</button></div>
            </div>
          ))}
        </div>
        <div id='div2-b' >
          {updates.map((update, index) => (
            <div className='div3-center' key={index}>
              <div className='div3-center1'></div>
              <div className='div3-center2'>
                <p>{update.date}</p>
                <p>{update.title}</p>
                <p>{update.description}</p>
              </div>
              <div className='btn3'><button>Read More</button></div>
            </div>
          ))}
        </div>
        <div id='div2-b' >
          {updates.map((update, index) => (
            <div className='div3-center' key={index}>
              <div className='div3-center1'></div>
              <div className='div3-center2'>
                <p>{update.date}</p>
                <p>{update.title}</p>
                <p>{update.description}</p>
              </div>
              <div className='btn3'><button>Read More</button></div>
            </div>
          ))}
        </div>
 </div>
 </div>
  );
}

export default Blog;