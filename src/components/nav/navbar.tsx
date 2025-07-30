"use client";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import React, { useState } from "react";

// Enhanced navigation structure to support sub-items
type NavigationItem = {
	to?: LinkProps["to"];
	href?: string;
	label: string | React.ReactNode;
	active?: boolean;
	items?: NavigationItem[];
	description?: string;
};

// Navigation links with support for sub-items
const navigationItems: NavigationItem[] = [
	{ to: "/", label: "Home", active: true },
	{
		label: "Projects",
		items: [
			{
				label: "SnailyCAD Manager",
				href: "https://github.com/SnailyCAD/SnailyCAD-Manager",
				description: "A manager for the SnailyCAD server",
			},
			{
				label: (
					<div className="flex items-center gap-2">
						<span>View All</span>
						<ArrowRight className="h-4 w-4" />
					</div>
				),
				description: "View all of my projects",
				to: "/projects",
			},
		],
	},
];

interface NavbarProps {
	withBorder?: boolean;
}

// ListItem component for NavigationMenuContent
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string; description?: string }>(
	({ className, title, description, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"hover:text-primary focus:text-primary block space-y-1 rounded-lg p-4 leading-none no-underline transition-colors outline-none select-none",
							className,
						)}
						{...props}
					>
						<div className="text-foreground text-sm leading-none font-medium">{title}</div>
						{description && <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{description}</p>}
						{children}
					</a>
				</NavigationMenuLink>
			</li>
		);
	},
);
ListItem.displayName = "ListItem";

// Mobile navigation item component
function MobileNavItem({ item, onNavigate }: { item: NavigationItem; onNavigate: () => void }) {
	const [isOpen, setIsOpen] = useState(false);

	if (item.items && item.items.length > 0) {
		return (
			<Collapsible open={isOpen} onOpenChange={setIsOpen}>
				<CollapsibleTrigger className="text-foreground hover:bg-accent/50 flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors">
					{item.label}
					<ChevronDown className={cn("text-muted-foreground h-4 w-4 transition-transform", isOpen && "rotate-180")} />
				</CollapsibleTrigger>
				<CollapsibleContent className="space-y-1 pt-2 pl-4">
					{item.items.map((subItem, index) => (
						<MobileNavItem key={index} item={subItem} onNavigate={onNavigate} />
					))}
				</CollapsibleContent>
			</Collapsible>
		);
	}

	return item.href ? (
		<a
			href={item.href}
			className={cn(
				"hover:text-primary block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
				item.active ? "text-primary" : "text-foreground hover:text-foreground",
			)}
		>
			{item.label}
		</a>
	) : (
		<Link
			to={item.to!}
			className={cn(
				"hover:text-primary block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
				item.active ? "text-primary" : "text-foreground hover:text-foreground",
			)}
			onClick={onNavigate}
		>
			{item.label}
		</Link>
	);
}

export function Navbar(props: NavbarProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className={cn("bg-card/95 supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50 w-full backdrop-blur", props.withBorder && "border-border border-b")}>
			<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
				{/* Left side */}
				<div className="flex items-center gap-2">
					{/* Mobile menu trigger */}
					<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
						<SheetTrigger asChild>
							<Button className="md:hidden" variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent close={false} side="left" className="w-[320px] p-0 sm:w-[400px]">
							<SheetHeader className="border-border border-b px-6 py-4">
								<SheetTitle className="flex items-center justify-between text-left">
									<Link to="/" className="text-primary-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
										<img src="/logo.svg" alt="Logo" className="h-10 w-10" />
									</Link>
									<SheetClose asChild>
										<Button variant="ghost" size="icon" className="h-6 w-6">
											<X className="h-4 w-4" />
										</Button>
									</SheetClose>
								</SheetTitle>
							</SheetHeader>

							<div className="flex h-full flex-col">
								<ScrollArea className="h-full flex-1">
									<nav className="flex-1 space-y-2 px-6 py-4">
										{navigationItems.map((item, index) => (
											<MobileNavItem key={index} item={item} onNavigate={() => setMobileMenuOpen(false)} />
										))}
									</nav>
								</ScrollArea>
							</div>
						</SheetContent>
					</Sheet>

					{/* Logo */}
					<div className="flex items-center gap-8">
						<Link to="/" className="text-primary-foreground flex items-center gap-2 transition-colors">
							<img src="/logo.svg" alt="Logo" className="h-10 w-10" />
							<span className="text-2xl font-bold">Whitigol's Portfolio</span>
						</Link>

						{/* Desktop Navigation menu */}
						<NavigationMenu className="max-md:hidden">
							<NavigationMenuList className="gap-1">
								{navigationItems.map((item, index) => (
									<NavigationMenuItem key={index}>
										{item.items && item.items.length > 0 ? (
											<>
												<NavigationMenuTrigger className="text-muted-foreground hover:text-primary data-[state=open]:text-primary h-9 bg-transparent! px-4 py-2 text-sm font-medium data-[state=open]:bg-transparent!">
													{item.label}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul className="grid w-[500px] gap-2 p-4 md:w-[600px] md:grid-cols-2">
														{item.items.map((subItem, subIndex) => (
															<ListItem
																key={subIndex}
																title={subItem.label as string}
																description={subItem.description}
																href={subItem.to ?? subItem.href}
															/>
														))}
													</ul>
												</NavigationMenuContent>
											</>
										) : (
											<NavigationMenuLink
												active={item.active}
												asChild
												className={cn(
													"hover:text-primary h-9 rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent",
													item.active ? "text-foreground" : "text-muted-foreground",
												)}
											>
												{item.to ? <Link to={item.to}>{item.label}</Link> : <a href={item.href}>{item.label}</a>}
											</NavigationMenuLink>
										)}
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			</div>
		</header>
	);
}
