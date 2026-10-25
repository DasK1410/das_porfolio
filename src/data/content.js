// All portfolio content lives here so it is easy to update.
// Privacy: client project names must never appear in this file or anywhere else on the site.

export const profile = {
  name: 'Arul Dhas A',
  initials: 'AD',
  title: 'Support Engineer I | Application Support & DevOps Fundamentals',
  company: 'Icanio Technologies',
  location: 'Tirunelveli, Tamil Nadu, India',
  email: 'dhas12346@gmail.com',
  phone: '8925356370',
  siteUrl: 'https://das-portfolio.vercel.app/',
  // Resume PDF served from /public/resume/. Keep the filename and case identical to the file on disk.
  resumePath: '/resume/Arul_Dhas_A_Resume.pdf',
  // Add the real URLs here when ready. Buttons stay hidden while these are empty.
  githubUrl: '',
  linkedinUrl: 'https://www.linkedin.com/in/arul-das-70834428b',
  // Profile photo served from /public/images/. Set to '' to fall back to the initials avatar.
  photo: '/images/profile.webp',
  // Short focus areas rotated in the hero.
  focusAreas: ['Application Support', 'Infrastructure Monitoring', 'DevOps Fundamentals', 'Cloud Engineering'],
  intro:
    "I'm an early-career technology professional at Icanio Technologies, working on application and infrastructure support across client environments. My experience includes ticket handling, issue analysis, root cause analysis, infrastructure monitoring, and application troubleshooting. I'm continuously developing my practical skills in Linux, Git, Docker, Kubernetes, Azure, AWS, and cloud infrastructure.",
}

export const about = {
  paragraphs: [
    'I work in application and infrastructure support, where day-to-day work means raising and tracking tickets, analysing reported issues, documenting Root Cause Analysis (RCA) and keeping environments healthy through monitoring and troubleshooting.',
    'Alongside that work, I am expanding my DevOps and cloud engineering knowledge through practical tasks, projects and structured training: Git workflows, shell scripting, containers, Kubernetes basics and cloud fundamentals on Azure and AWS.',
  ],
  strengths: [
    { label: 'Teamwork', text: 'Working with client teams and colleagues to resolve issues.' },
    { label: 'Problem-solving', text: 'Breaking incidents down methodically to find the cause.' },
    { label: 'Critical thinking', text: 'Questioning assumptions and verifying changes before closing work.' },
    { label: 'Continuous learning', text: 'Building new skills through hands-on practice and courses.' },
  ],
  languages: ['English', 'Tamil'],
}

// level: 'professional' = used in current role, 'working' = hands-on practice / working knowledge,
// 'learning' = actively learning.
export const skillLevels = {
  professional: { label: 'Professional experience', hint: 'Used in my current role' },
  working: { label: 'Working knowledge', hint: 'Hands-on practice and projects' },
  learning: { label: 'Currently learning', hint: 'Actively building skills' },
}

