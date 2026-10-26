// ==========================================
// PAGE INITIALIZATION & RENDERING
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("slug");
const project = projectsData.find(p => p.slug === slug);

const container = document.getElementById("projectDetailContainer");

if (!project) {
    container.innerHTML = `
        <div style="text-align: center; padding: 100px 20px;">
            <h1>Project Not Found</h1>
            <p style="color: var(--text-secondary); margin: 20px 0;">The project you are looking for does not exist.</p>
            <a href="work.html" class="filter-btn active" style="text-decoration: none; display: inline-block;">Back to My Work</a>
        </div>
    `;
} else {
    document.title = `${project.title} | Vũ Lê Trung Hiếu`;

    // Render FontAwesome Links
    let linksHTML = "";
    if (project.links && project.links.length > 0) {
        linksHTML = `<div class="project-detail-links">` + 
            project.links.map(l => `
                <a href="${l.url}" target="_blank" class="project-link-badge">
                    <i class="${l.icon}"></i>
                    <span>${l.label}</span>
                </a>
            `).join("") +
            `</div>`;
    }

    let sectionsHTML = "";
    project.sections.forEach((sec, index) => {
        let galleryHTML = "";
        if (sec.useAutoGallery && sec.imageFolder) {
            galleryHTML = `<div class="masonry-gallery" id="gallery-${index}"></div>`;
        }

        // Support both a single 'embedUrl' string OR an 'embedUrls' array
        let embedHTML = "";
        const urlsToEmbed = [];
        
        if (sec.embedUrls && Array.isArray(sec.embedUrls)) {
            urlsToEmbed.push(...sec.embedUrls);
        } else if (sec.embedUrl) {
            urlsToEmbed.push(sec.embedUrl);
        }

        if (urlsToEmbed.length > 0) {
            const frames = urlsToEmbed.map(url => `
                <div class="video-embed-container">
                    <iframe src="${url}" title="${sec.heading}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            `).join("");

            embedHTML = `<div class="video-embed-grid">${frames}</div>`;
        }

        sectionsHTML += `
            <section class="project-section">
                <h2>${sec.heading}</h2>
                ${sec.text ? `<p>${sec.text}</p>` : ""}
                ${embedHTML}
                ${galleryHTML}
            </section>
        `;
    });

    container.innerHTML = `
        <div class="project-detail-header">
            <a href="work.html" class="back-link">← Back to My Work</a>
            <h1 class="project-detail-title">${project.title}</h1>
            <div class="project-meta-info">
                ${project.role ? `<span><strong>Role:</strong> ${project.role}</span>` : ""}
                ${project.duration ? `<span><strong>Duration:</strong> ${project.duration}</span>` : ""}
            </div>
            <p class="project-detail-intro">${project.introduction}</p>
            ${linksHTML}
        </div>

        ${project.coverImage ? `
            <div class="project-hero-image">
                <img src="${project.coverImage}" alt="${project.title} Cover">
            </div>
        ` : ""}

        <div class="project-sections-wrapper">
            ${sectionsHTML}
        </div>
    `;

    // Trigger image discovery for sections requiring it
    project.sections.forEach((sec, index) => {
        if (sec.useAutoGallery && sec.imageFolder) {
            const galleryEl = document.getElementById(`gallery-${index}`);
            loadNumberedImagesIntoGallery(sec.imageFolder, sec.totalImages, galleryEl);
        }
    });
}

// ==========================================
// GALLERY DISCOVERY & LIGHTBOX
// ==========================================
function loadNumberedImagesIntoGallery(folderPath, totalImages, galleryElement) {
    if (!galleryElement || !totalImages) return;

    const extensions = ["jpg", "png", "webp"];

    for (let i = 1; i <= totalImages; i++) {
        extensions.forEach(ext => {
            const imgUrl = `${folderPath}${i}.${ext}`;
            const imgTest = new Image();

            imgTest.onload = function() {
                if (galleryElement.querySelector(`img[data-num="${i}"]`)) return;

                const item = document.createElement("div");
                item.className = "masonry-item";
                item.innerHTML = `<img src="${imgUrl}" data-num="${i}" alt="Gallery image ${i}" loading="lazy">`;

                item.querySelector("img").addEventListener("click", () => {
                    openLightbox(imgUrl);
                });

                insertInOrder(galleryElement, item, i);
            };

            imgTest.src = imgUrl;
        });
    }
}

function insertInOrder(container, newItem, number) {
    const existingItems = Array.from(container.children);
    const target = existingItems.find(child => {
        const img = child.querySelector("img");
        return img && parseInt(img.getAttribute("data-num"), 10) > number;
    });

    if (target) {
        container.insertBefore(newItem, target);
    } else {
        container.appendChild(newItem);
    }
}

function openLightbox(src) {
    const modal = document.getElementById("lightbox");
    const modalImg = document.getElementById("lightboxImg");
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = src;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("lightbox");
    const closeBtn = document.querySelector(".lightbox-close");
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});