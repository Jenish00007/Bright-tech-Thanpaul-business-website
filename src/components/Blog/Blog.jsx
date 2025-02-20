import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import './Blog.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Perfect Engagement Ring",
    author: "Emma Johnson",
    date: "January 16, 2024",
    tags: ["Engagement", "Rings"],
    excerpt: "Discover key factors to consider when selecting the ideal engagement ring that matches your partner's style and your budget.",
    image: "assets/pic_1.webp"
  },
  {
    id: 2,
    title: "Caring for Your Fine Jewelry",
    author: "Michael Lee",
    date: "December 20, 2023",
    tags: ["Maintenance", "Care"],
    excerpt: "Learn professional tips and techniques to keep your precious jewelry looking brilliant and pristine for years to come.",
    image: "assets/pic_2.webp"
  },
  {
    id: 3,
    title: "Trends in Modern Jewelry Design",
    author: "Sofia Rodriguez",
    date: "February 5, 2024",
    tags: ["Trends", "Design"],
    excerpt: "Explore the latest innovations and aesthetic movements reshaping contemporary jewelry design.",
    image: "assets/pic_3.webp"
  }
];

const Blog = ({ scale = 4.5, duration = 1, ease = "power2.out" }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Create refs for each image
  const imageRefs = useRef([]);

  // GSAP animation for images on scroll
  useLayoutEffect(() => {
    blogPosts.forEach((post, index) => {
      let ctx = gsap.context(() => {
        gsap.from(imageRefs.current[index], {
          scale: 1 / scale,
          opacity: 0,
          ease: ease,
          duration: duration,
          scrollTrigger: {
            trigger: imageRefs.current[index],
            scrub: 1, // Smooth scroll effect
            start: "top 80%", // When the top of the image is 80% from the top of the viewport
            end: "bottom 80%" // When the bottom of the image is 80% from the top of the viewport
          }
        });
      });

      // Cleanup on unmount
      return () => ctx.revert();
    });
  }, [scale, duration, ease]);

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  const uniqueTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Jewelry Insights & Stories</h1>
      
      <div className="blog-grid">
        {filteredPosts.map((post, index) => (
          <div key={post.id} className="blog-card">
            <img 
              ref={(el) => imageRefs.current[index] = el} // Assign refs dynamically
              src={post.image} 
              alt={post.title} 
              className="blog-image" 
            />
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <div className="blog-meta">
                <span><User size={16} /> {post.author}</span>
                <span><Calendar size={16} /> {post.date}</span>
              </div>
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              {/* <p className="blog-excerpt">{post.excerpt}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
