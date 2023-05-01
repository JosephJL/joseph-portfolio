import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    return [
      {
        id: "1",
        title: "LaptopNomadCo",
        text: "First experience with web design, nuxt server side rendering with stripe payment integration",
        img: "/img/laptopNomadMain.jpg",
        github: ["https://github.com/JSL-Tech/laptopnomad"],
        date: "3-2021,5-2021",
      },
      {
        id: "2",
        title: "Escapify",
        text: " 'Community' Section uses Firestore Snapshot listener for realtime conversations",
        img: "/img/escapifyMain.png",
        github: ["https://github.com/JosephJL/escapify"],
        date: "10-2022,11-2022",
      },
      {
        id: "3",
        title: "Form Management System (FMS)",
        text: " Containerization with Docker and Docker compose ",
        img: "/img/fmsMain.png",
        github: [
          "https://github.com/JosephJL/fms-frontend",
          "https://github.com/JosephJL/fms-backend",
        ],
        date: "2-2023,4-2023",
      },
      {
        id: "3",
        title: "Gobook",
        text: " Explored use case of Kafka as a realtime database for content-based-recommendation ",
        img: "/img/goBookMain.png",
        github: [
          "https://github.com/TeoSean00/GoBook-Frontend",
          "https://github.com/JosephJL/Gobook-Backend",
        ],
        date: "3-2023,4-2023",
      },
    ];
  }),
});
