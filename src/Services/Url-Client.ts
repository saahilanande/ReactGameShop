const CropImage = (url: String) => {
  const target = "media/";
  const indexOfSlice = url.indexOf(target) + target.length;
  return (
    url.slice(0, indexOfSlice) +
    "crop/600/400/" +
    url.slice(indexOfSlice, url.length)
  );
};

export default CropImage;
