"use client"
import Card from "@/components/Card"
import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import bookImage from "@/assets/images/book-cover.png"
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import GithubIcon from "@/assets/icons/github.svg"
import ChromIcon from "@/assets/icons/chrome.svg"
import ReactIcon from "@/assets/icons/react.svg"
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import CardHeader from "@/components/CardHeader"
import ToolboxItems from "@/components/ToolboxItems"
import { motion } from "framer-motion"
import { useRef } from "react"
const toolboxItems = [
	{
		title: "JavaScript",
		iconType: JavascriptIcon,
	},
	{
		title: "HTML5",
		iconType: HtmlIcon,
	},
	{
		title: "CSS3",
		iconType: CssIcon,
	},
	{
		title: "React",
		iconType: ReactIcon,
	},
	{
		title: "Chorm",
		iconType: ChromIcon,
	},
	{
		title: "Github",
		iconType: GithubIcon,
	},
]

const hobbies = [
	{
		title: "Painting",
		emoji: "🎨",
		left: "5%",
		top: "5%",
	},
	{
		title: "Photography",
		emoji: "🧑‍💻",
		left: "50%",
		top: "5%",
	},
	{
		title: "Hiking",
		emoji: "🚵‍♂️",
		left: "35%",
		top: "40%",
	},
	{
		title: "Gaming",
		emoji: "✈️",
		left: "10%",
		top: "35%",
	},

	{
		title: "Photography",
		emoji: "📸",
		left: "70%",
		top: "45%",
	},
	{
		title: "Music",
		emoji: "🏏",
		left: "70%",
		top: "45%",
	},
	{
		title: "Fitness",
		emoji: "🥾",
		left: "5%",
		top: "65%",
	},
	{
		title: "Reading",
		emoji: "🥾",
		left: "45%",
		top: "70%",
	},
]

export const AboutSection = () => {
	const constraintRef = useRef(null)
	return (
		<div className="py-20 lg:pt-28">
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="A Glimps Into My World"
					description="Lear more about who I am, what I do, and what inspires me"
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="My Reads"
								description="	Explore the books shaping my perspectives"
							/>
							<div className="w-40 mx-auto mt-2 md:mt-0">
								<Image
									src={bookImage}
									alt="book cover"
								/>
							</div>
						</Card>
						<Card className="h-[320px] md:col-span-3 lg:col-span-2">
							<CardHeader
								title="My Toolbox"
								description="	Explore the technologies and tools use to craft exceptional
								digital experiences"
								className=""
							/>
							<ToolboxItems
								items={toolboxItems}
								className=""
								itemsWrapperClassName="animate-move-left [animation-duration:30s]"
							/>
							<ToolboxItems
								items={toolboxItems}
								className="mt-6"
								itemsWrapperClassName="animate-move-right [animation-duration:15s]"
							/>
						</Card>
					</div>
					<div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px]  p-0 flex flex-col col-span-3 lg:col-span-2">
							<CardHeader
								title="Beyond the code"
								description="Explore my interests and hobbies beyond the digital realm"
								className="px-6 py-6"
							/>
							<div
								className="relative flex-1"
								ref={constraintRef}
							>
								{hobbies.map((hobby) => (
									<motion.div
										key={hobby.title}
										className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute"
										style={{ left: hobby.left, top: hobby.top }}
										drag
										dragConstraints={constraintRef}
									>
										<span className="font-medium text-gray-950">
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</motion.div>
								))}
							</div>
						</Card>
						<Card className="h-[320px] p-0 relative col-span-2 lg:col-span-1">
							<Image
								src={mapImage}
								alt="map"
								className="h-full w-full object-cove object-left-top"
							/>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-fullafter:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
								<div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
								<div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
								<Image
									src={smileMemoji}
									alt="Memoji"
									className="size-20"
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
