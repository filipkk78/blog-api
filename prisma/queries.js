const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getPosts() {
  const allPosts = await prisma.post.findMany();
  return allPosts;
}

async function getPostById(id) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  if (!post) {
    return "Post not found";
  }
  return post;
}

async function addPost(title, content, authorId) {
  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });
}

async function deletePost(id) {
  const check = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  if (!check) {
    return "No post with requested id found";
  }
  const deletePostComments = await prisma.comment.deleteMany({
    where: {
      postId: id,
    },
  });
  const deletePost = await prisma.post.delete({
    where: {
      id,
    },
  });
  return `Deleted post with id ${id}`;
}

async function getComments() {
  const allComments = await prisma.comment.findMany();
  return allComments;
}

async function getCommentById(id) {
  const comment = await prisma.comment.findUnique({
    where: {
      id,
    },
  });
  if (!comment) {
    return "Comment not found";
  }
  return comment;
}

async function addComment(content, authorId, postId) {
  const newComment = await prisma.comment.create({
    data: {
      content,
      authorId,
      postId,
    },
  });
}

async function deleteComment(id) {
  const check = await prisma.comment.findUnique({
    where: {
      id,
    },
  });
  if (!check) {
    return "No comment with requested id found";
  }
  const deleteComment = await prisma.comment.delete({
    where: {
      id,
    },
  });
  return `Deleted comment with id ${id}`;
}

async function getUsers() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      comments: true,
    },
  });
  return allUsers;
}

async function getUserById(id) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user) {
    return "User not found";
  }
  return user;
}

async function addUser(email, name, password) {
  const newUser = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: password,
    },
  });
}

async function deleteUser(id) {
  const check = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  if (!check) {
    return "No user with requested id found";
  }
  const deleteUserComments = await prisma.comment.deleteMany({
    where: {
      authorId: id,
    },
  });
  const deleteUserPosts = await prisma.post.deleteMany({
    where: {
      authorId: id,
    },
  });
  const deleteUser = await prisma.user.delete({
    where: {
      id,
    },
  });
  return `Deleted user with id ${id}`;
}

module.exports = {
  prisma,
  getUsers,
  getPosts,
  getComments,
  getUserById,
  getPostById,
  getCommentById,
  addUser,
  addPost,
  addComment,
  deleteUser,
  deletePost,
  deleteComment,
};
