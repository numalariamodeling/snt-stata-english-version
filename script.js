function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function loadContent(page) {
    const content = {
        overview: `
            <h3 class="sidebar-title">Version: 3 October 2024 </h3>
            <h3 class="sidebar-title">Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin </h3>
            <h2>Overview</h2>
            <h3>Motivation</h3>
            <p>SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs. Since 2019, multiple individuals have supported the analysis portions of SNT. In most cases, individuals have built their own code in a variety of languages (Stata, R, and Python), sometimes building on others’ previous code and sometimes re-developed independently.
           
As SNT matures, more quality assurance is needed such that NMCPs can be confident that the analysis they use to inform their decisions is of high quality regardless of the individual supporting analyst. The continued rollout of SNT also means that analysis can become more efficient if analysts are better able to build on each other’s work rather than tempted to reinvent what has already been developed. Lastly, SNT analysis can become much more accessible if there is a common resource available to help those with intermediate coding skills quickly access the collective knowledge of the SNT analyst community.
.</p>

            <h3>Objectives</h3>
            <p>We will build a code library for SNT analysis to:
            <p>1. Improve quality and reproducibility of SNT analysis by ensuring that analysts are using similar, correct approaches.</p>
            <p>2. Improve efficiency of SNT analysis by minimizing duplication of effort.</p>
            <p>3. Promote accessibility of SNT analysis by lowering barriers to entry.</p>


            <h3>Target audience</h3>
            <p>Anyone doing this kind of work. We assume some basic knowledge of R, some understanding of the data, and a strong connection to the NMCP.</p>

            <h3>Scope</h3>
            <p>All analysis steps of SNT up to but not including mathematical modeling; some related analysis.</p>
        `,

        shapefiles: `
            
            <div class="fixed-buttons id="fixedButtons">
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="stepByStep" onclick="scrollToSection('stepByStep')">Step-by-step</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Full code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Sample results</button>
            </div>

            <h5>A. Data Assembly and Management/Shapefiles</h5>
            <h3 style="color: #47B5FF;">Shapefiles</h3>
         
            <p>Administrative Units represent different levels of geographic division within a country. These units are typically organized hierarchically:</p>
        
            <p>(i).Admin 1: Refers to a primary division, such as states or provinces</p>
            <p>(ii).Admin 2: Refers to a subdivision of Admin 1, such as districts or counties.</p>
            <p>(iii).Admin 3: Refers to smaller divisions, such as municipalities or wards.</p>
            <p>  </p>
            <h5>Overlaying Shapefiles:</h5>   
            <p>This allows you to visualize relationships between these different administrative layers, such as overlaying administrative boundaries of districts (Admin 2) with those of provinces (Admin 1). This is useful for visual analysis, spatial operations, and understanding how different areas relate geographically.</p>
            <div class="round-buttons">
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-code-library-english-version/#Overview';">View R EN</button>
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-code-library-french-version/#Overview';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-python-english-version/#Overview';">View py EN</button>
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-python-french-version/#Overview';">View py FR</button>
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-stata-french-version/#Overview';">View St FR</button>
            </div>
            
            <h4 id="stepByStep">Step-by-step guide</h4>
            <h5 style="color: #ADD8E6;">Step 1: </h5>
            
            <p></p>
            <p>This can be done using the following code:</p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




            </code></pre>          
            <h5 style="color: #ADD8E6;">Step 2: </h5>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>            





            </code></pre>
            <p> </p> 
            <p> </p>
            <p> </p>
            
            <h5 style="color: #ADD8E6;">Step 3: </h5>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>





            </code></pre>
                
            <h5 style="color: #ADD8E6;">Step 4: </h5>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>







            </code></pre>
            <p> </p>
            <p> </p>
            <p> </p>
            <p>(iv) </p>
            <p>(v) </p>
            <p> </p>
            <p> </p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>

















                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Sample results</h3>
            <img src="https://raw.githubusercontent.com/numalariamodeling/snt-code-library-english-version/a204dc53be5209fc170acbfbb5db8900930a80fa/MAP_PYTHON.png" alt="Sample Results">;
            

        `,

    };

    document.getElementById('content').innerHTML = content[page];
}

