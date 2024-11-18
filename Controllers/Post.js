const PostModule = require("../Models/posts");

const PostThePost = async (req, res) => {
  try {
    const { title, description } = req.body;
    // console.log(`/Uploads/${req.file.filename}`)
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    // console.log(req.file, "....");
    const newPost = new PostModule({
      title,
      description,
      image,
    });

    await newPost.save();
    res.status(201).json({
      success: true,
      post: newPost,
      massage: "Post created !!"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const GetAllPosts = async (req, res) => {
  try {
    const AllPosts = await PostModule.find({});
    if (!AllPosts) {
      res.status(404).json({ message: "Post Not found !!!" });
    }
    res.status(200).json({
      AllPosts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const GetById = async (req, res) => {
  const id = req.params.id;
  // console.log(id)
  try {
    const Post = await PostModule.findOne({ _id: id });
    // console.log(Post)
    if (!Post) {
      res.status(404).json({ message: "Post Not found !!!" });
    }
    res.status(200).json({
      Post,
    });
  } catch (error) {
    // console.log(error)
    res.status(500).json({ success: false, message: error.message });
  }
};

const DeletePost = async (req, res) => {
  const id = req.params.id;
  // console.log(id)
  try {
    const Post = await PostModule.deleteOne({ _id: id });

    res.status(200).json({
      message: "Post deleted !!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const UpdatePost = async (req, res) => {
  const Id = req.params.id;
  try {
    const Post = await PostModule.findOne({ _id: Id });
    // console.log(Post)
    if (!Post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const { title, description } = req.body;
    Post.title = title || Post.title;
    Post.description = description || Post.description;

    if (req.file) {
      Post.image = `/uploads/${req.file.filename}`;
    }

    const updatedPost = await Post.save();

    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = {
  PostThePost,
  GetAllPosts,
  GetById,
  DeletePost,
  UpdatePost,
};
