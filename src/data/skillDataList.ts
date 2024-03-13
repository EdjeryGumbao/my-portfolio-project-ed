import testingIcon from "../assets/SkillsIcon/ab-testing.svg";
import apiIcon from "../assets/SkillsIcon/api.svg";
import integrationTestIcon from "../assets/SkillsIcon/app-connectivity.svg";
import versionConIcon from "../assets/SkillsIcon/code-branch.svg";
import programmingIcon from "../assets/SkillsIcon/code.svg";
import cSharpIcon from "../assets/SkillsIcon/csharp-original.svg";
import cssIcon from "../assets/SkillsIcon/css3-original-wordmark.svg";
import unitTestIcon from "../assets/SkillsIcon/deployment-unit.svg";
import djangoIcon from "../assets/SkillsIcon/djangoproject.svg";
import dockerIcon from "../assets/SkillsIcon/docker.svg";
import testIcon from "../assets/SkillsIcon/exam-mode.svg";
import fastApiIcon from "../assets/SkillsIcon/fastapi-1.svg";
import godotIcon from "../assets/SkillsIcon/file-type-godot.svg";
import reactIcon from "../assets/SkillsIcon/file-type-reactjs.svg";
import visualStudioIcon from "../assets/SkillsIcon/file-type-vscode.svg";
import gameDevIcon from "../assets/SkillsIcon/game-controller-outline.svg";
import githubIcon from "../assets/SkillsIcon/github.svg";
import htmlIcon from "../assets/SkillsIcon/html-5.svg";
import jGraspIcon from "../assets/SkillsIcon/icons8-jgrasp.svg";
import javaIcon from "../assets/SkillsIcon/java-original-wordmark.svg";
import javascriptIcon from "../assets/SkillsIcon/javascript-js.svg";
import laravelIcon from "../assets/SkillsIcon/laravel.svg";
import devOpsIcon from "../assets/SkillsIcon/man-technologist.svg";
import azureIcon from "../assets/SkillsIcon/microsoft-azure.svg";
import responsiveIcon from "../assets/SkillsIcon/mobile-browser.svg";
import authIcon from "../assets/SkillsIcon/multi-factor-authentication-mfa.svg";
import nextIcon from "../assets/SkillsIcon/nextjs.svg";
import nodeIcon from "../assets/SkillsIcon/nodejs.svg";
import ideIcon from "../assets/SkillsIcon/notepad.svg";
import npmIcon from "../assets/SkillsIcon/npm.svg";
import packageIcon from "../assets/SkillsIcon/package.svg";
import phpIcon from "../assets/SkillsIcon/php.svg";
import pythonIcon from "../assets/SkillsIcon/python.svg";
import backEndIcon from "../assets/SkillsIcon/server.svg";
import sqlIcon from "../assets/SkillsIcon/sql-database-generic.svg";
import sublimeIcon from "../assets/SkillsIcon/sublime-text.svg";
import commandLineIcon from "../assets/SkillsIcon/terminal.svg";
import toolsIcon from "../assets/SkillsIcon/tools.png";
import typecriptIcon from "../assets/SkillsIcon/typescript-icon.svg";
import uvicornIcon from "../assets/SkillsIcon/uvicorn.png";
import virtualEnvIcon from "../assets/SkillsIcon/virtual-guest.svg";
import frontEndIcon from "../assets/SkillsIcon/website-1.svg";
import fullStackIcon from "../assets/SkillsIcon/website.svg";
import webDevIcon from "../assets/SkillsIcon/window-restore.svg";

export interface ISkillData {
  header: string;
  content: {
    header: string;
    icon: string;
    content: {
      name: string;
      icon: string;
      content: {
        name: string;
        icon: string;
      }[];
    }[];
  }[];
}

