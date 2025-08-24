/**
 * @copyright 2025 Mert Cotuk
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Professional projects',
    number: 15
  },
  {
    label: 'Years of experience',
    number: 9
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] text-justify">
            Welcome! I&apos;m Mert, a software engineer with 9+ years of experience building enterprise applications across industries like telecommunications, tourism, marketplaces, insurance, and banking. Blending problem-solving with technical expertise, I design and deliver solutions that are both reliable and adaptable. Comfortable working in global teams or independently, I focus on writing clean, maintainable code and quickly adapt to new technologies to meet evolving challenges.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About