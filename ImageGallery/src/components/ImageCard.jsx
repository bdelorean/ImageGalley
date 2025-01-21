const ImageCard = ({ image }) => {
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5 w-96">
        <img
          src={image.urls.small}
          alt={image.alt_description}
          loading="lazy"
          className="w-full h-52 object-cover rounded-3xl"
        />
      </article>
    </>
  );
};

export default ImageCard;
