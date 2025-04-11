const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getPosts() {
  const allPosts = await prisma.post.findMany();
  return allPosts;
}

async function addPost() {
  const newPost = await prisma.post.create({
    data: {},
  });
}

async function getComments() {
  const allComments = await prisma.comment.findMany();
  return allComments;
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

async function addUser(email, name, password) {
  const newUser = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: password,
    },
  });
}

module.exports = {
  getComments,
  getPosts,
  getUsers,
  addUser,
};
