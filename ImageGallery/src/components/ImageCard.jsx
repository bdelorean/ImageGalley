import { FaInstagram } from "react-icons/fa";

const ImageCard = ({ image }) => {
  return (
    <article className="shadow-md bg-white rounded-3xl p-5 w-96">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        // loading="lazy"
        className="w-full h-52 object-cover rounded-3xl"
      />
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="w-40">
          <img
            src={image.user.profile_image.medium}
            alt=""
            className="rounded-full w-10"
          />
          <p className="text-sm">{image.user.name}</p>
        </div>
        <div className="flex flex-col">
         
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-red-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>{image.likes} likes</span>
          </div>
          <p className="flex items-center">
            <FaInstagram size={10} color="purple" />
            <span className="italic">{image.user.name}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ImageCard;
