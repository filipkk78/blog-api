const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const bcrypt = require("bcryptjs");
require("dotenv").config();

async function getPosts() {
  const allPosts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });
  return allPosts;
}

async function getPostById(id) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      comments: true,
    },
  });
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
    return check;
  }
  const deletePost = await prisma.post.delete({
    where: {
      id,
    },
  });
  return `Deleted post with id ${id}`;
}

async function editPost(title, content, id) {
  try {
    const editedPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });
    return `Edited post with id ${id}`;
  } catch (err) {
    return null;
  }
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
    include: {
      author: true,
    },
  });
  return comment;
}

async function addComment(content, authorName, postId) {
  const newComment = await prisma.comment.create({
    data: {
      content,
      authorName,
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
    return check;
  }
  const deleteComment = await prisma.comment.delete({
    where: {
      id,
    },
  });
  return `Deleted comment with id ${id}`;
}

async function editComment(content, id) {
  try {
    const editedPost = await prisma.comment.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });
    return `Edited comment with id ${id}`;
  } catch (err) {
    return null;
  }
}

async function getUsers() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      password: false,
    },
  });
  return allUsers;
}

async function addUser(email, name, password, adminPwd) {
  if (adminPwd !== process.env.ADMIN_PWD) {
    return "Invalid admin password";
  }
  if (await getUserByEmail(email)) {
    return "This email is already taken";
  }
  const newUser = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: await bcrypt.hash(password, 10),
    },
  });
  return `Added user ${name} with ${email} email`;
}

async function deleteUser(id) {
  const check = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!check) {
    return check;
  }
  const deleteUser = await prisma.user.delete({
    where: {
      id,
    },
  });
  return `Deleted user with id ${id}`;
}

async function getUserByEmail(userEmail) {
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  return user;
}

module.exports = {
  prisma,
  getUsers,
  getPosts,
  getComments,
  getPostById,
  getCommentById,
  addUser,
  addPost,
  addComment,
  deleteUser,
  deletePost,
  deleteComment,
  editPost,
  editComment,
  getUserByEmail,
};
