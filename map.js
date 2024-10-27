const roadmaps = {
    "Frontend Roadmap": "https://roadmap.sh/frontend",
    "Frontend Beginner Roadmap": "https://roadmap.sh/frontend?r=frontend-beginner",
    "Backend Roadmap": "https://roadmap.sh/backend",
    "Backend Beginner Roadmap": "https://roadmap.sh/backend?r=backend-beginner",
    "DevOps Roadmap": "https://roadmap.sh/devops",
    "DevOps Beginner Roadmap": "https://roadmap.sh/devops?r=devops-beginner",
    "Full Stack Roadmap": "https://roadmap.sh/full-stack",
    "Git and GitHub": "https://roadmap.sh/git-github",
    "API Design Roadmap": "https://roadmap.sh/api-design",
    "Computer Science Roadmap": "https://roadmap.sh/computer-science",
    "Data Structures and Algorithms Roadmap": "https://roadmap.sh/datastructures-and-algorithms",
    "AI and Data Scientist Roadmap": "https://roadmap.sh/ai-data-scientist",
    "AI Engineer Roadmap": "https://roadmap.sh/ai-engineer",
    "AWS Roadmap": "https://roadmap.sh/aws",
    "Linux Roadmap": "https://roadmap.sh/linux",
    "Terraform Roadmap": "https://roadmap.sh/terraform",
    "Data Analyst Roadmap": "https://roadmap.sh/data-analyst",
    "MLOps Roadmap": "https://roadmap.sh/mlops",
    "Product Manager Roadmap": "https://roadmap.sh/product-manager",
    "QA Roadmap": "https://roadmap.sh/qa",
    "Python Roadmap": "https://roadmap.sh/python",
    "Software Architect Roadmap": "https://roadmap.sh/software-architect",
    "Game Developer Roadmap": "https://roadmap.sh/game-developer",
    "Server Side Game Developer": "https://roadmap.sh/server-side-game-developer",
    "Software Design and Architecture Roadmap": "https://roadmap.sh/software-design-architecture",
    "JavaScript Roadmap": "https://roadmap.sh/javascript",
    "TypeScript Roadmap": "https://roadmap.sh/typescript",
    "C++ Roadmap": "https://roadmap.sh/cpp",
    "React Roadmap": "https://roadmap.sh/react",
    "React Native Roadmap": "https://roadmap.sh/react-native",
    "Vue Roadmap": "https://roadmap.sh/vue",
    "Angular Roadmap": "https://roadmap.sh/angular",
    "Node.js Roadmap": "https://roadmap.sh/nodejs",
    "GraphQL Roadmap": "https://roadmap.sh/graphql",
    "Android Roadmap": "hhttps://roadmap.sh/android",
    "iOS Roadmap": "https://roadmap.sh/ios",
    "Flutter Roadmap": "https://roadmap.sh/flutter",
    "Go Roadmap": "https://roadmap.sh/golang",
    "Rust Roadmap": "https://roadmap.sh/rust",
    "Java Roadmap": "https://roadmap.sh/java",
    "Spring Boot Roadmap": "https://roadmap.sh/spring-boot",
    "Design System Roadmap": "https://roadmap.sh/design-system",
    "PostgreSQL Roadmap": "https://roadmap.sh/postgresql-dba",
    "SQL Roadmap": "https://roadmap.sh/sql",
    "Redis Roadmap": "https://roadmap.sh/redis",
    "Blockchain Roadmap": "https://roadmap.sh/blockchain",
    "ASP.NET Core Roadmap": "https://roadmap.sh/aspnet-core",
    "System Design Roadmap": "https://roadmap.sh/system-design",
    "Kubernetes Roadmap": "https://roadmap.sh/kubernetes",
    "Cyber Security Roadmap": "https://roadmap.sh/cyber-security",
    "MongoDB Roadmap": "https://roadmap.sh/mongodb",
    "UX Design Roadmap": "https://roadmap.sh/ux-design",
    "Docker Roadmap": "https://roadmap.sh/docker",
    "Prompt Engineering Roadmap": "https://roadmap.sh/prompt-engineering",
    "Technical Writer Roadmap": "https://roadmap.sh/technical-writer",
    "DevRel Engineer Roadmap": "https://roadmap.sh/devrel",
    // Best Practices
    
    "Backend Performance Best Practices": "https://roadmap.sh/best-practices/backend-performance",
    "Frontend Performance Best Practices": "https://roadmap.sh/best-practices/frontend-performance",
    "Code Review Best Practices": "https://roadmap.sh/best-practices/code-review",
    "API Security Best Practices": "https://roadmap.sh/best-practices/api-security",
    "AWS Best Practices": "https://roadmap.sh/best-practices/aws"
};


const roadmapContainer = document.getElementById('roadmapContainer');
const searchBar = document.getElementById('searchBar');

// Function to display roadmaps based on filter
function displayRoadmaps(filter = '') {
    roadmapContainer.innerHTML = ''; // Clear existing roadmaps
    Object.keys(roadmaps)
        .filter(item => item.toLowerCase().includes(filter.toLowerCase())) // Filter roadmaps based on search input
        .forEach((item) => {
            const btnDiv = document.createElement('div');
            btnDiv.classList.add('btn');

            const link = document.createElement('a');
            link.href = roadmaps[item];
            link.target = '_blank';
            link.innerText = item;

            btnDiv.appendChild(link);
            roadmapContainer.appendChild(btnDiv); // Add filtered roadmaps to the container
        });
}

// Add event listener for search input
searchBar.addEventListener('input', () => displayRoadmaps(searchBar.value));

// Initial display of all roadmaps
displayRoadmaps();
