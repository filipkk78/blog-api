const { prisma } = require("./queries");

async function addSampleData() {
  const deleteComments = prisma.comment.deleteMany();
  const deletePosts = prisma.post.deleteMany();
  const deleteUsers = prisma.user.deleteMany();
  await prisma.$transaction([deleteComments, deletePosts, deleteUsers]);
  await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`;
  await prisma.$executeRaw`ALTER SEQUENCE "Post_id_seq" RESTART WITH 1`;
  await prisma.$executeRaw`ALTER SEQUENCE "Comment_id_seq" RESTART WITH 1`;

  const newUsers = await prisma.user.createMany({
    data: [
      {
        name: "Robert Williams",
        email: "vanessajohnson@le.com",
        password: "@TO2OoMAiL_x",
      },
      {
        name: "Kelly Munoz",
        email: "srodriguez@smith.com",
        password: "(0zpM8ego#sV",
      },
      {
        name: "Antonio Kelly",
        email: "patrickweiss@gmail.com",
        password: "L*8nZTo^!DVP",
      },
      {
        name: "Mark Smith",
        email: "fparker@williams.org",
        password: "(^5BAJptwr7#",
      },
      {
        name: "Jacob Rodriguez",
        email: "aliciajohnson@smith.com",
        password: "k5_Tm)iO6+i*",
      },
    ],
  });

  const newPosts = await prisma.post.createMany({
    data: [
      {
        title: "Court couple door game watch police.",
        content:
          "Act school really piece easy newspaper yeah. Test none issue television. On film data what new.",
        authorId: 2,
      },
      {
        title: "Nothing challenge scene mind employee second address.",
        content:
          "Claim south window general treatment institution. Economic far fly firm must travel. Late person choose own area finish. Purpose rock least report behind tax money.",
        authorId: 2,
      },
      {
        title: "At over break rest various.",
        content:
          "Down company generation. Car civil hospital energy ok discuss eye. Agree kid poor carry.",
        authorId: 4,
      },
    ],
  });

  const newComments = await prisma.comment.createMany({
    data: [
      {
        content: "Run produce save.",
        authorId: 1,
        postId: 1,
      },
      {
        content: "Various talk this up PM.",
        authorId: 5,
        postId: 1,
      },
      {
        content: "Tax produce onto front school establish south crime.",
        authorId: 4,
        postId: 3,
      },
      {
        content: "Door back street stage list pressure message.",
        authorId: 1,
        postId: 2,
      },
      {
        content: "Capital effort always those conference.",
        authorId: 1,
        postId: 1,
      },
      {
        content: "Debate hundred shake lose event teacher civil.",
        authorId: 3,
        postId: 2,
      },
      {
        content: "Oil win city federal pattern relate.",
        authorId: 4,
        postId: 1,
      },
      {
        content: "Fund small while safe drop.",
        authorId: 5,
        postId: 1,
      },
      {
        content: "Treatment election huge own before sound.",
        authorId: 2,
        postId: 3,
      },
      {
        content: "Term meet bar left tend.",
        authorId: 5,
        postId: 3,
      },
    ],
  });
}

addSampleData();
