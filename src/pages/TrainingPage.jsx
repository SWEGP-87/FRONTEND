// // import React from 'react';
// // import styled from 'styled-components';
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer"

// // const PageContainer = styled.div`
// //   padding: 20px;
// // //   max-width: 1200px;
// // //   margin: 0 auto;
// // `;

// // const VideosSection = styled.div`
// //   display: flex;
// //   flex-wrap: wrap;
// //   gap: 20px;
// //   margin-top: 200px;
// // `;

// // const VideoCard = styled.div`
// //   flex: 1;
// //   min-width: 300px;
// //   max-width: 45%;
// //   background-color: #f5fbfd;
// //   border-radius: 10px;
// //   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// //   overflow: hidden;
// //   transition: all 0.3s ease;

// //   &:hover {
// //     transform: translateY(-5px);
// //     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
// //   }

// //   @media (max-width: 768px) {
// //     max-width: 100%;
// //   }
// // `;

// // const Video = styled.video`
// //   width: 100%;
// //   height: auto;
// // `;

// // const VideoDescription = styled.div`
// //   padding: 20px;
// //   background-color: #fff;
// // `;

// // const Description = styled.p`
// //   font-size: 14px;
// //   color: #777;
// // `;

// // const EnrollmentSection = styled.div`
// //   background-color: #f5fbfd;
// //   padding: 40px 20px;
// //   border-radius: 10px;
// //   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// //   text-align: center;
// // `;

// // const EnrollmentTitle = styled.h2`
// //   font-size: 24px;
// //   font-weight: bold;
// //   margin-bottom: 20px;
// // `;

// // const EnrollmentForm = styled.form`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   gap: 10px;
// // `;

// // const Input = styled.input`
// //   width: 100%;
// //   max-width: 400px;
// //   padding: 10px;
// //   border: 1px solid #ccc;
// //   border-radius: 5px;
// // `;
// // const Heading = styled.div`

// // `

// // const Button = styled.button`
// //   padding: 10px 20px;
// //   border: none;
// //   border-radius: 5px;
// //   background-color: #3f51b5;
// //   color: white;
// //   font-size: 16px;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: #303f9f;
// //   }
// // `;

// // const videos = [
// //   {
// //     src: "path_to_fish_spawning_video.mp4",
// //     title: "Fish Spawning",
// //     desc: "Learn about fish spawning and how to manage it effectively.",
// //   },
// //   {
// //     src: "path_to_farming_video_1.mp4",
// //     title: "Modern Farming Techniques",
// //     desc: "An introduction to modern farming techniques.",
// //   },
// //   {
// //     src: "path_to_farming_video_2.mp4",
// //     title: "Advanced Farming Strategies",
// //     desc: "Advanced farming strategies for increased yield.",
// //   },
// // ];

// // const TrainingPage = () => {
// //   return (
   
// //     <PageContainer>
// //          <Navbar/>
// //         <Heading>   Welcoming to our training session </Heading>
// //       <VideosSection>
// //         {videos.map((video, index) => (
// //           <VideoCard key={index}>
// //             <Video controls>
// //               <source src={video.src} type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </Video>
// //             <VideoDescription>
// //               <Description>{video.desc}</Description>
// //             </VideoDescription>
// //           </VideoCard>
// //         ))}
// //       </VideosSection>
// //       <EnrollmentSection>
// //         <EnrollmentTitle>Enroll in Our Training Session</EnrollmentTitle>
// //         <EnrollmentForm>
// //           <Input type="text" placeholder="Your Name" required />
// //           <Input type="email" placeholder="Your Email" required />
// //           <Input type="text" placeholder="Your Phone Number" required />
// //           <Button type="submit">Submit</Button>
// //         </EnrollmentForm>
// //       </EnrollmentSection>
// //       <Footer/>
// //     </PageContainer>
// //   );
// // };

// // export default TrainingPage;



// import React from 'react';
// import styled from 'styled-components';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SchoolIcon from '@material-ui/icons/School';
// import {useState} from "react";
// import video from "../assets/catV.mp4"

// const PageContainer = styled.div`
//   padding: 20px;
//    width: 100%;
//   height: 100%;
//   /* Add your background pattern here */
//   background: rgb(57, 59, 59);
//   background: radial-gradient(
//     circle at 50%,
//     rgb(41, 39, 39),
//     #333 50%,
//     transparent 51%,
//     #eee 10%,
//     rgb(0, 0, 0) 55% 72%,
//     rgb(15, 96, 189) 50%
//   );
//   background-size: 10px 10px;


