"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About",
    "Noro-measuem",
    "Blog",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='lg:w-[80rem] w-full rounded-3xl  lg:mt-5 mt-1 isolate   bg-white/20 shadow-lg ring-1 ring-black/5 absolute lg:left-[8rem] left-0'>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          className='text-green-600'
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className='sm:hidden pr-20 text-green-600 text-xl' justify='start'>
        <NavbarBrand>
         
          <p className='font-bold text-inherit text-2xl'>NORO-CODER</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex text-green-600 gap-4 '
        justify='start'>
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className='font-bold text-2xl text-inherit '>NORO-CODER</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color='success' href='#'>
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color='success' href='#' aria-current='page'>
            BLOG
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='success' href='#'>
            THE NORO-MUSEUM
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu style={{ height: '1rem' }}
        hidden
        className='rounded-sm  h-40 isolate   bg-white/20 shadow-lg ring-1 ring-black/5 '>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className='' key={`${item}-${index}`}>
            <Link
              className='w-full '
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href='#'
              size='lg'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
