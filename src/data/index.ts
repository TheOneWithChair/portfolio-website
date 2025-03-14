import aimock from "../../public/aimock.png";
import bloodCellImg from "../../public/blood-cell.png";
import stockPredictImg from "../../public/stock-predict.png";
import eegImg from "../../public/eeg.png";
import heartHealthImg from "../../public/heart-health.jpeg";
import churnImg from "../../public/churn.jpg";
import digitClassImg from "../../public/digit-class.png";
import propxImg from "../../public/propx.png";
import frescoGuardImg from "../../public/frescoGuard.png";
import gitImg from "../../public/git.png";
import vercelLiteImg from "../../public/vercelLite.png";
import pysqlImg from "../../public/pysql.png";

export const projectList = [
  {
    id: 1,
    title: "IntelliMockAI- AI Mock Interview",
    category: "Full-Stack",
    image: aimock,
    description:
      "Built an AI-powered mock interview platform using Next.js and Gemini API that conducts realistic technical interviews, records responses, and provides detailed feedback. Features user authentication via Clerk, persistent interview history with PostgreSQL, and real-time AI feedback on communication skills and technical accuracy.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg",
    ],
    url: "https://intellimock-ai.vercel.app/",
    github: "https://github.com/TheOneWithChair/ai-interview-mocker",
    features: [
      "AI-driven technical interviews with Gemini API",
      "Real-time response recording and analysis",
      "Personalized feedback on technical and soft skills",
      "Interview history tracking and progress monitoring"
    ],
    detailedDescription:
      "IntelliMockAI is a sophisticated mock interview platform that leverages the Gemini API to conduct realistic technical interviews. Built with Next.js and TypeScript, it features secure authentication through Clerk, elegant UI components from shadcn, and PostgreSQL for storing interview histories. The platform records user responses, analyzes them in real-time, and provides comprehensive feedback on both technical accuracy and communication skills, helping users prepare effectively for real interviews.",
  },
  {
    id: 2,
    title: "Blood Cell Detection & Classification",
    category: "AI",
    image: bloodCellImg,
    description: 
      "Published research paper on arXiv implementing advanced deep learning models for automated blood cell detection and classification. Developed novel CNN architectures achieving high accuracy in identifying different blood cell types from microscopic images.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
    ],
    url: "https://github.com/siddanth-6365/pySql",
    github: "https://github.com/siddanth-6365/pySql",
    features: [],
  },
  {
    id: 3,
    title: "ML/DL Stock Price Prediction",
    category: "AI",
    image: stockPredictImg,
    description:
      "Presented research at Microsoft CMT Conference evaluating various Machine Learning and Deep Learning models for stock price prediction. Implemented and compared different approaches including LSTM networks and traditional ML algorithms.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
    ],
    url: "https://your-conference-paper-url",
    github: "https://github.com/your-repo",
    features: [
      "Comparative analysis of ML/DL models",
      "Presented at Microsoft CMT Conference",
      "Implementation of LSTM networks"
    ],
  },
  {
    id: 4,
    title: "EEG Brainwave Emotion Recognition",
    category: "AI",
    image: eegImg,
    description:
      "Developed deep learning models using LSTM, DNN, and GRU architectures for emotion recognition from EEG brainwave signals. Implemented and compared multiple neural network approaches to classify emotional states from brain activity patterns.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
    ],
    url: "https://github.com/TheOneWithChair/EEG_Brainwaves",
    github: "https://github.com/TheOneWithChair/EEG_Brainwaves",
    features: [
      "Multiple deep learning architectures (LSTM, DNN, GRU)",
      "EEG signal processing and analysis",
      "Emotion state classification from brain activity"
    ],
    detailedDescription:
      "This research project focuses on emotion recognition from EEG brainwave signals using various deep learning approaches. Implemented multiple neural network architectures including Long Short-Term Memory (LSTM), Deep Neural Networks (DNN), and Gated Recurrent Units (GRU) to analyze and classify emotional states from brain activity patterns. The project demonstrates the effectiveness of different deep learning models in understanding and interpreting complex neurological signals.",
  },
  {
    id: 5,
    title: "Heart Disease Risk Prediction",
    category: "AI",
    image: heartHealthImg,
    description:
      "Developed a machine learning model using Logistic Regression to predict heart disease risk based on various health parameters. Built with scikit-learn and integrated into a web application for easy access and risk assessment.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    ],
    url: "https://github.com/TheOneWithChair/HeartHealthDetection",
    github: "https://github.com/TheOneWithChair/HeartHealthDetection",
    features: [
      "Machine Learning model for heart disease prediction",
      "Web interface for risk assessment",
      "Integration of Python ML model with Node.js backend",
      "Data preprocessing and model serialization"
    ],
    detailedDescription:
      "A comprehensive heart health assessment system that combines machine learning with web technologies. The core ML model, built using Logistic Regression, analyzes various health parameters to predict heart disease risk. The system features a user-friendly web interface built with EJS and Node.js, making it accessible for users to get quick health risk assessments.",
  },
  {
    id: 6,
    title: "Customer Churn Prediction",
    category: "AI",
    image: churnImg,
    description:
      "Built a sophisticated Neural Network using TensorFlow 2.13.0 to predict customer churn in banking. Implemented feature engineering, dropout layers for regularization, and early stopping for optimal model performance. Achieved high accuracy through careful preprocessing and model architecture design.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
    ],
    url: "https://github.com/TheOneWithChair/Churn_modelling",
    github: "https://github.com/TheOneWithChair/Churn_modelling",
    features: [
      "Neural Network with multiple hidden layers and dropout",
      "Advanced feature engineering with categorical encoding",
      "Adam optimizer with custom learning rate",
      "Early stopping for optimal training",
      "Comprehensive data preprocessing pipeline"
    ],
    detailedDescription:
      "A deep learning project focused on predicting customer churn in the banking sector using TensorFlow 2.13.0. The model architecture includes multiple dense layers with ReLU activation, dropout layers for regularization, and binary classification output. Features sophisticated data preprocessing including one-hot encoding for categorical variables, feature scaling, and train-test splitting. Implemented with best practices such as early stopping and custom learning rate optimization.",
  },
  {
    id: 7,
    title: "Handwritten Digit Classification",
    category: "AI",
    image: digitClassImg,
    description:
      "Implemented a Convolutional Neural Network (CNN) using TensorFlow and Keras to classify handwritten digits from the MNIST dataset. Achieved high accuracy through proper model architecture and training optimization.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg"
    ],
    url: "https://github.com/TheOneWithChair/Handwritten_DigitClassification",
    github: "https://github.com/TheOneWithChair/Handwritten_DigitClassification",
    features: [
      "CNN implementation for digit recognition",
      "MNIST dataset processing and visualization",
      "Model training and optimization",
      "Interactive Jupyter notebook implementation"
    ],
    detailedDescription:
      "A deep learning project focused on recognizing handwritten digits using Convolutional Neural Networks. The project is implemented in a Jupyter notebook environment, demonstrating the complete workflow from data preprocessing to model evaluation. Uses the MNIST dataset and TensorFlow/Keras for building and training the neural network.",
  },
];

