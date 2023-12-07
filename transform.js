function transformPhoto(photo) {
  return {
    albumId: photo.albumId,
    id: photo.id,
    name: "Mario",
    title: photo.title,
    url: photo.url,
  };
}

function addTimeStamp(photoAlbum) {
  return {
    data: photoAlbum,
    timeStamp: new Date(),
  };
}

module.exports = { transformPhoto, addTimeStamp };
