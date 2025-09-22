
const searchData = [
  
// ---------------- Programming ----------------
  { category: "Programming", keyword: "Python", link: "/programming/python" },
  { category: "Programming", keyword: "C", link: "" },
  { category: "Programming", keyword: "C++", link: "/programming/cpp" },
  { category: "Programming", keyword: "Java", link: "/programming/java" },

  { category: "Programming", keyword: "JavaScript", link: "/programming/javascript" },
  { category: "Programming", keyword: "Go", link: "/programming/go" },
  { category: "Programming", keyword: "Kotlin", link: "/programming/kotlin" },
  { category: "Programming", keyword: "Swift", link: "/programming/swift" },
  { category: "Programming", keyword: "Ruby", link: "/programming/ruby" },
  { category: "Programming", keyword: "PHP", link: "/programming/php" },
  { category: "Programming", keyword: "Rust", link: "/programming/rust" },

  // ---------------- Web Development ----------------
  { category: "Web Dev", keyword: "HTML", link: "/webdev/html" },
  { category: "Web Dev", keyword: "CSS", link: "/webdev/css" },
  { category: "Web Dev", keyword: "React", link: "/webdev/react" },
  { category: "Web Dev", keyword: "Next.js", link: "/webdev/next" },
  { category: "Web Dev", keyword: "Node.js", link: "/webdev/node" },
  { category: "Web Dev", keyword: "Tailwind", link: "/webdev/tailwind" },
  { category: "Web Dev", keyword: "Express", link: "/webdev/express" },
  { category: "Web Dev", keyword: "Django", link: "/webdev/django" },
  { category: "Web Dev", keyword: "Flask", link: "/webdev/flask" },

  // ---------------- Mobile Dev ----------------
  { category: "Mobile Dev", keyword: "React Native", link: "/mobile/react-native" },
  { category: "Mobile Dev", keyword: "Flutter", link: "/mobile/flutter" },
  { category: "Mobile Dev", keyword: "Kotlin", link: "/mobile/kotlin" },
  { category: "Mobile Dev", keyword: "Swift", link: "/mobile/swift" },
  { category: "Mobile Dev", keyword: "Android", link: "/mobile/android" },
  { category: "Mobile Dev", keyword: "iOS", link: "/mobile/ios" },

  // ---------------- AI & ML ----------------
  { category: "AI & ML", keyword: "Machine Learning", link: "/ai/ml" },
  { category: "AI & ML", keyword: "Deep Learning", link: "/ai/deep-learning" },
  { category: "AI & ML", keyword: "Data Science", link: "/ai/data-science" },
  { category: "AI & ML", keyword: "NLP", link: "/ai/nlp" },
  { category: "AI & ML", keyword: "Computer Vision", link: "/ai/cv" },
  { category: "AI & ML", keyword: "Generative AI", link: "/ai/generative" },
  { category: "AI & ML", keyword: "Reinforcement Learning", link: "/ai/rl" },

  // ---------------- Science ----------------
  { category: "Science", keyword: "Physics", link: "/science/physics" },
  { category: "Science", keyword: "Chemistry", link: "/science/chemistry" },
  { category: "Science", keyword: "Biology", link: "/science/biology" },
  { category: "Science", keyword: "Environmental Science", link: "/science/environmental" },
  { category: "Science", keyword: "Astronomy", link: "/science/astronomy" },

  // ---------------- Mathematics ----------------
  { category: "Mathematics", keyword: "Algebra", link: "/math/algebra" },
  { category: "Mathematics", keyword: "Calculus", link: "/math/calculus" },
  { category: "Mathematics", keyword: "Statistics", link: "/math/statistics" },
  { category: "Mathematics", keyword: "Trigonometry", link: "/math/trigonometry" },
  { category: "Mathematics", keyword: "Geometry", link: "/math/geometry" },

  // ---------------- Aptitude ----------------
  { category: "Aptitude", keyword: "Quantitative", link: "/aptitude/quantitative" },
  { category: "Aptitude", keyword: "Logical Reasoning", link: "/aptitude/logical" },
  { category: "Aptitude", keyword: "Verbal", link: "/aptitude/verbal" },
  { category: "Aptitude", keyword: "Puzzles", link: "/aptitude/puzzles" },
  { category: "Aptitude", keyword: "Data Interpretation", link: "/aptitude/data-interpretation" },

  // ---------------- Cyber Security ----------------
  { category: "Cyber Security", keyword: "Ethical Hacking", link: "/cyber/ethical-hacking" },
  { category: "Cyber Security", keyword: "Network Security", link: "/cyber/network" },
  { category: "Cyber Security", keyword: "Pen Testing", link: "/cyber/pen-testing" },
  { category: "Cyber Security", keyword: "Forensics", link: "/cyber/forensics" },
  { category: "Cyber Security", keyword: "Cryptography", link: "/cyber/cryptography" },

  // ---------------- Cloud ----------------
  { category: "Cloud", keyword: "AWS", link: "/cloud/aws" },
  { category: "Cloud", keyword: "Azure", link: "/cloud/azure" },
  { category: "Cloud", keyword: "Google Cloud", link: "/cloud/gcp" },
  { category: "Cloud", keyword: "Heroku", link: "/cloud/heroku" },
  { category: "Cloud", keyword: "DigitalOcean", link: "/cloud/digitalocean" },
  { category: "Cloud", keyword: "Cloudflare", link: "/cloud/cloudflare" },

  // ---------------- DevOps ----------------
  { category: "DevOps", keyword: "Linux", link: "/devops/linux" },
  { category: "DevOps", keyword: "Docker", link: "/devops/docker" },
  { category: "DevOps", keyword: "Kubernetes", link: "/devops/kubernetes" },
  { category: "DevOps", keyword: "CI/CD", link: "/devops/cicd" },
  { category: "DevOps", keyword: "Ansible", link: "/devops/ansible" },
  { category: "DevOps", keyword: "Terraform", link: "/devops/terraform" },
  { category: "DevOps", keyword: "Jenkins", link: "/devops/jenkins" },
  { category: "DevOps", keyword: "Prometheus", link: "/devops/prometheus" },

  // ---------------- Database ----------------
  { category: "Database", keyword: "MySQL", link: "/database/mysql" },
  { category: "Database", keyword: "PostgreSQL", link: "/database/postgresql" },
  { category: "Database", keyword: "MongoDB", link: "/database/mongodb" },
  { category: "Database", keyword: "Oracle", link: "/database/oracle" },
  { category: "Database", keyword: "SQLite", link: "/database/sqlite" },
  { category: "Database", keyword: "MariaDB", link: "/database/mariadb" },
  { category: "Database", keyword: "Redis", link: "/database/redis" },
  { category: "Database", keyword: "Cassandra", link: "/database/cassandra" },
  { category: "Database", keyword: "Firebase", link: "/database/firebase" },

  // ---------------- Interview Prep ----------------
  { category: "Interview Prep", keyword: "HR Questions", link: "/interview/hr" },
  { category: "Interview Prep", keyword: "Coding", link: "/interview/coding" },
  { category: "Interview Prep", keyword: "Resume Tips", link: "/interview/resume" },
  { category: "Interview Prep", keyword: "Mock Interviews", link: "/interview/mock" },
  { category: "Interview Prep", keyword: "Projects", link: "/interview/projects" },
];

export default searchData;
