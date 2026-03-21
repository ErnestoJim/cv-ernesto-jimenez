document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const exportPdfBtn = document.getElementById("export-pdf-btn");
  if (exportPdfBtn) {
    exportPdfBtn.addEventListener("click", () => window.print());
  }

  const langBtn = document.getElementById("lang-btn");
  let currentLang = "es";

  const i18n = {
    es: {
      meta_section: "Curriculum de Ernesto Jimenez",
      tagline: "Technical Leader",
      meta_location: "Madrid, Comunidad de Madrid, España",
      cmd_summary: "<span>$</span> resumen_profesional",
      cmd_experience: "<span>$</span> experiencia_laboral",
      cmd_visual: "<span>$</span> experiencia_grafica",
      cmd_education: "<span>$</span> educacion",
      cmd_languages: "<span>$</span> idiomas",
      cmd_skills: "<span>$</span> habilidades_tecnicas",
      summary_p1:
        "Consultor técnico con amplia experiencia en el sector de tecnologías de la información y servicios, especializado en diseño, desarrollo e implementación de soluciones software con C++, C#, Java, JavaScript, SQL, C y Python.",
      summary_p2:
        "Experto en Git y GitHub para flujos colaborativos, con experiencia en infraestructura como código con Terraform en entornos cloud y on-premise. Integra programación asistida por IA con Cursor, Claude y ChatGPT para mejorar productividad, calidad de código e innovación técnica.",
      job_softtek: "Desarrollador de software senior | Mayo 2022 - Presente | Madrid, España (+3 años)",
      job_akka: "Senior Consult Developer | Julio 2021 - Abril 2022 | Madrid, España (10 meses)",
      job_ineco: "Analista programador | Enero 2021 - Julio 2021 (7 meses)",
      job_apara: "Ingeniero de software | Febrero 2020 - Noviembre 2020 (10 meses)",
      job_minsait: "Senior Software Engineer | Marzo 2019 - Febrero 2020 | Madrid, España (1 año)",
      job_teamnet: "Full-stack Developer | Junio 2018 - Febrero 2019 | Madrid, España (9 meses)",
      job_soaint: "Consultor técnico | Abril 2016 - Noviembre 2017 | España (1 año 8 meses)",
      job_esvenca_coord: "Coordinador de Sistemas de Información | Agosto 2014 - Abril 2016 (1 año 9 meses)",
      job_esvenca_anal: "Analista de sistemas | Octubre 2012 - Julio 2014 (1 año 10 meses)",
      job_adamantio: "Analista, Desarrollador y Consultor | Abril 2011 - Septiembre 2012 (1 año 6 meses)",
      job_styc: "Programador | Junio 2009 - Junio 2010 (1 año 1 mes)",
      chart_aria_bar: "Gráfico de barras con duración aproximada por etapa laboral en años",
      chart_aria_pie: "Gráfico de torta con distribución de experiencia laboral por etapa principal",
      chart_help_bar: "Duración aproximada por etapa laboral (en años).",
      chart_help_pie: "Distribución de experiencia por etapa principal (solo PDF).",
      edu_1: "Universidad Europea - Máster en Big Data, Informática (2016 - 2017)",
      edu_2: "Universidad de Oriente VE - Ingeniería en Sistemas (2003 - 2009)",
      lang_en: "Inglés: Nivel profesional",
      lang_es: "Español: Nativo o Bilingüe",
      skills_highlight: "<strong>Tecnologías destacadas:</strong> C#, C++, JavaScript, Bash, Terraform y GitHub.",
      skills_csharp:
        "<strong>C#:</strong> Más de 10 años diseñando, desarrollando, manteniendo y optimizando sistemas con esta tecnología.",
      skills_cpp:
        "<strong>C++:</strong> Desarrollo de aplicaciones de alto rendimiento, sistemas críticos, algoritmos complejos y componentes embebidos.",
      skills_js:
        "<strong>JavaScript:</strong> Desarrollo frontend y backend con React y Node.js, integración de APIs y optimización de experiencia de usuario.",
      skills_bash:
        "<strong>Bash:</strong> Automatización de tareas en Linux, despliegues, monitorización, backup y mantenimiento de infraestructuras.",
      skills_terraform:
        "<strong>Terraform:</strong> IaC para automatización, provisión y gestión eficiente de recursos cloud y on-premise con módulos reutilizables.",
      skills_git:
        "<strong>Git y GitHub:</strong> Gestión avanzada de ramas, fusiones, CI/CD, issues y pull requests para calidad y trazabilidad del código.",
      skills_ai:
        "<strong>IA en desarrollo:</strong> Uso de Cursor, Claude y ChatGPT como herramientas de desarrollo asistido por IA, integradas en el flujo de trabajo para generación y revisión de código, refactoring, documentación y resolución de problemas complejos.",
      skills_other:
        "<strong>Otros:</strong> .NET, C, Java, SQL, Python, YAML, administración y desarrollo sobre Windows y Linux.",
      footer_prompt: '$ echo "Disponible para liderazgo técnico y consultoría de software"',
      export_pdf: "Exportar PDF",
    },
    en: {
      meta_section: "Ernesto Jimenez's Resume",
      tagline: "Technical Leader",
      meta_location: "Madrid, Community of Madrid, Spain",
      cmd_summary: "<span>$</span> professional_summary",
      cmd_experience: "<span>$</span> work_experience",
      cmd_visual: "<span>$</span> visual_experience",
      cmd_education: "<span>$</span> education",
      cmd_languages: "<span>$</span> languages",
      cmd_skills: "<span>$</span> technical_skills",
      summary_p1:
        "Technical consultant with extensive experience in the information technology and services sector, specializing in design, development and implementation of software solutions with C++, C#, Java, JavaScript, SQL, C and Python.",
      summary_p2:
        "Expert in Git and GitHub for collaborative workflows, with experience in infrastructure as code with Terraform in cloud and on-premise environments. Integrates AI-assisted programming with Cursor, Claude and ChatGPT to improve productivity, code quality and technical innovation.",
      job_softtek: "Senior Software Developer | May 2022 - Present | Madrid, Spain (+3 years)",
      job_akka: "Senior Consult Developer | July 2021 - April 2022 | Madrid, Spain (10 months)",
      job_ineco: "Programmer Analyst | January 2021 - July 2021 (7 months)",
      job_apara: "Software Engineer | February 2020 - November 2020 (10 months)",
      job_minsait: "Senior Software Engineer | March 2019 - February 2020 | Madrid, Spain (1 year)",
      job_teamnet: "Full-stack Developer | June 2018 - February 2019 | Madrid, Spain (9 months)",
      job_soaint: "Technical Consultant | April 2016 - November 2017 | Spain (1 year 8 months)",
      job_esvenca_coord: "Information Systems Coordinator | August 2014 - April 2016 (1 year 9 months)",
      job_esvenca_anal: "Systems Analyst | October 2012 - July 2014 (1 year 10 months)",
      job_adamantio: "Analyst, Developer and Consultant | April 2011 - September 2012 (1 year 6 months)",
      job_styc: "Programmer | June 2009 - June 2010 (1 year 1 month)",
      chart_aria_bar: "Bar chart with approximate duration per work stage in years",
      chart_aria_pie: "Pie chart with work experience distribution by main stage",
      chart_help_bar: "Approximate duration per work stage (in years).",
      chart_help_pie: "Experience distribution by main stage (PDF only).",
      edu_1: "Universidad Europea - Master's in Big Data, Computer Science (2016 - 2017)",
      edu_2: "Universidad de Oriente VE - Systems Engineering (2003 - 2009)",
      lang_en: "English: Professional level",
      lang_es: "Spanish: Native or Bilingual",
      skills_highlight: "<strong>Featured technologies:</strong> C#, C++, JavaScript, Bash, Terraform and GitHub.",
      skills_csharp:
        "<strong>C#:</strong> Over 10 years designing, developing, maintaining and optimizing systems with this technology.",
      skills_cpp:
        "<strong>C++:</strong> Development of high-performance applications, critical systems, complex algorithms and embedded components.",
      skills_js:
        "<strong>JavaScript:</strong> Frontend and backend development with React and Node.js, API integration and user experience optimization.",
      skills_bash:
        "<strong>Bash:</strong> Task automation in Linux, deployments, monitoring, backup and infrastructure maintenance.",
      skills_terraform:
        "<strong>Terraform:</strong> IaC for automation, provisioning and efficient management of cloud and on-premise resources with reusable modules.",
      skills_git:
        "<strong>Git &amp; GitHub:</strong> Advanced branch management, merges, CI/CD, issues and pull requests for code quality and traceability.",
      skills_ai:
        "<strong>AI in development:</strong> Use of Cursor, Claude and ChatGPT as AI-assisted development tools, integrated into the workflow for code generation and review, refactoring, documentation and complex problem solving.",
      skills_other:
        "<strong>Other:</strong> .NET, C, Java, SQL, Python, YAML, administration and development on Windows and Linux.",
      footer_prompt: '$ echo "Available for technical leadership and software consulting"',
      export_pdf: "Export PDF",
    },
  };

  function applyLang(lang) {
    const t = i18n[lang];
    document.documentElement.lang = lang;
    document.title = lang === "en" ? "Ernesto Jimenez | Resume" : "Ernesto Jimenez | CV";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
    });

    if (langBtn) langBtn.textContent = lang === "es" ? "EN" : "ES";
    currentLang = lang;
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(currentLang === "es" ? "en" : "es");
    });
  }
});
