const projectData = {
    "cpp-traffic": {
        title: "3D Traffic AI Simulation (Work in progress)",
        tags: `<span class="tag tag-cpp">C++</span> <span class="tag">Raylib</span> <span class="tag">AI</span>`,
        description: `
            <h3>The Goal</h3>
            <p>Creating an efficient, scalable 3D traffic simulation with realistic AI-driven vehicle behavior.</p>
            <h3>Performance Optimization</h3>
            <p>The system's core data is implemented as a structure of Arrays (SOA) for fast data access in large amount of cars.<br> Positions are presented as a street id and a progress value along the road between (0, 1).<br> The map is presented as a directed graph with streets as edges and intersections as nodes</p>      
            <h3>The AI Kinematics & Pipeline</h3>
            <p>To keep the traffic lively and well disturbuted. I implemented a navigation system that gives each car a unique destination that matches the needs of the simulation, Then the car finds the optimal path considering the traffic density and distance using weighted graph and a* algorithm.<br> cars behave realstically in line changing and standard interssection priorities </p>
            <h3>Object pooling and Car spawning</h3>
            <p>To optimize the simulation's performance, I implemented an object pooling system that recycles vehicle objects rather than constantly instantiating and destroying them. Cars enter and exit the simulation at designated locations called 'garages.' The system dynamically manages traffic density: if the active car count falls below the target threshold, the garages increase their spawn rate. Conversely, if there are too many active cars, the system doesn't simply delete them in the middle of the road. Instead, the navigation system seamlessly routes excess vehicles to the nearest garage to despawn naturally, maintaining the simulation's realism.</p>
        `,  
        githubLink: "#", 
        itchLink: "#" 
    },
    "cpp-opengl": {
        title: "OpenGL Rendering Pipeline",
        tags: `<span class="tag tag-cpp">C++</span> <span class="tag">OpenGL</span> <span class="tag">GLSL</span>`,
        description: `
            <h3>The Goal</h3>
            <p>A custom graphics rendering pipeline written from scratch to understand hardware interaction and dynamic shader math.</p>
            <h3>Key Systems</h3>
            <ul>
                <li><strong>Interactive Transformations:</strong> Fully supports real-time translation, rotation, and camera projection calculations.</li>
                <li><strong>Dynamic Shader Engine:</strong> Engineered a loader system supporting hot-swapping multiple vertex/fragment shader programs during runtime without pipeline interruption.</li>
                <li><strong>Infinite Generation:</strong> Rendered an optimized infinite scroller street system as a testing ground.</li>
            </ul>
        `,
        githubLink: "https://github.com/Anasamr05/C-codes", 
        itchLink: "#" 
    },
    "cpp-raytracer": {
        title: "C++ Software Raytracer",
        tags: `<span class="tag tag-cpp">C++</span> <span class="tag">Math</span>`,
        description: `
            <h3>The Goal</h3>
            <p>A pure CPU-bound software raytracer implementing raw vector math to calculate lighting and materials.</p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>Intersection Algorithms:</strong> Built mathematical models tracking ray collision math on diverse primitive geometries.</li>
                <li><strong>Material Shading:</strong> Built customizable specular, diffuse, and reflective material system matrices.</li>
                <li><strong>Recursive Refraction:</strong> Features customizable recursive ray tracking to generate detailed physical bounce-lighting reflections.</li>
            </ul>
        `,
        githubLink: "https://github.com/Anasamr05/RayTracer", 
        itchLink: "#" 
    },
    "unity-automata": {
        title: "Automata Theory Simulation Suite",
        tags: `<span class="tag tag-unity">Unity/C#</span> <span class="tag">Computer Science</span>`,
        description: `
            <h3>The Goal</h3>
            <p>An interactive educational suite translating abstract CS theory into dynamic computational diagrams, improving comprehension of formal automata languages.</p>
            <h3>The Pipeline</h3>
            <ul>
                <li><strong>Recursive Descent Parsing:</strong> Custom token parser transforming raw Regular Expressions into Abstract Syntax Trees (AST).</li>
                <li><strong>State Machine Transformations:</strong> Built processing compilers translating the AST into an NFA (Thompson's Construction), evaluating it into a DFA (Subset Construction), and minimizing states via Moore's Partition Refinement.</li>
                <li><strong>Visual Node Generation:</strong> Automatically maps visual graph states in real time, drawing state changes, epsilons, and accepting nodes interactively.</li>
            </ul>
        `,
        githubLink: "https://github.com/Anasamr05/Automata-simulator", 
        itchLink: "#" 
    },
    "unity-runner": {
        title: "Realistic Highway Driving",
        tags: `<span class="tag tag-unity">Unity/C#</span> <span class="tag">Physics</span>`,
        description: `
            <h3>The Goal</h3>
            <p>A driving game emphasizing extreme modularity, customized kinematics, and high performance.</p>
            <h3>Modular Drive & Scanning Systems</h3>
            <p>Rather than using arcade physics, acceleration, braking, and turning are derived from discrete mathematical configurations. Custom script parameters manage distinct profile specifications for multiple select cars.</p>
            <h3>Traffic AI Decision Engines</h3>
            <p>NPC traffic dynamically scans front and lateral spatial corridors using customized raycasts. Traffic reacts, switches lanes, slows down, and controls speed curves dynamically across four active highway lanes.</p>
        `,
        githubLink: "#", 
        itchLink: "#" 
    },
    "unity-platformer": {
        title: "Modular 2D Platformer (work in progress)",
        tags: `<span class="tag tag-unity">Unity/C#</span> <span class="tag">Architecture</span>`,
        description: `
            <h3>The Goal</h3>
            <p>A high-performance physics-driven 2D platformer engineered to support massive custom rulesets dynamically.</p>
            <h3>Key Architecture</h3>
            <ul>
                <li><strong>Mesh-Based Vision:</strong> Features an optimized, custom mesh vision system determining line-of-sight tracking.</li>
                <li><strong>ScriptableObject Pipelines:</strong> Leverages decoupled data assets to manage levels, allowing modular, rapid designer iteration.</li>
                <li><strong>Physics Kinematics:</strong> Designed with customized optical ray mechanics to support laser reflection, refraction, and filter interactions cleanly.</li>
            </ul>
        `,
        githubLink: "#", 
        itchLink: "#" 
    },
    "unity-magnet": {
        title: "3D Magnet Multiplayer Game",
        tags: `<span class="tag tag-unity">Unity/C#</span> <span class="tag">Networking</span>`,
        description: `
            <h3>The Goal</h3>
            <p>A score-based 3D multiplayer collection game designed to stress-test local loop architecture, networking structures, and modular powerups.</p>
            <h3>Implementation Notes</h3>
            <p>Developed clean, component-based architectures for pickups, real-time score increments, and multiplayer state updates. This system was designed to optimize tick cycles and establish reliable state-sync protocols.</p>
        `,
        githubLink: "#", 
        itchLink: "#" 
    }
};

