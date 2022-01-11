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