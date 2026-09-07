/**
 * Executive Curriculum Vitae (CV) & Resume Workspace
 * Client Logic & Dynamic Renderer for Dr. Greg Hladik
 * Supports 2 View Modes:
 *   1. Executive Resume (Concise, High-Impact Value Proposition & ROI)
 *   2. Full Academic CV (Comprehensive 36 Pubs, Grants & Research Catalog)
 */

const STORAGE_KEY = 'resume_workspace_data_v19';
const THEME_KEY = 'resume_workspace_theme';
const HIDE_FRANCHISE_KEY = 'resume_workspace_hide_franchise';
const VIEW_MODE_KEY = 'resume_workspace_view_mode';

let hideFranchiseExperience = true;
let currentViewMode = 'executive'; // 'executive' or 'academic'

// Embedded Default Executive CV & Resume Data
const DEFAULT_RESUME_DATA = {
  "basics": {
    "name": "Greg Hladik, Ph.D.",
    "label": "Chief Operations Officer & Auxiliary Services Executive | Applied AI & Smart Mobility Innovator",
    "image": "",
    "email": "Greg.Hladik@gmail.com",
    "phone": "405-612-0038",
    "url": "https://linkedin.com/in/greg-hladik",
    "summary": "Accomplished executive leader, Student Affairs practitioner, and entrepreneurial operator with 20+ years of experience leading eight-figure enterprises ($13M direct P&L / $5M indirect), pioneering world-first mobility and sustainability initiatives, and cultivating high-impact cross-functional partnerships across university researchers, academic departments, municipal government, and private industry. Proven track record of transforming campus services from financial and service deficits into research-driven innovation labs, co-authoring 30+ peer-reviewed publications (175+ citations), securing $2.1M+ in external research grants, and building collaborative teams across engineering, business, and operations.",
    "location": {
      "city": "Arlington",
      "region": "Texas",
      "countryCode": "US"
    },
    "profiles": [
      {
        "network": "LinkedIn",
        "username": "greg-hladik",
        "url": "https://linkedin.com/in/greg-hladik"
      }
    ]
  },
  "executiveSummaryValue": "Turnaround executive leader with direct $13M P&L responsibility and $5M indirect oversight. Spearheaded an organizational transformation that rescued an enterprise struggling with financial deficits and low service levels, converting it into a financially secure, award-winning innovation hub. Partnered with university researchers, academic departments, and private industry to deliver AI-enabled services, world-first infrastructure projects, 100% gross revenue growth, $690K in CapEx savings, and $2.1M+ in federal research grants while building a robust operational workforce.",
  "executiveValueHighlights": [
    "P&L Leadership & Turnaround Growth: Managed $13M direct P&L and $5M indirect oversight, achieving 100% Gross Revenue growth since 2016 and expanding workforce capabilities by 150%.",
    "Operational AI & 95%+ Efficiency Gains: Architected 1-click API database connectors, financial proration automations, and event communication workflows—cutting processing time from hours to 3 minutes.",
    "Multi-LLM Strategy & Cross-Team Adoption: Deployed Claude, ChatGPT, and Gemini across Front Desk, Back Office, Events, and CSR teams for 1-click response generation and document polishing.",
    "Faculty Research Alliances & $2.1M+ Grants: Opened live operations as research labs, securing $2.1M+ in federal grants (FTA, FHWA, USDOT) to enhance faculty scholarship (175+ academic outputs) and operational excellence."
  ],
  "engagementHighlights": [
    "Cross-Functional & Interdisciplinary Partnerships: Built multi-entity research alliances bridging university researchers, academic departments (UTA Civil Engineering, Computer Science, Marketing), municipal government (City of Arlington, NCTCOG), and private industry partners.",
    "Faculty Research Alliances & $2.1M+ Grant Funding: Partnered with university faculty by opening live operational environments as research labs, securing $2.1M+ in external research grants to enhance faculty scholarly contributions, support 175+ academic outputs, and elevate operational performance.",
    "Operational AI & Automated Workflows: Architected custom Google Apps Scripts, 1-click API database connectors, and AI tools used daily by Front Desk, Back Office, Events, and CSR teams—cutting complex event communications from hours to 3 minutes.",
    "Student Engagement & Research Integration: Embedded undergraduate and graduate students across computer science, engineering, business, architecture, and design into autonomous shuttle, AI mobility, and drone analytics research.",
    "Pioneering Infrastructure & Mobility: Launched world-first Plastic Roads, nation's longest-running self-driving shuttle fleet, and campus-wide AI-enabled Parking Finder."
  ],
  "skills": [
    {
      "name": "Executive Leadership & Strategic Alliances",
      "level": "Executive",
      "keywords": ["Auxiliary Services", "$13M Direct P&L / $5M Indirect", "Multi-Entity Partnerships", "EOS / MAPS Framework", "Cross-Functional Team Building", "Municipal & Industry Collaboration"]
    },
    {
      "name": "Applied AI, Automations & Web Workflows",
      "level": "Expert",
      "keywords": ["1-Click API Database Refreshing", "Google Apps Scripts (Sheets/Forms/Docs)", "Event Calendar Automation (Hours -> 3 Mins)", "Multi-LLM Strategy (Claude/ChatGPT/Gemini)", "CSR 1-Click Response Generators", "Financial Proration Automations"]
    },
    {
      "name": "Team AI Enablement & Internal Web Tooling",
      "level": "Leader",
      "keywords": ["Daily Operational AI Adoption (Front Desk, CSR, Events)", "Internal HTML/JS Web Modules", "Error Reduction & Workflow Optimization", "Multi-Departmental AI Upskilling", "Custom Google Sheets/Forms Deployments", "Document Polishing & AI Context Coaching"]
    },
    {
      "name": "Smart Mobility & Infrastructure Innovation",
      "level": "Pioneer",
      "keywords": ["Demand Management & Smart Parking Zones", "Autonomous Shuttle Fleets (AV)", "Plastic Roads Asphalt Tech", "LPR Parking Systems", "Transit Hub Integration", "Micro-Mobility Networks"]
    },
    {
      "name": "Academic Research & Grant Administration",
      "level": "Advanced",
      "keywords": ["$2.1M+ External Grant Funding", "Co-Principal Investigator", "30+ Peer-Reviewed Publications", "Faculty Research Integration", "Structural Equation Modeling", "User Satisfaction Analytics"]
    }
  ],
  "work": [
    {
      "id": "british-swim-school",
      "isFranchise": true,
      "name": "British Swim School",
      "position": "Chief Operations Officer & Franchise Owner",
      "url": "https://britishswimschool.com",
      "startDate": "Oct 2024",
      "endDate": "Present",
      "summary": "Owner and executive operator of British Swim School franchise across Arlington, Mansfield & Grand Prairie, TX, delivering water-safety education across multi-site facilities.",
      "highlights": [
        "Acquired territorial rights and launched three indoor locations within 18 months, building full Aquatics, Deck, and Office management teams.",
        "Negotiated strategic facility partnerships with commercial fitness brands and landlords, cutting occupancy costs by 25%.",
        "Forged alliances with 6 ISDs, PTAs, and national water-safety non-profits (Step Into Swim), driving 40% of new customer leads.",
        "Architected a custom self-service lead-to-booking sales engine that automates skill evaluation, CPQ pricing, and real-time sibling scheduling, eliminating front-desk phone tag and capturing enrollments 24/7.",
        "Implemented EOS-based MAPS framework, Google Apps Script lead tools, and AI marketing automations to double enrollments and lower customer acquisition cost (CAC) by 22%."
      ],
      "technologies": ["Multi-Site Operations", "Lead-to-Booking Sales Automation", "EOS / MAPS", "Google Apps Scripts", "P&L Strategy"]
    },
    {
      "id": "uta-exec-dir",
      "isFranchise": false,
      "name": "University of Texas at Arlington",
      "position": "Executive Director of Auxiliary Services",
      "url": "https://www.uta.edu",
      "startDate": "Oct 2021",
      "endDate": "Present",
      "summary": "Directing an eight-figure enterprise with $13M direct P&L responsibility and $5M indirect financial oversight. Led an organizational turnaround that transformed a struggling operation facing financial deficits and service bottlenecks into a financially secure, award-winning innovation hub through strategic alliances with university researchers, academic departments, municipal leaders, and private industry.",
      "highlights": [
        "Spearheaded complete turnaround from financial deficits and low service satisfaction to robust fiscal security, achieving 100% Gross Revenue growth since 2016.",
        "Executed direct P&L responsibility for $13M operating budget and $5M indirect oversight, establishing long-term fiscal resilience and operational excellence.",
        "Engineered 1-click API database connectors and Google Apps Script automations, reducing event communication processing time from hours to 3 minutes (~95%+ efficiency gain).",
        "Deployed a multi-LLM strategy (Claude, ChatGPT, Gemini) across Front Desk, Back Office, Events, and CSR teams for 1-click response generation, billing date automations, and document polishing.",
        "Transformed traditional operations into a living research lab, partnering with university researchers, academic departments, and private industry to deploy world-first mobility projects.",
        "Built high-performing cross-functional teams and structured dedicated operational units, expanding departmental workforce capabilities by 150%.",
        "Implemented nation's longest-running self-driving shuttle fleet (5.5 years, 0 reportable incidents) at a total net cost to the university of only $10,000.",
        "Pioneered Smart Parking Demand Management Zones, saving employees $100,000 annually and avoiding $690,000 in CapEx in year one.",
        "Orchestrated world's first installation of two Plastic Roads recycled-plastic parking lots, doubling asphalt lifespan and earning IPMI Apex Award for Innovation.",
        "Mentored UTA Computer Science internship teams to engineer an AI-enabled predictive parking map (eliminating a $65,000/yr external SaaS contract) and a zero-ongoing-cost event logistics HTML builder (reducing administrative overhead by 95%)."
      ],
      "technologies": ["$13M Direct P&L / $5M Indirect", "Organizational Turnaround", "1-Click API Automations", "Multi-LLM Strategy", "Autonomous Shuttles", "Plastic Roads"]
    },
    {
      "id": "uta-dir-parking",
      "isFranchise": false,
      "name": "University of Texas at Arlington",
      "position": "Director of Parking & Transportation",
      "url": "https://www.uta.edu",
      "startDate": "May 2016",
      "endDate": "Oct 2021",
      "summary": "Supervised daily operations of campus mobility, parking enforcement, and transit for 44,000 students, 5,000 employees, and 500,000 annual visitors ($9.5M direct P&L).",
      "highlights": [
        "Forged strategic partnership with Groome Transportation, generating $1.8M in net savings reinvested into expanded student transit.",
        "Secured $1.7M FTA grant to launch free self-driving shuttles for students, positioning campus as a national mobility testbed.",
        "Achieved 212% increase in Safe Ride usage and 4,014% growth in off-campus transit ridership through route optimization.",
        "Delivered a 1,500-space parking garage in a record 10-month timeframe, winning TPTA Best New Facility recognition."
      ],
      "technologies": ["$9.5M Direct P&L", "FTA Grant Administration", "Public-Private Partnerships", "LPR Enforcement"]
    },
    {
      "id": "uta-asst-dir",
      "isFranchise": false,
      "name": "University of Texas at Arlington",
      "position": "Assistant Director, Auxiliary Services - University Housing",
      "url": "https://www.uta.edu",
      "startDate": "Mar 2012",
      "endDate": "Aug 2016",
      "summary": "Directed business operations, commercial leasing, marketing, and contract administration for University Housing & College Park District mixed-use development ($20M+ annual revenue).",
      "highlights": [
        "Managed commercial real estate leasing, student housing contracts, and auxiliary financial reporting for $20M+ operations.",
        "Partnered with marketing faculty and graduate courses across 12 sections to execute student-developed commercial marketing campaigns."
      ],
      "technologies": ["Commercial Real Estate", "Contract Administration", "Student Mentorship", "Housing Operations"]
    }
  ],
  "projects": [
    {
      "name": "Lead-to-Booking Automation & Self-Service Sales Engine",
      "role": "Lead Architect & Business Operator",
      "focus": "AI in Business / Revenue Operations / Process Automation",
      "problemSolved": "Long phone consultations, confusing pricing tiers, and complicated multi-child scheduling were causing high lead drop-off and burdening front-desk staff.",
      "solution": "Engineered a custom self-service sales workflow that guides parents through program evaluation, skill placement, custom pricing, and live ERP schedule matching.",
      "description": "Architected an automated self-service sales and booking workflow that transitions customers from initial inquiry to confirmed enrollment without manual intake friction or front-desk intervention.",
      "url": "https://britishswimschool-instantquote.vercel.app/hold",
      "liveProofUrls": [
        { "label": "Instant Quote & Schedule Hold", "url": "https://britishswimschool-instantquote.vercel.app/hold" },
        { "label": "Interactive Parent Guide & Skill Placement", "url": "https://britishswimschool-instantquote.vercel.app/guide" },
        { "label": "24/7 FAQ & AI Answer Engine", "url": "https://britishswimschool-instantquote.vercel.app/answers" }
      ],
      "highlights": [
        "Created an instant Lead-to-Booking pipeline with zero manual intervention required.",
        "Solved sibling scheduling constraints across 3 locations in real time.",
        "Pre-fills enterprise ERP records to eliminate administrative data entry errors.",
        "Captures and converts high-intent leads 24/7 outside regular business hours."
      ],
      "keywords": [
        "AI in Business",
        "Revenue Operations",
        "Process Automation",
        "Lead-to-Booking Pipeline",
        "Constraint Scheduling",
        "CPQ Tuition Engine",
        "Jackrabbit ERP Integration"
      ],
      "featured": true
    },
    {
      "name": "Arlington RAPID Autonomous Transit Fleet (5.5-Year Pilot)",
      "description": "Nation's longest continuously running self-driving shuttle program integrated into public transit networks. Delivered over 5.5 years with zero reportable safety incidents at a total net cost to the university of only $10,000.",
      "url": "https://www.uta.edu",
      "highlights": [
        "First university in the United States to exclusively use self-driving shuttles during a landmark 3-month pilot",
        "Built a multi-stakeholder partnership team spanning university researchers, academic departments, municipality (City of Arlington), private partners (May Mobility, Via), and federal grant providers (FTA, FHWA)"
      ],
      "keywords": ["Autonomous Vehicles", "AV Mobility", "Multi-Entity Alliances", "Zero Incidents", "FTA & FHWA Grants"],
      "featured": true
    },
    {
      "name": "World-First Plastic Roads Parking Lots",
      "description": "First global installation of recycled plastic-infused asphalt parking surfaces, doubling asphalt lifespan and saving CapEx.",
      "url": "https://www.uta.edu",
      "highlights": [
        "Awarded 2024 IPMI Apex Award for Innovation & TPTA Restoration Program of the Year",
        "Collaborative research project with UTA Civil Engineering & Austin Asphalt"
      ],
      "keywords": ["Sustainability", "Plastic Roads", "Infrastructure Innovation", "Interdisciplinary Research"],
      "featured": true
    },
    {
      "name": "AI-Enabled Predictive Parking Map & Live Availability Engine",
      "role": "Executive Sponsor & CS Student Mentor",
      "focus": "Applied AI / Predictive Analytics / Cost Elimination",
      "problemSolved": "Recurring $65,000 annual commercial vendor SaaS expenditure for lot occupancy tracking and vendor lock-in.",
      "solution": "Mentored a UTA Computer Science internship team to build an in-house predictive parking platform integrating live sensor APIs and predictive backup algorithms.",
      "description": "Architected and mentored an in-house engineering initiative with UTA Computer Science student teams to build an AI-enabled predictive parking map, replacing commercial vendor software with a zero-cost proprietary platform.",
      "url": "https://www.uta.edu",
      "highlights": [
        "Created an AI-enabled predictive parking map with live API and predictive backup availability.",
        "Replaced a $65,000 annual commercial vendor SaaS expenditure with a zero-cost proprietary platform ($325K 5-year savings).",
        "Engineered predictive backup algorithms to direct campus commuters before lots hit full capacity.",
        "Mentored undergraduate and graduate Computer Science engineering interns through full API lifecycle to production."
      ],
      "keywords": [
        "Predictive AI Modeling",
        "Live REST API Integration",
        "Cost Elimination ($65K/yr)",
        "Real-Time Sensor Analytics",
        "Student Engineering Mentorship"
      ],
      "featured": true
    },
    {
      "name": "Interactive Event Parking Logistics & Wayfinding HTML Builder",
      "role": "Executive Sponsor & Product Architect",
      "focus": "Workflow Automation / Event Logistics / Zero-Cost Web Tooling",
      "problemSolved": "Event coordinators faced complex, manual planning workflows to assign parking locations, map walking distances, and communicate with campus event visitors.",
      "solution": "Mentored a UTA Computer Science internship team to build a standalone, zero-ongoing-cost HTML builder tool that uses predictive technology to recommend arrival times, walking itineraries, and parking difficulty scores.",
      "description": "Engineered a standalone HTML page builder for campus event coordinators with zero ongoing licensing or hosting costs, automating venue and parking lot selection with predictive arrival and transit modeling.",
      "url": "https://www.uta.edu",
      "highlights": [
        "Created an interactive HTML page tool with zero ongoing software or hosting costs, enabling event coordinators to visually select parking locations and event sites.",
        "Integrated predictive technology to calculate recommended arrival times, walking routes, and parking difficulty ratings.",
        "Reduced administrative event coordination overhead by 95% while elevating campus service levels and visitor communication.",
        "Delivered automated, polished digital wayfinding packages for major campus conferences and commencement events."
      ],
      "keywords": [
        "Zero Ongoing Costs",
        "Standalone HTML Page",
        "95% Overhead Reduction",
        "Event Logistics Optimization",
        "Workflow Automation"
      ],
      "featured": true
    },
    {
      "name": "Drone-Based Automated Pavement Condition Index (PCI) & Maintenance Platform",
      "description": "Partnered with university civil engineering researchers and drone analytics specialists to evaluate a drone-based AI condition assessment system using aerial imagery and computer vision to inspect parking lot asphalt quality, generate automated PCI scores, and build interactive maintenance dashboards for university and private entities.",
      "url": "https://www.uta.edu",
      "highlights": [
        "Served as an operational partner and facilitator, providing live campus infrastructure for drone-based computer vision evaluations",
        "Collaborated with faculty researchers to build interactive GIS maintenance dashboards for institutional and private entities"
      ],
      "keywords": ["Research Facilitation", "Drone AI Analytics", "Facility Maintenance Dashboards", "Faculty Collaboration"],
      "featured": true
    },
    {
      "name": "Operational AI Automations, Google Apps Scripts & API Workflows",
      "description": "Architected custom web applications, one-click API database connectors, and automated Google Apps Script workflows (Sheets, Forms, Docs) to streamline daily business operations across Front Desk, Back Office, Events, and Customer Service (CSR) teams.",
      "url": "https://linkedin.com/in/greg-hladik",
      "highlights": [
        "Re-engineered event calendar communications into an automated workflow, cutting labor processing time from several hours down to 3 minutes (~95%+ efficiency gain)",
        "Built custom toolbar menus in Google Sheets connecting directly to external APIs for 1-click database refreshes, eliminating manual data entry errors across business modules",
        "Created 1-click dynamic response generators for CSR and front-desk staff to instantly produce context-aware, polished email communication for complex customer inquiries",
        "Automated financial proration schedules and billing date calculations, eliminating manual calculation errors across financial and back-office operations"
      ],
      "keywords": ["1-Click API Connections", "Google Apps Scripts", "Workflow Automation", "Hours to 3 Mins", "Financial Prorations"],
      "featured": true
    },
    {
      "name": "Multi-LLM Strategy & CSR Operations Assistants",
      "description": "Implemented a multi-LLM operations strategy leveraging Claude, ChatGPT, and Gemini based on model-specific strengths to assist Front Desk, Back Office, Events, and CSR teams with context synthesis, document polishing, and operational workflow logic.",
      "url": "https://linkedin.com/in/greg-hladik",
      "highlights": [
        "Mapped Claude, ChatGPT, and Gemini to model-specific operational strengths for drafting, context clarity, and document polishing",
        "Equipped multi-departmental staff with 1-click AI tools and customizable response templates for daily operational excellence"
      ],
      "keywords": ["Multi-LLM Strategy", "Claude / ChatGPT / Gemini", "CSR Operations", "Document Polishing"],
      "featured": true
    }
  ],
  "researchPartnerships": [
    {
      "title": "Automated & Dynamic Pavement Condition Index (PCI) System",
      "partners": "Drone AI Research Group",
      "period": "2025",
      "description": "Operational research collaboration evaluating drone-based AI pavement condition index technology, automated scoring software, and interactive maintenance dashboards."
    },
    {
      "title": "Plastic-Infused Parking Lots (Plastic Roads Technology)",
      "partners": "UTA Civil Engineering, Pavement Services, Austin Asphalt",
      "period": "2023",
      "description": "Pioneered the first real-world application of Plastic Roads recycled-plastic asphalt technology in the world, doubling surface lifespan and reducing CapEx."
    },
    {
      "title": "Arlington RAPID: Self-Driving Autonomous Shuttles (2.5-Year Extension)",
      "partners": "UTA Civil Engineering, City of Arlington (COA), May Mobility, Via",
      "period": "2022–2025",
      "description": "Multi-stakeholder autonomous shuttle integration project funded by Federal Transit Administration (FTA) and North Texas Council of Governments (NCTCOG)."
    },
    {
      "title": "Distribution of Potential Benefits Across Stakeholder Groups for Shared Electric Vehicles",
      "partners": "Georgia Tech, Cal Poly, and UTA Civil Engineering",
      "period": "2023–2024",
      "description": "Multi-university research study evaluating shared electric vehicle mobility, commute travel dynamics, and stakeholder benefit distribution."
    },
    {
      "title": "Digital Transformation in Parking & Transportation Services: UTA Case Study",
      "partners": "Tarrant Transit Alliance, Modii, and UTA Civil Engineering",
      "period": "2022–2023",
      "description": "Interdisciplinary evaluation and deployment of digital wayfinding, smart parking sensors, and mobile transportation technology."
    },
    {
      "title": "Intermodal Transportation Hubs for Colleges & Universities Study",
      "partners": "North Texas Council of Governments (NCTCOG), DFW Colleges & Universities",
      "period": "2021–2022",
      "description": "Regional transit hub planning initiative connecting higher education campuses across the DFW Metroplex."
    },
    {
      "title": "''Faster than Feet'' Micro-Mobility & Accessibility Corridors",
      "partners": "UTA Universal Design Class (2 Course Sections)",
      "period": "2022",
      "description": "Embedded undergraduate students into active campus planning to identify and design accessible, high-efficiency micro-mobility pathways."
    },
    {
      "title": "Shops at College Park Student-Led Marketing Campaigns",
      "partners": "UTA Marketing & Communications Courses (12 Course Sections)",
      "period": "2016–2018",
      "description": "Multi-year graduate-level class partnerships researching customer motivations, crafting communications strategies, and executing student-developed campaigns for College Park Shops."
    }
  ],
  "grants": [
    {
      "title": "Arlington RAPID Phase II: Ridership, Automation & Payment Integration Demonstration",
      "agency": "Federal Highway Administration / NCTCOG",
      "year": "2023",
      "amount": "$865,074",
      "role": "Co-Principal Investigator"
    },
    {
      "title": "Digital Transformation in Parking and Transportation Services: UTA Case Study",
      "agency": "North Texas Council of Governments",
      "year": "2022",
      "amount": "$500,148",
      "role": "Co-Principal Investigator"
    },
    {
      "title": "Distribution of Potential Benefits Across Stakeholder Groups for Shared Electric Vehicles",
      "agency": "US Department of Transportation (USDOT)",
      "year": "2022",
      "amount": "$150,000",
      "role": "Co-Principal Investigator"
    },
    {
      "title": "Arlington Rideshare, Automation, and Payment Integration Demonstration (RAPID)",
      "agency": "Federal Transit Administration (FTA)",
      "year": "2020",
      "amount": "$606,456",
      "role": "Co-Principal Investigator"
    },
    {
      "title": "EV Charging Station Expansion Project",
      "agency": "Texas Volkswagen Environmental Mitigation Program",
      "year": "2020",
      "amount": "$10,000",
      "role": "Project Lead"
    }
  ],
  "awards": [
    {
      "title": "Excellence in New Parking Program for Campus Demand Management with Zones",
      "organization": "Texas Parking and Transportation Association",
      "year": "2026"
    },
    {
      "title": "Excellence in Technology for Campus Wayfinding & Smart Parking solutions",
      "organization": "Texas Parking and Transportation Association",
      "year": "2025"
    },
    {
      "title": "Professor Joseph M. Sussman Best Paper Prize",
      "organization": "Frontiers in Built Environment - Transportation and Transit Systems",
      "year": "2024"
    },
    {
      "title": "Lifetime Achievement Award",
      "organization": "National Association of College Auxiliary Services South",
      "year": "2024"
    },
    {
      "title": "Professional Excellence Award",
      "organization": "International Parking & Mobility Institute",
      "year": "2024"
    },
    {
      "title": "Apex Award for Innovation for implementing Plastic Parking Lots",
      "organization": "International Parking & Mobility Institute",
      "year": "2024"
    },
    {
      "title": "Organization of the Year",
      "organization": "International Parking & Mobility Institute",
      "year": "2024"
    },
    {
      "title": "Restoration Program of the Year for Lot 49’s Plastic-Infused parking restoration",
      "organization": "Texas Parking and Transportation Association",
      "year": "2024"
    },
    {
      "title": "Excellence in Innovation for Research and Operational Performance of Self-Driving Shuttles",
      "organization": "International Parking & Mobility Institute",
      "year": "2023"
    },
    {
      "title": "Restoration Program of the Year for Lot 45’s sustainability initiatives",
      "organization": "Texas Parking and Transportation Association",
      "year": "2023"
    },
    {
      "title": "Excellence Award for Research and Operational Performance of Self-Driving Shuttles",
      "organization": "Texas Parking and Transportation Association",
      "year": "2022"
    },
    {
      "title": "Friend of Student Affairs",
      "organization": "University of Texas at Arlington",
      "year": "2022"
    },
    {
      "title": "Program of the Year for Reviving the UTA Transportation System",
      "organization": "Texas Parking and Transportation Association",
      "year": "2019"
    },
    {
      "title": "Program of the Year for License Plate Recognition Parking Enforcement",
      "organization": "Texas Parking and Transportation Association",
      "year": "2018"
    },
    {
      "title": "Best New Facility for the West Campus Parking Garage",
      "organization": "Texas Parking and Transportation Association",
      "year": "2018"
    },
    {
      "title": "Outstanding Leadership Presentation",
      "organization": "Leadership Center, University of Texas at Arlington",
      "year": "2014"
    }
  ],
  "leadershipAppointments": [
    "Campus Master Plan Focus Group Chair (2023–2025)",
    "Climate Action Plan Search Committee (2023)",
    "Tarrant Transit Alliance Board of Directors (2022–Present)",
    "Arlington RAPID Self-Driving Transit Shuttle Task Force (2020–Present)",
    "Advisory Board for UTA Bike Committee (2021–Present)",
    "Board of Advisors, Institute for Sustainability & Global Impact (2018–Present)",
    "Chair: SWACUHO Technology Executive Committee (2016–2017)",
    "City of Arlington Transportation Advisory Committee (2017)",
    "COVID-19 Event Response Task Force (2020–2021)",
    "Student Conduct Hearing Officer (2012–2016)",
    "Chair: SWACUHO Research & Information Committee (2011–2014)"
  ],
  "education": [
    {
      "institution": "University of Texas, Austin",
      "area": "Executive Leadership",
      "studyType": "Governor’s Executive Development Program",
      "startDate": "2023",
      "endDate": "2023",
      "score": "Executive Credential"
    },
    {
      "institution": "University of Texas at Arlington",
      "area": "Educational Leadership & Policy Study",
      "studyType": "Ph.D.",
      "startDate": "2012",
      "endDate": "2018",
      "score": "Doctorate Degree"
    },
    {
      "institution": "Arkansas Tech University",
      "area": "College Student Personnel",
      "studyType": "M.S.",
      "startDate": "2006",
      "endDate": "2008",
      "score": "Master of Science"
    },
    {
      "institution": "Oklahoma State University",
      "area": "Business Management",
      "studyType": "B.S.",
      "startDate": "2002",
      "endDate": "2006",
      "score": "Bachelor of Science"
    }
  ],
  "publicationYears": [
    {
      "year": "2026",
      "items": [
        "Javaheri, A., Sneha Channamallu, S., Kermanshachi, S., Michael Rosenberger, J., Pamidimukkala, A., Kan, C., & Hladik, G. (2025). Digital versus Physical Ticketing Strategies for University Parking. In International Conference on Transportation and Development 2025 (pp. 683-690).",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., Pamidimukkala, A., & Hladik, G. (2026). Cluster-based analysis of university parking satisfaction. Discover Cities. https://doi.org/10.1007/s44327-026-00197-0",
        "Almaskati, D., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., Hladik, G., & Foss, A. (2026). Exploring mode preferences in the era of autonomy and shared mobility. Sustainable Transport and Livability. https://doi.org/10.1080/29941849.2026.2619168"
      ]
    },
    {
      "year": "2025",
      "items": [
        "Almaskati, D., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2025). Assessing public receptivity and preference formation in the transition to fully autonomous vehicles. Transport Economics and Management. https://doi.org/10.1016/j.team.2025.11.003",
        "Channamallu, S. S., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2025). Understanding user satisfaction with university parking: A grounded theory approach. Urban Mobility. https://doi.org/10.1016/j.urbmob.2025.100136",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., Pamidimukkala, A., & Hladik, G. (2025). Utilizing extended theory of planned behavior to evaluate consumers’ intention to adopt electric vehicles. Green Energy and Intelligent Transportation. https://doi.org/10.1016/j.geits.2025.100258",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., Pamidimukkala, A., & Hladik, G. (2025). Determinants of user satisfaction in smart parking applications. Sustainable Cities and Society. https://doi.org/10.1016/j.scs.2025.102545"
      ]
    },
    {
      "year": "2024",
      "items": [
        "Javaheri, A., Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., Pamidimukkala, A., Kan, C., & Hladik, G. (2024). Evaluating the impact of smart parking systems on parking violations. IEEE Access. https://doi.org/10.1109/ACCESS.2024.3503513",
        "Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2024). Adoption of electric vehicles: An empirical study of consumers’ intentions. Transport Economics and Management.",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2024). Enhancing campus parking with smart solutions. Transportation Research Procedia. (Accepted)",
        "Almaskati, D., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., Hladik, G., & Foss, A. (2024). Evaluating students’ perceptions of fully autonomous vehicles and shared mobility. Transportation Research Procedia.",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2024). Analysis of user interactions with a parking finder app. Transportation Research Procedia. (Under review)",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2024). Diversity in usage: A comparative user experience study of a parking app. Transportation Research Procedia. (Under review)",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2024). Interrelationships in urban mobility: Correlation analysis of a parking finder app. Transportation Research Procedia. (Under review)",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2024). Predictive insights into user satisfaction: Regression analysis of a parking app. Transportation Research Procedia. (Under review)",
        "Channamallu, S. S., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2024). Evolution of user engagement: A time-series analysis of a parking finder app. Transportation Research Procedia. (Under review)",
        "Javaheri, A., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., Kan, C., & Hladik, G. (2024). Exploratory analysis of parking citations on a university campus. Transportation Research Procedia. (Under review)",
        "Javaheri, A., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., Kan, C., & Hladik, G. (2024). Evaluating the causes of parking violations on a university campus. Transportation Research Procedia. (Under review)",
        "Wang, H., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., Kan, C., & Hladik, G. (2024). Exploring the revenues of a university parking lot. Transportation Research Procedia.",
        "Pamidimukkala, A., Kermanshachi, S., Rosenberger, J., & Hladik, G. (2024). An empirical investigation of factors affecting adoption of alternative fuel vehicles. Transportation Research Procedia. (Under review)",
        "Pamidimukkala, A., Kermanshachi, S., Rosenberger, J., & Hladik, G. (2024). Barriers and motivators to the adoption of electric vehicles: A global review. Green Energy and Intelligent Transportation. https://doi.org/10.1016/j.geits.2024.100153",
        "Pamidimukkala, A., Kermanshachi, S., Rosenberger, J., & Hladik, G. (2024). Examining the drivers of electric vehicle adoption. ASCE ICTD Proceedings. (Under review)",
        "Channamallu, S. S., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J., & Hladik, G. (2024). Factors impacting customer satisfaction with parking: A case study. ASCE ICTD Proceedings. (Under review)"
      ]
    },
    {
      "year": "2023",
      "items": [
        "Etminani, R., Khan, M. A., Patel, R., Kermanshachi, S., Rosenberger, J., Pamidimukkala, A., & Hladik, G. (2023). Measuring students’ satisfaction levels for transit services. International Journal of Transportation Science and Technology.",
        "Etminani-Ghasrodashti, R., Hladik, G., Kermanshachi, S., Rosenberger, J. M., Khan, A., & Foss, A. (2023). Exploring shared travel behavior of university students. Transportation Planning and Technology.",
        "Khan, M., Patel, R., Pamidimukkala, A., Kermanshachi, S., Rosenberger, J., Hladik, G., & Foss, A. (2023). Factors that determine satisfaction levels with public transit services in a university community. Frontiers in Built Environment.",
        "Khan, M., Patel, R. K., Etminani-Ghasrodashti, R., Kermanshachi, S., Rosenberger, J. M., Pamidimukkala, A., & Hladik, G. (2023). Understanding students’ satisfaction with university transportation. ICTD Proceedings 2023.",
        "Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2023). Adoption of electric vehicles: An empirical study of consumers’ intentions. Transport Economics and Management.",
        "Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2023). Barriers to electric vehicle adoption: Structural equation modeling analysis. Transportation Research Procedia.",
        "Pamidimukkala, A., Kermanshachi, S., Rosenberger, J. M., & Hladik, G. (2023). Evaluation of EV adoption barriers: Technological, environmental, financial, and infrastructure factors. International Journal of Transportation Science and Technology.",
        "Khan, M. A., Patel, R. K., Etminani-Ghasrodashti, R., Kermanshachi, S., Rosenberger, J. M., Pamidimukkala, A., Hladik, G., & Foss, A. (2023). Transit services and user satisfaction: Latent class cluster analysis. Transportation Research Procedia."
      ]
    },
    {
      "year": "2022",
      "items": [
        "Khan, M., Etminani-Ghasrodashti, R., Kermanshachi, S., Rosenberger, J. M., Foss, A., & Hladik, G. (2022). Demand-responsive transit vs. fixed-route transit: University student travel behavior. ICTD Proceedings 2022.",
        "Foss, A., Kermanshachi, S., Hladik, G., Brighten, G., & Leone, N. (2022). Arlington RAPID: Summary of findings. US Department of Transportation.",
        "Khan, M., Etminani, R., Kermanshachi, S., Rosenberger, J., & Hladik, G. (2022). Improving urban mobility through innovative AV technology: Arlington, Texas case study. UTA Innovation Day Poster."
      ]
    },
    {
      "year": "2016",
      "items": [
        "Davis, B. W., Williams, A. D., & Hladik, G. (2016). Measuring the impact of nontraditional leadership preparation: Connecting online learning to career outcomes. AERA Online Paper Repository."
      ]
    },
    {
      "year": "Industry Publications",
      "items": [
        "Hladik, G. (2024). Leadership moment: Leading through innovation. Parking & Mobility, 6(5).",
        "Hladik, G. (2019). Reviving a transportation system with innovation and a public-private partnership. Parking & Mobility.",
        "Hladik, G. (2023). Parking on plastic. Parking & Mobility, 12(5).",
        "Leidlein, E., & Hladik, G. (2012). Ten do’s and don’ts of outsourcing ResNet. Campus Technology."
      ]
    }
  ],
  "aiProof": [
    {
      "title": "Lead-to-Booking Automation & Self-Service Sales Engine",
      "role": "Lead Architect & Business Operator",
      "focus": "AI in Business / Revenue Operations / Process Automation",
      "problemSolved": "Long phone consultations, confusing pricing tiers, and complicated multi-child scheduling were causing high lead drop-off and burdening front-desk staff.",
      "solution": "Engineered a custom self-service sales workflow that guides parents through program evaluation, skill placement, custom pricing, and live ERP schedule matching.",
      "businessImpact": [
        "Created an instant Lead-to-Booking pipeline with zero manual intervention required.",
        "Solved sibling scheduling constraints across 3 locations in real time.",
        "Pre-fills enterprise ERP records to eliminate administrative data entry errors.",
        "Captures and converts high-intent leads 24/7 outside regular business hours."
      ],
      "liveProofUrls": [
        { "label": "Instant Quote & Schedule Hold", "url": "https://britishswimschool-instantquote.vercel.app/hold" },
        { "label": "Interactive Parent Guide & Skill Placement", "url": "https://britishswimschool-instantquote.vercel.app/guide" },
        { "label": "24/7 FAQ & AI Answer Engine", "url": "https://britishswimschool-instantquote.vercel.app/answers" }
      ],
      "technologies": [
        "AI in Business",
        "Revenue Operations",
        "Process Automation",
        "Constraint Scheduling",
        "Dynamic CPQ",
        "Jackrabbit Class ERP"
      ]
    },
    {
      "title": "AI-Enabled Predictive Parking Map & Live Availability Engine",
      "role": "Executive Sponsor & CS Student Mentor",
      "focus": "Applied AI / Predictive Analytics / Cost Elimination",
      "problemSolved": "Recurring $65,000 annual commercial vendor SaaS licensing fee for parking lot occupancy tracking.",
      "solution": "Mentored a UTA Computer Science internship team to engineer an in-house predictive parking map integrating live sensor APIs and predictive backup algorithms.",
      "businessImpact": [
        "Eliminated a $65,000 annual commercial vendor SaaS expenditure with a zero-cost in-house platform.",
        "Engineered live API availability tracking with predictive backup algorithms for campus-wide navigation.",
        "Redirected drivers proactively during peak congestion periods before lots hit maximum capacity.",
        "Mentored student engineering interns from architectural design to live production deployment."
      ],
      "technologies": [
        "Predictive AI Modeling",
        "Live REST API Architecture",
        "Cost Elimination ($65K/yr)",
        "Real-Time Sensor Analytics",
        "Student Engineering Mentorship"
      ]
    },
    {
      "title": "Interactive Event Parking Logistics & Wayfinding HTML Builder",
      "role": "Executive Sponsor & Product Architect",
      "focus": "Workflow Automation / Event Logistics / Zero-Cost Web Tooling",
      "problemSolved": "Event coordinators faced time-consuming manual coordination to assign parking, estimate walking times, and direct thousands of visitors.",
      "solution": "Mentored a UTA Computer Science internship team to develop an interactive HTML builder that predicts recommended arrival times, walking itineraries, and parking difficulty—running as a standalone HTML page with zero ongoing costs.",
      "businessImpact": [
        "Engineered as a lightweight, standalone HTML page with zero ongoing server, hosting, or software licensing costs.",
        "Reduced administrative event coordination overhead by 95% while improving communication clarity.",
        "Built interactive HTML visual builder for rapid lot and venue selection by campus coordinators.",
        "Integrated predictive technology for recommended arrival windows and transit difficulty scores.",
        "Elevated visitor service levels for major university ceremonies, athletics, and academic conferences."
      ],
      "technologies": [
        "Zero Ongoing Costs",
        "Standalone HTML Architecture",
        "Workflow Automation",
        "Event Logistics Optimization",
        "Predictive Wayfinding"
      ]
    }
  ]
};

