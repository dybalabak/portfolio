/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import Button from "./components/button/Button";

const illustration = {
  animated: true // set to false to use static SVG
};
//greeting.js next to contact me<Button
//  text="See my resume"
//  newTab={true}
//  href={greeting.resumeLink}
///>
const greeting = {
  username: "Dybalabak",
  title: "안녕하세요, 박성현입니다!",
  subTitle: emoji(
    "개발을 사랑하며,  빈틈없는 풀스택 개발자를 꿈꾸고 있습니다.\n" +
    "Angular / Javascript / Typescript / Node.js / AWS를 통한 웹구축 실무경험 그리고, Tensorflow / Keras / AWS를 통한 머신러닝 프로젝트 경험과 실무를 통해 다양한 협업툴 Git / Sourcetree / Notion / Slack등을 활용한 경험이 있습니다. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dybalabak",
  instagram: "https://instagram.com/heony___/",
  //linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "dybalabak@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://algoisanswer.tistory.com/",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  //subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  subTitle: "풀스택 개발자를 향해 걸어온 스택모음.",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web and mobile applications"
      //"⚡Interactive한 UI / UX 개발"
    ),
    emoji(//"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
      "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs(tried)",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift(tried)",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mysql-database(tried)",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase(tried)",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pusan National University",
      logo: require("./assets/images/pnuLogo.png"),
      subHeader: "Computer Science / Engineering",
      duration: "March 2016 - February 2022(expected)",
      desc: "Grade",
      descBullets: [
        "GPA : 3.2 / 4.5",
        "Credits : 136"
      ]
    },
    //{
    //  schoolName: "Stanford University",
     // logo: require("./assets/images/stanfordLogo.png"),
     // subHeader: "Bachelor of Science in Computer Science",
     // duration: "September 2013 - April 2017",
     // desc:
      //  "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
   // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Listening Oasis song writing code", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "261house",
      companylogo: require("./assets/images/faavLogo.png"),
      date: "December 2019 – August 2020",
      desc:
        "Angular 기반 서비스 메인페이지 제작 및 판매자 마스터페이지 제작, Node.js를 이용한 API 작성, AWS를 이용한 효율적이고 안정적인 배포 ",
      //descBullets: [
      //  "",
      //  ""
      //]
    },
    //{
    //  role: "Front-End Developer",
    //  company: "Quora",
    //  companylogo: require("./assets/images/quoraLogo.png"),
    //  date: "May 2017 – May 2018",
    //  desc:
     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //},
    //{
    //  role: "Software Engineer Intern",
    //  company: "Airbnb",
    //  companylogo: require("./assets/images/airbnbLogo.png"),
    //  date: "Jan 2015 – Sep 2015",
    //  desc:
     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //}
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ypolaris.jpeg"),
      projectName: "Ypolaris 머신러닝 산학협력",
      projectDesc: "Python 기반 영상 행동 분류 딥러닝 모델 구축, Keras 라이브러리 CNN과 LSTM 모델 사용 Input: 13개의 행동 영상 데이터셋 Output: 영상을 분류모델에 입력하면 Action ID를 출력 Testset accuracy 88% 이상 달성",
      footerLink: [
        {
          name: "View Github",
          url: "https://github.com/dybalabak/4angle_cctv_recognition"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/TESC.png"),
      projectName: "TESC 용접 자동화 기기 심트래킹 기능 구현",
      projectDesc: "Sysmac Studio를 통한 PLC 컨트롤, KEYENCE 데이터를 Ethernet/ip 통신을 통해 받아오고, 32bit 신호를 REAL DATA type으로 변환 후 심트래킹(용접기계가 정해진 용접선을 따라 구동하며, y축방향으로 오차가 생기는데, 오차를 KEYENCE센서를 통해 확인후 SERVO MOTOR를 구동해 보정 ) 구현을 위한 로직 작성 후 심트래킹 기능 구현",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/dybalabak/TESC"
        }
      ]
    },
    {
      image: require("./assets/images/cafe24.png"),
      projectName: "카페24 호스팅 웹 편집",
      projectDesc: "e-커머스 기본 기능들 카페24 호스팅을 이용해 빠른시간내에 해결, 추가적인 서비스를 위한 기능( 구독, 대여 등) Angular 기반 마스터 페이지 제작을 통해 서비스 제작 ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://faav.co.kr/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    //"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  "",

  achievementsCards: [
    {
      title: "DACON 운동 동작 분류 AI 경진대회 상위 4%(팀명 : 최익현식AI)",
      subtitle:
        "3축 가속도계(accelerometer)와 3축 자이로스코프(gyroscope)를 활용해 측정된 센서 데이터에 머신러닝 알고리즘을 적용해 운동 동작 인식 알고리즘 개발",
      image: require("./assets/images/dacon.webp"),
      footerLink: [
        {
          name: "View Link",
          url:
            "https://www.dacon.io/competitions/official/235689/overview/"
        },
        {
          name: "View Github",
          url: "https://github.com/dybalabak/dacon"
        },
      ]
    },
    {
      title: "261 house 기술블로그",
      subtitle:
        "작업도중 발생한 이슈 및 업무관련 학습내용 공유",
      image: require("./assets/images/faav.jpeg"),
      footerLink: [
        {
          name: "View Blog",
          url:
            "https://house261.github.io/angular/dybalabak-LifeCylcleHook/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+82-1075500537",
  email_address: "dybalabak@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
