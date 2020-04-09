const test = require("tape");
const build = require("../src/db/build");

const { newPost, getPosts, deletePost, getUserPosts, createNewUser, getUsersTable } = require("../src/model");

test("tests are running!", (t) => {
  const x = 5;
  t.equal(x, 5, "this is working");
  t.end();
});

test("Can get user posts!", (t) => {
  build().then(() => {
    getPosts()
      .then((post) => {
        const firstPost = post.rows[0];
        t.equal(firstPost.post, "This is a picture of a Tiger");
        t.equal(post.rows.length, 4);
        t.end();
      })
      .catch((error) => {
        t.error(error);
        t.end();
      });
  });
});

test('Can create new user', t => {
  build().then(() => {
    const newUser = 'Bob';
    const newPassword = 'password123'
    createNewUser(newUser, newPassword)
    .then(() => {
      getUsersTable()
      .then((data) => {
        t.equal(data[data.length-1].username, 'Bob')
        t.equal(data.length, 5)
        t.end();
      })
    })
    
  })
  .catch(err => { t.error(err),
  t.end()})

})


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
