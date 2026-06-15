// Academic Work data — courses with categorized content.
// File URLs are built from segment arrays so we can safely encodeURIComponent each segment.

export function fileUrl(segments) {
  if (!segments || !segments.length) return null;

  return (
    "/academic_files/" +
    segments.map((s) => encodeURIComponent(s)).join("/")
  );
}

export const COURSES = {
  ai: {
    slug: "ai",
    code: "CS3081",
    name: "Artificial Intelligence",
    term: "Fall 2024",
    icon: "Brain",
    accent: "from-[#002d67] to-[#00377e]",
    description:
      "Study of intelligent agents, search algorithms, knowledge representation, and AI problem-solving techniques.",
    longDescription:
      "Covers rational agent theory, uninformed and informed search, constraint satisfaction, and the foundations of modern AI systems — paired with hands-on programming assignments and a research project.",
    featured: true,
    stats: {
      assignments: 3,
      labs: 0,
      projects: 1,
      papers: 1,
      posters: 1,
      presentations: 0,
      certificates: 2,
    },
    categories: {
      assignments: [
        {
          title: "A1 — Intelligent Agents",
          description:
            "Foundations of agent architectures, rationality, and the structure of intelligent agents.",
          pdf: ["ai", "Assignments", "CS3081_A1_Fall2024_Intelligent Agents.pdf"],
        },
        {
          title: "A2 — Implementing Search Algorithms",
          description:
            "Hands-on implementation of uninformed and informed search algorithms (BFS, DFS, A*).",
          pdf: ["ai", "Assignments", "CS3081+A2+Implementing+Search+Algorithms.pdf"],
        },
        {
          title: "A3 — Constraint Satisfaction (8-Queens & KSA Map Coloring)",
          description:
            "Modeling and solving classic CSPs in Python notebooks alongside a written report.",
          pdf: [
            "ai",
            "Assignments",
            "CS3081_A3_Fall2024 (2)",
            "CS3081_A3_Fall2024 (2).pdf",
          ],
          extras: [
            {
              kind: "notebook",
              title: "8-Queens Problem.ipynb",
              path: [
                "ai",
                "Assignments",
                "CS3081_A3_Fall2024 (2)",
                "8-Queens Problem.ipynb",
              ],
            },
            {
              kind: "notebook",
              title: "ksa_map_coloring.ipynb",
              path: [
                "ai",
                "Assignments",
                "CS3081_A3_Fall2024 (2)",
                "ksa_map_coloring.ipynb",
              ],
            },
          ],
        },
      ],
      papers: [
        {
          title: "AI Research Paper",
          description:
            "Course research paper written in IEEE conference format.",
          pdf: ["ai", "Project", "IEEE_Conference_Template+(4).pdf"],
        },
      ],
      posters: [
        {
          title: "AI Research Poster",
          description:
            "Visual research summary designed for the AI course showcase.",
          pdf: ["ai", "Project", "Research+Poster.pdf"],
        },
      ],
      certificates: [
        {
          title: "Introduction to Artificial Intelligence (AI)",
          organization: "Coursera",
          pdf: [
            "ai",
            "Coursera Certificates",
            "Coursera Introduction to Artificial Intelligence (AI).pdf",
          ],
        },
        {
          title: "Generative AI Introduction and Applications",
          organization: "Coursera",
          pdf: [
            "ai",
            "Coursera Certificates",
            "Generative AI Introduction and Applications.pdf",
          ],
        },
      ],
    },
  },

  nlp: {
    slug: "nlp",
    code: "CS4083",
    name: "Text Mining & Natural Language",
    term: "Spring 2025",
    icon: "MessageSquareText",
    accent: "from-[#002d67] to-[#0E7490]",
    description:
      "Foundations of text mining and natural language processing, from data preprocessing to word embeddings.",
    longDescription:
      "Hands-on labs covering data-centric ML, pandas-based exploration, word embeddings, and a full team project on a real NLP problem — culminating in a paper, poster, and presentation.",
    featured: false,
    stats: {
      assignments: 0,
      labs: 4,
      projects: 1,
      papers: 1,
      posters: 1,
      presentations: 1,
      certificates: 0,
    },
    categories: {
      labs: [
        {
          title: "Lab 1 — Data Analysis with Pandas",
          description: "Pandas-based exploration of textual datasets.",
          notebook: ["nlp", "Labs", "lab1_DataAnalysiswithPandas_(1) (3).ipynb"],
        },
        {
          title: "Lab — Data-Centric AI vs Model-Centric AI",
          description: "Comparing data-centric and model-centric improvement strategies.",
          notebook: ["nlp", "Labs", "Lab - Data-Centric AI vs Model-Centric AI.ipynb"],
        },
        {
          title: "Lab 3 — Word Embeddings",
          description: "Building and analyzing dense vector representations of words.",
          notebook: ["nlp", "Labs", "Lab3_Lab3 Word Embedding.ipynb"],
        },
        {
          title: "Hackathon 1 — Hottest Topics in ML",
          description: "Timed hackathon exploring trending ML research topics.",
          notebook: [
            "nlp",
            "Labs",
            "Hackthon1_Hackathon Exploring the Hottest Topics in Machine Learning.ipynb",
          ],
        },
      ],
      projects: [
        {
          title: "NLP Project — Source Code",
          description: "Full source code archive for the NLP team project.",
          archive: ["nlp", "Project", "NLP_Project_Code.zip"],
        },
      ],
      papers: [
        {
          title: "NLP Project Report",
          description:
            "Final report covering methodology, experiments, results, and findings.",
          pdf: ["nlp", "Project", "Project_NLP_Report.pdf"],
        },
      ],
      posters: [
        {
          title: "NLP Project Poster",
          description: "Conference-style summary poster for the NLP project.",
          pdf: ["nlp", "Project", "NLP_Poster_AmaniMaramRaghad (1).pdf"],
        },
      ],
      presentations: [
        {
          title: "NLP Project Presentation",
          description: "Slide deck used during the final project presentation.",
          pdf: ["nlp", "Project", "Presentation for NLP_Project.pdf"],
        },
      ],
    },
  },

  ml: {
    slug: "ml",
    code: "CS4082",
    name: "Machine Learning",
    term: "Spring 2025",
    icon: "BrainCircuit",
    accent: "from-[#00377e] to-[#0E7490]",
    description:
      "Supervised and unsupervised learning, model evaluation, and applied feature engineering.",
    longDescription:
      "Hands-on coursework covering linear models, logistic regression, classification, and NLP — culminating in a real-world cybersecurity project classifying network attack traffic from packet-capture datasets.",
    featured: true,
    stats: {
      assignments: 2,
      labs: 4,
      projects: 1,
      papers: 1,
      posters: 0,
      presentations: 1,
      certificates: 0,
    },
    categories: {
      assignments: [
        {
          title: "Assignment 1 — Outputs",
          description: "First ML assignment outputs and analysis.",
          pdf: ["ml", "Assignment", "ML+Assignment+1+Outputs.pdf"],
        },
        {
          title: "Assignment 2",
          description: "Second ML assignment delivered as a Jupyter notebook.",
          notebook: ["ml", "Assignment", "A2.ipynb"],
        },
      ],
      labs: [
        {
          title: "Lab 1 — ML Foundations (Part 3)",
          description: "Introduction to the ML workflow and data handling fundamentals.",
          notebook: ["ml", "Labs", "Lab_1_Part_3_ML_MaramAlhusami (4).ipynb"],
        },
        {
          title: "Lab 2 — Linear Models with Scikit-learn",
          description: "Building and evaluating linear regression models using scikit-learn.",
          notebook: ["ml", "Labs", "Lab2.ML.Linear.Models.with.Scikit-learn (1).ipynb"],
        },
        {
          title: "Lab 3 — Logistic Regression",
          description: "Classification with logistic regression and decision boundaries.",
          notebook: ["ml", "Labs", "Lab 3 logistic Regression.ipynb"],
        },
        {
          title: "Lab 4 — Classification Models & NLP",
          description: "Classification models applied to natural-language data.",
          notebook: [
            "ml",
            "Labs",
            "ML_Lab4_Lab 4 Classification Models Part 1 NaturalLanguageProcessingandClassification Models.ipynb",
          ],
        },
      ],
      projects: [
        {
          title: "ML Project — Network Attack Classification",
          description:
            "End-to-end ML project classifying network attack traffic (DDoS / DoS / Backdoor) from packet-capture datasets — includes the working notebook and all training datasets.",
          extras: [
            {
              kind: "notebook",
              title: "ML_Project_Part_2.ipynb",
              path: ["ml", "Project", "ML Project", "Code", "ML_Project_Part_2.ipynb"],
            },
            {
              kind: "dataset",
              title: "Merged_Attacks.csv",
              path: ["ml", "Project", "ML Project", "Datasets", "Merged_Attacks.csv"],
            },
            {
              kind: "dataset",
              title: "Backdoor_Malware.pcap.csv",
              path: ["ml", "Project", "ML Project", "Datasets", "Backdoor_Malware.pcap.csv"],
            },
            {
              kind: "dataset",
              title: "DDoS-TCP_Flood.pcap.csv",
              path: ["ml", "Project", "ML Project", "Datasets", "DDoS-TCP_Flood.pcap.csv"],
            },
            {
              kind: "dataset",
              title: "DoS-TCP_Flood.pcap.csv",
              path: ["ml", "Project", "ML Project", "Datasets", "DoS-TCP_Flood.pcap.csv"],
            },
            {
              kind: "dataset",
              title: "DoS-UDP_Flood.pcap.csv",
              path: ["ml", "Project", "ML Project", "Datasets", "DoS-UDP_Flood.pcap.csv"],
            },
          ],
        },
      ],
      papers: [
        {
          title: "ML Project Report",
          description:
            "Final project report covering methodology, experiments, and findings for the network attack classification project.",
          pdf: ["ml", "Project", "ML Project", "Project_Machine_Learning_Report.pdf"],
        },
      ],
      presentations: [
        {
          title: "ML Project Presentation",
          description: "Slide deck for the final project presentation.",
          pdf: ["ml", "Project", "ML Project", "ML Project Presentation.pdf"],
        },
      ],
    },
  },

  cybersecurity: {
    slug: "cybersecurity",
    code: "CS4071",
    name: "Cybersecurity",
    term: "Fall 2024",
    icon: "ShieldCheck",
    accent: "from-[#002d67] to-[#00377e]",
    description:
      "Security fundamentals — threats, defenses, secure design, and risk management.",
    longDescription:
      "Coursework spanning threat modeling, secure system design, cryptographic primitives, and applied risk analysis.",
    featured: true,
    stats: { assignments: 0, labs: 0, projects: 0, papers: 0, posters: 0, presentations: 0, certificates: 0 },
    categories: {},
    placeholder: true,
  },

  software_engineering: {
    slug: "software-engineering",
    code: "CS3071",
    name: "Software Engineering",
    term: "Fall 2023",
    icon: "Cog",
    accent: "from-[#00377e] to-[#0E7490]",
    description:
      "Software lifecycle, design patterns, agile methods, and quality assurance.",
    longDescription:
      "Course covering the full software engineering lifecycle including requirements, design, testing, and team workflows.",
    featured: true,
    stats: { assignments: 0, labs: 0, projects: 0, papers: 0, posters: 0, presentations: 0, certificates: 0 },
    categories: {},
    placeholder: true,
  },
};

export const FEATURED_SLUGS = ["ai", "ml", "cybersecurity", "software_engineering"];

export const CATEGORY_META = {
  assignments: { label: "Assignments", icon: "FileSpreadsheet" },
  labs: { label: "Labs", icon: "FlaskConical" },
  projects: { label: "Projects", icon: "FolderGit2" },
  papers: { label: "Research Papers", icon: "FileText" },
  posters: { label: "Research Posters", icon: "Image" },
  presentations: { label: "Presentations", icon: "Presentation" },
  certificates: { label: "Certificates", icon: "BadgeCheck" },
};

export function getCourse(slug) {
  // accept "software-engineering" or "software_engineering"
  const norm = slug.replace(/-/g, "_");
  return COURSES[norm] || null;
}

export const ALL_COURSE_SLUGS = Object.keys(COURSES);
