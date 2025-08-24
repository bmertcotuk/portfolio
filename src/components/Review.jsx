/**
 * @copyright 2025 Mert Cotuk
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


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

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '0% 60%',
        end: '400% 60%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          What colleagues say
        </h2>

        <div className="scrub-slide flex items-stretch gap-6 w-fit">
          {reviews.map(({ content, name, imgSrc, company, profileUrl }, key) => (
            <ReviewCard
              key={key}
              name={name}
              profileUrl={profileUrl}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review