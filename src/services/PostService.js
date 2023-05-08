import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { checkArgumentFromObject } from "../utils/commonCheckers";
import { checkArgument } from "../utils/commonCheckers";
import Post from "./models/Post";
import UserService from "./UserService";

export default class PostService {
  static async createPost(content, media, uid) {
    checkArgument(content);
    checkArgument(media);
    console.log("In");
    let u = await UserService.getCurrentUserData();
    console.log(u);
    let user = {
      uid: uid,
      username: u.username,
      title: u.title,
      avatar: u.avatar,
    };

    let post = new Post();
    Object.assign(post, { media, content, user });
    post.createdAt = serverTimestamp();

    const db = getFirestore();
    const col = collection(db, Post.collectionName).withConverter(
      Post.converter
    );
    return addDoc(col, post);
  }
}
