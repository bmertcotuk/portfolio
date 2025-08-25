/**
 * @copyright 2025 Mert Cotuk
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { useRef, useState, useEffect } from 'react';


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content: 'I had the pleasure of working alongside Mert Çotuk at Upwork, where we collaborated as Senior Software Development Engineers. Mert consistently impressed me with his adaptability, hard-working nature, and dedication to finding solutions. His compatibility with team members and his clear communication skills made him an invaluable asset to our projects. \n Mert has a remarkable ability to analyze complex problems and develop efficient, effective solutions, which made him a go-to person for any challenge. His proactive approach to problem-solving and his enthusiasm for continuous learning inspired everyone around him, including myself. I\'m confident Mert would be a tremendous asset to any team, and I wholeheartedly recommend him to anyone looking for a committed, talented, and solution-oriented software engineer.',
    name: 'Emrah Gingir',
    imgSrc: '/images/emrah_avatar.jpeg',
    company: 'Senior Software Engineer @Upwork',
    profileUrl: 'https://www.linkedin.com/in/egingir/'
  },
  {
    content: 'Mert is a very talented, intelligent, and successful developer. He\'s also a very warm person and a very good friend. He\'s the most organized person I\'ve ever seen. He always does his best, cares about the quality of the code he writes, and helps his team a lot. During the time we worked together, he took responsibility for solving very complex problems and succeeded in all of them. Since he is very open to learning, I believe he will be more successful every day. I owe him a big thank you because I learned a lot from him and supported me a lot while working with him.',
    name: 'Orkun Gedik',
    imgSrc: '/images/orkun_avatar.jpeg',
    company: 'Senior Software Engineering Manager @Katanox | Ex-Amadeus',
    profileUrl: 'https://www.linkedin.com/in/orkungdk/'
  },
  {
    content: 'I had the pleasure of working with Mert, who reported directly to me as a Senior Java Developer. Mert consistently impressed me with his speed and efficiency; he was one of the fastest developers I\'ve ever worked with. Beyond his technical prowess, Mert\'s dedication to the product was evident in everything he did. He not only cared deeply about the quality and success of our projects but also continually sought to improve himself by learning new technologies and methodologies, which he seamlessly integrated into his work. Mert is a highly skilled and passionate developer who would be a valuable asset to any team.',
    name: 'Dmitriy Liandres',
    imgSrc: '/images/dmitriy_avatar.jpeg',
    company: 'Senior Engineering Manager @Proxymity | Ex-Upwork, EPAM, EffectiveSoft',
    profileUrl: 'https://www.linkedin.com/in/dmitriy-liandres/'
  },
  {
    content: 'Mert is one of the most reliable and talented engineers I\'ve ever collaborated with. If he says something will be done, you can count on it being delivered on time and with great quality. His backend Java skills and attention to details are top-notch. He often went the extra mile at Upwork and took ownership of the products we built. I strongly believe any team would be lucky to have him.',
    name: 'Erbol Akyshbekov',
    imgSrc: '/images/erbol_avatar.jpeg',
    company: 'Senior Software Engineer @DRW | Ex-Atlassian, Upwork, EPAM',
    profileUrl: 'https://www.linkedin.com/in/erickaky/'
  }
];


const Review = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate card width on mount and resize
  useEffect(() => {
    const updateCardWidth = () => {
      if (sliderRef.current) {
        const firstCard = sliderRef.current.children[0];
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth + 24); // width + gap (gap-6 = 1.5rem = 24px)
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Slide navigation functions
  const goToNextSlide = () => {
    if (sliderRef.current && currentIndex < reviews.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      sliderRef.current.scroll({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      sliderRef.current.scroll({
        left: prevIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Snap to nearest card
    if (sliderRef.current) {
      const nearestIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);
      setCurrentIndex(nearestIndex);
      sliderRef.current.scroll({
        left: nearestIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          What colleagues say
        </h2>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-zinc-700/80 hover:bg-zinc-600 p-3 rounded-full transition-colors duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          {/* Slider container */}
          <div 
            ref={sliderRef}
            className="scrub-slide flex items-stretch gap-6 w-full overflow-hidden"
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none', /* Hide scrollbar in IE/Edge */
              scrollbarWidth: 'none' /* Hide scrollbar in Firefox */
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {reviews.map(({ content, name, imgSrc, company, profileUrl }, key) => (
              <div 
                key={key} 
                style={{ scrollSnapAlign: 'start' }}
              >
                <ReviewCard
                  name={name}
                  profileUrl={profileUrl}
                  imgSrc={imgSrc}
                  company={company}
                  content={content}
                />
              </div>
            ))}
          </div>

          <button
            onClick={goToNextSlide}
            disabled={currentIndex === reviews.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-zinc-700/80 hover:bg-zinc-600 p-3 rounded-full transition-colors duration-300 ${currentIndex === reviews.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  sliderRef.current.scroll({
                    left: index * cardWidth,
                    behavior: 'smooth'
                  });
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-zinc-100 w-6" : "bg-zinc-600"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;