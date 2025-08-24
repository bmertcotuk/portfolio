/**
 * @copyright 2025 Mert Cotuk
 * @license Apache-2.0
 */


const socialLinks = [
  {
    href: 'https://github.com/bmertcotuk',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
    </svg>,
    alt: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/mert-cotuk-7a851399/',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
    </svg>,
    alt: 'LinkedIn'
  },
  {
    href: 'https://medium.com/@b.mert.cotuk',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m24 24h-24v-24h24zm-8.986-15.006v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257-1.234c-.091-.07-.148-.178-.148-.3 0-.022.002-.043.005-.064v.002-9.07c-.003-.019-.005-.04-.005-.062 0-.121.058-.229.148-.298l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924h-4.675v.271l1.502 1.813c.127.115.207.281.207.466 0 .022-.001.043-.003.064v-.003 7.126c.007.041.011.088.011.136 0 .222-.088.423-.231.571l-1.69 2.054v.27h4.8v-.27l-1.691-2.054c-.149-.154-.241-.363-.241-.595 0-.04.003-.079.008-.117v.004-6.16l4.215 9.195h.49z" fill="currentColor"/>
    </svg>,
    alt: 'Medium'
  },
  {
    href: 'https://www.upwork.com/freelancers/~012d7e37251541bf27',
    icon: <svg width="25" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.1199999999999997 0.16h11.759999999999998c1.0815 0 1.96 0.8785 1.96 1.96v11.759999999999998c0 1.0815 -0.8785 1.96 -1.96 1.96H2.1199999999999997c-1.0815 0 -1.96 -0.8785 -1.96 -1.96V2.1199999999999997c0 -1.0815 0.8785 -1.96 1.96 -1.96Zm7.5215 8.476999999999999c0.23099999999999998 -1.8515 0.9065 -2.4324999999999997 1.799 -2.4324999999999997 0.8855 0 1.5715 0.707 1.5715 1.7395s-0.6895 1.7395 -1.5715 1.7395c-0.9764999999999999 0 -1.6205 -0.7525 -1.799 -1.0465Zm-0.9345 -1.4629999999999999c-0.287 -0.5425 -0.5005 -1.2705 -0.6719999999999999 -1.946h-2.2015v2.7335c0 0.994 -0.45149999999999996 1.7289999999999999 -1.337 1.7289999999999999s-1.3929999999999998 -0.7314999999999999 -1.3929999999999998 -1.7254999999999998l0.010499999999999999 -2.7335H1.847v2.7335c0 0.798 0.25899999999999995 1.5225 0.7314999999999999 2.037 0.4865 0.532 1.148 0.8119999999999999 1.918 0.8119999999999999 1.5294999999999999 0 2.5969999999999995 -1.1724999999999999 2.5969999999999995 -2.8525v-1.8375c0.161 0.6055 0.539 1.7675 1.267 2.7895l-0.6755 3.8675h1.288l0.448 -2.7439999999999998c0.147 0.1225 0.3045 0.23099999999999998 0.469 0.32899999999999996 0.4305 0.27299999999999996 0.9239999999999999 0.42699999999999994 1.4315 0.441h0.119c1.5785 0 2.8314999999999997 -1.2214999999999998 2.8314999999999997 -2.8665s-1.2565 -2.877 -2.8314999999999997 -2.877c-1.5889999999999997 0 -2.4815 1.0395 -2.7335 2.1035Z" fill="currentColor" />
    </svg>,
    alt: 'Upwork'
  },
];


const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
    >
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">

        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">

          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Contact me for collaboration
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <input type="hidden" name="access_key" value="4947410e-4236-458b-b477-63833c073d9b"></input>

          {/* Honeypot Spam Protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="label reveal-up"
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Your Name"
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="label reveal-up"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="your.email@example.com"
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="label reveal-up"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            Submit
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact