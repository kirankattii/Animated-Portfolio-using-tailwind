import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import CheckCircle from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import Image from "next/image"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"

const portfolioProjects = [
	{
		company: "Acme Corp",
		year: "2024c",
		title: "Appointment Booking App",
		results: [
			{ title: "Built a MERN-based system with Admin, Doctor, and User roles." },
			{ title: "Integrated Razorpay for secure payment processing." },
			{ title: "Improved performance with RBAC and Context API." },
		],
		link: "https://youtu.be/4k7IdSLxh6w",
		image: darkSaasLandingPage,
	},
	{
		company: "Innovative Co",
		year: "2024",
		title: "Inventory Management App",
		results: [
			{ title: "Developed a scalable app with Next.js, AWS, and Postgres." },
			{ title: "Optimized S3 image storage, boosting performance by 25%." },
			{ title: "Delivered a secure solution for large inventories." },
		],
		link: "https://youtu.be/7hi5zwO75yc",
		image: lightSaasLandingPage,
	},
	{
		company: "Quantum Dynamics",
		year: "2024",
		title: "Storage Application",
		results: [
			{ title: "Created a file-sharing platform with social login and encryption." },
			{ title: "Designed dashboards using Recharts for data insights." },
			{ title: "Reduced file retrieval times by 50%." },
		],
		link: "https://youtu.be/Z7I5uSRHMHg",
		image: aiStartupLandingPage,
	},
]

export const ProjectsSection = () => {
	return (
		<section id="projects" className="pb-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="Real-world Results"
					title="Featured Projects"
					description="	See how I transformed concepts into engaging digital exeriences."
				/>
				<div className="flex flex-col mt-10 md:mt-20 gap-20">
					{portfolioProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
							style={{
								top: `calc(64px + ${projectIndex * 40}px`,
							}}
						>
							<div className="lg:grid lg:grid-cols-2 lg:gap-16">
								<div className="lg:pb-16">
									<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>

									<h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
										{project.title}
									</h3>
									<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
									<ul className="flex flex-col gap-4 mt-4 md:mt-5">
										{project.results.map((result) => (
											<li
												key={result.title}
												className="flex text-white/50 gap-2 text-sm md:text-base"
											>
												<CheckCircle className="size-5 md:size-6" />
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<a href={project.link}>
										<button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
											<span>Visit Live Site</span>
											<ArrowUpRightIcon className="size-4" />
										</button>
									</a>
								</div>
								<div className="relative">
									<Image
										className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
										src={project.image}
										alt={project.title}
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
