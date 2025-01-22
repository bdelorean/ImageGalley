import { FaInstagram } from 'react-icons/fa';


const ImageCard = ({ image }) => {
  return (
    <article className="shadow-md bg-white rounded-3xl p-5 w-96">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        loading="lazy"
        className="w-full h-52 object-cover rounded-3xl"
      />
      <div className='flex flex-row justify-between items-center mt-2'>
        <div className='w-10'><img src={image.user.profile_image.medium} alt="" className='rounded-full w-full' /></div>
        <div className='flex flex-col'>
          <p className='font-bold'>{image.user.name}</p>
          <p className='flex items-center'><FaInstagram size={10} color="purple" /><span className='italic'>{image.user.name}</span></p>
        </div>
      </div>
    </article>
  );
};

export default ImageCard;