// Modal System Architecture
const modal = document.getElementById("project-modal");
const modalVisual = document.getElementById("modal-visual");
const closeBtn = document.querySelector(".close-btn");
const openBtns = document.querySelectorAll(".open-modal");

openBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const projectId = this.getAttribute("data-id");
        const data = projectData[projectId];

        if(data) {
            // Check if the project is the unity-runner to inject a video, otherwise inject an image
            if (projectId === 'unity-runner') {
                modalVisual.innerHTML = `<video src="assets/${projectId}.mp4" autoplay loop muted playsinline style="width: 100%; height: auto; max-height: 400px; object-fit: cover; border-radius: 8px;"></video>`;
            } else {
                // IMPORTANT: Change .jpg to .png below if your files are PNGs!
                modalVisual.innerHTML = `<img src="assets/${projectId}.jpg" alt="${data.title}" style="width: 100%; height: auto; max-height: 400px; object-fit: cover; border-radius: 8px;">`;
            }

            document.getElementById("modal-title").innerText = data.title;
            document.getElementById("modal-tags").innerHTML = data.tags;
            document.getElementById("modal-description").innerHTML = data.description;
            
            const ghBtn = document.getElementById("modal-github");
            ghBtn.href = data.githubLink;
            // Hide GitHub button if it points to an empty hash #
            ghBtn.style.display = data.githubLink === "#" ? "none" : "inline-block";

            const itchBtn = document.getElementById("modal-itch");
            itchBtn.href = data.itchLink;
            // Hide Play Tech Demo button if it points to an empty hash #
            itchBtn.style.display = data.itchLink === "#" ? "none" : "inline-block";

            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Stop background scroll
        }
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
    modalVisual.innerHTML = ""; // Clear the video/image to stop playback
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        modalVisual.innerHTML = ""; // Clear the video/image to stop playback
    }
});