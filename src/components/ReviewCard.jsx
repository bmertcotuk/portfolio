/**
 * @copyright 2025 Mert Cotuk
 * @license Apache-2.0
 */


import PropTypes from 'prop-types';


const ReviewCard = ({
  content,
  imgSrc,
  name,
  profileUrl,
  company
}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] h-full">

      <p className="text-zinc-400 mb-8">
        {content}
      </p>

      <a 
        href={profileUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 mt-auto group hover:bg-zinc-700/30 p-2 rounded-lg transition-colors cursor-pointer"
      >
        <figure className="img-box w-13 h-13 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading='lazy'
            className="img-cover w-full h-full object-cover object-center"
          />
        </figure>

        <div>
          <p className="group-hover:text-zinc-50 transition-colors">{name}</p>

          <p className="text-xs text-zinc-400 tracking-wider group-hover:text-zinc-300 transition-colors">
            {company}
          </p>
        </div>
      </a>

    </div>
  )
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired
}


export default ReviewCard