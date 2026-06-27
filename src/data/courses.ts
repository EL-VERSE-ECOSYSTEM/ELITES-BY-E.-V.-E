export interface Course {
  id: string;
  name: string;
  priceNGN: number;
  priceUSD: number;
  priceEUR: number;
  priceGBP: number;
  description: string;
  category: string;
  level: string;
}

export const courses: Course[] = [
  {
    id: "python",
    name: "Python",
    priceNGN: 80000,
    priceUSD: 53,
    priceEUR: 49,
    priceGBP: 42,
    description: "Beginner to Advanced — Web, AI, Data Science, Automation",
    category: "Premium",
    level: "All Levels"
  },
  {
    id: "java",
    name: "Java",
    priceNGN: 85000,
    priceUSD: 57,
    priceEUR: 52,
    priceGBP: 45,
    description: "Enterprise Applications, Android Development, Backend Systems",
    category: "Premium",
    level: "Intermediate"
  },
  {
    id: "javascript",
    name: "JavaScript",
    priceNGN: 70000,
    priceUSD: 47,
    priceEUR: 43,
    priceGBP: 37,
    description: "Frontend, Backend (Node.js), Full Stack Web Development",
    category: "Standard",
    level: "Beginner"
  },
  {
    id: "cpp",
    name: "C++",
    priceNGN: 90000,
    priceUSD: 60,
    priceEUR: 55,
    priceGBP: 48,
    description: "System Programming, Game Engines, High-Performance Applications",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "csharp",
    name: "C#",
    priceNGN: 85000,
    priceUSD: 57,
    priceEUR: 52,
    priceGBP: 45,
    description: "Game Development (Unity), Windows Apps, Backend Services",
    category: "Premium",
    level: "Intermediate"
  },
  {
    id: "php",
    name: "PHP",
    priceNGN: 60000,
    priceUSD: 40,
    priceEUR: 37,
    priceGBP: 32,
    description: "Web Development, CMS (WordPress), Backend APIs",
    category: "Standard",
    level: "Beginner"
  },
  {
    id: "typescript",
    name: "TypeScript",
    priceNGN: 65000,
    priceUSD: 43,
    priceEUR: 40,
    priceGBP: 34,
    description: "Modern Web Development, Angular, React, Node.js",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "golang",
    name: "Go (Golang)",
    priceNGN: 90000,
    priceUSD: 60,
    priceEUR: 55,
    priceGBP: 48,
    description: "Cloud Services, Microservices, High-Performance Backends",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "ruby",
    name: "Ruby",
    priceNGN: 70000,
    priceUSD: 47,
    priceEUR: 43,
    priceGBP: 37,
    description: "Web Development (Ruby on Rails), Prototyping, Startups",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "swift",
    name: "Swift",
    priceNGN: 95000,
    priceUSD: 63,
    priceEUR: 58,
    priceGBP: 50,
    description: "iOS App Development, macOS Applications, Apple Ecosystem",
    category: "Advanced",
    level: "Advanced"
  },
  {
    id: "kotlin",
    name: "Kotlin",
    priceNGN: 85000,
    priceUSD: 57,
    priceEUR: 52,
    priceGBP: 45,
    description: "Android App Development, Backend, Cross-Platform",
    category: "Premium",
    level: "Intermediate"
  },
  {
    id: "rust",
    name: "Rust",
    priceNGN: 100000,
    priceUSD: 67,
    priceEUR: 61,
    priceGBP: 53,
    description: "Systems Programming, WebAssembly, Secure Applications",
    category: "Advanced",
    level: "Advanced"
  },
  {
    id: "r",
    name: "R",
    priceNGN: 75000,
    priceUSD: 50,
    priceEUR: 46,
    priceGBP: 40,
    description: "Data Science, Statistical Computing, Data Visualization",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "matlab",
    name: "MATLAB",
    priceNGN: 90000,
    priceUSD: 60,
    priceEUR: 55,
    priceGBP: 48,
    description: "Engineering, Scientific Computing, Simulations",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "scala",
    name: "Scala",
    priceNGN: 85000,
    priceUSD: 57,
    priceEUR: 52,
    priceGBP: 45,
    description: "Big Data (Apache Spark), Functional Programming, Backend",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "perl",
    name: "Perl",
    priceNGN: 60000,
    priceUSD: 40,
    priceEUR: 37,
    priceGBP: 32,
    description: "System Administration, Text Processing, Legacy Systems",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "objective-c",
    name: "Objective-C",
    priceNGN: 95000,
    priceUSD: 63,
    priceEUR: 58,
    priceGBP: 50,
    description: "Legacy iOS/macOS Apps, Apple Ecosystem",
    category: "Advanced",
    level: "Advanced"
  },
  {
    id: "dart",
    name: "Dart",
    priceNGN: 70000,
    priceUSD: 47,
    priceEUR: 43,
    priceGBP: 37,
    description: "Cross-Platform Mobile (Flutter), Web, Desktop",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "elixir",
    name: "Elixir",
    priceNGN: 80000,
    priceUSD: 53,
    priceEUR: 49,
    priceGBP: 42,
    description: "Scalable Web Apps (Phoenix), Real-Time Systems",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "lua",
    name: "Lua",
    priceNGN: 50000,
    priceUSD: 33,
    priceEUR: 30,
    priceGBP: 26,
    description: "Game Scripting (Roblox), Embedded Systems",
    category: "Standard",
    level: "Beginner"
  },
  {
    id: "haskell",
    name: "Haskell",
    priceNGN: 100000,
    priceUSD: 67,
    priceEUR: 61,
    priceGBP: 53,
    description: "Functional Programming, Academic Research, Blockchain",
    category: "Advanced",
    level: "Advanced"
  },
  {
    id: "fortran",
    name: "Fortran",
    priceNGN: 75000,
    priceUSD: 50,
    priceEUR: 46,
    priceGBP: 40,
    description: "Scientific Computing, Numerical Analysis, Legacy Systems",
    category: "Standard",
    level: "Advanced"
  },
  {
    id: "cobol",
    name: "COBOL",
    priceNGN: 85000,
    priceUSD: 57,
    priceEUR: 52,
    priceGBP: 45,
    description: "Banking, Mainframes, Enterprise Legacy Systems",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "pascal",
    name: "Pascal",
    priceNGN: 50000,
    priceUSD: 33,
    priceEUR: 30,
    priceGBP: 26,
    description: "Education, Legacy Systems, Delphi Foundations",
    category: "Standard",
    level: "Beginner"
  },
  {
    id: "ada",
    name: "Ada",
    priceNGN: 90000,
    priceUSD: 60,
    priceEUR: 55,
    priceGBP: 48,
    description: "Aviation, Defense, Safety-Critical Systems",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "lisp",
    name: "Lisp",
    priceNGN: 80000,
    priceUSD: 53,
    priceEUR: 49,
    priceGBP: 42,
    description: "AI Research, Functional Programming, Language Design",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "prolog",
    name: "Prolog",
    priceNGN: 75000,
    priceUSD: 50,
    priceEUR: 46,
    priceGBP: 40,
    description: "AI Logic Programming, Natural Language Processing",
    category: "Standard",
    level: "Advanced"
  },
  {
    id: "scheme",
    name: "Scheme",
    priceNGN: 70000,
    priceUSD: 47,
    priceEUR: 43,
    priceGBP: 37,
    description: "Functional Programming, AI Research, Education",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "smalltalk",
    name: "Smalltalk",
    priceNGN: 65000,
    priceUSD: 43,
    priceEUR: 40,
    priceGBP: 34,
    description: "Object-Oriented Programming, Education, Legacy",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "vbnet",
    name: "VB.NET",
    priceNGN: 60000,
    priceUSD: 40,
    priceEUR: 37,
    priceGBP: 32,
    description: "Windows Applications, Legacy Enterprise Systems",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "delphi",
    name: "Delphi (Object Pascal)",
    priceNGN: 55000,
    priceUSD: 37,
    priceEUR: 34,
    priceGBP: 29,
    description: "Windows Desktop Apps, Database Applications",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "powershell",
    name: "PowerShell",
    priceNGN: 50000,
    priceUSD: 33,
    priceEUR: 30,
    priceGBP: 26,
    description: "Automation, System Administration, DevOps",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "bash",
    name: "Bash",
    priceNGN: 40000,
    priceUSD: 27,
    priceEUR: 25,
    priceGBP: 21,
    description: "Shell Scripting, Automation, System Administration",
    category: "Entry Level",
    level: "Beginner"
  },
  {
    id: "plsql",
    name: "PL/SQL",
    priceNGN: 70000,
    priceUSD: 47,
    priceEUR: 43,
    priceGBP: 37,
    description: "Oracle Database, Data Warehousing, Backend",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "tsql",
    name: "T-SQL",
    priceNGN: 65000,
    priceUSD: 43,
    priceEUR: 40,
    priceGBP: 34,
    description: "Microsoft SQL Server, Data Analysis, Database Development",
    category: "Standard",
    level: "Intermediate"
  },
  {
    id: "abap",
    name: "ABAP",
    priceNGN: 85000,
    priceUSD: 57,
    priceEUR: 52,
    priceGBP: 45,
    description: "SAP ERP, Enterprise Resource Planning, Business Systems",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "vhdl",
    name: "VHDL",
    priceNGN: 90000,
    priceUSD: 60,
    priceEUR: 55,
    priceGBP: 48,
    description: "Hardware Description, FPGA, Digital Circuit Design",
    category: "Premium",
    level: "Advanced"
  },
  {
    id: "labview",
    name: "LabVIEW (G)",
    priceNGN: 100000,
    priceUSD: 67,
    priceEUR: 61,
    priceGBP: 53,
    description: "Test Automation, Instrumentation, Industrial Control",
    category: "Advanced",
    level: "Advanced"
  },
  {
    id: "make",
    name: "Make (Makefiles)",
    priceNGN: 35000,
    priceUSD: 23,
    priceEUR: 21,
    priceGBP: 18,
    description: "Build Automation, Compilation Management, DevOps",
    category: "Entry Level",
    level: "Beginner"
  }
];

