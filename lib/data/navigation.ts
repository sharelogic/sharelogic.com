import type { NavGroup } from "@/lib/types/content";

/** Top-level nav supports dropdown groups and direct links. */
export const mainNavigation: NavGroup[] = [
  {
    id: "products",
    label: "Products",
    children: [
      // {
      //   label: "Easy API",
      //   href: "/products/easy-api",
      //   description: "Composable API surfaces for governed integrations.",
      //   icon: "/nav/nav-icon-easy-api.svg",
      // },
      {
        label: "Unifi",
        href: "/products/unifi",
        description: "Unified connectivity across enterprise systems.",
        icon: "/nav/nav-icon-unifi.svg",
      },
    ],
  },
  {
    id: "news",
    label: "News",
    href: "/news",
  },
  {
    id: "case-studies",
    label: "Case Studies",
    href: "/resources/case-studies",
  },
  {
    id: "support",
    label: "Support",
    children: [
      {
        label: "Documentation",
        href: "https://sharelogic.atlassian.net/servicedesk/customer/portals",
      },
      {
        label: "Support Portal",
        href: "https://sharelogic.atlassian.net/servicedesk/customer/portals",
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    children: [
      { label: "About", href: "/about", icon: "/nav/nav-icon-about.svg" },
      { label: "Careers", href: "/careers", icon: "/nav/nav-icon-careers.svg" },
      { label: "Contact", href: "/contact", icon: "/nav/nav-icon-contact.svg" },
    ],
  },
];