let resumeData = null;

// DOM Elements
const resumeContainer = document.getElementById('resume-app');
const viewModeSelector = document.getElementById('view-mode-selector');
const themeSelector = document.getElementById('theme-selector');
const toggleEditorBtn = document.getElementById('toggle-editor-btn');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const editorDrawer = document.getElementById('editor-drawer');
const exportPdfBtn = document.getElementById('export-pdf-btn');
const exportJsonBtn = document.getElementById('export-json-btn');
const importJsonBtn = document.getElementById('import-json-btn');
const jsonFileInput = document.getElementById('json-file-input');
const resetDefaultBtn = document.getElementById('reset-default-btn');
const toggleFranchiseBtn = document.getElementById('toggle-franchise-btn');

// Form Tabs
const tabFormBtn = document.getElementById('switch-tab-form');
const tabJsonBtn = document.getElementById('switch-tab-json');
const tabFormContent = document.getElementById('tab-content-form');
const tabJsonContent = document.getElementById('tab-content-json');

// Form Input Elements
const editName = document.getElementById('edit-name');
const editLabel = document.getElementById('edit-label');
const editEmail = document.getElementById('edit-email');
const editPhone = document.getElementById('edit-phone');
const editUrl = document.getElementById('edit-url');
const editSummary = document.getElementById('edit-summary');
const editRawJson = document.getElementById('edit-raw-json');
const applyJsonBtn = document.getElementById('apply-json-btn');

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
  setupTheme();
  setupFranchiseToggleState();
  setupViewModeState();
  await loadResumeData();
  setupEventListeners();
  renderResume();
});

