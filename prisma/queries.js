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
  const allUsers = await prisma.user.findMany();
  return allUsers;
}

module.exports = {
  getComments,
  getPosts,
  getUsers,
};