export const skills = [
  {
    url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "NodeJS",
  },
  {
    url: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    name: "ExpressJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    name: "PostgreSQL",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    name: "Django",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    name: "PyTorch",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    name: "TensorFlow",
  },
  {
    url: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    name: "Hugging Face",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    name: "Java",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    name: "C",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    name: "C++",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  }
];

export const socials = [
  {
    id: 1,
    name: "Twitter",
    username: "sricharitacodes",
    url: "https://x.com/sricharitacodes",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Github",
    username: "TheOneWithChair",
    url: "https://github.com/TheOneWithChair",
    image:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
  {
    id: 3,
    name: "LinkedIn",
    username: "charitasri-g",
    url: "https://www.linkedin.com/in/charitasri-g/",
    image:
      "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png",
  },
];

export const WorkExpcontents = [
  {
    title: "Backend Developer - (Maxint, Inc)",
    description: [
      "Developed and integrated APIs to fetch financial data, optimizing query performance by creating materialized views using PostgreSQL.",
      "Collaborated with the team to enhance backend systems using Python and Node.js, focusing on high-performance and scalable solutions."
    ],
    date: "Sep 2024 - Present",
  },
  {
    title: "Full Stack Developer - (Nomorede)",
    description: [
      "Developed interactive dashboards using Next.js with latest libraries like Shadcn, React-hook-form, Framer-motion, and TailwindCSS.",
      "Integrated third-party services such as Google Auth and Sentry for authentication and error tracking, ensuring seamless user experience and system monitoring.",
      "Collaborated with backend teams for API integration and deployed applications on Google Cloud Platform (GCP) for production readiness and performance optimization.",
    ],
    date: "July 2024 - Sep 2024",
  },
  {
    title: "Teaching Assistant - (100xDevs (Full Stack Bootcamp))",
    description: [
      "Supported students in their journey from beginners to full-stack developers, guiding them through a curriculum covering MERN stack development, DevOps, and system design.",
      "Actively engaged with students in the Discord server, providing hands-on support, personalized feedback, and guidance on projects and coding challenges.",
    ],
    date: "Dec 2023 - May 2024",
  },
  {
    title: "Web Developer Intern - (ONBO)",
    description: [
      "Refactored and migrated the codebase from a traditional component-based structure to a modular MVVM architecture, enhancing maintainability and collaboration for future development.",
      "Demonstrated strong understanding of modern web technologies like Svelte, SvelteKit, TypeScript, and MVVM architecture.",
    ],
    date: "May 2024 - Sep 2024",
  },
];

export const commandsAnswers = {
  whoami: "Charitasri Guntu",
  about:
    "AI and Full-Stack Developer passionate about building intelligent systems that solve real-world problems.",
  education: "B.Tech. - CSE at Keshav Memorial Engineering College (Osmania University Affiliated) (2022-2026)",
  email: "charitasrig@gmail.com",
  socials:
    "LinkedIn: https://www.linkedin.com/in/charitasri-g/\nGitHub: https://github.com/TheOneWithChair",
  skills:
    "Front-end: React.js, Next.js, TailwindCSS\nBack-end: Node.js, Express.js, FastAPI, Django, Spring Boot\nDatabases: MySQL, PostgreSQL, MongoDB\nAI/ML: TensorFlow, PyTorch, OpenCV, Hugging Face, LLMs\nDeployments: Firebase, Vercel, Hugging Face",
  experience:
    "AI & Full-Stack Developer Intern at Infosys (Oct 2024 - Dec 2024) \n Researcher under Dr. Shilpa Choudhary (May 2024 - Sep 2024) \n Published a paper on arXiv: Transforming Blood Cell Detection and Classification with Advanced Deep Learning Models",
  help: "Available commands: whoami, about, education, email, socials, skills, experience",
};


export const resumeLink =
  "";
