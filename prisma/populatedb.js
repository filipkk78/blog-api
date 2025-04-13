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
        title: "Why You Should Learn JavaScript Before Any Other Web Language",
        content:
          "JavaScript is often the first language new developers encounter, and for good reason. As the backbone of interactive web applications, it's an essential tool for anyone stepping into front-end or even full-stack development. But what makes JavaScript the ideal starting point? First, it's everywhere. JavaScript runs in every modern browser, which means you don’t need to set up complex environments. Just open Chrome or Firefox, hit F12, and you're coding. Second, it powers interactivity. From dropdowns and modals to complex frameworks like React and Vue, JavaScript brings static pages to life. Third, it transitions well to back-end with Node.js. Once you're comfortable on the front-end, writing server-side JavaScript is a natural next step. Finally, there's a huge community and lots of learning resources, from MDN to freeCodeCamp. If you're serious about web development, JavaScript isn’t just a language—it’s the language to learn first.",
        authorId: 1,
        published: true,
      },
      {
        title: "5 Common CSS Mistakes (And How to Avoid Them)",
        content:
          "CSS may look deceptively simple, but even experienced developers run into tricky layout bugs, specificity wars, and unexpected overrides. If your designs aren’t behaving, you might be making one of these common mistakes. One, using IDs instead of classes. IDs have higher specificity and can make your styles harder to override or reuse. Stick to classes for styling. Two, overusing important. While it can be a quick fix, relying on it too much creates specificity chaos. Learn how the cascade works and structure your CSS properly. Three, not using a reset or normalize. Different browsers have different default styles. Without a reset, your layout might look broken across platforms. Four, absolute positioning everything. It might seem easier at first, but it's not flexible. Learn to use Flexbox or Grid for better results. Five, ignoring mobile responsiveness. If you're not testing on mobile, you're missing a huge audience. Use media queries early to design responsively. Clean CSS comes down to understanding how it flows and avoiding these common traps will save you hours of debugging.",
        authorId: 1,
        published: true,
      },
      {
        title: "A Beginner’s Guide to Deploying Your First Website",
        content:
          "You’ve built your first website—maybe a portfolio or a simple landing page. Now what? It’s time to share it with the world. Deploying your website might sound scary, but it’s easier than ever with modern tools. First, choose a hosting platform. GitHub Pages, Netlify, and Vercel are free and perfect for beginners. Next, prepare your files. Make sure everything is in order—HTML, CSS, JavaScript—and test locally. Then, push your project to GitHub. For GitHub Pages, enable it in the repo settings and your site is live in minutes. For React or Next.js apps, try Netlify or Vercel. You can connect your GitHub repo, and it auto-deploys every time you push changes. Finally, consider getting a custom domain. It looks more professional and adds credibility, especially for portfolios. Your first deploy is a milestone. Once you go live, the real learning begins. Keep experimenting, keep improving, and keep shipping.",
        authorId: 1,
        published: true,
      },
    ],
  });

  const newComments = await prisma.comment.createMany({
    data: [
      {
        authorName: "Emily Carter",
        content:
          "Totally agree with this. JavaScript opened up so many doors for me when I was starting out!",
        postId: 1,
      },
      {
        authorName: "Raj Mehta",
        content:
          "You could also mention TypeScript as a next step after learning vanilla JS.",
        postId: 1,
      },
      {
        authorName: "Liam Torres",
        content:
          "I started with Python but switched to JavaScript for front-end projects. This post sums up why.",
        postId: 1,
      },
      {
        authorName: "Sophia Kim",
        content:
          "Would love a follow-up post comparing JS with Python or Ruby for beginners.",
        postId: 1,
      },
      {
        authorName: "Chris Nguyen",
        content:
          "Great read! The part about instant feedback in the browser is underrated and super motivating for newbies.",
        postId: 1,
      },

      {
        authorName: "Olivia James",
        content:
          "Guilty of using !important way too much 😅. This was a good wake-up call.",
        postId: 2,
      },
      {
        authorName: "Daniel Okafor",
        content:
          "Can you recommend a good CSS reset or normalize library to get started?",
        postId: 2,
      },
      {
        authorName: "Hannah Liu",
        content:
          "I think Flexbox should be taught before anything else — it really changed how I layout pages.",
        postId: 2,
      },
      {
        authorName: "Ben Foster",
        content:
          "Would love to see real-world examples of these mistakes in action!",
        postId: 2,
      },
      {
        authorName: "Mei Tanaka",
        content:
          "Solid advice! It took me a while to stop positioning everything absolutely. Grid changed the game for me.",
        postId: 2,
      },

      {
        authorName: "Jasmine Patel",
        content:
          "I used Vercel for my first project and it was so simple. This guide is perfect for beginners.",
        postId: 3,
      },
      {
        authorName: "Tomas Müller",
        content:
          "Would be cool to include screenshots of the deploy process or GitHub setup.",
        postId: 3,
      },
      {
        authorName: "Nina Romero",
        content:
          "I didn’t even know Netlify was free. Going to try it now, thanks!",
        postId: 3,
      },
      {
        authorName: "Leo Henderson",
        content:
          "You should definitely write a part two about getting HTTPS and setting up a custom domain.",
        postId: 3,
      },
      {
        authorName: "Sara Ibrahim",
        content:
          "This is exactly what I needed after finishing my first React app. Timing couldn’t be better!",
        postId: 3,
      },
    ],
  });
}

addSampleData();
