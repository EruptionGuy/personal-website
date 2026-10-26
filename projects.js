const projectsData = [
    {
        slug: "viet-masters",
        title: "Viet Masters",
        role: "Independent Developer",
        categories: ["Games"],
        description: "A Roblox game exploring Vietnamese language, grammar, vocabulary, and culture.",
        coverImage: "images/viet-masters/cover.webp",
        duration: "2024 – Present",
        introduction: "A Roblox game exploring Vietnamese language, grammar, vocabulary, and culture through immersive gameplay.",
        links: [
            { label: "Play on Roblox", url: "https://roblox.com", icon: "fa-solid fa-gamepad" }
        ],
        sections: [
            {
                heading: "Development & Gameplay",
                text: "Designed built-in learning mechanics that challenge players with language puzzles and cultural trivia.",
                imageFolder: "images/viet-masters/",
                totalImages: 7,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "econ-city",
        title: "Econ City",
        role: "Independent Developer",
        categories: ["Games"],
        description: "A Roblox city-building simulator focused on economic systems and urban development.",
        coverImage: "",
        duration: "2025",
        introduction: "A Roblox city-building simulator focused on economic systems, tax policies, supply-demand balancing, and urban development.",
        links: [
            { label: "Roblox Game", url: "https://roblox.com", icon: "fa-solid fa-gamepad" }
        ],
        sections: [
            {
                heading: "Economic Mechanics",
                text: "Players act as policymakers adjusting parameters like tax rates, subsidies, and government spending to observe macroeconomic fluctuations.",
                imageFolder: "images/econ-city/",
                totalImages: 0,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "econ-club",
        title: "eCON Club",
        role: "Founder & Developer",
        categories: ["Leadership & Activities", "Software"],
        description: "A student-led economics club exploring business, markets, and financial literacy.",
        coverImage: "images/econ/10.webp",
        duration: "2025 – Present",
        introduction: "A student-led economics club exploring business, markets, and financial literacy through modern digital tools, collaborative projects, and interactive community learning.",
        links: [
            { label: "Live Website", url: "https://example.com", icon: "fa-solid fa-globe" },
            { label: "GitHub", url: "https://github.com", icon: "fa-brands fa-github" }
        ],
        sections: [
            {
                heading: "Economics Education Website",
                text: "An interactive online platform designed to make macroeconomic concepts, market trends, and financial fundamentals intuitive and accessible for students.",
                embedUrl: "https://economicsclubblog.vercel.app"
            },
            {
                heading: "Club Activities & Initiatives",
                text: "A look into our workshops, student-led forums, and community projects where members analyze real-world economic scenarios.",
                imageFolder: "images/econ/",
                totalImages: 20,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "vietnam-youth-economics-summer-forum",
        title: "Vietnam Youth Economics Summer Forum",
        role: "Vice President",
        categories: ["Leadership & Activities", "Software"],
        description: "A youth forum bringing students together to discuss AI governance and its impact.",
        coverImage: "images/vyesf/41.webp",
        duration: "2025",
        introduction: "A youth forum bringing students together to discuss AI governance, modern economic shifts, and collaborative sustainability endeavors.",
        links: [
            { label: "Forum Portal", url: "https://example.com", icon: "fa-solid fa-globe" }
        ],
        sections: [
            {
                heading: "Panels & Discussions",
                text: "Coordinated guest speakers, student debates, and interactive workshops centered around digital economic trends.",
                imageFolder: "images/vyesf/",
                totalImages: 41,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "prism-computer-science-club",
        title: "Prism Computer Science Club",
        role: "President",
        categories: ["Leadership & Activities"],
        description: "A student-led computer science club on programming, software development, expanding access to technology education",
        coverImage: "images/prism/2.webp",
        duration: "2025 – Present",
        introduction: "A student-led computer science club on programming, software development, expanding access to technology education.",
        links: [],
        sections: [
            {
                heading: "Overview",
                text: "Focusing on collaborative coding projects, workshops, and building technical tools for the school community.",
                imageFolder: "images/prism/",
                totalImages: 12,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "vietnam-british-parliamentary-championship",
        title: "Vietnam British-Parliamentary Championship",
        role: "Volunteer",
        categories: ["Leadership & Activities"],
        description: "I volunteered",
        coverImage: "images/vbc/12.webp",
        duration: "2025",
        introduction: "Volunteered and contributed to the organization of the national British-Parliamentary debating championship.",
        links: [],
        sections: [
            {
                heading: "Event Support",
                text: "Assisted with operations, participant coordination, and event logistics.",
                imageFolder: "images/vbc/",
                totalImages: 12,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "wellspring-international-ambassadors",
        title: "Wellspring International Ambassadors",
        role: "Confidence Committee",
        categories: ["Leadership & Activities"],
        description: "A student group representing the school and supporting its community.",
        coverImage: "images/ambass/3.webp",
        duration: "2025 – Present",
        introduction: "A student group representing the school and supporting its community initiatives.",
        links: [],
        sections: [
            {
                heading: "Community & Leadership",
                text: "Represented student body perspectives and fostered a supportive, confident school environment.",
                imageFolder: "images/ambass/",
                totalImages: 8,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "world-robotics-olympiad",
        title: "World Robotics Olympiad",
        role: "Competitor",
        categories: ["Leadership & Activities"],
        description: "A robotics competition combining programming, engineering, and teamwork.",
        coverImage: "images/wro/9.webp",
        duration: "2024",
        introduction: "A competitive robotics initiative combining algorithmic programming, mechanical design, and tactical engineering.",
        links: [],
        sections: [
            {
                heading: "Build & Competition",
                text: "Engineered autonomous robots and programmed control logic to solve complex arena challenges.",
                imageFolder: "images/wro/",
                totalImages: 13,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "wellspring-photography-club",
        title: "Wellspring Photography Club",
        role: "Vice Head of Projects",
        categories: ["Leadership & Activities"],
        description: "A student photography club focused on capturing and sharing school life.",
        coverImage: "images/wpc/cover.webp",
        duration: "2025 – Present",
        introduction: "A student photography club focused on capturing, curating, and sharing school life and major events.",
        links: [],
        sections: [
            {
                heading: "Visual Storytelling",
                text: "Managed coverage for campus events and directed visual curation projects.",
                imageFolder: "images/wpc/",
                totalImages: 40,
                useAutoGallery: true
            }
        ]
    },
    {
        slug: "other-roblox-developments",
        title: "Other Roblox Developments",
        categories: ["Games"],
        description: "A collection of Roblox builds that I have made over the past 7 years.",
        coverImage: "images/roblox/cover.webp",
        duration: "2018 – Present",
        introduction: "A collection of architectural builds and gameplay systems developed on Roblox over the past 7 years.",
        links: [],
        sections: [
            {
                heading: "Portfolio & Creations",
                text: "Explore various environments, scripting experiments, and level designs created over the years.",
                imageFolder: "images/roblox/",
                totalImages: 16,
                useAutoGallery: true
            }
        ]
    }
];