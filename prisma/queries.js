const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getPosts() {
  const allPosts = await prisma.post.findMany();
  return allPosts;
}

async function getComments() {
  const allComments = await prisma.comment.findMany();
  return allComments;
}

module.exports = {
  getComments,
  getPosts,
};
