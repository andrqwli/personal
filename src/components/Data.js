import twenty from '../media/twenty.png';
import trivia from '../media/trivia.png';
import cloud from '../media/cloud.png';
import twitter from '../media/twitter.png';

export const Courses = [
    {
        courseCode: "COMP 530",
        courseName: "Operating Systems",
        courseSem: "Fall 2021",
        prof: "Brent Munsell",
        desc: "Types of operating systems. Concurrent programming. Management of storage, processes, devices. Scheduling, protection. Case study. Course includes a programming laboratory."
    }, 
    {
        courseCode: "COMP 524",
        courseName: "Programming Languages",
        courseSem: "Fall 2021",
        prof: "Prasun Dewan",
        desc: "Concepts of high-level programming and their realization in specific languages. Data types, scope, control structures, procedural abstraction, classes, concurrency. Run-time implementation."
    }, 
    {
        courseCode: "COMP 555",
        courseName: "Bioalgorithms",
        courseSem: "Spring 2021",
        prof: "Leonard McMillan",
        desc: "Bioinformatics algorithms. Topics include DNA restriction mapping, finding regulatory motifs, genome rearrangements, sequence alignments, gene prediction, graph algorithms, DNA sequencing, protein sequencing, combinatorial pattern matching, approximate pattern matching, clustering and evolution, tree construction, Hidden Markov Models, randomized algorithms."
    }, 
    {
        courseCode: "COMP 521",
        courseName: "Files and Databases",
        courseSem: "Fall 2020",
        prof: "Gary Bishop",
        desc: "Placement of data on secondary storage. File organization. Database history, practice, major models, system structure and design."
    }, 
    {
        courseCode: "COMP 550",
        courseName: "Algorithms and Analysis",
        courseSem: "Fall 2020",
        prof: "John Majikes",
        desc: " Formal specification and verification of programs. Techniques of algorithm analysis. Problem-solving paradigms. Survey of selected algorithms."
    }, 
    {
        courseCode: "COMP 426",
        courseName: "Modern Web Programming",
        courseSem: "Fall 2020",
        prof: "Ketan Mayer-Patel",
        desc: "Developing applications for the World Wide Web including both client-side and server-side programming. Emphasis on Model-View-Controller architecture, AJAX, RESTful Web services, and database interaction."
    }, 
    {
        courseCode: "COMP 411",
        courseName: "Computer Organization",
        courseSem: "Fall 2019",
        prof: "Montek Singh",
        desc: "Digital logic, circuit components. Data representation, computer architecture and implementation, assembly language programming."
    }, 
    {
        courseCode: "COMP 410",
        courseName: "Data Structures",
        courseSem: "Fall 2019",
        prof: "Paul Stotts",
        desc: "The analysis of data structures and their associated algorithms. Abstract data types, lists, stacks, queues, trees, and graphs. Sorting, searching, hashing."
    },
    {
        courseCode: "COMP 401",
        courseName: "Foundations of Programming",
        courseSem: "Spring 2019",
        prof: "Ketan Mayer-Patel",
        desc: "Advanced programming: object-oriented design, classes, interfaces, packages, inheritance, delegation, observers, MVC (model view controller), exceptions, assertions."
    }
];

export const Stem = [
    {
        courseCode: "MATH 233",
        courseName: "Multivariable Calculus",
        courseSem: "Fall 2018",
        prof: "Elizabeth McLaughlin",
        desc: "Vector algebra, solid analytic geometry, partial derivatives, multiple integrals."
    },
    {
        courseCode: "MATH 547",
        courseName: "Linear Algebra",
        courseSem: "Spring 2020",
        prof: "Jeremy Marzuo",
        desc: "Algebra of matrices with applications: determinants, solution of linear systems by Gaussian elimination, Gram-Schmidt procedure, eigenvalues."
    },
    {
        courseCode: "MATH 381",
        courseName: "Discrete Math",
        courseSem: "Spring 2020",
        prof: "James Choi",
        desc: "This course serves as a transition from computational to more theoretical mathematics. Topics are from the foundations of mathematics: logic, set theory, relations and functions, induction, permutations and combinations, recurrence."
    },
    {
        courseCode: "PHYS 118",
        courseName: "Mechanics and Relativity",
        courseSem: "Spring 2019",
        prof: "Duane Deardorff",
        desc: "Mechanics of particles and rigid bodies. Newton's laws; mechanical and potential energy; mechanical conservation laws; frame-dependence of physical laws; Einstein's Theory of Relativity."
    }
]

