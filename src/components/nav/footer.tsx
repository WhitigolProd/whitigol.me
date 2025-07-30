import { HeartIcon } from "lucide-react";
import { SiGithub, SiTypescript, SiX } from "react-icons/si";
import { Button } from "../ui/button";

export function Footer() {
	return (
		<div className="bg-card/95 supports-[backdrop-filter]:bg-card/60">
			<div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
				<div className="space-x-1">
					<img src="/logo.svg" alt="Logo" className="mr-2 inline-block size-6" />
					<span className="text-muted-foreground text-sm">© 2025 Whitigol. All rights reserved.</span>
					<span className="text-muted-foreground text-sm">
						Created with <HeartIcon className="relative -top-0.5 inline-block size-4 align-middle text-rose-500" /> &{" "}
						<SiTypescript className="relative -top-0.5 inline-block size-4 align-middle text-[#3178c6]" /> by{" "}
						<a href="https://github.com/whitigol" target="_blank" className="text-primary hover:underline">
							whitigol
						</a>
						.
					</span>
				</div>
				<div className="flex items-center gap-1">
					<Button variant="ghost" size="icon" className="size-6" asChild>
						<a href="https://x.com/whitigol" target="_blank">
							<SiX className="size-4" />
						</a>
					</Button>
					<Button variant="ghost" size="icon" className="size-6" asChild>
						<a href="https://github.com/whitigol" target="_blank">
							<SiGithub className="size-4" />
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
}
