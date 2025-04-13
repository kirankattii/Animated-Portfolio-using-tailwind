import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import Link from "next/link"

const footerLinks = [
	{
		title: "Twitter",
		herf: "https://x.com/kirankatti420",
	},
	{
		title: "Instagram",
		herf: "https://www.instagram.com/kirankattiii/",
	},
	{
		title: "Github", // Note: Typo here, should be "LinkedIn"
		herf: "https://github.com/kirankattii",
	},
]

export const Footer = () => {
	return (
		<footer className="relative overflow-x-clip">
			{/* Added pointer-events-none to the background */}
			<div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>

			<div className="container">
				<div className="border-t border-white/15 py-6 flex text-sm flex-col md:flex-row md:justify-between items-center gap-8">
					<div className="text-white/40">&copy; 2024. All rights reserved.</div>
					<div>
						<nav className="flex flex-col md:flex-row items-center gap-8">
							{footerLinks.map((link) => (
								<Link
									href={link.herf}
									key={link.title}
									className="inline-flex items-center gap-1.5 relative z-10" // Added z-10 here
									target="_blank" // Good practice for external links
									rel="noopener noreferrer"
								>
									<span className="font-semibold">{link.title}</span>
									<ArrowUpRightIcon className="size-4" />
								</Link>
							))}
						</nav>
					</div>
				</div>
			</div>
		</footer>
	)
}