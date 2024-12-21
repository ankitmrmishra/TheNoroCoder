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
import { PersonIcon, MobileIcon, CubeIcon } from "@radix-ui/react-icons";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About", "Noro-measuem", "Blog"];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="lg:w-[60rem] w-full rounded-3xl  lg:mt-5 mt-1 isolate   bg-white/20 shadow-lg ring-1 ring-black/5  lg:left-[18rem]   "
    >
      <NavbarContent className=" sm:hidden  text-white/90 flex justify-evenly gap-4 items-center w-[25rem]">
        <NavbarBrand>
          <p className="font-bold  text-inherit text-2xl ">NORO-CODER</p>
        </NavbarBrand>
        <NavbarBrand className="  gap-2 align-middle flex justify-evenly items-center">
          <div>
            <Link className="text-white/75" href="#KnowMe">
              <PersonIcon />
            </Link>
          </div>
          <div className="animation animate-bounce text-green-600">
            <Link
              className="text-green-600"
              href="https://wa.me/918437153991?text=hey%20ANKIT%20I%20want%20to%20work%20on%20a%20project%20with%20you"
            >
              <MobileIcon />
            </Link>
          </div>
          <div>
            <Link href="#Showcase" className="text-white/75">
              <CubeIcon />
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex text-white gap-4 "
        justify="start"
      >
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-2xl text-inherit ">NORO-CODER</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-white/75" href="#KnowMe">
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://wa.me/918437153991?text=hey%20ANKIT%20I%20want%20to%20work%20on%20a%20project%20with%20you"
            className="text-green-600 font-bold"
          >
            BOOK A CALL
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#Showcase" className="text-white/75">
            THE NORO-MUSEUM
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarMenu
        style={{ height: "1rem" }}
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
      </NavbarMenu> */}
    </Navbar>
  );
}