// View Mode State
function setupViewModeState() {
  const storedMode = localStorage.getItem(VIEW_MODE_KEY);
  currentViewMode = storedMode || 'executive';
  if (viewModeSelector) {
    viewModeSelector.value = currentViewMode;
  }
}

// Theme Management
function setupTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeSelector.value = savedTheme;

  themeSelector.addEventListener('change', (e) => {
    const newTheme = e.target.value;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
}

function setupFranchiseToggleState() {
  const storedState = localStorage.getItem(HIDE_FRANCHISE_KEY);
  hideFranchiseExperience = storedState !== null ? storedState === 'true' : true;
  updateFranchiseButtonUI();
}

function updateFranchiseButtonUI() {
  if (!toggleFranchiseBtn) return;
  if (hideFranchiseExperience) {
    toggleFranchiseBtn.textContent = '👁️ Show Franchise Experience';
    toggleFranchiseBtn.classList.add('btn-toggle-active');
  } else {
    toggleFranchiseBtn.textContent = '👁️ Hide Franchise Experience';
    toggleFranchiseBtn.classList.remove('btn-toggle-active');
  }
}

// Data Loading
async function loadResumeData() {
  const localData = localStorage.getItem(STORAGE_KEY);
  if (localData) {
    try {
      resumeData = JSON.parse(localData);
      populateFormFields();
      return;
    } catch (err) {
      console.error('Failed to parse saved resume data, falling back to default:', err);
    }
  }

  try {
    const res = await fetch('resume-data.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    resumeData = await res.json();
  } catch (err) {
    console.warn('Fetch resume-data.json failed. Using inline fallback data:', err);
    resumeData = DEFAULT_RESUME_DATA;
  }
  
  saveToLocalStorage();
  populateFormFields();
}

function saveToLocalStorage() {
  if (resumeData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
  }
}

// Populate Editor Form Fields
function populateFormFields() {
  if (!resumeData || !resumeData.basics) return;
  const b = resumeData.basics;
  editName.value = b.name || '';
  editLabel.value = b.label || '';
  editEmail.value = b.email || '';
  editPhone.value = b.phone || '';
  editUrl.value = b.url || '';
  editSummary.value = b.summary || '';
  editRawJson.value = JSON.stringify(resumeData, null, 2);
}

// Format Keywords/Technologies as Pipe-Separated Strings
function renderPipeKeywords(keywordsArr) {
  if (!keywordsArr || keywordsArr.length === 0) return '';
  return `<div class="pipe-keywords-row">${keywordsArr.join(' <span class="pipe-sep">|</span> ')}</div>`;
}

// Render Project Card with Focus, Problem/Solution & Live Proof Links
function renderProjectCard(proj) {
  const proofLinksHtml = proj.liveProofUrls && proj.liveProofUrls.length > 0 ? `
    <div class="project-proof-links">
      <span class="proof-label">🔗 Live Proof:</span>
      ${proj.liveProofUrls.map(l => `<a href="${l.url}" target="_blank" class="proof-link-pill" rel="noopener noreferrer">${l.label} ↗</a>`).join('')}
    </div>
  ` : (proj.url ? `
    <div class="project-proof-links">
      <a href="${proj.url}" target="_blank" class="proof-link-pill" rel="noopener noreferrer">Live Demo ↗</a>
    </div>
  ` : '');

  const focusBadgeHtml = proj.focus ? `
    <span class="project-focus-badge">${proj.focus}</span>
  ` : '';

  const problemSolutionHtml = (proj.problemSolved || proj.solution) ? `
    <div class="project-problem-solution">
      ${proj.problemSolved ? `<div class="project-ps-row"><strong>Problem Solved:</strong> ${proj.problemSolved}</div>` : ''}
      ${proj.solution ? `<div class="project-ps-row"><strong>Solution:</strong> ${proj.solution}</div>` : ''}
    </div>
  ` : '';

  return `
    <div class="project-card">
      <div>
        <div class="project-header">
          <h4 class="project-title">${proj.name}</h4>
          ${focusBadgeHtml}
        </div>
        ${problemSolutionHtml}
        <p class="project-desc">${proj.description || ''}</p>
        <ul class="bullets-list" style="margin-bottom: 0.5rem;">
          ${(proj.highlights || []).map(h => `<li>${h}</li>`).join('')}
        </ul>
        ${proofLinksHtml}
      </div>
      ${renderPipeKeywords(proj.keywords)}
    </div>
  `;
}

// Render Resume Presentation View
function renderResume() {
  if (!resumeData) resumeData = DEFAULT_RESUME_DATA;

  if (currentViewMode === 'executive') {
    renderExecutiveResume();
  } else {
    renderFullAcademicCV();
  }
}

// ⚡ 1. Render Abbreviated Executive Resume (Concise, High-Impact Value Proposition)
function renderExecutiveResume() {
  const {
    basics,
    executiveSummaryValue,
    executiveValueHighlights,
    engagementHighlights,
    skills,
    work,
    projects,
    grants,
    awards,
    education
  } = resumeData;

  const locationText = basics.location ? `${basics.location.city}, ${basics.location.region}` : '';
  const linkedinUrl = "https://linkedin.com/in/greg-hladik";

  let displayLabel = basics.label || '';
  if (hideFranchiseExperience) {
    displayLabel = displayLabel
      .replace(/^Chief Operations Officer\s*&\s*/i, '')
      .replace(/Chief Operations Officer/i, 'Executive Director');
  }

  // Executive Summary text
  const execSummary = executiveSummaryValue || basics.summary;

  // Executive Value Highlights
  const highlightsList = executiveValueHighlights || engagementHighlights || [];
  const execHighlightsHtml = highlightsList.map(h => {
    const parts = h.split(': ');
    if (parts.length > 1) {
      return `
        <div class="highlight-pill">
          <span class="highlight-title">${parts[0]}:</span>
          <span class="highlight-desc">${parts.slice(1).join(': ')}</span>
        </div>
      `;
    }
    return `
      <div class="highlight-pill">
        <span class="highlight-desc">${h}</span>
      </div>
    `;
  }).join('');

  // Filter Work Experience
  const filteredWork = (work || []).filter(item => {
    if (hideFranchiseExperience) {
      if (item.isFranchise || item.id === 'british-swim-school' || (item.name && item.name.toLowerCase().includes('british swim school'))) {
        return false;
      }
    }
    return true;
  });

  const workHtml = filteredWork.map(item => `
    <div class="timeline-item">
      <div class="timeline-header">
        <div>
          <span class="role-title">${item.position}</span>
          <span style="color: var(--text-dim); margin: 0 0.4rem;">—</span>
          <a href="${item.url || '#'}" target="_blank" class="company-name">${item.name}</a>
        </div>
        <span class="time-period">${item.startDate} — ${item.endDate}</span>
      </div>
      <p class="experience-summary">${item.summary || ''}</p>
      <ul class="bullets-list">
        ${(item.highlights || []).map(h => `<li>${h}</li>`).join('')}
      </ul>
      ${renderPipeKeywords(item.technologies)}
    </div>
  `).join('');

  // Skills Grid (Top 4 Core Executive Categories)
  const skillsHtml = (skills || []).map(cat => `
    <div class="skill-card">
      <div class="skill-category">
        <span class="skill-category-title">${cat.name}</span>
        <span class="skill-level-badge">${cat.level}</span>
      </div>
      ${renderPipeKeywords(cat.keywords)}
    </div>
  `).join('');

  // Top 4 Flagship Initiatives
  const topProjects = (projects || []).slice(0, 4);
  const projectsHtml = topProjects.map(renderProjectCard).join('');

  // Top Awards (Curated top 6 for executive resume)
  const topAwards = (awards || []).slice(0, 6);
  const awardsHtml = topAwards.map(a => `
    <div class="award-card">
      <div class="award-title">${a.title}</div>
      <div class="award-org">${a.organization} (${a.year})</div>
    </div>
  `).join('');

  // Top Grants ($2.1M+ Total)
  const topGrants = (grants || []).slice(0, 3);
  const grantsHtml = topGrants.map(g => `
    <div class="grant-card">
      <div class="grant-card-header">
        <span class="grant-title">${g.title}</span>
        <span class="grant-amount-badge">${g.amount}</span>
      </div>
      <div class="grant-meta-row">
        <span class="grant-meta-item"><strong>Year:</strong> ${g.year}</span>
        <span class="grant-meta-divider">•</span>
        <span class="grant-meta-item"><strong>Role:</strong> ${g.role}</span>
        <span class="grant-meta-divider">•</span>
        <span class="grant-meta-item"><strong>Sponsor:</strong> ${g.agency}</span>
      </div>
    </div>
  `).join('');

  // Education HTML
  const eduHtml = (education || []).map(edu => `
    <div class="edu-card">
      <div class="edu-degree">${edu.studyType} in ${edu.area}</div>
      <div class="edu-school">${edu.institution}</div>
      <div class="edu-dates">${edu.startDate} — ${edu.endDate} • ${edu.score || ''}</div>
    </div>
  `).join('');

  resumeContainer.innerHTML = `
    <!-- Hero Header Section -->
    <header class="hero-section">
      <div class="hero-info">
        <h1>${basics.name}</h1>
        <div class="hero-title">${displayLabel}</div>
        <div class="contact-bar">
          ${basics.email ? `<div class="contact-item">Email: <a href="mailto:${basics.email}">${basics.email}</a></div>` : ''}
          ${basics.phone ? `<div class="contact-item">Phone: ${basics.phone}</div>` : ''}
          ${locationText ? `<div class="contact-item">Location: ${locationText}</div>` : ''}
          <div class="contact-item">LinkedIn: <a href="${linkedinUrl}" target="_blank">linkedin.com/in/greg-hladik</a></div>
        </div>
      </div>
    </header>

    <!-- Executive Summary & Organizational Value Proposition -->
    <section class="resume-section">
      <h3 class="section-title">Executive Profile & Organizational Value Proposition</h3>
      <div class="summary-box">
        <p class="summary-text">${execSummary}</p>
      </div>
      <div class="highlights-container" style="margin-top: 1.25rem;">
        ${execHighlightsHtml}
      </div>
    </section>

    <!-- Core Strategic Competencies & Leadership Domains -->
    <section class="resume-section">
      <h3 class="section-title">Core Strategic Competencies & Leadership Domains</h3>
      <div class="skills-grid">
        ${skillsHtml}
      </div>
    </section>

    <!-- Professional & Executive Experience -->
    <section class="resume-section">
      <h3 class="section-title">Professional & Executive Experience</h3>
      <div class="timeline">
        ${workHtml}
      </div>
    </section>

    <!-- Flagship Applied AI & Smart Mobility Initiatives -->
    ${topProjects.length > 0 ? `
      <section class="resume-section">
        <h3 class="section-title">Flagship Applied AI & Smart Mobility Initiatives</h3>
        <div class="projects-grid">
          ${projectsHtml}
        </div>
      </section>
    ` : ''}

    <!-- Honors & Strategic Grants ($2.1M+ Awarded) -->
    <section class="resume-section">
      <h3 class="section-title">Key Executive Honors & Federal Grants ($2.1M+ Awarded)</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 1rem;">
        <div>
          <h4 style="font-family: 'Merriweather', serif; font-size: 0.95rem; margin-bottom: 0.75rem; padding-bottom: 0.25rem; border-bottom: 1px solid var(--border-subtle);">Selected Professional Awards</h4>
          <div class="awards-grid">
            ${awardsHtml}
          </div>
        </div>
        <div>
          <h4 style="font-family: 'Merriweather', serif; font-size: 0.95rem; margin-bottom: 0.75rem; padding-bottom: 0.25rem; border-bottom: 1px solid var(--border-subtle);">Major Research Grants</h4>
          <div class="grants-grid">
            ${grantsHtml}
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Credentials -->
    <section class="resume-section">
      <h3 class="section-title">Education & Credentials</h3>
      <div class="edu-grid">
        ${eduHtml}
      </div>
    </section>

    <!-- Academic Research & Scholarship Callout (Clean Standalone Block) -->
    <section class="resume-section" style="margin-bottom: 0;">
      <h3 class="section-title">Faculty Research Alliances & Academic Output</h3>
      <div class="summary-box">
        <strong style="color: var(--text-main); font-family: 'Merriweather', serif; font-size: 0.98rem;">Faculty Research Alliances & $2.1M+ Grant Funding</strong>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.35rem; line-height: 1.55;">
          Partnered with university faculty, academic departments, and private industry by opening live operations as research innovation labs. Co-authored 30+ peer-reviewed publications (175+ citations) and secured $2.1M+ in external grants to enhance scholarly contributions and operational performance.
        </p>
      </div>
    </section>
  `;
}

// 📜 2. Render Full Comprehensive Academic CV
function renderFullAcademicCV() {
  const {
    basics,
    engagementHighlights,
    skills,
    work,
    projects,
    researchPartnerships,
    grants,
    publicationYears,
    publications,
    awards,
    leadershipAppointments,
    education
  } = resumeData;

  const locationText = basics.location ? `${basics.location.city}, ${basics.location.region}` : '';
  const linkedinUrl = "https://linkedin.com/in/greg-hladik";

  let displayLabel = basics.label || '';
  if (hideFranchiseExperience) {
    displayLabel = displayLabel
      .replace(/^Chief Operations Officer\s*&\s*/i, '')
      .replace(/Chief Operations Officer/i, 'Executive Director');
  }

  const engagementHtml = (engagementHighlights || []).map(h => {
    const parts = h.split(': ');
    if (parts.length > 1) {
      return `
        <div class="highlight-pill">
          <span class="highlight-title">${parts[0]}:</span>
          <span class="highlight-desc">${parts.slice(1).join(': ')}</span>
        </div>
      `;
    }
    return `
      <div class="highlight-pill">
        <span class="highlight-desc">${h}</span>
      </div>
    `;
  }).join('');

  const filteredWork = (work || []).filter(item => {
    if (hideFranchiseExperience) {
      if (item.isFranchise || item.id === 'british-swim-school' || (item.name && item.name.toLowerCase().includes('british swim school'))) {
        return false;
      }
    }
    return true;
  });

  const workHtml = filteredWork.map(item => `
    <div class="timeline-item">
      <div class="timeline-header">
        <div>
          <span class="role-title">${item.position}</span>
          <span style="color: var(--text-dim); margin: 0 0.4rem;">—</span>
          <a href="${item.url || '#'}" target="_blank" class="company-name">${item.name}</a>
        </div>
        <span class="time-period">${item.startDate} — ${item.endDate}</span>
      </div>
      <p class="experience-summary">${item.summary || ''}</p>
      <ul class="bullets-list">
        ${(item.highlights || []).map(h => `<li>${h}</li>`).join('')}
      </ul>
      ${renderPipeKeywords(item.technologies)}
    </div>
  `).join('');

  const skillsHtml = (skills || []).map(cat => `
    <div class="skill-card">
      <div class="skill-category">
        <span class="skill-category-title">${cat.name}</span>
        <span class="skill-level-badge">${cat.level}</span>
      </div>
      ${renderPipeKeywords(cat.keywords)}
    </div>
  `).join('');

  const projectsHtml = (projects || []).map(renderProjectCard).join('');

  const partnershipsHtml = (researchPartnerships || []).map(rp => `
    <div class="partnership-card">
      <div class="partnership-header">
        <span class="partnership-title">${rp.title}</span>
        <span class="partnership-period">${rp.period}</span>
      </div>
      <div class="partnership-entities">Key Partners: <strong>${rp.partners}</strong></div>
      <p class="partnership-desc">${rp.description}</p>
    </div>
  `).join('');

  const grantsHtml = (grants || []).map(g => `
    <div class="grant-card">
      <div class="grant-card-header">
        <span class="grant-title">${g.title}</span>
        <span class="grant-amount-badge">${g.amount}</span>
      </div>
      <div class="grant-meta-row">
        <span class="grant-meta-item"><strong>Year:</strong> ${g.year}</span>
        <span class="grant-meta-divider">•</span>
        <span class="grant-meta-item"><strong>Role:</strong> ${g.role}</span>
        <span class="grant-meta-divider">•</span>
        <span class="grant-meta-item"><strong>Sponsor:</strong> ${g.agency}</span>
      </div>
    </div>
  `).join('');

  let publicationsHtml = '';
  if (publicationYears && publicationYears.length > 0) {
    publicationsHtml = publicationYears.map(py => `
      <div class="pub-year-block">
        <div class="pub-year-heading">${py.year}</div>
        <div class="pubs-list">
          ${(py.items || []).map(citation => `<div class="pub-item">${citation}</div>`).join('')}
        </div>
      </div>
    `).join('');
  } else if (publications && publications.length > 0) {
    publicationsHtml = `
      <div class="pubs-list">
        ${publications.map(pub => `<div class="pub-item">${pub.citation || pub}</div>`).join('')}
      </div>
    `;
  }

  const awardsHtml = (awards || []).map(a => `
    <div class="award-card">
      <div class="award-title">${a.title}</div>
      <div class="award-org">${a.organization} (${a.year})</div>
    </div>
  `).join('');

  const leadershipHtml = (leadershipAppointments || []).map(item => `
    <div class="leadership-item">
      <span>${item}</span>
    </div>
  `).join('');

  const eduHtml = (education || []).map(edu => `
    <div class="edu-card">
      <div class="edu-degree">${edu.studyType} in ${edu.area}</div>
      <div class="edu-school">${edu.institution}</div>
      <div class="edu-dates">${edu.startDate} — ${edu.endDate} • ${edu.score || ''}</div>
    </div>
  `).join('');

  resumeContainer.innerHTML = `
    <!-- Hero Header Section -->
    <header class="hero-section">
      <div class="hero-info">
        <h1>${basics.name}</h1>
        <div class="hero-title">${displayLabel}</div>
        <div class="contact-bar">
          ${basics.email ? `<div class="contact-item">Email: <a href="mailto:${basics.email}">${basics.email}</a></div>` : ''}
          ${basics.phone ? `<div class="contact-item">Phone: ${basics.phone}</div>` : ''}
          ${locationText ? `<div class="contact-item">Location: ${locationText}</div>` : ''}
          <div class="contact-item">LinkedIn: <a href="${linkedinUrl}" target="_blank">linkedin.com/in/greg-hladik</a></div>
        </div>
      </div>
    </header>

    <!-- Executive Summary Section -->
    ${basics.summary ? `
      <section class="resume-section">
        <h3 class="section-title">Executive Summary</h3>
        <div class="summary-box">
          <p class="summary-text">${basics.summary}</p>
        </div>
        
        ${engagementHighlights && engagementHighlights.length > 0 ? `
          <div class="highlights-container" style="margin-top: 1.25rem;">
            ${engagementHtml}
          </div>
        ` : ''}
      </section>
    ` : ''}

    <!-- Work Experience Section -->
    <section class="resume-section">
      <h3 class="section-title">Professional & Executive Experience</h3>
      <div class="timeline">
        ${workHtml}
      </div>
    </section>

    <!-- Applied AI & Mobility Initiatives -->
    ${projects && projects.length > 0 ? `
      <section class="resume-section">
        <h3 class="section-title">Applied AI, Drone Analytics & Mobility Initiatives</h3>
        <div class="projects-grid">
          ${projectsHtml}
        </div>
      </section>
    ` : ''}

    <!-- Research Partnerships & Interdisciplinary Collaborations -->
    ${researchPartnerships && researchPartnerships.length > 0 ? `
      <section class="resume-section">
        <h3 class="section-title">Research Partnerships & Interdisciplinary Collaborations</h3>
        <div class="partnerships-grid">
          ${partnershipsHtml}
        </div>
      </section>
    ` : ''}

    <!-- Grants & Research Funding -->
    ${grants && grants.length > 0 ? `
      <section class="resume-section">
        <h3 class="section-title">Grants & Research Funding ($2.1M+ Awarded)</h3>
        <div class="grants-grid">
          ${grantsHtml}
        </div>
      </section>
    ` : ''}

    <!-- Honors & Professional Awards -->
    ${awards && awards.length > 0 ? `
      <section class="resume-section">
        <h3 class="section-title">Honors & Professional Awards</h3>
        <div class="awards-grid">
          ${awardsHtml}
        </div>
      </section>
    ` : ''}

    <!-- Leadership & Board Appointments -->
    ${leadershipAppointments && leadershipAppointments.length > 0 ? `
      <section class="resume-section">
        <h3 class="section-title">Leadership, Committees & Board Appointments</h3>
        <div class="leadership-grid">
          ${leadershipHtml}
        </div>
      </section>
    ` : ''}

    <!-- Core Competencies & Technical Skills -->
    <section class="resume-section">
      <h3 class="section-title">Core Competencies & Technical Skills</h3>
      <div class="skills-grid">
        ${skillsHtml}
      </div>
    </section>

    <!-- Education Section -->
    <section class="resume-section">
      <h3 class="section-title">Education & Credentials</h3>
      <div class="edu-grid">
        ${eduHtml}
      </div>
    </section>

    <!-- Publications & Peer-Reviewed Research -->
    ${publicationsHtml ? `
      <section class="resume-section" style="margin-bottom: 0;">
        <h3 class="section-title">Publications & Peer-Reviewed Research</h3>
        ${publicationsHtml}
      </section>
    ` : ''}
  `;
}

// Setup Event Listeners
function setupEventListeners() {
  // View Mode Switcher Listener
  if (viewModeSelector) {
    viewModeSelector.addEventListener('change', (e) => {
      currentViewMode = e.target.value;
      localStorage.setItem(VIEW_MODE_KEY, currentViewMode);
      renderResume();
    });
  }

  // Toggle Franchise Experience
  if (toggleFranchiseBtn) {
    toggleFranchiseBtn.addEventListener('click', () => {
      hideFranchiseExperience = !hideFranchiseExperience;
      localStorage.setItem(HIDE_FRANCHISE_KEY, hideFranchiseExperience ? 'true' : 'false');
      updateFranchiseButtonUI();
      renderResume();
    });
  }

  // Toggle Drawer
  toggleEditorBtn.addEventListener('click', () => {
    editorDrawer.classList.toggle('open');
  });
  closeDrawerBtn.addEventListener('click', () => {
    editorDrawer.classList.remove('open');
  });

  // Switch Tabs
  tabFormBtn.addEventListener('click', () => {
    tabFormBtn.classList.add('btn-primary');
    tabJsonBtn.classList.remove('btn-primary');
    tabFormContent.style.display = 'block';
    tabJsonContent.style.display = 'none';
  });

  tabJsonBtn.addEventListener('click', () => {
    tabJsonBtn.classList.add('btn-primary');
    tabFormBtn.classList.remove('btn-primary');
    tabFormContent.style.display = 'none';
    tabJsonContent.style.display = 'block';
    editRawJson.value = JSON.stringify(resumeData, null, 2);
  });

  // Form Live Edits
  const formInputs = [editName, editLabel, editEmail, editPhone, editUrl, editSummary];
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      if (!resumeData.basics) resumeData.basics = {};
      resumeData.basics.name = editName.value;
      resumeData.basics.label = editLabel.value;
      resumeData.basics.email = editEmail.value;
      resumeData.basics.phone = editPhone.value;
      resumeData.basics.url = editUrl.value;
      resumeData.basics.summary = editSummary.value;
      saveToLocalStorage();
      renderResume();
    });
  });

  // Apply Raw JSON Edits
  applyJsonBtn.addEventListener('click', () => {
    try {
      const parsed = JSON.parse(editRawJson.value);
      resumeData = parsed;
      saveToLocalStorage();
      populateFormFields();
      renderResume();
      alert('Resume data updated successfully!');
    } catch (err) {
      alert('Invalid JSON syntax: ' + err.message);
    }
  });

  // Export PDF / Print
  exportPdfBtn.addEventListener('click', () => {
    window.print();
  });

  // Export JSON
  exportJsonBtn.addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resumeData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${(resumeData.basics.name || 'resume').toLowerCase().replace(/[^a-z0-9]/g, '_')}_cv.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  // Import JSON
  importJsonBtn.addEventListener('click', () => {
    jsonFileInput.click();
  });

  jsonFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        resumeData = parsed;
        saveToLocalStorage();
        populateFormFields();
        renderResume();
        alert('Resume dataset imported successfully!');
      } catch (err) {
        alert('Error parsing uploaded JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  });

  // Reset Default Data
  resetDefaultBtn.addEventListener('click', async () => {
    if (confirm('Are you sure you want to reset to default CV data? Any unsaved edits will be lost.')) {
      localStorage.removeItem(STORAGE_KEY);
      resumeData = DEFAULT_RESUME_DATA;
      saveToLocalStorage();
      populateFormFields();
      renderResume();
    }
  });
}