// `;

// const Header = styled.div`
//   background: linear-gradient(to right, teal, #2575fc);
//   color: white;
//   padding: 50px 20px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 50px;
//   margin-top:5%
// `;

// const HeaderTitle = styled.h1`
//   font-size: 36px;
//   margin-bottom: 20px;
//   display: flex;
//   align-items: center;
// `;

// const HeaderDescription = styled.p`
//   font-size: 18px;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const VideosSection = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   margin-bottom: 40px;
// `;

// const VideoCard = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 45%;
//   background-color: #f5fbfd;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
//   }

//   @media (max-width: 768px) {
//     max-width: 100%;
//   }
// `;

// const Video = styled.video`
//   width: 100%;
//   height:auto;
// `;

// const VideoDescription = styled.div`
//   padding: 20px;
//   background-color: #fff;
// `;

// const Description = styled.p`
//   font-size: 14px;
//   color: #777;
// `;

// const EnrollmentSection = styled.div`
//   background-color: #f5fbfd;
//   padding: 40px 20px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const EnrollmentTitle = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const EnrollmentForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `;

// const Input = styled.input`
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
  
// `;
// const Textarea = styled.input`
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   height:50px;

// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   background-color: #3f51b5;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: #303f9f;
//   }
// `;

// const videos = [
//   {
//     src: video,
//     title: "Fish Spawning",
//     desc: "Learn about fish spawning and how to manage it effectively.",
//   },
//   {
//     src: video,
//     title: "Modern Farming Techniques",
//     desc: "An introduction to modern farming techniques.",
//   },
//   {
//     src: video,
//     title: "Advanced Farming Strategies",
//     desc: "Advanced farming strategies for increased yield. Advanced farming strategies for increased yieldAdvanced farming strategies for increased yieldAdvanced farming strategies for increased yield",
//   },
// ];

// const TrainingPage = () => {

  
//   return (
//     <>
//       <Navbar />
//       <Header>
//         <HeaderTitle>
//           <SchoolIcon style={{ marginRight: '10px', fontSize: '40px' }} />
//           Welcome to Our Training Sessions
//         </HeaderTitle>
//         <HeaderDescription>
//           Explore our comprehensive training videos on various topics including fish spawning and modern farming techniques. Learn from experts and improve your skills.
//         </HeaderDescription>
//       </Header>
//       <PageContainer>
//         <VideosSection>
//           {videos.map((video, index) => (
//             <VideoCard key={index}>
//               <Video controls>
//                 <source src={video.src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </Video>
//               <VideoDescription>
//                 <Description>{video.desc}</Description>
//               </VideoDescription>
//             </VideoCard>
//           ))}
//         </VideosSection>
//         <EnrollmentSection>
//           <EnrollmentTitle>Enroll in Our Training Session</EnrollmentTitle>
//           <EnrollmentForm>
//             <Input type="text" placeholder="Your Name" required />
//             <Input type="email" placeholder="Your Email" required />
//             <Input type="text" placeholder="Your Phone Number" required />
//             <Textarea type="text" placeholder="Your Message" required /> 
           
//             <Button type="submit">Submit</Button>
//           </EnrollmentForm>
//         </EnrollmentSection>
//       </PageContainer>
//       <Footer />
//     </>
//   );
// };

// export default TrainingPage;





// import React from 'react';
// import styled from 'styled-components';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SchoolIcon from '@material-ui/icons/School';
// import video from "../assets/catV.mp4";

// const PageContainer = styled.div`
//   padding: 20px;
//   width: 100%;
//   height: 100%;
//   background: radial-gradient(circle at 50%, rgb(41, 39, 39), #333 50%, transparent 51%, #eee 10%, rgb(0, 0, 0) 55% 72%, rgb(15, 96, 189) 50%);
//   background-size: 10px 10px;
// `;

// const Header = styled.div`
//   background: linear-gradient(to right, teal, #2575fc);
//   color: white;
//   padding: 50px 20px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 50px;
//   margin-top: 5%;
// `;

// const HeaderTitle = styled.h1`
//   font-size: 36px;
//   margin-bottom: 20px;
//   display: flex;
//   align-items: center;
// `;

// const HeaderDescription = styled.p`
//   font-size: 18px;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const VideosSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   margin-bottom: 40px;

// `;

