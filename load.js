const { promisify } = require("util");
const fs = require("fs");
const writeFilePromised = promisify(fs.writeFile);

function bulkLoadPhotoAlbum(photoAlbums, outputFilePath, fileName) {
  if (!outputFilePath) {
    throw new Error("Filepath required as second argument");
  }
  if (!fileName) {
    throw new Error("FileName is required as third argument");
  }
  return writeFilePromised(
    `${outputFilePath}/${fileName}.json`,
    JSON.stringify(photoAlbums, null, 2)
  );
}

function insertRecord(photo) {
  // mocked function
  // return a Promise that resolves when photo was inserted
  return Promise.resolve();
}

module.exports = { bulkLoadPhotoAlbum, insertRecord };
