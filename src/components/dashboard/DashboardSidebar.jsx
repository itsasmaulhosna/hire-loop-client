

import {Bars, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";

export function DashboardSidebar() {
  const navItems=[
    {icon: House, href: "/", label: "Home"},
    {icon: Magnifier, href: "/dashboard/recuriter/jobs", label: "Jobs"},
    {icon: Bell, href: "/dashboard/recuriter/jobs/new", label: "Create Job"},
    {icon: Envelope, href: "/messages", label: "Messages"},
    {icon: Person, href: "/profile", label: "Profile"},
    {icon: Gear, href: "/settings", label: "Settings"},
  ];

  const navContent=<nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link href={item.href} 
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </Link>
                ))}
              </nav>

  return (
    <>
    <aside className="hidden w-64 shrink-0 rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl lg:block">
        {navContent}
        </aside>
    <Drawer>
      <Button className="lg:hidden" variant="secondary">
        <Bars />
       Sidebar
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
            {navContent}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
    
    </>
  );
}