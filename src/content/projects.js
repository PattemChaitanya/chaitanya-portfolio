import redis from "../assets/projects/redis-cache.png";
import ssr from "../assets/projects/react-ssr.png";
import api from "../assets/projects/api-gateway.png";

export const projectsContent = [
  {
    id: 1,
    name: "My API Gateway",
    description:
      "Developed an API Gateway using Node.js, Express.js. It authenticated requests with JWT tokens and routed them to microservices, featuring middleware for custom headers, error handling, and logging. This project showcased my skills in API management, service orchestration, and enhancing security for scalable backend systems.",
    img: api,
    tech: ["Express.js", "redis", "Mongo DB", "Node.js"],
    source: "https://github.com/PattemChaitanya/api-gateway",
  },
  {
    id: 2,
    name: "Redis Caching techinque",
    description:
      "Implemented Redis caching in a Node.js application to improve performance and reduce database load. The project featured advanced caching strategies, including multi-layered caching, cache invalidation, demonstrating my ability to enhance application scalability and efficiency through effective in-memory data storage solutions.",
    img: redis,
    tech: ["Express.js", "MongoDB", "Redis"],
    source: "https://github.com/PattemChaitanya/redis-caching",
  },
  {
    id: 3,
    name: "React SSR Application",
    description:
      "Developed a React SSR application using Redux Toolkit and React Router, with an Express server for initial data fetching and server-side HTML rendering. This improved performance and SEO, demonstrating my skills in building high-performance, modern web applications with optimized rendering and effective state management.",
    img: ssr,
    tech: ["React.js", "Web pack"],
    source: "https://github.com/PattemChaitanya/react-redux-ssr",
  },
];
