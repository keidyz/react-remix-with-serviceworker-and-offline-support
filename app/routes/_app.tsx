import { Outlet } from "@remix-run/react";

import { TestProvider } from "~/contexts/test-context";

export default function AppLayout() {
  return (
    <div>
      <TestProvider>
        <div>In layout</div>
        <Outlet />
      </TestProvider>
    </div>
  );
}
