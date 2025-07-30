import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Code2, Github, Leaf, Mail, MapPin, Music, Palette, Star, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";
import { VscVscode } from "react-icons/vsc";
import * as icon from "simple-icons";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const technologies: { name: string; category: string; description: string; img: string | React.ComponentType<{ className?: string }> }[] = [
		// Language
		{
			name: "TypeScript",
			category: "Language",
			description: "A statically typed superset of JavaScript that improves developer tooling and code safety.",
			img: icon.siTypescript.svg,
		},

		// Build Tool
		{
			name: "Vite",
			category: "Build Tool",
			description: "A fast, modern frontend build tool that supports hot module replacement and optimized bundling.",
			img: icon.siVite.svg,
		},

		// Frameworks & Routing
		{
			name: "TanStack Router & Start",
			category: "Routing & Fullstack",
			description: "Modern typesafe routing and fullstack app tooling built for React. This has become my go-to fullstack framework.",
			img: "URL:/technologies/tanstack.png",
		},
		{
			name: "Next.js",
			category: "Framework",
			description: "A fullstack React framework with file-based routing, SSR, and API support. No longer my go-to framework.",
			img: icon.siNextdotjs.svg,
		},

		// Core frontend
		{
			name: "React",
			category: "Frontend",
			description: "A declarative UI library for building dynamic user interfaces using components.",
			img: icon.siReact.svg,
		},
		{
			name: "shadcn/ui",
			category: "UI Library",
			description: "A collection of fully accessible and customizable components built with Tailwind CSS and Radix UI.",
			img: icon.siShadcnui.svg,
		},
		{
			name: "Tailwind CSS",
			category: "Styling",
			description: "A utility-first CSS framework for rapid UI development.",
			img: icon.siTailwindcss.svg,
		},
		{
			name: "Lucide",
			category: "Icons",
			description: "A beautiful, consistent icon library built in React, inspired by Feather Icons.",
			img: icon.siLucide.svg,
		},
		{
			name: "Motion (Prev. Framer Motion)",
			category: "Animation",
			description: "A motion library for React to create complex animations with ease.",
			img: icon.siFramer.svg,
		},
		{
			name: "Tanstack Query (React Query)",
			category: "State Management",
			description: "Powerful asynchronous state management and server caching for React apps.",
			img: icon.siReactquery.svg,
		},
		{
			name: "Zod",
			category: "Validation",
			description: "A TypeScript-first schema declaration and validation library.",
			img: icon.siZod.svg,
		},

		// Backend & Data
		{
			name: "Node.js",
			category: "Backend",
			description: "A JavaScript runtime built on Chrome's V8 engine, used for server-side applications.",
			img: icon.siNodedotjs.svg,
		},
		{
			name: "Prisma",
			category: "ORM",
			description: "A modern ORM for TypeScript and Node.js that simplifies database access.",
			img: icon.siPrisma.svg,
		},
		{
			name: "PostgreSQL",
			category: "Database",
			description: "A powerful, open source object-relational database system.",
			img: icon.siPostgresql.svg,
		},

		// Infrastructure
		{
			name: "Vercel",
			category: "Hosting",
			description: "A platform for frontend frameworks and static sites, optimized for Next.js.",
			img: icon.siVercel.svg,
		},
		{
			name: "Cloudflare",
			category: "DNS",
			description: "A global CDN and DNS provider offering security, performance, and reliability.",
			img: icon.siCloudflare.svg,
		},

		// IDEs
		{
			name: "Cursor",
			category: "IDE",
			description: "An AI-powered IDE built on VS Code, optimized for fast iteration with inline Copilot+ assistance. My current go-to editor.",
			img: "URL:/technologies/cursor.svg",
		},
		{
			name: "Visual Studio Code",
			category: "IDE",
			description: "A powerful and extensible IDE for web development with rich ecosystem support. Previously my primary editor.",
			img: VscVscode,
		},
	];

	const projects = [
		{
			title: "Open Source Library",
			slug: "open-source-library",
			description: "A React component library with TypeScript support, comprehensive documentation, and extensive test coverage.",
			image: "/placeholder.svg?height=300&width=500",
			technologies: ["React", "TypeScript", "Storybook", "Jest"],
			github: "#",
			live: "#",
			stars: "2.1k",
		},
		{
			title: "Personal Finance Tracker",
			slug: "personal-finance-tracker",
			description: "Full-stack application for tracking expenses, budgeting, and financial goal setting with data visualization.",
			image: "/placeholder.svg?height=300&width=500",
			technologies: ["Next.js", "Prisma", "Chart.js", "Tailwind CSS"],
			github: "#",
			live: "#",
			stars: "456",
		},
		{
			title: "Developer Tools Extension",
			slug: "developer-tools-extension",
			description: "Browser extension that enhances developer productivity with code snippets and debugging utilities.",
			image: "/placeholder.svg?height=300&width=500",
			technologies: ["JavaScript", "Chrome APIs", "Webpack", "CSS"],
			github: "#",
			live: "#",
			stars: "892",
		},
	];

	const achievements = [
		{ icon: Trophy, label: "Open Source Projects", value: "15+" },
		{ icon: Star, label: "GitHub Stars", value: "3.2k+" },
		{ icon: Users, label: "Community Contributions", value: "50+" },
		{ icon: BookOpen, label: "Years Learning", value: "5+" },
	];

	const experience = [
		{
			role: "Senior Software Engineer",
			company: "Tech Corp",
			period: "2022 - Present",
			description: "Leading development of scalable web applications and mentoring junior developers",
		},
		{
			role: "Full Stack Developer",
			company: "Innovation Labs",
			period: "2020 - 2022",
			description: "Built and maintained multiple client-facing applications using modern web technologies",
		},
		{
			role: "Frontend Developer",
			company: "Digital Agency",
			period: "2019 - 2020",
			description: "Developed responsive web interfaces and improved user experience across various projects",
		},
		{
			role: "Software Engineering Intern",
			company: "Startup X",
			period: "2018 - 2019",
			description: "Assisted in developing core features for a new SaaS product and learned agile methodologies",
		},
	];

	// Framer Motion Variants
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
	} as const;

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
		hover: { scale: 1.03, transition: { duration: 0.2 } },
	} as const;

	const timelineItemVariants = {
		hidden: { opacity: 0, y: 50 }, // Universal vertical slide for mobile and desktop
		show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	} as const;

	function getFlagUrl(countryCode: string) {
		return `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
	}

	return (
		<div className="bg-background min-h-screen">
			{/* Hero Section */}
			<section className="relative overflow-hidden py-20 lg:py-32">
				<div className="from-primary/5 via-background to-secondary/5 absolute inset-0 bg-gradient-to-br" />
				<div className="relative container px-4 md:px-6">
					<motion.div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]" initial="hidden" animate="show" variants={containerVariants}>
						<div className="flex flex-col justify-center space-y-6">
							<motion.div variants={itemVariants}>
								<Badge variant="outline" className="w-fit">
									<Code2 className="mr-1 h-3 w-3" />
									Software Engineer
								</Badge>
							</motion.div>
							<motion.h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none" variants={itemVariants}>
								Hi, I'm <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">Whitigol</span>
							</motion.h1>
							<motion.p className="text-muted-foreground max-w-[600px] md:text-xl" variants={itemVariants}>
								I'm a passionate software engineer who loves building innovative solutions and contributing to open source. Welcome to my corner of the internet
								where I share my projects and journey in tech.
							</motion.p>
							<motion.div className="flex flex-col gap-2 min-[400px]:flex-row" variants={itemVariants}>
								<Button size="lg" className="gap-2">
									<Github className="h-4 w-4" />
									View My Work
								</Button>
								<Button variant="outline" size="lg" className="gap-2 bg-transparent">
									<Mail className="h-4 w-4" />
									Say Hello
								</Button>
							</motion.div>
							<motion.div className="text-muted-foreground flex flex-col text-sm" variants={itemVariants}>
								<div className="flex items-center gap-1">
									<MapPin className="h-4 w-4" />
									New York, USA <img src={getFlagUrl("us")} alt="USA" className="ml-2 size-6" />
								</div>
								<div className="text-muted-foreground/50 flex items-center gap-1 text-xs">
									<span className="size-4" />
									No, that doesn't mean New York City.
								</div>
							</motion.div>
						</div>
						<motion.div className="flex items-center justify-center" variants={itemVariants}>
							<div className="relative">
								<div className="from-primary to-secondary absolute inset-0 animate-pulse rounded-full bg-gradient-to-r opacity-20 blur-2xl" />
								<Avatar className="border-background h-80 w-80 border-4 shadow-2xl">
									<AvatarImage src="https://github.com/whitigol.png" alt="Whitigol" />
									<AvatarFallback className="text-6xl">W</AvatarFallback>
								</Avatar>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-muted/30 border-y py-12">
				<div className="container px-4 md:px-6">
					<motion.div className="grid grid-cols-2 gap-6 md:grid-cols-4" initial="hidden" whileInView="show" viewport={{ amount: 0.5 }} variants={containerVariants}>
						{achievements.map((achievement, index) => (
							<motion.div key={index} className="flex flex-col items-center space-y-2 text-center" variants={itemVariants}>
								<achievement.icon className="text-primary h-8 w-8" />
								<div className="text-2xl font-bold">{achievement.value}</div>
								<div className="text-muted-foreground text-sm">{achievement.label}</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-20">
				<div className="container px-4 md:px-6">
					<motion.div
						className="space-y-6" // Removed grid layout for full width
						initial="hidden"
						whileInView="show"
						viewport={{ amount: 0.3 }}
						variants={containerVariants}
					>
						<motion.div variants={itemVariants}>
							<Badge variant="outline">About Me</Badge>
						</motion.div>
						<motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" variants={itemVariants}>
							Beyond the Code: My Passions and Life
						</motion.h2>
						<motion.p className="text-muted-foreground md:text-lg" variants={itemVariants}>
							I'm a software engineer with a passion for creating elegant solutions to complex problems. While coding is a significant part of my life, my interests
							extend far beyond the screen.
						</motion.p>
						<motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
							<motion.div className="flex items-start gap-3" variants={itemVariants}>
								<Code2 className="text-primary mt-0.5 h-5 w-5" />
								<div>
									<h3 className="font-semibold">Full-Stack Development</h3>
									<p className="text-muted-foreground text-sm">Building end-to-end web applications</p>
								</div>
							</motion.div>
							<motion.div className="flex items-start gap-3" variants={itemVariants}>
								<BookOpen className="text-primary mt-0.5 h-5 w-5" />
								<div>
									<h3 className="font-semibold">Open Source</h3>
									<p className="text-muted-foreground text-sm">Contributing to the developer community</p>
								</div>
							</motion.div>
							<motion.div className="flex items-start gap-3" variants={itemVariants}>
								<Users className="text-primary mt-0.5 h-5 w-5" />
								<div>
									<h3 className="font-semibold">Mentoring</h3>
									<p className="text-muted-foreground text-sm">Helping others grow in their tech journey</p>
								</div>
							</motion.div>
							<motion.div className="flex items-start gap-3" variants={itemVariants}>
								<Leaf className="text-primary mt-0.5 h-5 w-5" />
								<div>
									<h3 className="font-semibold">Nature & Outdoors</h3>
									<p className="text-muted-foreground text-sm">Exploring trails and enjoying the fresh air</p>
								</div>
							</motion.div>
							<motion.div className="flex items-start gap-3" variants={itemVariants}>
								<Music className="text-primary mt-0.5 h-5 w-5" />
								<div>
									<h3 className="font-semibold">Music Enthusiast</h3>
									<p className="text-muted-foreground text-sm">Enjoying classic rock, country, and more</p>
								</div>
							</motion.div>
							<motion.div className="flex items-start gap-3" variants={itemVariants}>
								<Palette className="text-primary mt-0.5 h-5 w-5" />
								<div>
									<h3 className="font-semibold">Family & Pets</h3>
									<p className="text-muted-foreground text-sm">Spending quality time with loved ones</p>
								</div>
							</motion.div>
						</motion.div>
						<motion.p className="text-muted-foreground md:text-lg" variants={itemVariants}>
							When I'm not immersed in code, you'll often find me spending quality time with my amazing wife, taking our dog for a walk in nature, or simply unwinding
							with a wide variety of music, from classic rock to country and everything in between. I believe a balanced life fuels creativity and problem-solving,
							both in and out of the tech world.
						</motion.p>
					</motion.div>
				</div>
			</section>

			{/* Toolbelt Section */}
			<section className="bg-muted/30 py-20">
				<div className="container px-4 md:px-6">
					<motion.div className="mb-12 space-y-4 text-center" initial="hidden" whileInView="show" viewport={{ amount: 0.3 }} variants={containerVariants}>
						<motion.div variants={itemVariants}>
							<Badge variant="outline">My Toolbelt</Badge>
						</motion.div>
						<motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" variants={itemVariants}>
							Technologies I Love Working With
						</motion.h2>
						<motion.p className="text-muted-foreground mx-auto max-w-[600px] md:text-lg" variants={itemVariants}>
							Some of the tools and technologies that help me bring ideas to life
						</motion.p>
					</motion.div>

					<div className="bg-background mx-auto max-w-7xl rounded-xl border p-4">
						<div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
							{technologies.map((tech, index) => (
								<Popover key={index}>
									<PopoverTrigger asChild>
										<div className="bg-muted hover:bg-accent flex size-12 cursor-pointer items-center justify-center rounded-md transition sm:size-14 md:size-16">
											{typeof tech.img === "string" ? (
												tech.img.startsWith("URL:/") ? (
													<img src={tech.img.slice(4)} alt={tech.name} className="size-6 grayscale sm:size-7 md:size-8" />
												) : (
													<svg
														className="text-primary-foreground size-6 sm:size-7 md:size-8"
														style={{ fill: "currentColor" }}
														dangerouslySetInnerHTML={{ __html: tech.img }}
													/>
												)
											) : (
												<tech.img className="size-6 sm:size-7 md:size-8" />
											)}
										</div>
									</PopoverTrigger>
									<PopoverContent className="w-64">
										<h3 className="mb-1 text-lg font-semibold">{tech.name}</h3>
										<Badge variant="outline" className="bg-background/50 text-muted-foreground text-sm">
											{tech.category}
										</Badge>
										<p className="mt-2 text-sm">{tech.description}</p>
									</PopoverContent>
								</Popover>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="py-20">
				<div className="container px-4 md:px-6">
					<motion.div className="mb-12 space-y-4 text-center" initial="hidden" whileInView="show" viewport={{ amount: 0.3 }} variants={containerVariants}>
						<motion.div variants={itemVariants}>
							<Badge variant="outline">Featured Projects</Badge>
						</motion.div>
						<motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" variants={itemVariants}>
							Things I've Built
						</motion.h2>
						<motion.p className="text-muted-foreground mx-auto max-w-[600px] md:text-lg" variants={itemVariants}>
							A collection of projects that showcase my skills and interests in software development
						</motion.p>
					</motion.div>
					<motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ amount: 0.3 }} variants={containerVariants}>
						{projects.map((project, index) => (
							<motion.div key={index} variants={cardVariants} whileHover="hover">
								<Link href={`/projects/${project.slug}`} className="block">
									<Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl">
										<div className="relative overflow-hidden">
											<img
												src={project.image || "/placeholder.svg"}
												alt={project.title}
												className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										</div>
										<CardHeader>
											<div className="flex items-center justify-between">
												<CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
												<div className="text-muted-foreground flex items-center gap-1 text-sm">
													<Star className="h-3 w-3" />
													{project.stars}
												</div>
											</div>
											<CardDescription>{project.description}</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech, techIndex) => (
													<Badge key={techIndex} variant="secondary" className="text-xs">
														{tech}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								</Link>
							</motion.div>
						))}
					</motion.div>
					<motion.div className="mt-12 text-center" variants={itemVariants}>
						<Button variant="outline" size="lg" className="gap-2 bg-transparent">
							<Github className="h-4 w-4" />
							View All Projects
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Experience Timeline Section */}
			<section className="bg-muted/30 py-20">
				<div className="container px-4 md:px-6">
					<motion.div className="mb-12 space-y-4 text-center" initial="hidden" whileInView="show" viewport={{ amount: 0.3 }} variants={containerVariants}>
						<motion.div variants={itemVariants}>
							<Badge variant="outline">Experience</Badge>
						</motion.div>
						<motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" variants={itemVariants}>
							My Professional Journey
						</motion.h2>
						<motion.p className="text-muted-foreground mx-auto max-w-[600px] md:text-lg" variants={itemVariants}>
							The path that led me to where I am today
						</motion.p>
					</motion.div>
					<div className="relative mx-auto max-w-3xl">
						{/* Vertical Timeline Line for Mobile & Desktop */}
						<motion.div
							className="bg-primary/20 absolute left-2 h-full w-1 -translate-x-1/2 rounded-full md:left-1/2"
							initial={{ scaleY: 0 }}
							whileInView={{ scaleY: 1 }}
							viewport={{ amount: 0.5 }}
							transition={{ duration: 1.5, ease: "easeOut" }}
							style={{ originY: 0 }} // Animate from top
						/>

						<div className="space-y-12">
							{experience.map((exp, index) => (
								<motion.div
									key={index}
									className={`relative flex w-full items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
									variants={timelineItemVariants}
									initial="hidden"
									whileInView="show"
									viewport={{ amount: 0.4 }} // Adjusted viewport amount for better mobile triggering
								>
									{/* Timeline Dot for Mobile & Desktop */}
									<div className="bg-primary absolute left-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full md:left-1/2" />

									<div className={`w-full pl-8 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"} flex flex-col`}>
										<Card className="w-full transition-shadow hover:shadow-lg">
											<CardHeader>
												<div className="flex items-start justify-between">
													<div>
														<CardTitle>{exp.role}</CardTitle>
														<CardDescription className="text-primary text-base font-medium">{exp.company}</CardDescription>
													</div>
													<Badge variant="outline">{exp.period}</Badge>
												</div>
											</CardHeader>
											<CardContent>
												<p className="text-muted-foreground">{exp.description}</p>
											</CardContent>
										</Card>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
