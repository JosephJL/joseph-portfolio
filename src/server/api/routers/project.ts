// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  all: publicProcedure.query(() => {
    return [
      {
        id: "1",
        title: "LaptopNomadCo",
        text: "E-commerce website with Stripe payment and checkout",
        backtext:
          "First project exploring web development, selling laptop sleeves!",
        img: "/img/laptopNomadMain.jpg",
        github: ["https://github.com/JSL-Tech/laptopnomad"],
        date: "3-2021,5-2021",
        techs: ["Vue", "Firebase", "Stripe"],
        tags: ["Personal", "Noob"],
        article: false,
        website: "",
      },
      {
        id: "2",
        title: "Escapify",
        text: "Travel website with live community page to share travel plans / posts",
        backtext:
          "Escapify aims to help Travellers connect with each other. Travellers can add destinations to their trip plans, and then share these plans in our community page where they can connect with fellow escapees or seek thoughts on where else they should go. Travellers can also arrange their trip schedule in their trips page using drag and drop",
        img: "/img/escapifyMain.png",
        github: ["https://github.com/JosephJL/escapify"],
        date: "10-2022,11-2022",
        techs: ["Vue", "Firebase", "TravelAPI"],
        tags: ["SMU", "WAD2 Module"],
        article: false,
        website: "https://frontend-eta-coral.vercel.app/",
      },
      {
        id: "3",
        title: "Form Management System (FMS)",
        text: "Form management system for approval process with multiple stakeholders",
        backtext:
          "This project aims to streamline paper based processes relating to forms. System admins can create custom forms or reuse existing templates for vendors to fill. These form are then approved or rejected through the system by either the admin or approver with comments attached. Additional features include manual/automated email reminder notifications, and additional insights on form status, vendor punctuality displayed on various dashboards using ChartJS.",
        img: "/img/fmsMain.png",
        github: [
          "https://github.com/JosephJL/fms-frontend",
          "https://github.com/JosephJL/fms-backend",
        ],
        date: "2-2023,4-2023",
        techs: ["Springboot", "MongoDB", "Docker"],
        tags: ["SMU", "ESD Module"],
        article: false,
        website: "",
      },
      {
        id: "4",
        title: "Gobook",
        text: "Class booking website with real-time recommendations using Content-based-filtering",
        backtext:
          "GoBook offers a digitalised solution tackling the sustainability issue of paper-based processes from class booking. The platform adopts a Microservice Architecture, using complex services to orchestrate the booking of classes as well as event streaming platform Kafka to enable real time recommendations of classes. Load balancing was done with Kong API Gateway to reduce latency and docker was used to deploy the project locally.",
        img: "/img/goBookMain.png",
        github: [
          "https://github.com/TeoSean00/GoBook-Frontend",
          "https://github.com/JosephJL/Gobook-Backend",
        ],
        date: "3-2023,4-2023",
        techs: ["Springboot", "Flask", "Docker", "Stripe"],
        tags: ["SMU", "OOP Module"],
        article: false,
        website: "",
      },
    ];
  }),
});
