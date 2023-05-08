import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAfter,
} from "firebase/firestore";
import { checkArgumentFromObject } from "../utils/commonCheckers";
import { checkArgument } from "../utils/commonCheckers";
import Post from "./models/Post";
import UserService from "./UserService";

export default class PostService {
  static async createPost(content, media, uid) {
    checkArgument(content);
    checkArgument(media);
    // console.log("In");
    let u = await UserService.getCurrentUserData();
    // console.log(u);
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

  static async loadPostDesc(before = null) {
    const db = getFirestore();
    const postref = collection(db, "posts");
    const DBq = before
      ? query(
          postref,
          orderBy("createdAt", "desc"),
          startAfter(before),
          limit(2)
        )
      : query(postref, orderBy("createdAt", "desc"), limit(2));
    return await getDocs(DBq);
  }

  static async loadPostAsec(after = null) {
    const db = getFirestore();
    const postref = collection(db, "posts");
    const DBq = query(
      postref,
      orderBy("createdAt"),
      startAfter(after || 0),
      limit(10)
    );
    return await getDocs(DBq);
  }
}
