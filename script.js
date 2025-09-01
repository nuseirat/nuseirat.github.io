const { createApp } = Vue;

createApp({
    data() {
        return {
            showAllProjects: false,
            downloadIcon: 'fas fa-download',
            modalVisible: false,
            modalImageSrc: '',
            currentYear: new Date().getFullYear(),
            
            projects: [
                {
                    id: 1,
                    title: "PatientLog",
                    description: "Patient Management System For Neom Medical Clinics.",
                    image: "images/Plog.svg",
                    link: "https://patientlog.up.railway.app/",
                    technologies: [
                        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
                        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
                    ]
                },
                {
                    id: 2,
                    title: "HireLoop",
                    description: "Smart Job Application Tracker.",
                    image: "images/HireLoop.svg",
                    link: "#",
                    technologies: [
                        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
                        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
                    ]
                },
                {
                    id: 3,
                    title: "AOU GPA Calculator",
                    description: "Arab Open University GPA Calculator",
                    image: "images/gpa.svg",
                    link: "https://aougpa.netlify.app/",
                    technologies: [
                        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
                    ]
                },
                {
                    id: 4,
                    title: "Al-Nusayrat",
                    description: "Alnusayrat Family Website",
                    image: "images/alnusayrat.svg",
                    link: "https://alnusayrat.netlify.app/",
                    technologies: [
                        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
                    ]
                },
                {
                    id: 5,
                    title: "CertifyMaster",
                    description: "A curated list of free courses & certifications.",
                    image: "images/certifymaster.svg",
                    link: "https://certifymaster.netlify.app/",
                    technologies: [
                        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
                    ]
                }
            ],

            awards: [
                {
                    id: 1,
                    title: "Finalist - Future Technologies Competition",
                    institution: "Ministry of Communications and Information Technologies | 2024",
                    description: "Selected as finalist for the project Riwaya Al-Majd among 1000 contestants in a prestigious national technology competition.",
                    icon: "fas fa-trophy"
                },
                {
                    id: 2,
                    title: "Programmer's Day Winner",
                    institution: "Arab Open University | 2023",
                    description: "Recognized for outstanding programming skills in Python for recreating the gmae 2048.",
                    icon: "fas fa-code"
                },
                {
                    id: 3,
                    title: "Graphic Design Award",
                    institution: "Arab Open University | 2022",
                    description: "Awarded for exceptional creativity and technical excellence in graphic design competition for the Saudi Arabia National Day.",
                    icon: "fas fa-palette"
                },
                {
                    id: 4,
                    title: "Poetry Creativity Prize",
                    institution: "Imam Abdulrahman bin Faisal University | 2021",
                    description: "Honored for Writing a Poem about Saudi Arabia Which Got Printed and Published.",
                    icon: "fas fa-feather-alt"
                }
            ],

            tools: [
                { name: "SpringBoot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
                { name: "PowerBI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" }

            ]
        }
    },

    computed: {
        visibleProjects() {
            return this.showAllProjects ? this.projects : this.projects.slice(0, 3);
        }
    },

    methods: {
        showMoreProjects() {
            this.showAllProjects = true;
        },

        showLessProjects() {
            this.showAllProjects = false;
        },

        downloadCV() {
            this.downloadIcon = 'fas fa-spinner fa-spin';
            
            setTimeout(() => {
                this.downloadIcon = 'fas fa-check';
                
                // Create download link
                const link = document.createElement('a');
                link.href = 'Mohammed_AlnuseiratCV.pdf';
                link.download = 'Mohammed_AlnuseiratCV.pdf';
                link.click();
                
                setTimeout(() => {
                    this.downloadIcon = 'fas fa-download';
                }, 1500);
            }, 1000);
        },

        expandImage(event) {
            const img = event.currentTarget.querySelector('img');
            this.modalImageSrc = img.src;
            this.modalVisible = true;
        },

        closeModal() {
            this.modalVisible = false;
        },

        handleMouseMove(e) {
            if (this.$refs.cursor) {
                this.$refs.cursor.style.left = e.clientX + 'px';
                this.$refs.cursor.style.top = e.clientY + 'px';
            }
        },

        handleMouseEnter() {
            if (this.$refs.cursor) {
                this.$refs.cursor.style.transform = 'scale(1.5)';
            }
        },

        handleMouseLeave() {
            if (this.$refs.cursor) {
                this.$refs.cursor.style.transform = 'scale(1)';
            }
        }
    },

    mounted() {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });

        // Custom cursor events
        document.addEventListener('mousemove', this.handleMouseMove);
        
        // Add hover effects to interactive elements
        document.querySelectorAll('a, button, .project-image, .tool-card').forEach(element => {
            element.addEventListener('mouseenter', this.handleMouseEnter);
            element.addEventListener('mouseleave', this.handleMouseLeave);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    },

    beforeUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
    }
}).mount('#app');