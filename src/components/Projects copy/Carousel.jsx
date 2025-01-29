import React, { useState, useEffect } from 'react';
import banner1 from '../Projects/images/1.jpg';
import banner2 from '../Projects/images/2.jpg';
import banner3 from '../Projects/images/3.jpg';
import banner4 from '../Projects/images/4.jpg';
import banner5 from '../Projects/images/5.jpg';
import banner6 from '../Projects/images/6.jpg';
import banner7 from '../Projects/images/7.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(100);
  const [isNext, setIsNext] = useState(true);

  
  const images = [
    {
      src: banner1,
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      src: banner2,
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      src: banner3,
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      src:banner4,
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet...',
    },
  ];

  const timeAutoNext = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 100);

    const autoSlide = setTimeout(() => {
      setIsNext(true);
      handleSlide('next');
    }, timeAutoNext);

    return () => {
      clearInterval(interval);
      clearTimeout(autoSlide);
    };
  }, [timeRemaining]);

  const handleSlide = (type) => {
    if (type === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
    setTimeRemaining(100); // Reset the timer on manual slide
  };

  return (
    <div style={styles.carousel}>
      {/* Slide List */}
      <div style={styles.list}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.item,
              ...(index === currentIndex ? {} : { display: 'none' }),
            }}
          >
            <img src={image.src} alt={`slide-${index}`} style={styles.img} />
            <div style={styles.content}>
              {/* <div style={styles.author}>LUNDEV</div> */}
              <div style={styles.title}>{image.title}</div>
              <div style={styles.topic}>{image.topic}</div>
               <div style={styles.des}>{image.description}</div>
             {/* <div style={styles.buttons}>
                <button style={styles.button}>SEE MORE</button>
                <button style={{ ...styles.button, ...styles.subscribeButton }}>
                  Contact Us
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnail List */}
      <div style={styles.thumbnail}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.thumbnailItem,
              opacity: index === currentIndex ? 1 : 0.5,
            }}
          >
            <img src={image.src} alt={`thumbnail-${index}`} style={styles.thumbnailImg} />
            <div style={styles.thumbnailContent}>
              {/* <div style={styles.thumbnailTitle}>Name Slider</div>
              <div style={styles.thumbnailDescription}>Description</div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div style={styles.arrows}>
        <button onClick={() => handleSlide('prev')} style={styles.arrowButton}>
          {'<'}
        </button>
        <button onClick={() => handleSlide('next')} style={styles.arrowButton}>
          {'>'}
        </button>
      </div>

      {/* Time Running */}
      <div
        style={{
          ...styles.time,
          width: `${timeRemaining}%`,
        }}
      ></div>
    </div>
  );
};

const styles = {
  carousel: {
    height: '100vh',
    marginTop: '-50px',
    width: '100vw',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#000',
  },
  list: {
    position: 'relative',
    height: '100%',
  },
  item: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    inset: 0,
    transition: 'opacity 1s',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    position: 'absolute',
    top: '20%',
    width: '80%',
    left: '50%',
    transform: 'translateX(-50%)',
    paddingRight: '30%',
    boxSizing: 'border-box',
    color: '#fff',
    textShadow: '0 5px 10px #0004',
  },
  author: {
    fontWeight: 'bold',
    letterSpacing: '10px',
  },
  title: {
    fontSize: '3em',
    fontWeight: 'bold',
    lineHeight: '1.3em',
  },
  topic: {
    color: '#f1683a',
  },
  des: {
    fontSize: '1.2em',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 130px)',
    gridTemplateRows: '40px',
    gap: '5px',
    marginTop: '20px',
  },
  button: {
    border: 'none',
    backgroundColor: '#eee',
    letterSpacing: '3px',
    fontWeight: '500',
  },
  subscribeButton: {
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    color: '#eee',
  },
  thumbnail: {
    position: 'absolute',
    bottom: '50px',
    left: '50%',
    display: 'flex',
    gap: '20px',
    transform: 'translateX(-50%)',
    zIndex: 100,
  },
  thumbnailItem: {
    width: '150px',
    height: '220px',
    flexShrink: 0,
    position: 'relative',
  },
  thumbnailImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
  },
  thumbnailContent: {
    color: '#fff',
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    right: '10px',
  },
  thumbnailTitle: {
    fontWeight: '500',
  },
  thumbnailDescription: {
    fontWeight: '300',
  },
  arrows: {
    position: 'absolute',
    top: '80%',
    right: '52%',
    zIndex: 100,
    width: '300px',
    maxWidth: '30%',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  arrowButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#eee4',
    border: 'none',
    color: '#fff',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    transition: '.5s',
  },
  time: {
    position: 'absolute',
    zIndex: 1000,
    height: '3px',
    backgroundColor: '#f1683a',
    left: 0,
    top: 0,
  },
};

export default Carousel;
