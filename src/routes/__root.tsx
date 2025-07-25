import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-900 text-white">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
