import { Navbar } from "@/components/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
    <div className="fixed">

			<Navbar withBorder />
    </div>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