window.onload = function() {
    // Get the current URL
    const currentUrl = window.location.href;

    // Example 1: Load 'overview' if URL contains '#Overview'
    if (currentUrl.includes('#Overview')) {
        loadContent('overview');
    }

    // Example 2: Load 'shapefiles' if URL contains '#Shapefiles'
    if (currentUrl.includes('#shapefiles')) {
        loadContent('shapefiles');
    }

    // Example 3: Load 'data-management' if URL contains '#DataManagement'
    if (currentUrl.includes('#hf')) {
        loadContent('hf');
    }
};



// Function to scroll to the section when the button is clicked
function scrollToSection(sectionId) {
    // Scroll to the specific section smoothly
    document.getElementById(sectionId).scrollIntoView({ behavior: 'auto' });
    
    // Remove the 'active' class from all buttons
    document.querySelectorAll('.text-button').forEach(button => button.classList.remove('active'));
    
    // Add the 'active' class to the clicked button
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// Function to check which section is at the top and update the active button
function handleScroll() {
    const sections = ['stepByStep', 'sampleR', 'fullCode'];
    let activeSection = null;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const rect = section.getBoundingClientRect();
        
        // Check if the section is exactly at the top of the viewport
        if (rect.top <= 0 && rect.bottom >= 0) {
            activeSection = sectionId;
        }
    });

    // Remove the 'active' class from all buttons
    document.querySelectorAll('.text-button').forEach(button => button.classList.remove('active'));

    // Add the 'active' class to the button corresponding to the section at the top
    if (activeSection) {
        document.querySelector(`[data-section="${activeSection}"]`).classList.add('active');
    }
}

// Attach the scroll event listener to update the active button based on scroll position
window.addEventListener('scroll', handleScroll);


function copyCode() {
    const codeBlock = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}

document.querySelector('.search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-link, .menu-header');
    
    menuItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block'; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
});

// Function to handle link selection
function selectLink(selectedLink) {
    // Remove 'selected' class from all links
    var links = document.getElementsByClassName('menu-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
    }
    // Add 'selected' class to the clicked link
    selectedLink.classList.add('selected');
}

function toggleMenu(menuHeader) {
    var submenu = menuHeader.nextElementSibling; // Get the submenu
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block"; // Show the submenu
        menuHeader.querySelector('.menu-indicator').textContent = 'v'; // Change indicator to 'v'
    } else {
        submenu.style.display = "none"; // Hide the submenu
        menuHeader.querySelector('.menu-indicator').textContent = '>'; // Change indicator back to '>'
    }
}

// Add styles for rectangular buttons
const styles = `
    .rect-buttons {
        display: flex;
        gap: 10px; /* Adds space between the buttons */
        margin-top: 10px;
    }

    .rect-button {
        width: 100px;  /* Set width to make the button rectangular */
        height: 40px;  /* Set height for better visibility */
        border-radius: 5px; /* Small radius for slightly rounded corners, or set to 0 for sharp edges */
        border: none;
        background-color: #47B5FF;
        color: white;
        font-size: 14px;
        cursor: pointer;
    }
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);     





document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.fixed-buttons');

    function changeButtonColorOnScroll() {
        if (window.scrollY > 50) { // Change '100' to the scroll distance you want
            button.classList.add('scrolled');
        } else {
            button.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', changeButtonColorOnScroll);
});
















document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.text-button');
    const headings = document.querySelectorAll('h3'); // All headings to track

    function updateButtonState() {
        // Get the current scroll position
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Loop through all headings
        headings.forEach((heading) => {
            const headingTop = heading.offsetTop;

            if (scrollPosition >= headingTop) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateButtonState);
    updateButtonState(); // Initial call in case already scrolled
});
