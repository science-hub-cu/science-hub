export default class Post {
  static collectionName = "posts";

  constructor() {
    this.id = "";
    this.content = "";
    this.media = {
      type: "",
      data: "",
    };
    this.user = {};
    this.comments = [];
    this.vote = 0;
    this.reaction = "";
    this.createdAt = undefined;
  }

  /******************************* */
  static convertFromSnapshot(snapshot, deleteted = []) {
    let post = new Post();
    Object.assign(post, snapshot.data());
    deleteted.forEach((prop) => delete post[prop]);
    return user;
  }
  static converter = {
    toFirestore: (post) => {
      const data = Object.assign({}, post);
      return data;
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return Post.convertFromSnapshot(data);
    },
  };
}
