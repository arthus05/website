export const profile = {
  name: "Arthus Vinícius",
  email: "arthusvinicius.dev@gmail.com",
  github: "https://github.com/arthus05",
  linkedin: "https://www.linkedin.com/in/arthus-vinicius-dev/",
};

export const projects = [
  {
    id: "swap",
    company: "Swap · via Kake",
    title: "A different way to shop",
    description: "Conversational and voice shopping for fashion brands, connecting product discovery, virtual try-on, cart and checkout. I was one of two initial frontend engineers on the B2B Agentic Storefront.",
    technologies: "React · TypeScript · NestJS · SSE",
    url: "https://www.swap-commerce.com/storefront",
    linkLabel: "Explore the product",
    context: "The storefront extended an existing React/NestJS platform into a brand-specific shopping experience. Shoppers needed to move between conversation, outfit suggestions and their cart, even when a streamed response was interrupted.",
    contributions: [
      "Owned most initial frontend stack and code-structure decisions, working from supplied designs and existing platform foundations.",
      "Built conversational and voice interfaces, streamed-response handling, session recovery and outfit-builder interactions.",
      "Developed merchant settings with coordinated saves and preservation of unsaved changes, plus custom-font previews and validation using Web Workers.",
      "Contributed tenant-aware branding/media APIs and led the Awin integration project across browser/server conversion data and merchant configuration.",
    ],
    result: "Reduced the eager vendor chunk from 757 to 390 kB gzip in a local production-build comparison through targeted imports and deferred loading. That is a 48.5% reduction in that chunk; deferred code remained in separate chunks.",
  },
  {
    id: "bridge-carbon",
    company: "Bridge Carbon · via Turing",
    title: "Shared foundations for field operations",
    description: "A shared React UI library and internal applications for carbon-project operations. I proposed the library, built and released its components, and led the migration of two core applications.",
    technologies: "React · TypeScript · Storybook · Leaflet",
    url: "https://bridgecarbon.com/",
    linkLabel: "About the company",
    context: "Operational applications needed consistent interfaces and reusable building blocks, alongside maps and permission-aware workflows for teams working on carbon projects.",
    contributions: [
      "Translated supplied Vue designs into reusable React forms, tables, navigation and media controls, with Storybook examples, documentation and versioned releases.",
      "Led two core application migrations; a source audit identified five frontend codebases consuming the library.",
      "Built geographic filtering, status visualization and boundary editing with React and Leaflet.",
      "Developed validation/rejection workflows that kept filters, pagination and interface state consistent after asynchronous changes.",
    ],
    result: "Established shared components across five frontend codebases, with two application migrations personally led. I also maintained frontend authentication/profile packages and generated TypeScript API contracts.",
  },
  {
    id: "olx",
    company: "OLX",
    title: "Modernizing the search for a home",
    description: "Work on ZAP Imóveis and Viva Real: moving existing real-estate applications toward a Next.js/TypeScript monorepo, connecting content systems and improving shared developer tooling.",
    technologies: "Next.js · TypeScript · NestJS · Cypress",
    url: "https://www.zapimoveis.com.br/",
    linkLabel: "Visit ZAP Imóveis",
    context: "Established real-estate products needed to evolve their frontend architecture while continuing to support everyday property discovery and content delivery.",
    contributions: [
      "Helped migrate Vue 2/Backbone applications into a Next.js/TypeScript monorepo and contributed to an in-house state-management library.",
      "Built a NestJS CMS integration API, modeled content in Contentful/Strapi and used GraphQL for CMS integration.",
      "Refactored Cypress end-to-end tests and managed releases across shared tooling, test infrastructure and an API used by multiple teams.",
    ],
    result: "Contributed to modernizing products serving millions of users, alongside shared tooling and integrations that supported multiple applications and engineering teams.",
  },
  {
    id: "insightlab",
    company: "Insight Data Science Lab",
    title: "Making public data useful",
    description: "Data applications including Big Data Social, supporting analysis of social conditions. My work connected data pipelines and backend services to maps and interactive dashboards.",
    technologies: "React · Java · Python · Airflow · AWS",
    url: "https://www.insightlab.ufc.br/plataforma-big-data-social-e-apresentada-no-i-encontro-de-tecnologia-para-o-desenvolvimento-social/",
    linkLabel: "Read the project overview",
    context: "Data-science work depended on turning messy government files into queryable data and making that information accessible through analytical applications.",
    contributions: [
      "Co-created an AWS data lake using S3, Athena and DynamoDB, and wrote Python/Airflow pipelines that refined files into SQL-queryable Delta tables.",
      "Built backend services with Java/Spring Boot, PostgreSQL, MongoDB and JWT authentication.",
      "Developed React dashboards with D3, Visx and Leaflet, and automated infrastructure and delivery with Docker, Kubernetes, Terraform and GitLab CI/CD.",
    ],
    result: "Helped connect data preparation, APIs and visual exploration in applications supporting social-data analysis.",
  },
];

export const experience = [
  {
    company: "Swap", relationship: "via Kake", role: "Senior Software Engineer",
    start: "Sep 2025", end: "Oct 2026",
    description: "AI shopping interfaces, merchant tools and commerce integrations. Frontend architecture, streaming interactions and selected NestJS backend work.",
  },
  {
    company: "Bridge Carbon", relationship: "via Turing · formerly C-Quest Capital", role: "Frontend Engineer",
    start: "Jul 2023", end: "Sep 2025",
    description: "Shared React components, two core application migrations, operational workflows and geospatial interfaces.",
  },
  {
    company: "OLX", relationship: "ZAP Imóveis & Viva Real", role: "Software Engineer",
    start: "Apr 2022", end: "Jun 2023",
    description: "Application modernization, CMS integrations, shared tooling and end-to-end testing for real-estate products.",
  },
  {
    company: "CBYK", relationship: "Freelance", role: "Fullstack Developer",
    start: "Sep 2022", end: "Nov 2022",
    description: "React interfaces, Node.js services and SQL Server queries and stored procedures.",
  },
  {
    company: "Sciensa", relationship: "", role: "Fullstack Developer",
    start: "Dec 2021", end: "May 2022",
    description: "Next.js applications, Quarkus/Java APIs and Chart.js visualizations in collaboration with data scientists.",
  },
  {
    company: "InsightLab", relationship: "Trainee → Fullstack Developer", role: "Fullstack Developer",
    start: "Sep 2020", end: "Dec 2021",
    description: "Data pipelines, Java backend services, React dashboards and cloud infrastructure for data applications.",
  },
  {
    company: "CEOS", relationship: "", role: "Junior Frontend Developer",
    start: "Jul 2019", end: "Feb 2021",
    description: "Web applications with Next.js, Express and PostgreSQL, plus an Ionic/Angular Android application.",
  },
];
