export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
]

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am a team player who can seamlessly collaborate with colleagues across time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stacks",
    description: "I constantly improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for solving problems.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a personal file reader with embed AI chatbot",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
]

export const projects = [
  {
    id: 1,
    title: "Chasing Studio",
    des: "A freelance work for a photograph studio",
    img: "/chasingStudio.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/sql.svg"],
    link: "https://chasing-studio.vercel.app/",
  },
  {
    id: 2,
    title: "DevOverflow",
    des: "A stack-overflow clone with AI answering",
    img: "/devOverflow.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongodb.svg"],
    link: "https://stack-overflow-next13-nu.vercel.app/",
  },
  {
    id: 3,
    title: "Aora - App Application",
    des: "A mobile app for uploading videos and images, combining them through AI",
    img: "/aora.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/davelin18yufan/Aora_ReactNative",
  },
  {
    id: 4,
    title: "Horizon",
    des: "A real-world integration of bank account which can transfer payment",
    img: "/horizon.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/chartjs.svg"],
    link: "https://banking-sim.vercel.app/sign-in",
  },
]

export const testimonials = [
  {
    quote:
      "Working with Dave was an absolute pleasure. We entrusted him with the entire process, from design to development, and he delivered a product that far exceeded our expectations. He is full of ideas and highly attentive to our concerns. I highly recommend him as the producer for your next web project.",
    name: "Ruei",
    title: "Co-founder of Chasing Studio",
    avatar: "/man.svg"
  },
  {
    quote:
      "Dave is one of the most dedicated individuals I've ever worked with in terms of meeting client needs. He is always patient in explaining and providing maximum assistance to clients' issues and requests, even if they fall outside his scope of work. I am confident that he would be an excellent asset to any team, even in software industries.",
    name: "Amber Huang",
    title: "Senior agent of Mega bank",
    avatar: "woman.svg"
  },
]

export const companies = [
  {
    id: 1,
    name: "Next",
    img: "/next.svg",
    nameImg: "/nextjs-name.svg",
  },
  {
    id: 2,
    name: "Chasing Studio",
    img: "/CS.png",
    nameImg: "/CS-name.png",
  },
  {
    id: 3,
    name: "Mega International Commercial Bank",
    // img: "/host.svg",
    nameImg: "/mega.svg",
  },
]

export const workExperience = [
  {
    id: 1,
    title: "Freelancer",
    desc: "Establish Website based on client request",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    desc: "Designed and developed website for mobile game.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Senior Teller",
    desc: "Responsible for digital finance service including sales and problem solving in bank",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/davelin18yufan",
  },
  {
    id: 2,
    img: "/stack-overflow.svg",
    href: "https://stackoverflow.com/users/23352588/dave-lin",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/dave-lin-1a05a5168/",
  },
]
