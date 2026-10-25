const projectGrid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(filter = "all") {
    if (!projectGrid) return;
    projectGrid.innerHTML = "";

    const filteredProjects = filter === "all" 
        ? projectsData 
        : projectsData.filter(p => p.categories.includes(filter));

    filteredProjects.forEach(project => {
        const card = document.createElement("a");
        card.href = `project.html?slug=${project.slug}`;
        card.className = "project-card";

        const pillsHTML = project.categories.map(cat => {
            let pillClass = "pill-software";
            if (cat.trim() === "Games") pillClass = "pill-games";
            if (cat.trim() === "Leadership & Activities") pillClass = "pill-leadership";

            return `<span class="project-category-pill ${pillClass}">${cat}</span>`;
        }).join("");
        
        card.innerHTML = `
            <div class="project-image-container">
                ${project.coverImage ? `<img src="${project.coverImage}" alt="${project.title}">` : '<span style="color: #666; font-size: 0.85rem;">Preview</span>'}
            </div>
            <div class="project-content">
                <div class="pills-container">${pillsHTML}</div>
                <h3 class="project-title">${project.title}</h3>
                ${project.role ? `<span class="project-role">${project.role}</span>` : ""}
                <p class="project-desc">${project.description}</p>
            </div>
        `;

        projectGrid.appendChild(card);
    });
}

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            const selectedFilter = button.getAttribute("data-filter");
            renderProjects(selectedFilter);
        });
    });
}

renderProjects();