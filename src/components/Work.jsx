/**
 * @copyright 2025 Mert Cotuk
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/portfolio/images/project_coin_calculator.png',
    title: 'Full Stack Web Application',
    tags: ['Java', 'SpringBoot', 'VueJS', 'PostgreSQL'],
    projectLink: 'https://github.com/bmertcotuk/coin-calculator'
  },
  {
    imgSrc: '/portfolio/images/springboot.svg',
    title: 'Health Record Manager',
    tags: ['Java', 'SpringBoot', 'H2', 'REST'],
    projectLink: 'https://github.com/bmertcotuk/health-record-manager'
  },
  {
    imgSrc: '/portfolio/images/springboot.svg',
    title: 'Library Manager',
    tags: ['Java', 'SpringBoot', 'H2', 'REST'],
    projectLink: 'https://github.com/bmertcotuk/library-manager'
  },
  {
    imgSrc: '/portfolio/images/project_lyrics_genius.jpeg',
    title: 'Java Swing (GUI) Application',
    tags: ['Java', 'Swing GUI'],
    projectLink: 'https://github.com/bmertcotuk/lyrics-genius'
  }
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work