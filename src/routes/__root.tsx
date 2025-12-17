import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Arc Force Coalition',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

const navLinks = [
  { to: '/start', label: 'Start Here' },
  { to: '/compare', label: 'Compare' },
  { to: '/components', label: 'Components' },
  { to: '/builds', label: 'Builds' },
  { to: '/tools', label: 'Tools' },
  { to: '/guides', label: 'Guides' },
]

const utilityLinks = [
  { to: '/builds', label: 'Submit Build', soon: true },
  // { to: '/updates', label: 'Changelog' },
]

function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4 md:px-6">
          <Link
            to="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight"
          >
            <img
              src="/arc-force-logo.png"
              alt="Arc Force Coalition"
              className="h-12 w-auto drop-shadow-sm"
            />
          </Link>
          <nav className="hidden flex-1 items-center gap-4 text-sm font-medium md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3 text-sm">
            {utilityLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
                {item.soon && (
                  <span className="bg-secondary/20 text-secondary ml-2 rounded-full px-2 py-0.5 text-[11px] font-semibold">
                    soon
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl flex-1 px-4 py-10 md:px-6 md:py-14">
        <Outlet />
      </main>
      <footer className="border-t border-border bg-background/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground md:px-6">
          <span>Real electric builds for controllability, reliability, and sane costs.</span>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
            <Link to="/updates" className="hover:text-foreground">
              Updates
            </Link>
            <Link to="/guides" className="hover:text-foreground">
              Guides
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
