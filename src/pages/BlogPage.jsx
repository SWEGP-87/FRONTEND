import React from 'react';
import featuredImage from '../assets/featured-image.jpg';
import authorImage from '../assets/author-image.jpg';
import postImage1 from '../assets/post-pic1.jpg';
import postImage2 from '../assets/post-pic2.jpg';
import postImage3 from '../assets/post-pic3.webp';
import postImage4 from '../assets/post-pic4.webp';
import postImage5 from '../assets/post-pic5.jpg';
import postImage6 from '../assets/post-pic6.png';
import postImage7 from '../assets/post-pic7.jpg';
import postImage8 from '../assets/post-pic8.jpg';
import Footer from "../components/Footer";

const BlogPage = () => {
  const posts = [
    { 
      title: 'Fish Farming 101', 
      image: postImage1, 
      url: 'https://www.gustawater.com/blog/how-to-start-fish-farming.html', 
      description: 'An introductory guide that covers the basics of fish farming. Ideal for beginners, this article explains essential concepts and practices needed to start and maintain a successful fish farm.'
    },
    { 
      title: 'Water Quality Tips', 
      image: postImage2, 
      url: 'https://www.deeptrekker.com/news/understanding-aquaculture-water-quality', 
      description: 'Maintaining optimal water quality is crucial for fish health. This guide provides tips and best practices for ensuring your fish farm\'s water is clean and suitable for fish growth.'
    },
    { 
      title: 'Feeding Your Fish', 
      image: postImage3, 
      url: 'https://www.sciencedirect.com/book/9780128195871/fish-nutrition', 
      description: 'Proper nutrition is key to healthy and fast-growing fish. Learn about the different types of fish feed, feeding schedules, and how to ensure your fish get the nutrients they need.'
    },
    { 
      title: 'Breeding Practices', 
      image: postImage4, 
      url: 'https://www.aquariumcoop.com/blogs/aquarium/fish-for-profit', 
      description: 'Discover effective breeding practices that can help you maintain a healthy and productive fish population. This guide covers the basics of fish breeding, from selecting breeding pairs to managing fry.'
    },
    { 
      title: 'Disease Prevention', 
      image: postImage5, 
      url: 'https://www.fao.org/4/ac264e/AC264E07.htm', 
      description: 'Fish are susceptible to various diseases that can devastate your farm. This article offers strategies for preventing common fish diseases and maintaining a healthy stock.'
    },
    { 
      title: 'Equipment for Fish Farming', 
      image: postImage6, 
      url: 'https://www.aquaculture-partners.com/?gad_source=1', 
      description: 'Learn about the essential equipment needed for fish farming, including tanks, aeration systems, and feeding devices. This guide helps you choose the right tools for your farm’s needs.'
    },
    { 
      title: 'Market Your Fish Farm', 
      image: postImage7, 
      url: 'https://www.fish-marketing.com/work/advertising', 
      description: 'Once your fish are ready for sale, effective marketing is crucial. This guide provides strategies to market your fish farm successfully and reach your target audience.'
    },
    { 
      title: 'Fish Farm Success Stories', 
      image: postImage8, 
      url: 'https://thefishsite.com/articles/dubais-aquaculture-success-story-fish-farms-llc', 
      description: 'Get inspired by stories of successful fish farmers who have turned their farms into thriving businesses. Learn from their experiences and apply their insights to your own fish farming venture.'
    },
  ];

  return (
    <div style={styles.blogPage}>
      <div style={styles.blogHeader}>
        <div style={styles.featuredPost}>
          <img src={featuredImage} alt="Featured" style={styles.featuredImage} />
          <div style={styles.featuredContent}>
            <h1>Top 10 Tips for Successful Fish Farming in 2024</h1>
            <p>"Welcome to the Ultimate Hub for Fish Farming Enthusiasts! Whether you're just starting your journey or looking to enhance your existing farm, you're in the right place. Dive deep into expert tips, innovative strategies, and sustainable practices that will transform your fish farming venture into a thriving success. From pond to plate, we're here to guide you every step of the way. Unlock the secrets of successful fish farming and join the revolution today!"</p>
            <p>Learn the best practices for thriving fish farms.</p>
            <p>We're sharing insights from expert fish farmers...</p>
            <div style={styles.authorInfo}>
              <img src={authorImage} alt="Author" style={styles.authorImage} />
              <span>Aforve Peter</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.headerRow}>
          <h2>Fish Farming Guides</h2>
          <div style={styles.searchContainer}>
            <input type="text" placeholder="Type here to search" style={styles.searchBox} />
            <button style={styles.button}>SEARCH</button>
          </div>
        </div>

        <div style={styles.mainContainer}>
          <div style={styles.leftContent}>
            <div style={styles.blogList}>
              {posts.map((post, index) => (
                <div key={index} style={{ ...styles.blogPost, ...((index % 2 === 0) ? styles.left : styles.right) }}>
                  <a href={post.url} target="_blank" rel="noopener noreferrer" style={styles.postLink}>
                    <img src={post.image} alt={post.title} style={styles[`postImage${index + 1}`]} />
                    <div style={styles.postContent}>
                      <h3 style={styles.postTitle}>{post.title}</h3>
                      <p style={styles.postDescription}>{post.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

const styles = {
  blogPage: {
    width: '100%',
    margin: '0 auto',
  },
  blogHeader: {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  featuredPost: {
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    filter: 'blur(2px)', // Apply blur effect
    transition: 'filter 0.3s ease-in-out', // Smooth transition when applying the blur
  },
  featuredContent: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -20%)',
    color: 'white',
    textAlign: 'left',
    
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  authorImage: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  container: {
    marginTop: '20px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchBox: {
    width: '200px',
    padding: '5px',
    marginRight: '10px',
  },
  button: {
    padding: '6px 12px',
    cursor: 'pointer',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: '20px',
  },
  leftContent: {
    width: '75%',
  },
  blogList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  blogPost: {
    display: 'flex',
    alignItems: 'center',
    width: '48%',
    marginBottom: '20px',
  },
  postImage1: {
    width: '50%',
    height: 'auto',
    borderRadius: '8px',
    marginRight: '50px',
    marginLeft: '90px',
    marginTop: '80px',
    border: '2px solid darkgreen', // Added border
  },
  postImage2: {
    width: '75%',
    height: 'auto',
    borderRadius: '12px',
    marginRight: '50px',
    marginLeft: '200px',
    border: '2px solid darkgreen', // Added border
    marginTop: '80px',
  },
  postImage3: {
    width: '100%',
    height: '400%',
    borderRadius: '10px',
    marginRight: '50px',
    marginLeft: '20px',
    marginTop: '10px',
    border: '2px solid darkgreen', // Added border
  },
  postImage4: {
    width: '150%',
    height: 'auto',
    borderRadius: '15px',
    marginRight: '50px',
    marginLeft: '200px',
    border: '2px solid darkgreen', // Added border
    marginTop: '20px',
  },
  postImage5: {
    width: '70%',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '60px',
    marginLeft: '90px',
    border: '2px solid darkgreen', // Added border
    marginTop: '60px'
  },
  postImage6: {
    width: '90%',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '40px',
    marginLeft: '160px',
    marginTop: '40px',
    border: '2px solid darkgreen', // Added border
  },
  postImage7: {
    width: '90%',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '40px',
    marginLeft: '40px',
    marginTop: '120px',
    border: '2px solid darkgreen', // Added border
  },
  postImage8: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '40px',
    marginLeft: '160px',
    marginTop: '120px',
    border: '2px solid darkgreen', // Added border
  },
  postLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'blue',
  
  },
  postContent: {
    flex: '1',
    justifyContent: 'flex-start',
    alignContent: 'left',
    alignItems: 'space-around',
    marginTop:'30px',
    flexWrap:'wrap',
    flexDirection: 'row',
    maxWidth: 'calc(100% - 150px)',
    flexShrink: '1'
  },
  postTitle: {
    fontSize: '11px',
    fontWeight: 'bold',
    margin: '0 0 10px',
    marginTop: '80px',
    textAlign:'justify',
    felx:'1',
    textDecoration: 'underline'
    
  },
  postDescription: {
    fontSize: '11px',
    margin: '0',
    color: 'black',
    textAlign: 'justify',
    flex: '1',
    justifyContent: 'flex-start',
     flexShrink: '40',
     marginTop: '5px',
     color: 'forestgreen'
  },
};

export default BlogPage;