export const Work = [
    {
        company: "Secmation",
        title: "Software Developer Intern",
        time: "June 2021 - August 2021"
    },
    {
        company: "Freelance",
        title: "Software Developer",
        time: "May 2020 - Present"
    },
    {
        company: "PT Wired",
        title: "Physical Therapy Model",
        time: "June 2019 - Present"
    },
    {
        company: "Chipotle Mexican Grill",
        title: "Take-Out Specialist",
        time: "June 2017 - June 2019"
    }
]

export const Proj = [
    {
        img: twenty,
        title: "2048 Game",
        desc: "Built the game 2048 hosted by UNC's CS Department using Javascript, HTML, and CSS",
        link: "",
        repo: "https://github.com/andrqwli/COMP426/tree/master/a07"
    },
    {
        img: trivia,
        title: "Trivia 426",
        desc: "Created an online Trivia app using an external API, with over 20 categories to choose from. Utilized a React frontend and Google Firestore backend, hosted on Firebase.",
        link: "https://trivia426.web.app/",
        repo: "https://github.com/426final/trivia"
    },
    {
        img: cloud,
        title: "Cloud Niners",
        desc: "Designed and built a website for Cloud Niners, a local Chinese dance group based in the triangle. My first web project built in vanilla HTML and CSS.",
        link: "https://cloudniners.dance/",
        repo: "https://github.com/andrqwli/cloudniners/tree/master/Cloud%20Niners%20Site"
    },
    {
        img: twitter,
        title: "Twitter",
        desc: "Created a Twitter frontend that interacts with a RESTful API created by the UNC CS Department.",
        link: "",
        repo: "https://github.com/andrqwli/COMP426/tree/master/a09"
    }
]

