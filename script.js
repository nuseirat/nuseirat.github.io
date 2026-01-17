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
      projects: [
        {
          id: 1,
          title: "Watad",
          description: "Watad is a Gym Tracker web app",
          image: "images/watad.svg",
          link: "https://watadtracker.vercel.app/",
          technologies: [
            {
              name: "TypeScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            },
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
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
              name: "HTML5",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {
              name: "CSS3",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            }
          ]
        },
        {
          id: 4,
          title: "Al-Nusayrat",
          description: "Alnusayrat Family Website",
          image: "images/alnusayrat.svg",
          link: "https://alnusayrat.netlify.app/",
          technologies: [
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
              name: "HTML5",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {
              name: "CSS3",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            }
          ]
        },
        {
          id: 5,
          title: "CertifyMaster",
          description: "A curated list of free courses & certifications.",
          image: "images/certifymaster.svg",
          link: "https://certifymaster.netlify.app/",
          technologies: [
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
              name: "HTML5",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {
              name: "CSS3",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            }
          ]
        }
      ],

      // ===== الشهادات =====
      certifications: [
        {
          id: 1,
          title: "IT Support Specialization",
          issuer: "Google",
          date: "Issued Jan 2026",
          link: "https://www.coursera.org/account/accomplishments/specialization/Y6CRY6MKPXSC",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        },
        {
          id: 2,
          title: "CS50P: CS50's Introduction to Programming with Python",
          issuer: "HarvardX",
          date: "Issued Mar 2025",
          link: "#",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg"
        },
        {
          id: 3,
          title: "Getting Started with Python",
          issuer: "University of Michigan",
          date: "Issued Jul 2023",
          link: "https://www.coursera.org/account/accomplishments/verify/FGNBVFY39KXB",
logo: "https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/U-M_Logo-Hex.png"        },
        {
          id: 4,
          title: "Python Data Structures",
          issuer: "University of Michigan",
          date: "Issued Jul 2023",
          link: "https://www.coursera.org/account/accomplishments/verify/8GEZD37BMJAK",
logo: "https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/U-M_Logo-Hex.png"        }
      ],

      // ===== الجوائز =====
      awards: [
        {
          id: 1,
          title: "Finalist - Future Technologies Competition",
          institution: "Ministry of Communications and Information Technologies | 2024",
          description:
            "Selected as finalist for the project Riwaya Al-Majd among 1000 contestants in a prestigious national technology competition.",
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
          description:
            "Awarded for exceptional creativity and technical excellence in graphic design competition for the Saudi Arabia National Day.",
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
        {
          name: "FastAPI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
        },
        {
          name: "SpringBoot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
    
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        }
      ]
    };
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

    // تكبير المؤشر عند دخول العناصر التفاعلية
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
    document.querySelectorAll('a, button, .project-image, .tool-card').forEach(element => {
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

