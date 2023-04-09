import noimage from "../assets/no-image.png";

const CropImage = (url: String) => {
  if (!url) return noimage;

  const target = "media/";
  const indexOfSlice = url.indexOf(target) + target.length;
  return (
    url.slice(0, indexOfSlice) +
    "crop/600/400/" +
    url.slice(indexOfSlice, url.length)
  );
};

export default CropImage;