export const LogData =  [
    {
        meetingDate: "3/31/2022",
        workSummary: "Researching ML packages to apply to our list of facts. Given a list of packages, trying to discern the strengths and weaknesses of Ridge, Lasso, and Elastic Net regression techniques for our use case. At the moment, Ridge seems to be more appropriate than Lasso/Elastic Net given the specificity of variable (fact) selection.",
        resourceList: [
            {
                title: "Ridge vs Lasso Analysis/Explanation",
                link: "https://www.youtube.com/watch?v=NGf0voTMlcs",
            },
            {
                title: "Elastic Net Regression Analysis/Explanation",
                link: "https://www.youtube.com/watch?v=1dKRdX9bfIo",
            }
        ]
    },
    {
        meetingDate: "3/3/2022",
        workSummary: "Added more problem specific facts for the fizzbuzz problem to be analyzed in the future. Took 3 more data sets from other semesters and processed the data to be in the same format to be converted to ASTs and parsed. If the first semester analyzed is training data, the other 3 can be used to test functionality.",
        resourceList: [
            {
                title: "Github Repo",
                link: "https://github.com/andrqwli/COMP495",
            }
        ]
    },
    {
        meetingDate: "2/17/2022",
        workSummary: "Created the pcan.js package to collect facts from submission source code. Began with collecting universal facts such as number of alert statements, number of for loops initializations, etc. (5 total). Began adding problem specific methods for the fizzbuzz array problem to collect facts that could inform an unsupervised learning ML algorithm on what kind of issue is causing the submission to be incorrect. Also completed the linked k-means tutorial.",
        resourceList: [
            {
                title: "K-Means Tutorial",
                link: "https://cloudacademy.com/course/module-6-unsupervised-learning/k-means-clustering/?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=5890858304&hsa_cam=12050150150&hsa_grp=115060577886&hsa_ad=547353207035&hsa_src=s&hsa_tgt=dsa-19959388920&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIqujrjOuJ9gIVIR-tBh3szwDDEAAYAiAAEgJT3fD_BwE",
            },
            {
                title: "Github Repo",
                link: "https://github.com/andrqwli/COMP495",
            },
            {
                title: "Research Notes",
                link: "https://docs.google.com/document/d/18ZJZEnuYZlLyBRaAz7BXXcFMu8ZR0qWXkU-yv_6Cn8g/edit"
            }
        ]
    },
    {
        meetingDate: "2/10/2022",
        workSummary: "Filtered the problem data set by problems that had one input for simplicity, then sorted each of the submissions to the single input problems into correct and incorrect submissions. Chose two problems with many submissions (mostly incorrect) to analyze, and began brainstorming facts to analyze for ML purposes. Researched the list of ML packages/tools and noted thoughts on use case appropriateness.",
        resourceList: [
            {
                title: "Github Repo",
                link: "https://github.com/andrqwli/COMP495",
            },
            {
                title: "Research Notes",
                link: "https://docs.google.com/document/d/18ZJZEnuYZlLyBRaAz7BXXcFMu8ZR0qWXkU-yv_6Cn8g/edit"
            }
        ]
    },
    {
        meetingDate: "2/1/2022",
        workSummary: "Processed .bson files with MongoDB, then exported problem and submission data to json. Wrote some functions to process data into json arrays, and then into readable json arrays and json maps.",
        resourceList:[
            {
                title: "GitHub Repo",
                link: "https://github.com/andrqwli/COMP495"
            }
        ]
    },
    {
        meetingDate: "1/20/2022",
        workSummary: "Read about and took notes on Abstract Syntax Trees this week. Attempting to determine if using the structure of each program's AST will be better than just the source code for pattern matching purposes by our ML program. Played around with AST parsers to better understand how they're built and parsed. Updated website formatting as well. Also explored some pattern matching resources and ML packages.",
        resourceList: [
            {
                title: "Abstract Syntax Tree Notes - Resources are hyperlinked in document",
                link: "https://docs.google.com/document/d/18ZJZEnuYZlLyBRaAz7BXXcFMu8ZR0qWXkU-yv_6Cn8g/edit?usp=sharing"
            },
            {
                title: "AST Pattern Matching Lodash library",
                link: "http://nene.github.io/2016/04/02/matches-ast",
            }
        ]
    },
    {
        meetingDate: "1/11/2022",
        workSummary: "Read and compiled a list of introductory resources on knowledge graphs. Determined that knowledge graphs may not be most suitable for our use case, as they benefit from large datasets and are able to connect many different entities together with different types of relationships. The structured nature of our data (source code) doesn't lend itself to KG use.",
        resourceList: [
            {
                title: "What is a Knowledge Graph - Ontotext",
                link: "https://www.ontotext.com/knowledgehub/fundamentals/what-is-a-knowledge-graph/"
            },
            {
                title: "A Data Engineer's Guide To Semantic Modelling",
                link: "https://zenodo.org/record/3898519"
            },
            {
                title: "Github Repository with Knowledge Graph Resources",
                link: "https://github.com/turing-knowledge-graphs/teaching/blob/main/city/ReadingList.md"
            },
            {
                title: "Github Repository with SWT&KG Course",
                link: "https://github.com/turing-knowledge-graphs/teaching/tree/main/city"
            },
            {
                title: "MonkeyLearn - Text classification product/service",
                link: "https://monkeylearn.com/text-classification/"
            },
        ]
    },
    
]