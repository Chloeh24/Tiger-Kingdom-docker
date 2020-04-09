const test = require("tape");
const build = require("../src/db/build");

const { newPost, getPosts, deletePost, getUserPosts } = require("../model");

test("tests are running!", (t) => {
  const x = 5;
  t.equal(x, 5, "this is working");
  t.end();
});

test("Can get user posts!", (t) => {
  build().then(() => {
    getPosts()
      .then((post) => {
        const firstPost = post[0];
        t.equal(firstPost.post, "This is a picture of a tiger");
        t.equal(post.length, 4);
        t.end();
      })
      .catch((error) => {
        t.error(error);
        t.end();
      });
  });
});

// test("Can get all posts from one user", (t) => {
//   build().then(() => {
//     const user = "chloe";
//     getUserPosts(user)
//       .then((data) => {
//         t.equal(data[0]., type);
//         t.equal(data[data.length - 1].type, type);
//         t.end();
//       })
//       .catch((err) => {
//         t.error(err), t.end();
//       });
//   });
// });