// Add the remaining languages to complete the 100 (using generated data for ones not explicitly detailed)
const extraLanguages = [
    "Solidity", "Rust", "Julia", "C", "SQL", "Assembly", "F#", "Groovy", "Clojure", "OCaml",
    "Erlang", "Haskell", "CoffeeScript", "ActionScript", "Tcl", "Verilog", "Apex", "PL/I",
    "Logo", "PostScript", "Zig", "Nim", "Crystal", "D", "Racket", "APL", "Forth", "Mojo",
    "Ballerina", "Hack", "Vala", "Haxe", "OpenCL", "COBOL", "Fortran", "Ada", "Lisp",
    "Prolog", "Smalltalk", "Pascal", "PL/M", "Simula", "ML", "Miranda", "Modula-2",
    "Oberon", "Component Pascal", "Eiffel", "Dylan", "Self", "Cecil", "Io", "Pike",
    "Falcon", "Squirrel", "Neko", "Haxe", "Euphoria", "REBOL", "Red", "Oz", "Mozart",
    "Curry", "Mercury", "Alice", "ATS", "Clean", "K", "Q", "J", "Wolfram", "Mathematica"
];

const categories = ["Entry Level", "Standard", "Premium", "Advanced"];

extraLanguages.forEach((lang, index) => {
    if (courses.find(c => c.name.toLowerCase() === lang.toLowerCase())) return;
    if (courses.length >= 100) return;

    const catIndex = index % 4;
    const cat = categories[catIndex];
    let priceNGN, priceUSD, priceEUR, priceGBP;

    if (cat === "Entry Level") {
        priceNGN = 15000 + (index % 25) * 1000;
        priceUSD = Math.round(priceNGN / 1500);
        priceEUR = Math.round(priceNGN / 1600);
        priceGBP = Math.round(priceNGN / 1900);
    } else if (cat === "Standard") {
        priceNGN = 50000 + (index % 20) * 1000;
        priceUSD = Math.round(priceNGN / 1500);
        priceEUR = Math.round(priceNGN / 1600);
        priceGBP = Math.round(priceNGN / 1900);
    } else if (cat === "Premium") {
        priceNGN = 80000 + (index % 10) * 1000;
        priceUSD = Math.round(priceNGN / 1500);
        priceEUR = Math.round(priceNGN / 1600);
        priceGBP = Math.round(priceNGN / 1900);
    } else {
        priceNGN = 95000 + (index % 5) * 1000;
        priceUSD = Math.round(priceNGN / 1500);
        priceEUR = Math.round(priceNGN / 1600);
        priceGBP = Math.round(priceNGN / 1900);
    }

    courses.push({
        id: lang.toLowerCase().replace(/ /g, "-"),
        name: lang,
        priceNGN,
        priceUSD,
        priceEUR,
        priceGBP,
        description: `Professional course for ${lang} programming and applications.`,
        category: cat,
        level: index % 3 === 0 ? "Beginner" : index % 3 === 1 ? "Intermediate" : "Advanced"
    });
});
