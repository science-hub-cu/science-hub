import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import uuid from "uuid";

export default class FireBaseStorage {
  static folders = {
    postImage: "posts/",
  };

  static async uploadImageAsync(uri, toFolder = "") {
    try {
      const storage = getStorage();
      const response = await fetch(uri);
      const blobFile = await response.blob();

      const reference = ref(storage, `${toFolder}${uuid.v4()}`);
      const result = await uploadBytes(reference, blobFile);
      const url = await getDownloadURL(result.ref);
      return url;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async uploadImageWithProgress(
    imageUri,
    toFolder,
    inProgress,
    errorHandler,
    done
  ) {
    try {
      const storage = getStorage();
      const response = await fetch(imageUri);
      const blobFile = await response.blob();

      const reference = ref(storage, `${toFolder}${uuid.v4()}`);
      const uploadTask = uploadBytesResumable(reference, blobFile);

      uploadTask.on(
        "state_changed",
        (snapshot) =>
          inProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        (error) => errorHandler(error),
        async () => {
          const fileUrl = await getDownloadURL(uploadTask.snapshot.ref);
          done(fileUrl);
        }
      );
    } catch (err) {
      throw err;
    }
  }
}
