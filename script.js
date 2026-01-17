// استيراد createApp من Vue 3 من الـ CDN
const { createApp } = Vue;

createApp({
    data() {
        return {
            // تحكم في إظهار كل المشاريع أو أول 3 فقط
            showAllProjects: false,

            // الأيقونة الحالية لزر تحميل الـ CV
            downloadIcon: 'fas fa-download',

            // خصائص المودال الخاص بعرض صورة المشروع
            modalVisible: false,
            modalImageSrc: '',

            // السنة الحالية للفوتر
            currentYear: new Date().getFullYear(),
            
            // ===== المشاريع =====
            // تم حذف PatientLog و HireLoop
            // تمت إضافة مشروع Watad كأول مشروع في القائمة
            projects: [
                {
                    id: 1,
                    title: "Watad",
                    description: "Watad platform built with TypeScript and PostgreSQL (PL/pgSQL) for robust data handling.",
                    image: "images/watad.svg", // تأكد من وجود الملف في مجلد images
                    link: "#", // عدّل الرابط إذا كان للمشروع رابط مباشر
                    technologies: [
                        // TypeScript icon من devicon (CDN)
                        { 
                            name: "TypeScript", 
                            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                        },
                        // PostgreSQL icon من devicon (يدعم PL/pgSQL بما أنه جزء من PostgreSQL)
                        { 
                            name: "PostgreSQL (PL/pgSQL)", 
                            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                        }
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

            // ===== الجوائز =====
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

            // ===== الأدوات والتقنيات =====
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
        // ترجع إما كل المشاريع أو أول 3 فقط حسب حالة showAllProjects
        visibleProjects() {
            return this.showAllProjects ? this.projects : this.projects.slice(0, 3);
        }
    },

    methods: {
        // عرض كل المشاريع
        showMoreProjects() {
            this.showAllProjects = true;
        },

        // إخفاء المشاريع الإضافية وإظهار أول 3 فقط
        showLessProjects() {
            this.showAllProjects = false;
        },

        // منطق تحميل الـ CV مع تغيير الأيقونة لإحساس أفضل للمستخدم
        downloadCV() {
            this.downloadIcon = 'fas fa-spinner fa-spin';
            
            setTimeout(() => {
                this.downloadIcon = 'fas fa-check';
                
                // إنشاء رابط تنزيل للملف
                const link = document.createElement('a');
                link.href = 'Mohammed_AlnuseiratCV.pdf';
                link.download = 'Mohammed_AlnuseiratCV.pdf';
                link.click();
                
                setTimeout(() => {
                    this.downloadIcon = 'fas fa-download';
                }, 1500);
            }, 1000);
        },

        // فتح المودال مع صورة المشروع المكبرة
        expandImage(event) {
            const img = event.currentTarget.querySelector('img');
            this.modalImageSrc = img.src;
            this.modalVisible = true;
        },

        // إغلاق المودال
        closeModal() {
            this.modalVisible = false;
        },

        // تحريك المؤشر المخصص مع حركة الماوس
        handleMouseMove(e) {
            if (this.$refs.cursor) {
                this.$refs.cursor.style.left = e.clientX + 'px';
                this.$refs.cursor.style.top = e.clientY + 'px';
            }
        },

        // تكبير المؤشر عند دخول العناصر التفاعلية (روابط، أزرار، كروت)
        handleMouseEnter() {
            if (this.$refs.cursor) {
                this.$refs.cursor.style.transform = 'scale(1.5)';
            }
        },

        // إعادة المؤشر لحجمه الطبيعي عند الخروج
        handleMouseLeave() {
            if (this.$refs.cursor) {
                this.$refs.cursor.style.transform = 'scale(1)';
            }
        }
    },

    mounted() {
        // تهيئة مكتبة AOS للحركات
        AOS.init({
            duration: 1000,
            once: true
        });

        // ربط أحداث الماوس للمؤشر المخصص
        document.addEventListener('mousemove', this.handleMouseMove);
        
        // إضافة تأثير hover على العناصر التفاعلية
        document
            .querySelectorAll('a, button, .project-image, .tool-card')
            .forEach(element => {
                element.addEventListener('mouseenter', this.handleMouseEnter);
                element.addEventListener('mouseleave', this.handleMouseLeave);
            });

        // سكرول سلس للروابط الداخلية إن وجدت
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
        // تنظيف لستينر الماوس عند إزالة التطبيق
        document.removeEventListener('mousemove', this.handleMouseMove);
    }
}).mount('#app');