const skillDataList: ISkillData[] = [
  {
    header: "My Expertise",
    content: [
      {
        header: "Programming Languages",
        icon: programmingIcon,
        content: [
          {
            name: "Javascript",
            icon: javascriptIcon,
            content: [],
          },
          {
            name: "TypeScript",
            icon: typecriptIcon,
            content: [],
          },
          {
            name: "Python",
            icon: pythonIcon,
            content: [],
          },
          {
            name: "PHP",
            icon: phpIcon,
            content: [],
          },
          {
            name: "Java",
            icon: javaIcon,
            content: [],
          },
          {
            name: "C#",
            icon: cSharpIcon,
            content: [],
          },
        ],
      },
      {
        header: "Game Development",
        icon: gameDevIcon,
        content: [{ name: "Godot", icon: godotIcon, content: [] }],
      },
      {
        header: "Web Development",
        icon: webDevIcon,
        content: [
          {
            name: "HTML",
            icon: htmlIcon,
            content: [],
          },
          {
            name: "CSS",
            icon: cssIcon,
            content: [],
          },
          {
            name: "Laravel",
            icon: laravelIcon,
            content: [],
          },
          {
            name: "React.js",
            icon: reactIcon,
            content: [],
          },
          {
            name: "Next.js",
            icon: nextIcon,
            content: [],
          },
          {
            name: "Responsive Web Design",
            icon: responsiveIcon,
            content: [],
          },
        ],
      },
      {
        header: "Backend Development",
        icon: backEndIcon,
        content: [
          {
            name: "Django",
            icon: djangoIcon,
            content: [],
          },
          {
            name: "FastAPI",
            icon: fastApiIcon,
            content: [],
          },
          {
            name: "Uvicorn",
            icon: uvicornIcon,
            content: [],
          },
          {
            name: "Node.js",
            icon: nodeIcon,
            content: [],
          },

          {
            name: "SQL Database",
            icon: sqlIcon,
            content: [],
          },
          {
            name: "API development and integration",
            icon: apiIcon,
            content: [],
          },
          {
            name: "Authentication and authorization mechanisms",
            icon: authIcon,
            content: [],
          },
        ],
      },
      {
        header: "Version Control",
        icon: versionConIcon,
        content: [{ name: "Git + GitHub", icon: githubIcon, content: [] }],
      },
      {
        header: "DevOps and Deployment",
        icon: devOpsIcon,
        content: [
          { name: "Docker + Dockerhub", icon: dockerIcon, content: [] },
          { name: "Azure Cloud Platform", icon: azureIcon, content: [] },
        ],
      },
      {
        header: "Testing",
        icon: testIcon,
        content: [
          { name: "Unit testing", icon: unitTestIcon, content: [] },
          {
            name: "Integration testing",
            icon: integrationTestIcon,
            content: [],
          },
        ],
      },
      {
        header: "Other Tools",
        icon: toolsIcon,
        content: [
          {
            name: "IDE + Text editors",
            icon: ideIcon,
            content: [
              { name: "Visual Studio", icon: visualStudioIcon },
              { name: "Sublime Text", icon: sublimeIcon },
              { name: "JGrasp", icon: jGraspIcon },
            ],
          },
          {
            name: "Package Manager",
            icon: packageIcon,
            content: [
              { name: "npm", icon: npmIcon },
              { name: "pip", icon: pythonIcon },
            ],
          },
          {
            name: "Virtual environment",
            icon: virtualEnvIcon,
            content: [
              { name: "Python env", icon: pythonIcon },
              { name: "Pipenv", icon: pythonIcon },
            ],
          },
          {
            name: "Command line interface",
            icon: commandLineIcon,
            content: [],
          },
        ],
      },
    ],
  },
  {
    header: "What I do",
    content: [
      {
        header: "Full Stack Development",
        icon: fullStackIcon,
        content: [
          {
            name: "Building complete web-based applications with integrated systems.",
            icon: "",
            content: [],
          },
          {
            name: "Manage already existing web-based applications.",
            icon: "",
            content: [],
          },
        ],
      },
      {
        header: "Front-end",
        icon: frontEndIcon,
        content: [
          {
            name: "Creating engaging landing pages and promotional websites.",
            icon: "",
            content: [],
          },
        ],
      },
      {
        header: "Back-end",
        icon: backEndIcon,
        content: [
          { name: "Develop APIs", icon: "", content: [] },
          { name: "Manage databases", icon: "", content: [] },
        ],
      },
      {
        header: "Testing & Debugging",
        icon: testingIcon,
        content: [],
      },
    ],
  },
];

export default skillDataList;