export const skillGroups = [
  {
    title: 'Application Support',
    icon: 'LifeBuoy',
    items: [
      { name: 'Ticket handling and issue analysis', level: 'professional' },
      { name: 'Root Cause Analysis (RCA)', level: 'professional' },
      { name: 'Infrastructure monitoring', level: 'professional' },
      { name: 'Application troubleshooting', level: 'professional' },
      { name: 'OpenTelemetry and observability (traces, metrics, logs)', level: 'working' },
      { name: 'Application deployment concepts', level: 'working' },
      { name: 'Software Development Life Cycle (SDLC)', level: 'working' },
    ],
  },
  {
    title: 'Linux & Automation',
    icon: 'Terminal',
    items: [
      { name: 'Linux commands and fundamentals', level: 'professional' },
      { name: 'Bash scripting', level: 'professional' },
      { name: 'Conditions, loops, functions, arguments, case statements, strict mode', level: 'working' },
    ],
  },
  {
    title: 'Version Control',
    icon: 'GitBranch',
    items: [
      { name: 'Git and GitHub', level: 'professional' },
      { name: 'Branching, merging, rebasing and Git workflows', level: 'professional' },
    ],
  },
  {
    title: 'Containers & Orchestration',
    icon: 'Boxes',
    items: [
      { name: 'Kubernetes ConfigMaps', level: 'professional' },
      { name: 'Docker images, containers, Dockerfiles, volumes, networking, Compose', level: 'working' },
      { name: 'Kubernetes Pods, Deployments and Services', level: 'learning' },
      { name: 'Helm fundamentals', level: 'learning' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: 'Cloud',
    items: [
      { name: 'Azure Container Registry (ACR)', level: 'professional' },
      {
        name: 'Azure Resource Groups, Virtual Networks, subnets, NSGs, Virtual Machines, Bastion',
        level: 'working',
      },
      { name: 'AWS EC2, S3, VPC, IAM and RDS fundamentals', level: 'working' },
      { name: 'IP addressing and CIDR notation', level: 'working' },
      { name: 'Cloud budget alerts', level: 'working' },
      { name: 'Azure Logic Apps fundamentals', level: 'learning' },
    ],
  },
  {
    title: 'Programming & Development',
    icon: 'Code2',
    items: [
      { name: 'HTML, CSS, JavaScript and React', level: 'working' },
      { name: 'Python and Django', level: 'working' },
      { name: 'Running Java and .NET applications locally', level: 'professional' },
    ],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    items: [
      { name: 'Visual Studio Code', level: 'working' },
      { name: 'GitHub', level: 'professional' },
      { name: 'Vercel', level: 'working' },
    ],
  },
]

export const experience = {
  company: 'Icanio Technologies, Tirunelveli',
  position: 'Support Engineer I',
  period: 'Present',
  techStack: ['Azure', 'AWS', 'Kubernetes', 'Helm', 'Docker', 'Linux', 'Git', 'GitHub', 'Shell Scripting'],
  responsibilities: [
    'Provide application and infrastructure support across two client engagements.',
    'Raise and track support tickets, analyse reported issues, and assist with resolutions.',
    'Perform Root Cause Analysis and document incident findings.',
    'Monitor infrastructure health and troubleshoot application problems.',
    'Set up GitHub repositories and run React, Java, Python and .NET applications locally.',
    'Work with Linux commands, Bash scripting and Git workflows.',
    'Develop practical knowledge of Docker, Docker Compose, AWS, Azure, Kubernetes and Helm.',
    'Work with Kubernetes ConfigMaps across Dev, Dev2 and QA environments.',
    'Pull container images from Azure Container Registry and inspect image sizes.',
    'Study Azure service notifications and their potential infrastructure impact.',
    'Learn Azure Logic Apps for scheduled virtual machine start/stop workflows.',
  ],
}

export const engagements = [
  {
    title: 'Application & Infrastructure Support',
    duration: 'Approximately four months',
    status: 'Completed',
    technologies: [],
    responsibilities: [
      'Support ticket creation and issue analysis.',
      'Application and infrastructure troubleshooting.',
      'Root Cause Analysis documentation.',
      'Infrastructure monitoring and incident resolution support.',
    ],
  },
  {
    title: 'Cloud Infrastructure & Kubernetes Operations',
    duration: 'Current engagement',
    status: 'Ongoing',
    technologies: ['Azure', 'Azure Container Registry', 'Kubernetes', 'Helm', 'Azure Logic Apps', 'Linux'],
    responsibilities: [
      'Analyse application and infrastructure issues.',
      'Monitor Dev, Dev2 and QA environments.',
      'Update Kubernetes ConfigMap values while preserving existing configuration.',
      'Verify configuration changes.',
      'Pull images from Azure Container Registry and check image sizes.',
      'Review Azure service announcements and identify potential infrastructure impact.',
      'Develop practical knowledge of Helm charts, Kubernetes resources and scheduled VM automation.',
    ],
  },
]

export const achievements = [
  {
    id: 'otel-tech-talk',
    title: 'Delivered a Tech Talk on OpenTelemetry (OTel)',
    org: 'Icanio Technologies, Tirunelveli',
    date: '17 June 2026',
    time: '3 – 4 PM',
    venue: 'Icanio Technology Labs Pvt Ltd, Tirunelveli',
    summary:
      'I delivered an internal tech talk to my colleagues on OpenTelemetry and why it matters for modern application monitoring and observability.',
    highlights: [
      'Explained how OpenTelemetry helps collect and understand traces, metrics and logs to monitor application performance.',
      'Demonstrated observability dashboards during the session.',
      'Discussed how OpenTelemetry can help identify performance bottlenecks and improve troubleshooting in real-world applications.',
    ],
    takeaway:
      'The session strengthened my technical knowledge, improved my presentation skills, and gave me confidence in sharing technical concepts with colleagues.',
    tags: ['OpenTelemetry', 'Observability', 'DevOps', 'Application Monitoring', 'Tech Talk'],
    images: [
      {
        src: '/images/techtalk/poster.webp',
        alt: 'Icanio Technologies tech talk poster: OpenTelemetry (OTel), 17 June 2026, presented by Arul Dhas A, Support Engineer I',
        caption: 'Event poster',
      },
      {
        src: '/images/techtalk/session-1.webp',
        alt: 'Arul Dhas A presenting the OpenTelemetry tech talk next to a display screen',
        caption: 'Presenting the session',
      },
      {
        src: '/images/techtalk/session-2.webp',
        alt: 'Arul Dhas A presenting an observability dashboard on a display during the tech talk',
        caption: 'Walking through an observability dashboard',
      },
    ],
  },
]

export const projects = [
  {
    title: 'Blue Collar Bridge',
    subtitle: 'Connecting workers with local customers',
    type: 'Academic project',
    problem:
      'Local customers often struggle to find reliable electricians, plumbers, drivers, carpenters, painters, cleaners and gardeners nearby.',
    purpose:
      'A web application concept designed to connect local customers with blue-collar workers such as electricians, plumbers, drivers, carpenters, painters, cleaners, and gardeners.',
    contribution: 'Developed the web application concept as part of my academic coursework.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    note: 'Academic concept; not a production deployment.',
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'Live on Vercel',
    type: 'Mini project',
    problem: 'Needed a single place to present my skills, experience and learning journey to recruiters.',
    purpose:
      'A personal portfolio website built to showcase my technical skills, professional experience, projects, and learning journey.',
    contribution: 'Built and deployed the site myself.',
    technologies: ['React', 'Bootstrap', 'HTML', 'Vercel'],
    link: { label: 'Visit website', href: 'https://das-portfolio.vercel.app/' },
  },
  {
    title: 'AI-Powered Self-Healing Application',
    subtitle: 'Pitchathon 2026 team project',
    type: 'Proposed solution',
    problem:
      'Teams spend significant time detecting errors in logs, finding the root cause and shipping a safe fix.',
    purpose:
      'An AI-powered self-healing application concept designed to detect errors from real-time logs, analyze root causes, identify relevant source code, generate potential fixes, run automated tests, and support safe deployment or rollback.',
    contribution:
      'UI/UX design responsibilities: user flows, wireframes, dashboard design, and incident / root-cause visualisation.',
    technologies: [
      'FastAPI',
      'Kafka',
      'Azure OpenAI',
      'LangChain',
      'PostgreSQL + pgvector',
      'Docker & CI/CD',
      'Kubernetes',
      'React',
      'Tailwind CSS',
    ],
    note: 'These technologies are the proposed architecture from the pitchathon concept. This is a concept, not a completed production implementation.',
    techLabel: 'Proposed technologies',
  },
]

// To show a certificate image: save the file in /public/certificates/ (for example azure-udemy.jpg)
// and set image: '/certificates/azure-udemy.jpg'. Add a verification link only if you have a real one.
export const certifications = [
  {
    title: 'Microsoft Azure: From Zero to Hero – The Complete Guide',
    issuer: 'Udemy',
    detail: '21 hours',
    date: 'May 2026',
    image: '',
    link: '',
  },
  {
    title: 'Azure: Create a Virtual Machine and Deploy a Web Server',
    issuer: 'Coursera',
    detail: 'Project Certificate',
    date: 'October 2026',
    image: '',
    link: '',
  },
  {
    title: 'Python Program',
    issuer: 'U.ST (Coursera)',
    detail: 'Online course',
    date: '',
    image: '',
    link: '',
  },
  {
    title: 'Agile Project Management',
    issuer: 'HP LIFE',
    detail: 'Online course',
    date: '',
    image: '',
    link: '',
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'PET Engineering College',
    period: '2024 – 2026',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Muslim Arts College',
    period: '2020 – 2023',
  },
  {
    degree: 'Higher Secondary Education',
    school: 'Sivanthi Matriculation Higher Secondary School',
    period: '2020',
  },
  {
    degree: 'Secondary Education',
    school: 'Sivanthi Matriculation Higher Secondary School',
    period: '2018',
  },
]

export const contactMessage =
  "I'm open to opportunities where I can contribute to application support, infrastructure operations, DevOps, and cloud engineering while continuing to grow my technical skills."
