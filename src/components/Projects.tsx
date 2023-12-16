import Project from "./Project";

export default function Projects() {
  // const { data: projects, isLoading, isError } = api.project.all.useQuery();

  const projects = [
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
      demo: "",
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
      demo: "https://www.youtube.com/watch?v=iSoCRHekWtc",
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
      demo: "https://www.youtube.com/watch?v=mXnO4Y1JEVU",
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
      demo: "https://www.youtube.com/watch?v=S4vLItXFAvE",
    },
    {
      id: "5",
      title: "FootMaps",
      text: "Leveraging sensor data and crowdsourcing to improve navigation on foot and reduce congestion",
      backtext:
        "FootMaps is a mobile application that interacts with beacon sensors at congested areas to gather accurate data on the crowd levels. This crowdsourced data is supplemented with movement sensor data from the user's mobile phone to provide a more accurate representation of the crowd levels. This data is then used to provide real-time recommendations to users on the best routes to take to their destination.",
      img: "/img/Footmaps.png",
      github: [],
      date: "9-2023,10-2023",
      techs: ["MongoDB Atlas", "Android", "AltBeacon Package"],
      tags: ["QUT", "IAB330 Module"],
      article: false,
      website: "",
      demo: "https://youtu.be/DdLznUj2GbY",
    },
  ];

  // if (isLoading)
  // return (
  //   <div role="status">
  //     <svg
  //       aria-hidden="true"
  //       className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
  //       viewBox="0 0 100 101"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
  //         fill="currentColor"
  //       />
  //       <path
  //         d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
  //         fill="currentFill"
  //       />
  //     </svg>
  //     <span className="sr-only">Loading...</span>
  //   </div>
  // );
  // if (isError) return <div>Error fetching projects</div>;
  return (
    <>
      <div className="align-center flex flex-col justify-center">
        {projects.length
          ? projects.map((project, index) => {
              console.log("index is", index);
              return <Project key={index} project={project} />;
            })
          : "Projects coming soon!"}
      </div>
    </>
  );
}
