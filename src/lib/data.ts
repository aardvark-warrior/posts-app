export type Post = {
  id: string;
  content: string;
  image?: string;
};

// These are quotes by Edsger Dijkstra
// I got them from <https://softwarequotes.com/author/edsger-dijkstra>
// The IDs are generated with <https://www.uuidgenerator.net/>
export const posts: Post[] = [
  {
    id: "11583298-a3f1-4d91-bd5f-2eeb77910081",
    content: "Do only what only you can do.",
  },
  {
    id: "daae4345-c8b8-4423-b2e3-cee407b9ce67",
    content:
      "Elegance is not a dispensable luxury but a factor that decides between success and failure.",
  },
  {
    id: "d2c71716-5828-40af-baae-c6ee8212d498",
    content: "Simplicity is prerequisite for reliability.",
  },
];
