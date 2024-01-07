'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle,NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems2 = [
    {
        name: " ",
        path: "#"
    },
    {
        name: "Dashoard",
        path: "dashboard"
    },
    {
        name: "Frais",
        path: "tickets"
    },
    {
        name: "Utilisateurs",
        path: "users"
    }
  ];

  return (
    // <div>
    //     <Link href="dashboard">dashboard</Link>
    //     <Link href="tickets">dashboard</Link>
    //     <Link href="dashboard">dashboard</Link>
    // </div>

    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>         
          <p className="font-bold text-inherit">AMSA-APP</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="tickets">
            Frais
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="users">
            Utilisateurs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems2.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color=""
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
