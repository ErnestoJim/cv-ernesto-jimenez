document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-btn");
  const exportBtn = document.getElementById("export-pdf-btn");
  const translations = {
    toolbar_label: "Resume options",
    resume_label: "Ernesto Jimenez's resume",
    export_pdf: "Export PDF",
    headline: "Technical Lead · Senior Software Engineer · Cloud &amp; DevOps · Backend",
    location: "Madrid, Spain",
    summary_title: "Professional summary",
    summary: "Technical lead and senior software engineer with 15+ years of experience designing, building and delivering enterprise software. I have led development teams of up to 15 people and mentored junior engineers. I make architecture and technology decisions based on performance and delivery needs. I combine AWS, Terraform and CI/CD experience with hands-on backend development in .NET/C#, JavaScript and Python, event-driven architectures and distributed systems. I integrate AI tools into code review, refactoring, documentation and automation.",
    experience_title: "Experience",
    softtek_role: "Senior Software Developer / Technical Lead · Madrid, Spain",
    softtek_date: "May 2022 – Present",
    softtek_1: "Led the migration of mission-critical internal systems for client RSC from on-premise servers and virtual machines to AWS, improving efficiency and reducing operating costs.",
    softtek_2: "Drove performance-based architecture decisions: cut AWS Lambda cold starts from over 5 seconds (up to around 10 in the worst case) to under 1 second by rebuilding selected .NET APIs in JavaScript and Python; optimized .NET where client constraints required keeping that stack.",
    softtek_3: "Designed reusable Terraform modules to standardize AWS resource provisioning across projects.",
    softtek_4: "Migrated .NET applications to AWS with infrastructure managed in Terraform and deployments through YAML-based GitHub Actions pipelines, using Bash automation where possible.",
    akka_role: "Senior Consult Developer · Madrid, Spain",
    akka_date: "Jul 2021 – Apr 2022",
    akka_1: "Maintained and evolved embedded operating systems for wind power generation machines, written in C and shell script.",
    akka_2: "Diagnosed and resolved critical production incidents in wind turbine control systems.",
    ineco_role: "Software Analyst / Developer",
    ineco_date: "Jan 2021 – Jul 2021",
    ineco_1: "Migrated AENA's purchasing and control system from an obsolete legacy codebase to modern .NET technologies and built new features with .NET and Angular.",
    esvenca_roles: "Information Systems Coordinator (Aug 2014 – Apr 2016) · Systems Analyst (Oct 2012 – Jul 2014)",
    esvenca_1: "Led a software development team of up to 15 people delivering internal inventory management, process control and well-site activity tracking systems.",
    earlier_title: "Earlier experience",
    earlier_apara: "<strong>APARA</strong> · Software Engineer",
    earlier_apara_date: "Feb – Nov 2020",
    earlier_minsait: "<strong>Minsait</strong> · Senior Software Engineer · Mentored junior developers",
    earlier_minsait_date: "Mar 2019 – Feb 2020",
    earlier_teamnet: "<strong>TEAMNET S.L.</strong> · Full-stack Developer",
    earlier_teamnet_date: "Jun 2018 – Feb 2019",
    earlier_soaint: "<strong>SOAINT</strong> · Technical Consultant · Mentored new developers",
    earlier_soaint_date: "Apr 2016 – Nov 2017",
    earlier_adamantio: "<strong>Adamantio, C.A.</strong> · Analyst, Developer &amp; Consultant",
    earlier_adamantio_date: "Apr 2011 – Sep 2012",
    earlier_styc: "<strong>Styc, C.A.</strong> · Programmer",
    earlier_styc_date: "Jun 2009 – Jun 2010",
    skills_title: "Core skills",
    skills_leadership: "<strong>Technical leadership &amp; architecture:</strong> Team leadership (up to 15 people) and mentoring · Performance-driven technology selection · On-premise to AWS migrations · Secure multi-account AWS architecture · Reusable Terraform standards.",
    skills_cloud: "<strong>Cloud &amp; DevOps:</strong> AWS (including Lambda) · Terraform (IaC and reusable modules) · CI/CD with GitHub Actions (YAML) · Git/GitHub · Bash · Linux and Windows.",
    skills_backend: "<strong>Backend development:</strong> .NET/C# (10+ years; enterprise systems and event-driven architectures) · JavaScript · Python · C++ · C · Java · SQL.",
    skills_ai: "<strong>AI-assisted development:</strong> Ollama, OpenCode, Claude and ChatGPT for code generation and review, refactoring and documentation.",
    education_title: "Education & languages",
    education_master: "<strong>Universidad Europea</strong> · Master's in Big Data (Computer Science)",
    education_degree: "<strong>Universidad de Oriente, Venezuela</strong> · Systems Engineering",
    languages: "<strong>English:</strong> Professional proficiency · <strong>Spanish:</strong> Native"
  };

  const textNodes = [...document.querySelectorAll("[data-i18n]")];
  const ariaNodes = [...document.querySelectorAll("[data-i18n-aria]")];
  const spanishText = new Map(textNodes.map((node) => [node, node.innerHTML]));
  const spanishAria = new Map(ariaNodes.map((node) => [node, node.getAttribute("aria-label")]));
  let language = "es";

  function applyLanguage(next) {
    const english = next === "en";
    textNodes.forEach((node) => {
      node.innerHTML = english ? translations[node.dataset.i18n] : spanishText.get(node);
    });
    ariaNodes.forEach((node) => {
      node.setAttribute("aria-label", english ? translations[node.dataset.i18nAria] : spanishAria.get(node));
    });
    document.documentElement.lang = next;
    document.title = english ? "Ernesto Jimenez | Resume" : "Ernesto Jimenez | CV";
    langBtn.textContent = english ? "ES" : "EN";
    langBtn.setAttribute("aria-label", english ? "Cambiar a español" : "Switch to English");
    language = next;
  }

  langBtn.addEventListener("click", () => applyLanguage(language === "es" ? "en" : "es"));
  exportBtn.addEventListener("click", () => window.print());
});
