const mcqs = [
    {
        topic: "React.js",
        questions: [
            {
                id: 1,
                question: "What is a key feature of React.js?",
                options: ["Server-side rendering", "Virtual DOM", "Two-way data binding", "MVC architecture"],
                answer: "Virtual DOM"
            },
            {
                id: 2,
                question: "Which method is used to update state in React?",
                options: ["this.state()", "setState()", "updateState()", "modifyState()"],
                answer: "setState()"
            },
            {
                id: 3,
                question: "What is the purpose of the useEffect hook in React?",
                options: ["Handle state updates", "Perform side effects", "Manage props", "Handle events"],
                answer: "Perform side effects"
            },
            {
                id: 4,
                question: "What does JSX stand for in React?",
                options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JavaScript External"],
                answer: "JavaScript XML"
            },
            {
                id: 5,
                question: "How do you pass data from a parent to a child component in React?",
                options: ["Using states", "Using props", "Using context", "Using events"],
                answer: "Using props"
            },
            {
                id: 6,
                question: "Which hook should be used for managing local component state in React?",
                options: ["useState", "useEffect", "useContext", "useReducer"],
                answer: "useState"
            }
        ]
    },
    {
        topic: "Next.js",
        questions: [
            {
                id: 7,
                question: "What feature does Next.js offer by default?",
                options: ["Static Site Generation", "Server-side rendering", "API routes", "All of the above"],
                answer: "All of the above"
            },
            {
                id: 8,
                question: "How do you create dynamic routes in Next.js?",
                options: ["Using useRouter()", "Using getServerSideProps()", "By creating files in the pages folder with [ ]", "Using getStaticProps()"],
                answer: "By creating files in the pages folder with [ ]"
            },
            {
                id: 9,
                question: "Which method is used to fetch data at build time in Next.js?",
                options: ["getServerSideProps", "getStaticProps", "useEffect", "componentDidMount"],
                answer: "getStaticProps"
            },
            {
                id: 10,
                question: "What is the default folder for storing API routes in Next.js?",
                options: ["/pages", "/api", "/components", "/public"],
                answer: "/api"
            },
            {
                id: 11,
                question: "Which hook is used to programmatically navigate in Next.js?",
                options: ["useRouter", "useNavigate", "nextRouter", "useHistory"],
                answer: "useRouter"
            },
            {
                id: 12,
                question: "What command is used to build and export a static Next.js site?",
                options: ["next build", "next export", "next run", "next static"],
                answer: "next export"
            }
        ]
    },
    {
        topic: "JavaScript",
        questions: [
            {
                id: 13,
                question: "Which of the following is a primitive data type in JavaScript?",
                options: ["Array", "Object", "Boolean", "Function"],
                answer: "Boolean"
            },
            {
                id: 14,
                question: "What does 'this' keyword refer to in JavaScript?",
                options: ["The current object", "The previous function", "The window object", "The DOM element"],
                answer: "The current object"
            },
            {
                id: 15,
                question: "Which array method is used to remove the last element from an array?",
                options: ["pop()", "shift()", "splice()", "slice()"],
                answer: "pop()"
            },
            {
                id: 16,
                question: "What will the expression 'typeof NaN' return in JavaScript?",
                options: ["number", "NaN", "undefined", "object"],
                answer: "number"
            },
            {
                id: 17,
                question: "Which method is used to convert a JSON string into a JavaScript object?",
                options: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "JSON.convert()"],
                answer: "JSON.parse()"
            },
            {
                id: 18,
                question: "What is the purpose of the 'strict mode' in JavaScript?",
                options: ["Enable stricter type checking", "Prevent use of undeclared variables", "Optimize code performance", "Disable unused variables"],
                answer: "Prevent use of undeclared variables"
            }
        ]
    }
];


export default mcqs