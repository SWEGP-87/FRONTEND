import React, { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    enquiryType: 'General Inquiry'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here, e.g., using EmailJS or a custom backend API.
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      enquiryType: 'General Inquiry'
    });
  };

  return (
    <div className="contact-container">
       
      {/* Header with Logo */}
      <div className="header">
        <h1>EVERYDAYUI</h1>
        {/* Add styling for logo text here */}
      </div>

      {/* Contact Us Section */}
      <div className="contact-us">
        <h2>CONTACT US</h2>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
          {/* Company Contact Information */}
          <div className="company-info">
            <p><strong>Email:</strong> <a href="mailto:nii77bag@gmail.com">nii77bag@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+233244121465">+233 244 121 465</a></p>
            <p><strong>Postal Adddress:</strong> <a href="">P.O.BOX Mp.18, Mamprobi-Accra</a></p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map">
          <h2>Location</h2> 
          <iframe
            title="Mannaland Investment Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5825945104154!2d-0.17162628557007247!3d5.668576595959924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8e4a9755cc91%3A0xb0608abcfac04e07!2sKwabenya!5e0!3m2!1sen!2sgh!4v1625117603916!5m2!1sen!2sgh"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <h3>Connect with us:</h3>
        {/* Add social media links here */}
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .contact-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 20px;
          background-color: #e9f4fb; /* Light blue background color */
          font-family: Arial, sans-serif;
          
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .header h1 {
          font-size: 24px;
          color: #333; /* Adjust color as needed */
        }

        .contact-us {
          text-align: center;
          margin-bottom: 20px;
        }

        .contact-us h2 {
          font-size: 24px;
          color: #007bff; /* Adjust color as needed */
        }

        .main-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .contact-form {
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .contact-form h2 {
          margin-bottom: 10px;
          font-size: 20px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          margin-bottom: 15px;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .contact-form select {
          height: 40px;
        }

        .contact-form button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 12px 20px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #0056b3;
        }

        .company-info {
          margin-top: 20px;
        }

        .map {
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .map h2 {
          margin-bottom: 10px;
          font-size: 20px;
        }

        .footer {
          text-align: center;
          margin-top: 40px;
          padding: 20px 0;
          background-color: #007bff;
          color: white;
          font-size: 14px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .footer h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .footer a {
          color: white;
          text-decoration: none;
          margin: 0 10px;
        }

        @media only screen and (max-width: 800px) {
          .main-content {
            grid-template-columns: 1fr;
          }
        }

        @media only screen and (max-width: 600px) {
          .contact-form input,
          .contact-form textarea,
          .contact-form select {
            font-size: 14px;
          }
        }
      `}</style>

      <Footer/>
    </div>
  );
}

export default ContactPage;





// import React, { useState } from 'react';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     enquiryType: 'General Inquiry'
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement form submission logic here, e.g., using EmailJS or a custom backend API.
//     console.log('Form submitted:', formData);
//     // Clear form fields after submission
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       message: '',
//       enquiryType: 'General Inquiry'
//     });
//   };

//   return (
//     <div className="contact-container">
//       {/* Header with Logo */}
//       <div className="header">
//         <h1>MANNALAND INVESTMENT</h1>
//         {/* Add styling for logo text here */}
//       </div>

//       {/* Contact Us Section */}
//       <div className="contact-us">
//         <h2>CONTACT US</h2>
//       </div>

//       {/* Main Content Area */}
//       <div className="main-content">
//         {/* Contact Form */}
//         <div className="contact-form">
//           <h2>Contact Form</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Your Phone Number"
//               required
//             />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               rows="4"
//               required
//             ></textarea>
//             <button type="submit">Send</button>
//           </form>
//           {/* Company Contact Information */}
//           <div className="company-info">
//             <p><strong>Email:</strong> <a href="mailto:nii77bag@gmail.com">nii77bag@gmail.com</a></p>
//             <p><strong>Phone:</strong> <a href="tel:+233244121465">+233 244 121 465</a></p>
//             <p><strong>Region:</strong> Greater Accra</p>
//             <p><strong>District:</strong> Ga North Municipal</p>
//             <p><strong>Community:</strong> Ofankor</p>
//             <p><strong>Residential Address:</strong> Plot No. 019/2</p>
//             <p><strong>GPS Address:</strong> GE-266-9747</p>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="map">
//           <h2>Location</h2> 
//           <iframe
//             title="Mannaland Investment Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5825945104154!2d-0.17162628557007247!3d5.668576595959924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8e4a9755cc91%3A0xb0608abcfac04e07!2sKwabenya!5e0!3m2!1sen!2sgh!4v1625117603916!5m2!1sen!2sgh"
//             width="100%"
//             height="300"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="footer">
//         <h3>Connect with us:</h3>
//         {/* Add social media links here */}
//       </div>

//       {/* CSS Styling */}
//       <style jsx>{`
//         .contact-container {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 20px;
//           background-color: #e9f4fb; /* Light blue background color */
//           font-family: Arial, sans-serif;
//         }

//         .header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 20px;
//         }

//         .header h1 {
//           font-size: 24px;
//           color: #333; /* Adjust color as needed */
//         }

//         .contact-us {
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .contact-us h2 {
//           font-size: 24px;
//           color: #007bff; /* Adjust color as needed */
//         }

//         .main-content {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//         }

//         .contact-form {
//           padding: 20px;
//           background-color: #fff;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .contact-form h2 {
//           margin-bottom: 10px;
//           font-size: 20px;
//         }

//         .contact-form input,
//         .contact-form textarea {
//           width: 100%;
//           margin-bottom: 15px;
//           padding: 10px;
//           font-size: 16px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }

//         .contact-form select {
//           height: 40px;
//         }

//         .contact-form button {
//           background-color: #007bff;
//           color: white;
//           border: none;
//           padding: 12px 20px;
//           cursor: pointer;
//           border-radius: 5px;
//           font-size: 16px;
//           transition: background-color 0.3s ease;
//         }

//         .contact-form button:hover {
//           background-color: #0056b3;
//         }

//         .company-info {
//           margin-top: 20px;
//         }

//         .map {
//           padding: 20px;
//           background-color: #fff;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .map h2 {
//           margin-bottom: 10px;
//           font-size: 20px;
//         }

//         .footer {
//           text-align: center;
//           margin-top: 40px;
//           padding: 20px 0;
//           background-color: #007bff;
//           color: white;
//           font-size: 14px;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .footer h3 {
//           margin-bottom: 10px;
//           font-size: 18px;
//         }

//         .footer a {
//           color: white;
//           text-decoration: none;
//           margin: 0 10px;
//         }

//         @media only screen and (max-width: 800px) {
//           .main-content {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media only screen and (max-width: 600px) {
//           .contact-form input,
//           .contact-form textarea,
//           .contact-form select {
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ContactPage;

