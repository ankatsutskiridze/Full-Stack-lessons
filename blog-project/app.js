import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// დროებითი მონაცემები (პოსტები)
let posts = [];

// Home გვერდი
app.get("/", (req, res) => {
  res.render("home", { posts: posts });
});

// პოსტის წაშლა
app.post("/delete-post/:index", (req, res) => {
  const postIndex = req.params.index;
  posts.splice(postIndex, 1); // მასივიდან პოსტის წაშლა
  res.redirect("/");
});

// ახალი პოსტის დამატება (form-იდან მოსული)
app.post("/add-post", (req, res) => {
  const newPost = {
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.redirect("/");
});
// რედაქტირების გვერდის გამოტანა
app.get("/edit-post/:index", (req, res) => {
  const postIndex = req.params.index;
  const post = posts[postIndex];
  res.render("edit", { post: post, index: postIndex });
});

// რედაქტირებული პოსტის შენახვა
app.post("/edit-post/:index", (req, res) => {
  const postIndex = req.params.index;
  posts[postIndex] = {
    title: req.body.title,
    content: req.body.content,
  };
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
