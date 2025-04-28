import { Logo } from "@/components/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/AhmedReda958/hookify",
  nav: {
    title: (
      <>
        <Logo />
        <p className="text-base font-semibold">hookify</p>
      </>
    ),
  },
};
