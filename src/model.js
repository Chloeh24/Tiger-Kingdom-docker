const db = require("./db/connection.js");

function getPosts() {
  return db
    .query(
      `
        SELECT *
        FROM users
        INNER JOIN img_posts ON users.id = img_posts.author_id; `
    )
    .catch((err) => {
      console.log("Here be error", err);
    });
}

function newPost(message) {
  return db
    .query("INSERT INTO users(username) VALUES($1)", [message.username])
    .then(() => {
      return db
        .query(`SELECT id FROM users where username=($1)`, [message.username])
        .then((item) => {
          return item.rows.map((obj) => obj.id);
        })
        .then((idArr) => {
          return db.query(
            "INSERT INTO img_posts(author_id, post, img_url) VALUES($1, $2, $3)",
            [idArr[0], message.post_text, message.img_url]
          );
        });
    });
}

function postAuthorID(postID) {
  // console.log("Getting postAuthorID:", postID);
  return db.query("SELECT author_id FROM img_posts WHERE ($1)=id", [postID])
  .then( id => id.rows[0].author_id );
}

function deletePost(postId, res) {
  return db.query("DELETE FROM img_posts WHERE ($1)=id", [postId]);
}

function getUserPosts(user) {
  return db
    .query("SELECT * FROM img_posts WHERE auth=($1)", [user])
    .then((res) => res.rows);
}


function getUsersTable() {
  return db
    .query("SELECT * FROM users;")
    .then((res) => res.rows);
}

function getUser(user) {
  return db
    .query("SELECT * FROM users WHERE username = ($1);", [user])
    .then((res) => res.rows[0]);
}

function userDoesNotExist(user) {
  return db
    .query("SELECT * FROM users WHERE username = ($1);", [user])
    .then((res) => res.rows.length === 0);
}

function createNewUser(username, bcrypt_password) {
  return userDoesNotExist(username)
    .then( result => {
      if(result) { 
        return db
          .query(`INSERT INTO users
                    (username, user_password)
                  VALUES
                      ($1,$2)`
                  , [username, bcrypt_password]
                )
          .then((res) => res.rows);
      }
    })
}

module.exports = { postAuthorID, newPost, getPosts, deletePost, getUserPosts, createNewUser, getUsersTable, getUser };
