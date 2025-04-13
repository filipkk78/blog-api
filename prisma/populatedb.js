const { prisma } = require("./queries");

async function addSampleData() {
  const deleteComments = prisma.comment.deleteMany();
  const deletePosts = prisma.post.deleteMany();
  // const deleteUsers = prisma.user.deleteMany();
  await prisma.$transaction([deleteComments, deletePosts]);
  await prisma.$executeRaw`ALTER SEQUENCE "Post_id_seq" RESTART WITH 1`;
  await prisma.$executeRaw`ALTER SEQUENCE "Comment_id_seq" RESTART WITH 1`;

  const newPosts = await prisma.post.createMany({
    data: [
      {
        title: "Court couple door game watch police.",
        content:
          "Act school really piece easy newspaper yeah. Test none issue television. On film data what new.",
        authorId: 1,
      },
      {
        title: "Nothing challenge scene mind employee second address.",
        content:
          "Claim south window general treatment institution. Economic far fly firm must travel. Late person choose own area finish. Purpose rock least report behind tax money.",
        authorId: 1,
      },
      {
        title: "At over break rest various.",
        content:
          "Down company generation. Car civil hospital energy ok discuss eye. Agree kid poor carry.",
        authorId: 1,
      },
    ],
  });

  const newComments = await prisma.comment.createMany({
    data: [
      {
        content: "Run produce save.",
        authorName: "Johnny",
        postId: 1,
      },
      {
        content: "Various talk this up PM.",
        authorName: "Tim",
        postId: 1,
      },
      {
        content: "Tax produce onto front school establish south crime.",
        authorName: "Lucy",
        postId: 3,
      },
      {
        content: "Door back street stage list pressure message.",
        authorName: "Valentine",
        postId: 2,
      },
      {
        content: "Capital effort always those conference.",
        authorName: "Joshua",
        postId: 1,
      },
      {
        content: "Debate hundred shake lose event teacher civil.",
        authorName: "Clive",
        postId: 2,
      },
      {
        content: "Oil win city federal pattern relate.",
        authorName: "Jill",
        postId: 1,
      },
      {
        content: "Fund small while safe drop.",
        authorName: "Byron",
        postId: 1,
      },
      {
        content: "Treatment election huge own before sound.",
        authorName: "Jote",
        postId: 3,
      },
      {
        content: "Term meet bar left tend.",
        authorName: "Gav",
        postId: 3,
      },
    ],
  });
}

addSampleData();
