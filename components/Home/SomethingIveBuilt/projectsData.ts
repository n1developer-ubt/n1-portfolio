export const projectsData = [
   {
      title: "LRCar Service",
      description:
         "LR Car Service is just like Uber or Cream but for private customers. The key users are drivers, dispatchers, and admin. The dispatcher has to dispatch the passengers and drivers have to pick them up and drop them at a specific location. The web portal was developed using React.JS, ASP.NET Core, and NodeJS. The app is also available on the Google Play Store.",
      subDescrption: "Riding Service",
      keywords: [
         "React.JS",
         "ASP.NET Core",
         "NodeJS",
         "Google Play Store",
         "drivers",
         "dispatchers",
         "admin",
      ],
      techStack: [
         "React.JS",
         "ASP.NET Core",
         "NodeJS",
         "React Native",
         "Serverless",
         "GCP",
      ],
      link: "https://lrcarserv.com/",
      img: "lrcarserv.png",
   },

   {
      title: "Truck Safety Team ERP",
      description:
         "The TRUCK SAFETY TEAM Dashboard keeps trucking companies safe and efficient. This web platform brings driver, vehicle, trailer, and job posting management together. Track drivers, assign them to vehicles, and monitor performance. Plus, view vehicle details, schedules, and inspections. It simplifies tasks, improves safety, optimizes resources, and helps make data-driven decisions.",
      subDescrption: "Enterprise Resource Planning",
      keywords: [
         "web platform",
         "monitor performance",
         "optimizes",
         "simplifies tasks",
      ],
      techStack: ["React.JS", "ASP.NET Core", "MySQL", "Serverless", "GCP"],
      img: "trucksafety.png",
   },
   {
      title: "Evergo Packaging",
      description:
         "Evergo Packaging provides custom eco-friendly packaging solutions through a user-friendly platform. Users can request quotes and place orders for various packaging types, while admins manage users, orders, and quotes. The project includes a comprehensive dashboard developed to ensure a seamless user experience and efficient management. ",
      subDescrption: "Landing Pages | User & Admin Dashboard",
      keywords: ["quotes", "orders", "admin", "user experience"],
      techStack: ["React.JS", "Firestore", "Serverless", "GCP"],
      img: "evergo.png",
   },
   {
      title: "STUZANNE ERP",
      description:
         "STUZANNE is an enterprise-level job and customer management system designed to streamline and automate various operational workflows within an organization. It offers functionalities to handle customer management, job tracking, allocation of tasks, and user administration. The platform is built to enhance productivity, improve tracking accuracy, and provide a centralized system for managing multiple aspects of business operations.",
      subDescrption: "Enterprise Resource Planning",
      keywords: [
         "job management",
         "customer management",
         "task allocation",
         "user administration",
         "productivity",
         "tracking accuracy",
         "centralized system",
      ],
      techStack: ["React.JS", "ASP.NET Core", "ElectronJS", "MySQL"],
      img: "stuzanne.png",
   },
] as Project[]

export type Project = {
   title: string
   description: string
   subDescrption: string
   keywords: string[]
   techStack: string[]
   link: string
   img: string
}
