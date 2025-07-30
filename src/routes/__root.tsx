import { Footer } from "@/components/nav/footer";
import { Navbar } from "@/components/nav/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<div className="flex min-h-screen flex-col">
			<Navbar withBorder />
			<div className="grow">
				<Outlet />
			</div>
			<Footer />
		</div>
	),
});
