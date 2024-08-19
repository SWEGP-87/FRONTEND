// import React from 'react';
// import './About.css';  // Importing a CSS file for styling
// import image1 from '../assets/Catfish.jpeg';  // Example image for the top
// import image2 from '../assets/Serwaa.jpg';  // Example image for the left side
// import Footer from '../components/Footer';

// const AboutPage = () => {
//   return (
//     <div className="about-container">
//       <div className="top-image-container">
//         <img src={image1} alt="Fishing Company" className="top-image"/>
//         <div className="top-text">Leading the Future of Sustainable Farming</div>
//       </div>
      
//       <div className="section about-company">
//         <h1 className="headers">About Our Fishing Company</h1>
//         <p className="about-text">
//           Mannaland Farms envisions a modernized agriculture and fisheries, a diversified rural economy that is dynamic, technologically advanced, and internationally competitive. Our transformation is guided by the sound practices of resource sustainability, the principles of social justice, and a strong partnership collaboration with organizations with a similar vision.
//         </p>
//       </div>

//       <div className="section our-profile">
//         <h1 className="headers">Personal Profile</h1>
//         <p className="about-text">
// Solomon Nii Martey Botchway, the Group CEO of Mannaland Investment developed a strong passion for Agricultural activities at a very early age. 
// He used to follow her grandmother several miles to her cocoa farms, in the Atiwa forest when on school vacations in his primary school days, an adventure dreaded by many Accra based school going Children.

// Back in Accra during School days, he personally undertakes several agricultural activities including rearing of local poultry, production of maggots for feeding poultry, planting of various seasonal vegetables and undertaking horticultural activities in thier humble residence in Mamprobi-Accra.

// His passion for farming moved him to pursue Agricultural Science during his secondary education in Achimota School where he had the opportunity to visit numerous agro-based companies and large mechanized farms throughout the country. He was the best Horticultural student at the time of graduating from Secondary school.

// After graduating from the University of Ghana Business school where he obtained a Bachelors degree in Marketing, Mr Botchway still pursued his interest is agricultural activities by attending several workshops on Bee keeping, Fish and Snail farming, Poultry and Livestock rearing, all in an effort to establish his own farms at that early age after school.

// In 2019, he established Mannaland Farms, one of the subsidiaries of Mannaland Investment, based in Accra, Ghana. 
// Mr Botchway is currently a CSIR-WRI trained fish breeder who provides hatchery services for many fish farmers and also sell both tilapia and Catfish fingerlings to out-grower farmers. He is also a renowned heliciculturalist trained by the Forestry Research Institute of Ghana under CSIR.

// He is married to a beautiful and hardworking woman...Abigail with three lovely kids.
//         </p>
//       </div>

//       <div className="section our-mission">
//         <h1 className="headers">Our Mission</h1>
//         <p className="about-text">
//           Mannaland Farms envisions a modernized agriculture and fisheries , a doversified rural economy that is dynamic, technologically advanced and internationally competitive. Our transformation is guided by the sound practice of resource sustainability, the priciples of social justice and a strong partnership collaboration with similar integrity .
//         </p>
//       </div>

//       <div className="section our-crew">
//         <h1 className="headers1">Our Crew</h1>
//         <div className="image-text-section">
//           <img src={image2} alt="Image 2 Description" className="side-image"/>
//           <p className="side-text">
//             Mannaland Farms is committed to utilizing advanced technology and sustainable practices to ensure the future of fishing. Our dedicated team works tirelessly to bring the best seafood products to our customers.
//           </p>
//         </div>
//       </div>

//       <Footer/>
//     </div>
//   );
// };

// export default AboutPage;






import React from 'react';
import './About.css';  // Importing a CSS file for styling
import image2 from '../assets/Serwaa.jpg';  // Example image for the left side
import clientImage from '../Videos/Mr.Botwe.jpg';  // Replace with the path to the client picture
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="top-video-container">
        <video autoPlay loop muted className="top-video">
          <source src="https://media.istockphoto.com/id/811704560/video/tilapia-fish-in-nature-river.mp4?s=mp4-640x640-is&k=20&c=u8By1luxKh8Or4U1qTq6RIWo3F-1TcWys47rzwk7OHI=" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="top-text">Leading the Future of Sustainable Farming</div>
      </div>

      <div className="section about-company">
        <h1 className="headers">About Our Fishing Company</h1>
        <p className="about-text">
          Mannaland Farms envisions a modernized agriculture and fisheries, a diversified rural economy that is dynamic, technologically advanced, and internationally competitive. Our transformation is guided by the sound practices of resource sustainability, the principles of social justice, and a strong partnership collaboration with organizations with a similar vision.
        </p>
      </div>

      <div className="section our-profile">
        <h1 className="headers">Personal Profile</h1>
        <div className="profile-content">
          <img src={clientImage} alt="Client" className="client-image"/>
          <p className="profile-text">
            Solomon Nii Martey Botchway, the Group CEO of Mannaland Investment developed a strong passion for Agricultural activities at a very early age. 
            He used to follow her grandmother several miles to her cocoa farms, in the Atiwa forest when on school vacations in his primary school days, an adventure dreaded by many Accra based school going Children.

            Back in Accra during School days, he personally undertakes several agricultural activities including rearing of local poultry, production of maggots for feeding poultry, planting of various seasonal vegetables and undertaking horticultural activities in thier humble residence in Mamprobi-Accra.

            His passion for farming moved him to pursue Agricultural Science during his secondary education in Achimota School where he had the opportunity to visit numerous agro-based companies and large mechanized farms throughout the country. He was the best Horticultural student at the time of graduating from Secondary school.

            After graduating from the University of Ghana Business school where he obtained a Bachelors degree in Marketing, Mr Botchway still pursued his interest is agricultural activities by attending several workshops on Bee keeping, Fish and Snail farming, Poultry and Livestock rearing, all in an effort to establish his own farms at that early age after school.

            In 2019, he established Mannaland Farms, one of the subsidiaries of Mannaland Investment, based in Accra, Ghana. 
            Mr Botchway is currently a CSIR-WRI trained fish breeder who provides hatchery services for many fish farmers and also sell both tilapia and Catfish fingerlings to out-grower farmers. He is also a renowned heliciculturalist trained by the Forestry Research Institute of Ghana under CSIR.

            He is married to a beautiful and hardworking woman...Abigail with three lovely kids.
          </p>
        </div>
      </div>

      <div className="section our-mission">
        <h1 className="headers">Our Mission</h1>
        <p className="about-text">
          Mannaland Farms envisions a modernized agriculture and fisheries , a diversified rural economy that is dynamic, technologically advanced and internationally competitive. Our transformation is guided by the sound practice of resource sustainability, the principles of social justice and a strong partnership collaboration with similar integrity .
        </p>
      </div>

      <div className="section our-crew">
        <h1 className="headers1">Our Crew</h1>
        <div className="image-text-section">
          <img src={image2} alt="Image 2 Description" className="side-image"/>
          <p className="side-text">
            Mannaland Farms is committed to utilizing advanced technology and sustainable practices to ensure the future of fishing. Our dedicated team works tirelessly to bring the best seafood products to our customers.
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default AboutPage;
