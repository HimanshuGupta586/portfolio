export interface ProjectItem {
  title: string;
  description: string;
  img: string;
  tech: string[];
  github: string;
  link?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "iNoteBook",
    description: "a full-stack web application built with the MERN stack that allows users to manage their personal notes.",
    img: "/inotebook.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB" ,"Bootstrap"],
    github: "https://github.com/HimanshuGupta586/i-notebook",
    link: ""
  },
  {
    title: "Realtime Chat App",
    description: "A real-time chat application with websocket implementation using Node.js and Express.",
    img: "/realtime-chat-app.png",
    tech: ["React.js", "Node.js", "Express", "WebSocket"],
    github: "https://github.com/HimanshuGupta586/realtime-chat-app",
    link: ""
  },
  {
    title: "ToDos App",
    description: "A simple ToDos application to manage daily tasks built using React.js and Bootstrap.",
    img: "/todos.png",
    tech: ["React.js", "Bootstrap"],
    github: "https://github.com/HimanshuGupta586/todos-app",
    link: ""
  }
];
