// import React from 'react';
// import "./home.css";

// const Home = () => {
//   const menuItems = ["Home", "About Us", "Portfolio", "Service", "Pages"];
//   const services = [
//     {
//       title: "Interior Design",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam."
//     },
//     {
//       title: "Interior Design",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam."
//     },
//     {
//       title: "Interior Design",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam."
//     }
//   ];
//   const recentProjects = Array(5).fill("");
//   const updates = [
//     {
//       date: "12 May 2022",
//       title: "Lorem ipsum dolor sit amet",
//       description: "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet"
//     },
//     {
//       date: "12 May 2022",
//       title: "Lorem ipsum dolor sit amet",
//       description: "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet"
//     },
//     {
//       date: "12 May 2022",
//       title: "Lorem ipsum dolor sit amet",
//       description: "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet"
//     }
//   ];

//   return (
//     <div id='um'>
//       <div id='div1'>
//         <div id='div1-header' className='container'>
//           <div className="logo">Inter<span>Q</span></div>
//           <ul>
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <a href="#">{item}</a>
//               </li>
//             ))}
//           </ul>
//           <div className='btn1'><button>Contact Us</button></div>
//         </div>
//         <div id='div1-center' className='container'>
//           <div>Make room for better living</div>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
//           <div className='btn2'><button>Get Started</button></div>
//         </div>
//       </div>
//       <div id='div2'>
//         <div id='div2-top' className='container'>
//           <div></div>
//           <div>
//             <div>About InterQ</div>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl elementum, mattis amet, elementum, cras elementum morbi. Aliquet ut mus arcu, ornare nunc nisi, dignissim in. Diam mus fermentum volutpat arcu pulvinar scelerisque auctor sed. Feugiat turpis vitae porttitor in odio lacus praesent mauris. At massa lobortis mi id molestie nibh sociis. Sem quis sed quisque fames urna elit molestie nisl. Auctor sit tellus sed nunc cursus nibh tempus.</p>
//           </div>
//         </div>
//         <div id='div2-center' className='container'>
//           <div className='div2-center1'>Our Service</div>
//           <div className='div2-center2'>
//             {services.map((service, index) => (
//               <div className='design' key={index}>
//                 <div></div> 
//                 <div>{service.title}</div>
//                 <p>{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div id='div2-bottom'>
//           <div className='div2-bottom1'>
//             <div>Recent Project</div>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
//           </div>
//           <div className='div2-bottom2'>
//             {recentProjects.map((_, index) => (
//               <div key={index}></div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div id='div3'>
//         <div className='div3-top'>
//           <div>Get More Updates</div>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
//         </div>
//         <div className='div3-bottom'>
//           {updates.map((update, index) => (
//             <div className='div3-center' key={index}>
//               <div className='div3-center1'></div>
//               <div className='div3-center2'>
//                 <p>{update.date}</p>
//                 <p>{update.title}</p>
//                 <p>{update.description}</p>
//               </div>
//               <div className='btn3'><button>Read More</button></div>
//             </div>
//           ))}
//         </div>
//         <div className='btn4'><button>View All</button></div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import "./home.css";
const Home = () => {
  return (
    <div id='um'>
      <div id='div1'>
        <div id='div1-header' className='container'>
        <div className="logo">Inter<span>Q</span></div>
        <ul>
          <li>
            <a href="#">Home</a> 
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Portofolio</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
        </ul>
          <div className='btn1'><button>Contact Us</button></div>
        </div>
        <div id='div1-center' className='container'>
      <div>Make room for better living</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
      <div className='btn2'><button>Get Started</button></div>
        </div>
      </div>
      <div id='div2'>
        <div id='div2-top' className='container'>
        <div></div>
        <div>
          <div>About InterQ</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl elementum, mattis amet, elementum, cras elementum morbi. Aliquet ut mus arcu, ornare nunc nisi, dignissim in. Diam mus fermentum volutpat arcu pulvinar scelerisque auctor sed. Feugiat turpis vitae porttitor in odio lacus praesent mauris. At massa lobortis mi id molestie nibh sociis. Sem quis sed quisque fames urna elit molestie nisl. Auctor sit tellus sed nunc cursus nibh tempus.</p>
        </div>
        </div>
        <div id='div2-center' className='container'>
          <div className='div2-center1'>Our Service</div>
          <div className='div2-center2'>
            <div className='design'>
              <div className='desing1'><div></div></div> 
              <div>Interior Design</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
            </div>
            <div className='design'>
              <div className='desing2'><div></div></div> 
              <div>Interior Design</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
            </div>
            <div className='design'>
              <div className='desing3'><div></div></div> 
              <div>Interior Design</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
            </div>
          </div>
        </div>
        <div id='div2-bottom'>
          <div className='div2-bottom1'>
            <div>Recent Project</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
          </div>
          <div className='div2-bottom2'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div id='div3'>
        <div className='div3-top'>
          <div>Get More Updates</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
        </div>
        <div className='div3-bottom'>
          <div className='div3-center'>
            <div className='div3-center1'></div>
            <div className='div3-center2'>
              <p>12 May 2022</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet</p>
            </div>
            <div className='btn3'><button>Read More</button></div>
          </div>
          <div className='div3-center'>
            <div className='div3-center1' id='div3-center11'></div>
            <div className='div3-center2'>
              <p>12 May 2022</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet</p>
            </div>
            <div className='btn3'><button>Read More</button></div>
          </div>
          <div className='div3-center'>
            <div className='div3-center1' id='div3-center12'></div>
            <div className='div3-center2'>
              <p>12 May 2022</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet</p>
            </div>
            <div className='btn3'><button>Read More</button></div>
          </div>
        </div>
        <div className='btn4'><button>View All</button></div>
      </div>
      <div id='div4'>
        <div className='div4-top'>
          <div className='div4-top1'>
            <div>Our Customers Review</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. </p>
          </div>
          <div className='div4-top2'>
            <div className='div4-top21'>
              <div className='div4-top211'>
              <div id='img1'></div>
              <div>
                <p>Esther Howard</p>
                <p>Content Creator</p>
              </div>
              </div>
              <div className='div4-top211'>
              <div id='img2'></div>
              <div>
                <p>Guy Hawkins</p>
                <p>Teachers</p>
              </div>
              </div>
              <div className='div4-top211'>
              <div id='img3'></div>
              <div>
                <p>Robert Fox</p>
                <p>Influencer</p>
              </div>
              </div>
              <div className='div4-top211'>
              <div id='img4'></div>
              <div>
                <p>Lorem Pak</p>
                <p>Influencer</p>
              </div>
              </div>
              
            </div>
            <div className='div4-top22'>
              <p>It was a Great Experience!</p>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl elementum, mattis amet, elementum, cras elementum morbi. Aliquet ut mus arcu, ornare nunc nisi, dignissim in. Diam mus fermentum volutpat arcu pulvinar scelerisque auctor sed. Feugiat turpis vitae porttitor in odio lacus praesent mauris. At massa lobortis mi id molestie nibh sociis. Sem quis sed quisque fames urna elit molestie nisl. Auctor sit tellus sed nunc cursus nibh tempus.</p>
            </div>
            <div className='div4-top23'></div>
          </div>
        </div>
      </div>
      <div id='div5'>
        <div className='div5-top'>Need a consultation<br></br>for your home?</div>
        <div className='div5-center'>
        <div className='div5-center1'>
          <div>
          <label>Your Name</label>
          <input type='text' placeholder='Your Full Name'></input>
          </div>
          <div>
          <label>Your Email</label>
          <input type='email' placeholder='Your Email Address'></input>
          </div>
        </div>
        <div className='div5-center2'>
        <label>Your Message</label>
          <input type='text' placeholder='Write Here'></input>
        </div>
        </div>
        <div className='btn5'>
          <button>Send</button>
        </div>
        
      </div>
      <div id='div6'>
        <div className='div6-1'>
        <div className="logo1">Inter<span>Q</span></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium </p>
        </div>
        <div className='div6-2'>
          <p>Quicklink 1</p>
          <p>Home</p>
          <p>About Us</p>
          <p>Portofolio</p>
          <p>Service</p>
        </div>
        <div className='div6-3'>
          <p>Quicklink 2</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Single Blog</p>
          <p>404 Error</p>
        </div>
        <div className='div6-4'>
          <p>Join Our Newsletter</p>
          <div className='div6-41'>
            <input type='email' placeholder='Your Email Address'></input>
            <button>Send</button>
          </div>
          <p>Follow Us</p>
          <div className='div6-42'>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.397 20.9972V12.8012H16.162L16.573 9.59217H13.397V7.54817C13.397 6.62217 13.655 5.98817 14.984 5.98817H16.668V3.12717C15.8487 3.03936 15.0251 2.99696 14.201 3.00017C11.757 3.00017 10.079 4.49217 10.079 7.23117V9.58617H7.33203V12.7952H10.085V20.9972H13.397Z" fill="#F5F5F5"/>
</svg></div>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4943 4.51694C19.9477 4.97017 20.3015 5.51306 20.533 6.11088C20.7999 6.82013 20.9423 7.57015 20.954 8.32788C21.01 9.28488 21.01 9.59488 21.01 12.0379C21.01 14.4809 20.997 14.7859 20.954 15.7479C20.939 16.4959 20.798 17.2339 20.535 17.9339C20.3031 18.5316 19.9493 19.0745 19.4959 19.5279C19.0426 19.9812 18.4997 20.3351 17.902 20.5669C17.2022 20.829 16.4631 20.9707 15.716 20.9859C14.761 21.0409 14.448 21.0409 12.006 21.0409C9.56395 21.0409 9.25895 21.0279 8.29595 20.9859C7.54733 20.9613 6.80839 20.8091 6.11095 20.5359C5.51302 20.3045 4.96993 19.9509 4.51639 19.4977C4.06285 19.0445 3.70883 18.5016 3.47695 17.9039C3.21395 17.2029 3.07295 16.4649 3.05795 15.7169C3.00195 14.7599 3.00195 14.4489 3.00195 12.0069C3.00195 9.56388 3.01495 9.25888 3.05795 8.29688C3.07257 7.54972 3.21426 6.81049 3.47695 6.11088C3.70818 5.51291 4.06186 4.96987 4.51529 4.51661C4.96872 4.06335 5.51189 3.70988 6.10995 3.47888C6.80871 3.21548 7.54734 3.07344 8.29395 3.05888C9.24895 3.00488 9.56195 3.00488 12.004 3.00488C14.446 3.00488 14.751 3.01688 15.714 3.05888C16.4611 3.07422 17.2003 3.21624 17.9 3.47888C18.4979 3.71015 19.0409 4.06372 19.4943 4.51694ZM19.004 17.3309C19.2033 16.7901 19.3085 16.2192 19.315 15.6429V15.6439H19.326C19.369 14.6879 19.369 14.4259 19.369 11.9899C19.369 9.55288 19.358 9.28588 19.315 8.33488C19.3056 7.76504 19.2005 7.20083 19.004 6.66588C18.8537 6.27695 18.6238 5.92374 18.3289 5.62891C18.0341 5.33408 17.6809 5.10416 17.292 4.95388C16.7573 4.75495 16.1924 4.64974 15.622 4.64288C14.655 4.58788 14.405 4.58788 11.968 4.58788C9.53096 4.58788 9.26395 4.59988 8.31295 4.64288C7.74298 4.65085 7.17854 4.75602 6.64395 4.95388C5.85495 5.25588 5.22995 5.87688 4.92495 6.66588C4.72561 7.2063 4.62042 7.7769 4.61395 8.35288C4.56095 9.32188 4.56095 9.57088 4.56095 12.0079C4.56095 14.4439 4.57095 14.7119 4.61395 15.6619C4.62326 16.2317 4.7284 16.7959 4.92495 17.3309C5.07579 17.7205 5.30673 18.0741 5.60284 18.3688C5.89896 18.6636 6.25364 18.8929 6.64395 19.0419C7.17828 19.2407 7.74288 19.3459 8.31295 19.3529C9.28095 19.4079 9.52996 19.4079 11.968 19.4079C14.404 19.4079 14.672 19.3969 15.622 19.3529C16.1923 19.3455 16.7572 19.2403 17.292 19.0419C17.6809 18.8919 18.0342 18.6622 18.329 18.3676C18.6239 18.0729 18.8538 17.7197 19.004 17.3309ZM16.8065 8.2849C17.4019 8.2849 17.8845 7.80227 17.8845 7.20691C17.8845 6.61154 17.4019 6.12891 16.8065 6.12891C16.2112 6.12891 15.7285 6.61154 15.7285 7.20691C15.7285 7.80227 16.2112 8.2849 16.8065 8.2849ZM11.999 7.37695C10.7726 7.37695 9.59651 7.86412 8.72934 8.73129C7.86217 9.59846 7.375 10.7746 7.375 12.001C7.375 13.2273 7.86217 14.4034 8.72934 15.2706C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2706C16.1358 14.4034 16.623 13.2273 16.623 12.001C16.623 10.7746 16.1358 9.59846 15.2687 8.73129C14.4015 7.86412 13.2254 7.37695 11.999 7.37695ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1241C9.31149 13.5607 8.995 12.7967 8.995 12C8.995 11.2032 9.31149 10.4392 9.87485 9.87581C10.4382 9.31245 11.2023 8.99595 11.999 8.99595C12.7957 8.99595 13.5598 9.31245 14.1231 9.87581C14.6865 10.4392 15.003 11.2032 15.003 12C15.003 12.7967 14.6865 13.5607 14.1231 14.1241C13.5598 14.6875 12.7957 15.004 11.999 15.004Z" fill="#F5F5F5"/>
</svg></div>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.0498 4.91C17.1798 3.03 14.6898 2 12.0398 2C6.5798 2 2.1298 6.45 2.1298 11.91C2.1298 13.66 2.5898 15.36 3.4498 16.86L2.0498 22L7.2998 20.62C8.7498 21.41 10.3798 21.83 12.0398 21.83C17.4998 21.83 21.9498 17.38 21.9498 11.92C21.9498 9.27 20.9198 6.78 19.0498 4.91ZM12.0398 20.15C10.5598 20.15 9.1098 19.75 7.8398 19L7.5398 18.82L4.4198 19.64L5.2498 16.6L5.0498 16.29C4.2298 14.98 3.7898 13.46 3.7898 11.91C3.7898 7.37 7.4898 3.67 12.0298 3.67C14.2298 3.67 16.2998 4.53 17.8498 6.09C19.4098 7.65 20.2598 9.72 20.2598 11.92C20.2798 16.46 16.5798 20.15 12.0398 20.15ZM16.5598 13.99C16.3098 13.87 15.0898 13.27 14.8698 13.18C14.6398 13.1 14.4798 13.06 14.3098 13.3C14.1398 13.55 13.6698 14.11 13.5298 14.27C13.3898 14.44 13.2398 14.46 12.9898 14.33C12.7398 14.21 11.9398 13.94 10.9998 13.1C10.2598 12.44 9.7698 11.63 9.6198 11.38C9.4798 11.13 9.5998 11 9.7298 10.87C9.8398 10.76 9.9798 10.58 10.0998 10.44C10.2198 10.3 10.2698 10.19 10.3498 10.03C10.4298 9.86 10.3898 9.72 10.3298 9.6C10.2698 9.48 9.7698 8.26 9.5698 7.76C9.3698 7.28 9.1598 7.34 9.0098 7.33C8.8598 7.33 8.6998 7.33 8.5298 7.33C8.3598 7.33 8.0998 7.39 7.8698 7.64C7.6498 7.89 7.0098 8.49 7.0098 9.71C7.0098 10.93 7.89981 12.11 8.0198 12.27C8.1398 12.44 9.7698 14.94 12.2498 16.01C12.8398 16.27 13.2998 16.42 13.6598 16.53C14.2498 16.72 14.7898 16.69 15.2198 16.63C15.6998 16.56 16.6898 16.03 16.8898 15.45C17.0998 14.87 17.0998 14.38 17.0298 14.27C16.9598 14.16 16.8098 14.11 16.5598 13.99Z" fill="#F5F5F5"/>
</svg></div>
          </div>
        </div>
        <div className='div6-5'>
          <p>Download Our App</p>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

