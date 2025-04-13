
// "use client"
// import grainImage from "@/assets/images/grain.jpg";
// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// import WhatsAppIcon from "@/assets/icons/wts.png";
// import PhoneIcon from "@/assets/icons/mobile.png";
// import MailIcon from "@/assets/icons/email.png";
// import Image from "next/image";
// import { useState } from "react";
// import Card from "@/components/Card";

// export const ContactSection = () => {
// 	const [showModal, setShowModal] = useState(false);

// 	const contactOptions = [
// 		{
// 			name: "WhatsApp",
// 			icon: WhatsAppIcon,
// 			action: "https://wa.me/919113099868",
// 			text: "+91 9113099868"
// 		},
// 		{
// 			name: "Call",
// 			icon: PhoneIcon,
// 			action: "tel:+919113099868",
// 			text: "+91 9113099868"
// 		},
// 		{
// 			name: "Mail",
// 			icon: MailIcon,
// 			action: "mailto:kirankatti550@gmail.com",
// 			text: "kirankatti550@gmail.com"
// 		}
// 	];

// 	return (
// 		<div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
// 			<div className="container">
// 				<div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
// 					<div
// 						className="absolute inset-0 opacity-5 -z-10"
// 						style={{ backgroundImage: `url(${grainImage.src})` }}
// 					></div>
// 					<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:text-left">
// 						<div>
// 							<h2 className="font-serif text-2xl md:text-3xl">
// 								Let&apos;s create something amazing together
// 							</h2>
// 							<p className="text-sm mt-2 md:text-base">
// 								Ready to bring your next project to life? Let&apos;s connect and
// 								discuss how I can help you achieve your goals
// 							</p>
// 						</div>
// 						<div>
// 							<button
// 								onClick={() => setShowModal(true)}
// 								className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors"
// 							>
// 								<span className="font-semibold">Contact Me</span>
// 								<span>
// 									<ArrowUpRightIcon className="size-4" />
// 								</span>
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Modal */}
// 			{showModal && (
// 				<div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4 ">
// 					<Card className=" md:col-span-2 lg:col-span-1">
// 						<div className="bg-gradient-to-r from-emerald-300 to-sky-400  rounded-2xl p-6 max-w-md w-full text-gray-900">
// 							<h3 className="text-xl font-bold mb-6 text-center">How would you like to connect?</h3>

// 							<div className="space-y-4">
// 								{contactOptions.map((option) => (
// 									<a
// 										key={option.name}
// 										href={option.action}
// 										target="_blank"
// 										rel="noopener noreferrer"
// 										className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
// 									>
// 										<div className="text-emerald-500">
// 											<Image
// 												src={option.icon}
// 												alt={option.name}
// 												width={24}
// 												height={24}
// 												className="w-6 h-6"
// 											/>
// 										</div>
// 										<div className="flex-1">
// 											<h4 className="font-medium">{option.name}</h4>
// 											<p className="text-sm text-gray-500">{option.text}</p>
// 										</div>
// 										<ArrowUpRightIcon className="size-4 text-gray-900" />
// 									</a>
// 								))}
// 							</div>

// 							<button
// 								onClick={() => setShowModal(false)}
// 								className="mt-6 w-full py-2 text-gray-200 hover:text-gray-300 transition-colors border rounded-full border-black bg-gray-900"
// 							>
// 								Close
// 							</button>
// 						</div>
// 					</Card>
// 				</div>
// 			)}
// 		</div>
// 	);
// };


"use client"
import grainImage from "@/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import WhatsAppIcon from "@/assets/icons/wts.png";
import PhoneIcon from "@/assets/icons/mobile.png";
import MailIcon from "@/assets/icons/email.png";
import Image from "next/image";
import { useState } from "react";
import Card from "@/components/Card";

export const ContactSection = () => {
	const [showModal, setShowModal] = useState(false);

	const contactOptions = [
		{
			name: "WhatsApp",
			icon: WhatsAppIcon,
			action: "https://wa.me/919113099868?text=Hi%2C%20kiran%20Love%20you", // URL encoded message
			text: "+91 9113099868"
		},
		{
			name: "Call",
			icon: PhoneIcon,
			action: "tel:+919113099868",
			text: "+91 9113099868"
		},
		{
			name: "Mail",
			icon: MailIcon,
			action: "mailto:kirankatti550@gmail.com?subject=Hello&body=Hi%20kiran%20Love%20you", // Added pre-filled email
			text: "kirankatti550@gmail.com"
		}
	];

	return (
		<div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
			<div className="container">
				<div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
					<div
						className="absolute inset-0 opacity-5 -z-10"
						style={{ backgroundImage: `url(${grainImage.src})` }}
					></div>
					<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:text-left">
						<div>
							<h2 className="font-serif text-2xl md:text-3xl">
								Let&apos;s create something amazing together
							</h2>
							<p className="text-sm mt-2 md:text-base">
								Ready to bring your next project to life? Let&apos;s connect and
								discuss how I can help you achieve your goals
							</p>
						</div>
						<div>
							<button
								onClick={() => setShowModal(true)}
								className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors"
							>
								<span className="font-semibold">Contact Me</span>
								<span>
									<ArrowUpRightIcon className="size-4" />
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
					<Card className="md:col-span-2 lg:col-span-1">
						<div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-2xl p-6 max-w-md w-full text-gray-900">
							<h3 className="text-xl font-bold mb-6 text-center">How would you like to connect?</h3>

							<div className="space-y-4">
								{contactOptions.map((option) => (
									<a
										key={option.name}
										href={option.action}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
									>
										<div className="text-emerald-500">
											<Image
												src={option.icon}
												alt={option.name}
												width={24}
												height={24}
												className="w-6 h-6"
											/>
										</div>
										<div className="flex-1">
											<h4 className="font-medium">{option.name}</h4>
											<p className="text-sm text-gray-500">{option.text}</p>
										</div>
										<ArrowUpRightIcon className="size-4 text-gray-900" />
									</a>
								))}
							</div>

							<button
								onClick={() => setShowModal(false)}
								className="mt-6 w-full py-2 text-gray-200 hover:text-gray-300 transition-colors border rounded-full border-black bg-gray-900"
							>
								Close
							</button>
						</div>
					</Card>
				</div>
			)}
		</div>
	);
};