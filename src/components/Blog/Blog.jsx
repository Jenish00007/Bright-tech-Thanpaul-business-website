import React, { useState, useEffect } from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import './Blog.css';
// import './Images/pic_1.webp';

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
    image: "assets/pic_3.jpg"
  }
];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [observedPosts, setObservedPosts] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    const blogCardElements = document.querySelectorAll('.blog-card');
    blogCardElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  const uniqueTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Jewelry Insights & Stories</h1>
      
      {/* <div className="tag-filter">
        <button
          onClick={() => setSelectedTag(null)}
          className={selectedTag === null ? 'active' : ''}
        >
          All Posts
        </button>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? 'active' : ''}
          >
            {tag}
          </button>
        ))}
      </div> */}

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
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
              <p className="blog-excerpt">{post.excerpt}</p>
              {/* <button className="read-more">Read More</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;