// const VideoCard = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: #f5fbfd;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: all 0.3s ease;
//   width:50%;
//   margin-left:20%;
//   height: 10%;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const Video = styled.video`
//   width: 50%;
//   height: auto;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const VideoDescription = styled.div`
//   padding: 20px;
//   width: 50%;
//   background-color: #fff;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const Description = styled.p`
//   font-size: 16px;
//   color: #555;
// `;

// const EnrollmentSection = styled.div`
//   background-color: #f5fbfd;
//   padding: 40px 20px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const EnrollmentTitle = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const EnrollmentForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `;

// const Input = styled.input`
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   height: 100px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   background-color: #3f51b5;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: #303f9f;
//   }
// `;

// const videos = [
//   {
//     src: video,
//     title: "Fish Spawning",
//     desc: "Learn about fish spawning and how to manage it effectively.",
//   },
//   {
//     src: video,
//     title: "Modern Farming Techniques",
//     desc: "An introduction to modern farming techniques.",
//   },
//   {
//     src: video,
//     title: "Advanced Farming Strategies",
//     desc: "Advanced farming strategies for increased yield. ",
//   },
// ];

// const TrainingPage = () => {
//   return (
//     <>
//       <Navbar />
//       <Header>
//         <HeaderTitle>
//           <SchoolIcon style={{ marginRight: '10px', fontSize: '40px' }} />
//           Welcome to Our Training Sessions
//         </HeaderTitle>
//         <HeaderDescription>
//           Explore our comprehensive training videos on various topics including fish spawning and modern farming techniques. Learn from experts and improve your skills.
//         </HeaderDescription>
//       </Header>
//       <PageContainer>
//         <VideosSection>
//           {videos.map((video, index) => (
//             <VideoCard key={index}>
//               <Video controls>
//                 <source src={video.src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </Video>
//               <VideoDescription>
//                 <Description>{video.desc}</Description>
//               </VideoDescription>
//             </VideoCard>
//           ))}
//         </VideosSection>
//         <EnrollmentSection>
//           <EnrollmentTitle>Enroll in Our Training Session</EnrollmentTitle>
//           <EnrollmentForm>
//             <Input type="text" placeholder="Your Name" required />
//             <Input type="email" placeholder="Your Email" required />
//             <Input type="text" placeholder="Your Phone Number" required />
//             <Textarea placeholder="Your Message" required />
//             <Button type="submit">Submit</Button>
//           </EnrollmentForm>
//         </EnrollmentSection>
//       </PageContainer>
//       <Footer />
//     </>
//   );
// };

// export default TrainingPage;











// import React from 'react';
// import styled from 'styled-components';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SchoolIcon from '@material-ui/icons/School';
// import video from "../assets/catV.mp4";

// const PageContainer = styled.div`
//   padding: 20px;
//   width: 100%;
//   height: 100%;
//   background: radial-gradient(circle at 50%, rgb(41, 39, 39), #333 50%, transparent 51%, #eee 10%, rgb(0, 0, 0) 55% 72%, rgb(15, 96, 189) 50%);
//   background-size: 10px 10px;
// `;

// const Header = styled.div`
//   background: linear-gradient(to right, teal, #2575fc);
//   color: white;
//   padding: 50px 20px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 50px;
//   margin-top: 5%;
// `;

// const HeaderTitle = styled.h1`
//   font-size: 36px;
//   margin-bottom: 20px;
//   display: flex;
//   align-items: center;
//   color: white;
// `;

// const HeaderDescription = styled.p`
//   font-size: 18px;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const VideosSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   margin-bottom: 40px;
// `;

// const VideoCard = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: #f5fbfd;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: all 0.3s ease;
//   width: 80%;
//   margin-left: auto;
//   margin-right: auto;
//   height: auto;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
//   }

//   @media (max-width: 768px) {
  
//     flex-direction: column;
//   }
// `;

// const Video = styled.video`
//   width: 50%;
//   height: 200px;

//   @media (max-width: 768px) {
//     width: 100%;
//     height: auto;
//   }
// `;

// const VideoDescription = styled.div`
//   padding: 20px;
//   width: 50%;
//   background-color: #fff;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const Description = styled.p`
//   font-size: 16px;
//   color: #555;
// `;

// const EnrollmentSection = styled.div`
//   background-color: #f5fbfd;
//   padding: 40px 20px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const EnrollmentTitle = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const EnrollmentForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `;

