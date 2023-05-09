import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  startAfter,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "@firebase/auth";

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
    const postref = collection(db, Post.collectionName);
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
    const postref = collection(db, Post.collectionName);
    const DBq = query(
      postref,
      orderBy("createdAt"),
      startAfter(after || 0),
      limit(10)
    );
    return await getDocs(DBq);
  }

  static postLisiner(onAdd, onModified, onDelete) {
    const q = query(
      collection(getFirestore(), Post.collectionName),
      orderBy("createdAt", "desc")
    );

    return onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          onAdd(change.doc);
        }
        if (change.type === "modified") {
          onModified(change.doc);
        }
        if (change.type === "removed") {
          onDelete(change.doc);
        }
      });
    });
  }

  static async votePost(postid, state = "up") {
    try {
      const { uid } = getAuth().currentUser;
      const db = getFirestore();

      await runTransaction(db, async (transaction) => {
        const document = doc(
          db,
          `${Post.collectionName}/${postid}/voteusers`,
          uid
        );
        const postDoc = doc(db, Post.collectionName, postid);
        const { vote } = (await transaction.get(postDoc)).data();
        let newvote = vote + (state === "up" ? 1 : state === "down" ? -1 : 0);
        transaction.update(postDoc, {
          vote: newvote,
        });
        // const col = collection(postdoc, "votesusers");
        transaction.set(document, { state });
      });
    } catch (er) {
      throw er;
    }
  }
  static async getVotePost(postid) {
    const { uid } = getAuth().currentUser;
    // console.log(user);
    const document = doc(
      getFirestore(),
      `${Post.collectionName}/${postid}/voteusers`,
      uid
    );
    const snap = await getDoc(document);
    if (snap.exists()) return snap.data().state;
    else return "";
  }
}
