// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  all: publicProcedure.query(() => {
    return [
      {
        id: "1",
        title: "LaptopNomadCo",
        text: "E-commerce website with Stripe payment and checkout",
        img: "/img/laptopNomadMain.jpg",
        github: ["https://github.com/JSL-Tech/laptopnomad"],
        date: "3-2021,5-2021",
      },
      {
        id: "2",
        title: "Escapify",
        text: "Travel website with live community page to share travel plans / posts",
        img: "/img/escapifyMain.png",
        github: ["https://github.com/JosephJL/escapify"],
        date: "10-2022,11-2022",
      },
      {
        id: "3",
        title: "Form Management System (FMS)",
        text: "Form management system for approval process with multiple stakeholders",
        img: "/img/fmsMain.png",
        github: [
          "https://github.com/JosephJL/fms-frontend",
          "https://github.com/JosephJL/fms-backend",
        ],
        date: "2-2023,4-2023",
      },
      {
        id: "4",
        title: "Gobook",
        text: "Class booking website with real-time recommendations using Content-based-filtering",
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