// const Input = styled.input`
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   height: 100px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   background-color: #3f51b5;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: #303f9f;
//   }
// `;

// const videos = [
//   {
//     src: video,
//     title: "Fish Spawning",
//     desc: "Learn about fish spawning and how to manage it effectively.",
//   },
//   {
//     src: video,
//     title: "Modern Farming Techniques",
//     desc: "An introduction to modern farming techniques.",
//   },
//   {
//     src: video,
//     title: "Advanced Farming Strategies",
//     desc: "Advanced farming strategies for increased yield.",
//   },
// ];

// const TrainingPage = () => {
//   return (
//     <>
//       <Navbar />
//       <Header>
//         <HeaderTitle>
//           <SchoolIcon style={{ marginRight: '10px', fontSize: '40px',color:"red" }} />
//           Welcome to Our Training Sessions
//         </HeaderTitle>
//         <HeaderDescription>
//           Explore our comprehensive training videos on various topics including fish spawning and modern farming techniques. Learn from experts and improve your skills.
//         </HeaderDescription>
//       </Header>
//       <PageContainer>
//         <VideosSection>
//           {videos.map((video, index) => (
//             <VideoCard key={index}>
//               <Video controls>
//                 <source src={video.src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </Video>
//               <VideoDescription>
//                 <Description>{video.desc}</Description>
//               </VideoDescription>
//             </VideoCard>
//           ))}
//         </VideosSection>
//         <EnrollmentSection>
//           <EnrollmentTitle>Enroll in Our Training Session</EnrollmentTitle>
//           <EnrollmentForm>
//             <Input type="text" placeholder="Your Name" required />
//             <Input type="email" placeholder="Your Email" required />
//             <Input type="text" placeholder="Your Phone Number" required />
//             <Textarea placeholder="Your Message" required />
//             <Button type="submit">Submit</Button>
//           </EnrollmentForm>
//         </EnrollmentSection>
//       </PageContainer>
//       <Footer />
//     </>
//   );
// };

// export default TrainingPage;




import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SchoolIcon from '@material-ui/icons/School';
import video from "../assets/catV.mp4";

const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50%, rgb(41, 39, 39), #333 50%, transparent 51%, #eee 10%, rgb(0, 0, 0) 55% 72%, rgb(15, 96, 189) 50%);
  background-size: 10px 10px;
`;

const Header = styled.div`
  background: linear-gradient(to right, teal, #2575fc);
  color: white;
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 5%;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
`;

const HeaderDescription = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
`;

const VideosSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

const VideoCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5fbfd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    
  }
`;

const Video = styled.video`
  width: 50%;
  height: 200px;

  @media (max-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

const VideoDescription = styled.div`
  padding: 20px;
  width: 50%;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;

const EnrollmentSection = styled.div`
  background-color: #f5fbfd;
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const EnrollmentTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const EnrollmentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3f51b5;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #303f9f;
  }
`;

const videos = [
  {
    src: video,
    title: "Fish Spawning",
    desc: "Learn about fish spawning and how to manage it effectively.",
  },
  {
    src: video,
    title: "Modern Farming Techniques",
    desc: "An introduction to modern farming techniques.",
  },
  {
    src: video,
    title: "Advanced Farming Strategies",
    desc: "Advanced farming strategies for increased yield.",
  },
];

const TrainingPage = () => {
  return (
    <>
      <Navbar />
      <Header>
        <HeaderTitle>
          <SchoolIcon style={{ marginRight: '10px', fontSize: '40px',color:"red" }} />
          Welcome to Our Training Sessions
        </HeaderTitle>
        <HeaderDescription>
          Explore our comprehensive training videos on various topics including fish spawning and modern farming techniques. Learn from experts and improve your skills.
        </HeaderDescription>
      </Header>
      <PageContainer>
        <VideosSection>
          {videos.map((video, index) => (
            <VideoCard key={index}>
              <Video controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
              <VideoDescription>
                <Description>{video.desc}</Description>
              </VideoDescription>
            </VideoCard>
          ))}
        </VideosSection>
        <EnrollmentSection>
          <EnrollmentTitle>Enroll in Our Training Session</EnrollmentTitle>
          <EnrollmentForm>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="text" placeholder="Your Phone Number" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit">Submit</Button>
          </EnrollmentForm>
        </EnrollmentSection>
      </PageContainer>
      <Footer />
    </>
  );
};

export default TrainingPage;