
import Blog from "../models/Blog.js";

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({
      publishedAt: -1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      published: true,
    });

    if (!blog) {
      res.status(404);
      throw new Error("Article not found");
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const blogData = { ...req.body };

    if (blogData.published && !blogData.publishedAt) {
      blogData.publishedAt = new Date();
    }

    const blog = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      message: "Article created successfully",
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const existingBlog = await Blog.findById(req.params.id);

    if (!existingBlog) {
      res.status(404);
      throw new Error("Article not found");
    }

    const updates = { ...req.body };

    if (updates.published === true && !existingBlog.published) {
      updates.publishedAt = new Date();
    }

    if (updates.published === false) {
      updates.publishedAt = null;
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Article updated successfully",
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      res.status(404);
      throw new Error("Article not found");
    }

    res.status(200).json({
      success: true,
      message: "Article deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
