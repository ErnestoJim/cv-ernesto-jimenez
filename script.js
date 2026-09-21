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
      tagline: "Senior Software Engineer · Technical Lead · Cloud &amp; DevOps · .NET / AWS / Terraform · AI-Assisted Development",
      meta_location: "Madrid, Comunidad de Madrid, España",
      cmd_summary: "<span>$</span> resumen_profesional",
      cmd_experience: "<span>$</span> experiencia_laboral",
      cmd_education: "<span>$</span> educacion",
      cmd_languages: "<span>$</span> idiomas",
      cmd_skills: "<span>$</span> habilidades_tecnicas",
      summary_p1:
        "Ingeniero de software senior y Technical Lead con más de 15 años de experiencia diseñando y construyendo soluciones de software empresarial. Especializado en .NET/C#, arquitecturas cloud en AWS, infraestructura como código con Terraform, CI/CD y sistemas distribuidos.",
      summary_p2:
        "Experiencia diseñando arquitecturas orientadas a eventos, integraciones cloud, pipelines de datos y entornos AWS multi-cuenta seguros. Sólida base en desarrollo de software, DevOps y resolución de problemas técnicos.",
      summary_p3:
        "Actualmente incorporando ingeniería de software asistida por IA en los flujos de trabajo de desarrollo, análisis de arquitectura, revisión de código, documentación y automatización.",
      job_softtek: "Desarrollador de software senior | Mayo 2022 - Presente | Madrid, España (+3 años)",
      job_softtek_b1:
        "Lideré la migración de sistemas internos críticos del cliente RSC desde infraestructura on-premise (servidores y máquinas virtuales) hacia AWS, mejorando la eficiencia y reduciendo costes operativos.",
      job_softtek_b2:
        "Migré aplicaciones .NET a arquitecturas cloud en AWS, automatizando la infraestructura con Terraform y los despliegues con GitHub Actions.",
      job_softtek_b3: "Diseñé módulos de Terraform reutilizables para estandarizar el aprovisionamiento de recursos AWS entre proyectos.",
      job_akka: "Senior Consult Developer | Julio 2021 - Abril 2022 | Madrid, España (10 meses)",
      job_akka_b1:
        "Mantenimiento y evolución de sistemas operativos embebidos para el control de máquinas de generación de energía eólica, desarrollados en C y shell script.",
      job_akka_b2: "Diagnostiqué y resolví incidencias críticas en sistemas de control de aerogeneradores en producción.",
      job_ineco: "Analista programador | Enero 2021 - Julio 2021 (7 meses)",
      job_ineco_b1: "Migré el sistema de compras y control de AENA desde una base de código legacy y obsoleta a tecnologías modernas de .NET.",
      job_ineco_b2: "Desarrollé nuevas funcionalidades con .NET y Angular como parte de la modernización del sistema.",
      job_apara: "Ingeniero de software | Febrero 2020 - Noviembre 2020 (10 meses)",
      job_minsait: "Senior Software Engineer | Marzo 2019 - Febrero 2020 | Madrid, España (1 año)",
      job_teamnet: "Full-stack Developer | Junio 2018 - Febrero 2019 | Madrid, España (9 meses)",
      job_soaint: "Consultor técnico | Abril 2016 - Noviembre 2017 | España (1 año 8 meses)",
      job_esvenca_coord: "Coordinador de Sistemas de Información | Agosto 2014 - Abril 2016 (1 año 9 meses)",
      job_esvenca_anal: "Analista de sistemas | Octubre 2012 - Julio 2014 (1 año 10 meses)",
      job_adamantio: "Analista, Desarrollador y Consultor | Abril 2011 - Septiembre 2012 (1 año 6 meses)",
      job_styc: "Programador | Junio 2009 - Junio 2010 (1 año 1 mes)",
      edu_1: "Universidad Europea - Máster en Big Data, Informática (2016 - 2017)",
      edu_2: "Universidad de Oriente VE - Ingeniería en Sistemas (2003 - 2009)",
      lang_en: "Inglés: Nivel profesional",
      lang_es: "Español: Nativo o Bilingüe",
      skills_highlight: "<strong>Tecnologías destacadas:</strong> .NET/C#, AWS, Terraform, CI/CD, C++ y Git/GitHub.",
      skills_group_devops: "Cloud &amp; DevOps",
      skills_aws:
        "<strong>AWS:</strong> Diseño de arquitecturas cloud seguras multi-cuenta, migración de sistemas on-premise a servicios gestionados e integraciones cloud.",
      skills_terraform:
        "<strong>Terraform:</strong> IaC para automatización, provisión y gestión eficiente de recursos cloud y on-premise con módulos reutilizables.",
      skills_cicd:
        "<strong>CI/CD:</strong> Pipelines de integración y despliegue continuo con GitHub Actions para entregas rápidas y confiables.",
      skills_git:
        "<strong>Git y GitHub:</strong> Gestión avanzada de ramas, fusiones, issues y pull requests para calidad y trazabilidad del código.",
      skills_bash:
        "<strong>Bash:</strong> Automatización de tareas en Linux, despliegues, monitorización, backup y mantenimiento de infraestructuras.",
      skills_group_dev: "Desarrollo de Software",
      skills_csharp:
        "<strong>.NET/C#:</strong> Más de 10 años diseñando, desarrollando, manteniendo y optimizando sistemas empresariales y arquitecturas orientadas a eventos con esta tecnología.",
      skills_cpp:
        "<strong>C++:</strong> Desarrollo de aplicaciones de alto rendimiento, sistemas críticos, algoritmos complejos y componentes embebidos.",
      skills_js:
        "<strong>JavaScript:</strong> Desarrollo frontend, integración de APIs y optimización de experiencia de usuario.",
      skills_other:
        "<strong>Otros:</strong> C, Java, SQL, Python, YAML, administración y desarrollo sobre Windows y Linux.",
      skills_group_ai: "IA en el flujo de trabajo",
      skills_ai:
        "<strong>IA en desarrollo:</strong> Uso de Cursor, Claude y ChatGPT como herramientas de desarrollo asistido por IA, integradas en el flujo de trabajo para generación y revisión de código, refactoring, documentación y resolución de problemas complejos.",
      footer_prompt: '$ echo "Disponible para liderazgo técnico y consultoría de software"',
      export_pdf: "Exportar PDF",
    },
    en: {
      meta_section: "Ernesto Jimenez's Resume",
      tagline: "Senior Software Engineer · Technical Lead · Cloud &amp; DevOps · .NET / AWS / Terraform · AI-Assisted Development",
      meta_location: "Madrid, Community of Madrid, Spain",
      cmd_summary: "<span>$</span> professional_summary",
      cmd_experience: "<span>$</span> work_experience",
      cmd_education: "<span>$</span> education",
      cmd_languages: "<span>$</span> languages",
      cmd_skills: "<span>$</span> technical_skills",
      summary_p1:
        "Senior Software Engineer and Technical Lead with 15+ years of experience designing and building enterprise software solutions. Specialized in .NET/C#, AWS cloud architectures, Infrastructure as Code with Terraform, CI/CD and distributed systems.",
      summary_p2:
        "Experienced in designing event-driven architectures, cloud integrations, data pipelines and secure multi-account AWS environments. Strong background in software development, DevOps and technical problem solving.",
      summary_p3:
        "Currently incorporating AI-assisted software engineering into development workflows, architecture analysis, code review, documentation and automation.",
      job_softtek: "Senior Software Developer | May 2022 - Present | Madrid, Spain (+3 years)",
      job_softtek_b1:
        "Led the migration of critical internal systems for client RSC from on-premise infrastructure (local servers and virtual machines) to AWS, improving efficiency and reducing operating costs.",
      job_softtek_b2:
        "Migrated .NET applications to cloud architectures on AWS, automating infrastructure with Terraform and deployments with GitHub Actions.",
      job_softtek_b3: "Designed reusable Terraform modules to standardize AWS resource provisioning across projects.",
      job_akka: "Senior Consult Developer | July 2021 - April 2022 | Madrid, Spain (10 months)",
      job_akka_b1:
        "Maintained and evolved embedded operating systems for wind power generation equipment control, developed in C and shell scripting.",
      job_akka_b2: "Diagnosed and resolved critical incidents in production wind turbine control systems.",
      job_ineco: "Programmer Analyst | January 2021 - July 2021 (7 months)",
      job_ineco_b1: "Migrated AENA's procurement and control system from a legacy, obsolete codebase to modern .NET technologies.",
      job_ineco_b2: "Developed new features using .NET and Angular as part of the system modernization effort.",
      job_apara: "Software Engineer | February 2020 - November 2020 (10 months)",
      job_minsait: "Senior Software Engineer | March 2019 - February 2020 | Madrid, Spain (1 year)",
      job_teamnet: "Full-stack Developer | June 2018 - February 2019 | Madrid, Spain (9 months)",
      job_soaint: "Technical Consultant | April 2016 - November 2017 | Spain (1 year 8 months)",
      job_esvenca_coord: "Information Systems Coordinator | August 2014 - April 2016 (1 year 9 months)",
      job_esvenca_anal: "Systems Analyst | October 2012 - July 2014 (1 year 10 months)",
      job_adamantio: "Analyst, Developer and Consultant | April 2011 - September 2012 (1 year 6 months)",
      job_styc: "Programmer | June 2009 - June 2010 (1 year 1 month)",
      edu_1: "Universidad Europea - Master's in Big Data, Computer Science (2016 - 2017)",
      edu_2: "Universidad de Oriente VE - Systems Engineering (2003 - 2009)",
      lang_en: "English: Professional level",
      lang_es: "Spanish: Native or Bilingual",
      skills_highlight: "<strong>Featured technologies:</strong> .NET/C#, AWS, Terraform, CI/CD, C++ and Git/GitHub.",
      skills_group_devops: "Cloud &amp; DevOps",
      skills_aws:
        "<strong>AWS:</strong> Design of secure multi-account cloud architectures, migration of on-premise systems to managed services, and cloud integrations.",
      skills_terraform:
        "<strong>Terraform:</strong> IaC for automation, provisioning and efficient management of cloud and on-premise resources with reusable modules.",
      skills_cicd:
        "<strong>CI/CD:</strong> Continuous integration and deployment pipelines with GitHub Actions for fast, reliable releases.",
      skills_git:
        "<strong>Git &amp; GitHub:</strong> Advanced branch management, merges, issues and pull requests for code quality and traceability.",
      skills_bash:
        "<strong>Bash:</strong> Task automation in Linux, deployments, monitoring, backup and infrastructure maintenance.",
      skills_group_dev: "Software Development",
      skills_csharp:
        "<strong>.NET/C#:</strong> Over 10 years designing, developing, maintaining and optimizing enterprise systems and event-driven architectures with this technology.",
      skills_cpp:
        "<strong>C++:</strong> Development of high-performance applications, critical systems, complex algorithms and embedded components.",
      skills_js:
        "<strong>JavaScript:</strong> Frontend development, API integration and user experience optimization.",
      skills_other:
        "<strong>Other:</strong> C, Java, SQL, Python, YAML, administration and development on Windows and Linux.",
      skills_group_ai: "AI in the workflow",
      skills_ai:
        "<strong>AI in development:</strong> Use of Cursor, Claude and ChatGPT as AI-assisted development tools, integrated into the workflow for code generation and review, refactoring, documentation and complex problem solving.",
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
