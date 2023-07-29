import placeholder from "../../public/assets/images/placeholder.png";

// ******************************************      NAV_LINKS       ***********************************************
export interface NAV_LINKSInterface {
	services: [string, string][];
	solutions: [string, string][];
	blog: [string, string][];
	contact: [string, string][];
	AboutUs: [string, string][];
	languages: [string][];
}

export const NAV_LINKS: NAV_LINKSInterface = {
	services: [
		["Web Development", "/web-development-services"],
		["Mobile Development", "#"],
		["UI/UX Services", "/ui-ux-design-services"],
		["CMS Services", "/"],
		["Managed Services", "/managed-services"],
		["Enterprise Solutions", "#"],
	],
	solutions: [
		["ERP", "#"],
		["CRM", "#"],
		["HRMS", "#"],
		["IMS", "#"],
	],
	blog: [
		["Blog 0", "#"],
		["Blog 1", "#"],
		["Blog 2", "#"],
		["Blog 3", "#"],
		["Blog 4", "#"],
		["Blog 5", "#"],
	],
	contact: [
		["Contact Link 0", "#"],
		["Contact Link 1", "#"],
		["Contact Link 2", "#"],
		["Contact Link 3", "#"],
		["Contact Link 4", "#"],
		["Contact Link 5", "#"],
	],
	AboutUs: [
		["About Link 0", "#"],
		["About Link 1", "#"],
		["About Link 2", "#"],
		["About Link 3", "#"],
		["About Link 4", "#"],
		["About Link 5", "#"],
	],
	languages: [["En"], ["Francis"], ["Posh"]],
};

// ******************************************      FEATURES       ***********************************************

export const Features: { title: string; description: string; image: any }[] = [
	{
		title: "Time-Efficient",
		description:
			"We harness the power of industry-leading CMS platforms and create stunning websites to capture your visitor's interest in significantly less time.",
		image: placeholder,
	},
	{
		title: "Cost-Effective",
		description:
			"Our approach at DevRiser is to deliver high-value websites that align with your budget, creating a strong online presence that delivers value for your investment.",
		image: placeholder,
	},
	{
		title: "Responsive Design",
		description:
			"We optimize layouts and functionality for effortless compatibility of your website across various screens, from big screens to mobile devices.",
		image: placeholder,
	},
	{
		title: "Easy to Manage",
		description:
			"Effortlessly manage your website with our user-friendly interface. Our expertly crafted sites offer flawless control for easy updates and maintenance.",
		image: placeholder,
	},
];

// ******************************************      EXPERTISE       ***********************************************

export const SPECIALITIES: {
	title: string;
	description: string;
	image: any;
}[] = [
	{
		title: "Real-time project tracking",
		description:
			"Track your website effortlessly with our real-time dashboard, providing project visibility and centralized monitoring for transparent communication.",
		image: placeholder,
	},
	{
		title: "Expertise in CMS Development",
		description:
			"DevRiser's skilled professionals excel in CMS website development services, delivering tailored, top-notch websites to meet your unique requirements.",
		image: placeholder,
	},
	{
		title: "Professional Design & User Experience",
		description:
			"We prioritize visually appealing, user-friendly websites for online success. Our professionals create engaging designs with seamless navigation.",
		image: placeholder,
	},
	{
		title: "Ongoing Support & Maintenance",
		description: "Beyond initial website creation, our team ensures ongoing support, including updates, troubleshooting, and technical assistance.",
		image: placeholder,
	},
	{
		title: "Economically viable",
		description:
			"Get cost-effective CMS development tailored to your budget. Our team delivers efficient, high-quality websites, ensuring exceptional value.",
		image: placeholder,
	},
];

// ******************************************      PROCESS CHART       ***********************************************

export const PROCESSES: { title: string; description: string }[] = [
	{
		title: "Gathering requirements",
		description:
			"We Begin by understanding your needs, goals, preferred CMS platform, and target audience to determine the website's features, functionality, and content requirements",
	},
	{
		title: "Research and planning",
		description:
			"We then move on to conduct in-depth research and create a comprehensive plan outlining the project scope, suitable CMS platform, timeline, and deliverables",
	},
	{
		title: "Creating design",
		description:
			"Our third step involves creating a visually appealing and user-friendly website design, considering factors like branding, layout, navigation, and responsive design",
	},
	{
		title: "Website developments",
		description:
			"Utilizing the approved design, our professionals develop a fully functional website by incorporating all of the necessary features and functionalities",
	},
	{
		title: "Website testing",
		description:
			"We conduct rigorous testing of the newly created website to ensure the website functions flawlessly across different browsers, devices, and scenarios",
	},
	{
		title: "User training",
		description:
			"We provide training and a detailed manual for your web operations team to efficiently manage the website, serving as a comprehensive reference guide for ongoing maintenance and updates",
	},
	{
		title: "Staging site",
		description:
			"After user training and before the launch, we deploy the website for the final round of testing. This ensures that any issues or bugs are identified and resolved before the website goes live",
	},
	{
		title: "Launch of website",
		description: "After successful staging, the website is launched, marking its online debut and making it accessible to the target audience",
	},
];