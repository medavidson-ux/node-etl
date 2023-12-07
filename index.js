const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/json");

const { getPhotos } = require("./extract");
const { addTimeStamp, transformPhoto } = require("./transform");
const { bulkLoadPhotoAlbum, insertRecord } = require("./load");

const orchestrateEtlPipeline = async () => {
  try {
    // EXTRACT
    const photoAlbum1 = await getPhotos(1);

    // const allPhotoAlbums = Promise.all([
    //   getPhotos(1),
    //   getPhotos(2),
    //   getPhotos(3),
    // ]);
    // const [photoAlbum1, photoAlbum2, photoAlbum3] = await allPhotoAlbums;

    // TRANSFORM
    let transformedPhotoAlbum1 = photoAlbum1.map((photo) =>
      transformPhoto(photo)
    );
    // let transformedPhotoAlbum2 = photoAlbum2.map((photo) =>
    //   transformPhoto(photo)
    // );
    // let transformedPhotoAlbum3 = photoAlbum3.map((photo) =>
    //   transformPhoto(photo)
    // );

    // console.log(
    //   transformedPhotoAlbum1[0],
    //   transformedPhotoAlbum2[0],
    //   transformedPhotoAlbum3[0]
    // ); // log first photo object of each transformed photoAlbum

    transformedPhotoAlbum1 = addTimeStamp(transformedPhotoAlbum1);
    // transformedPhotoAlbum2 = addTimeStamp(transformedPhotoAlbum2);
    // transformedPhotoAlbum3 = addTimeStamp(transformedPhotoAlbum3);

    // LOAD
    // 1) bulk load records - for example in json file

    await bulkLoadPhotoAlbum(transformedPhotoAlbum1, dirPath, "album-1");

    // 2) insert records individually - for example in database
    // await transformedPhotoAlbum1.data.reduce(async (previousPromise, photo) => {
    //   await previousPromise;
    //   return insertRecord(photo);
    // }, Promise.resolve());
    // console.log(transformedPhotoAlbum1);
  } catch (error) {
    console.error(error);
  }
};

orchestrateEtlPipeline();
