'use client'

import {  
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem} from "@nextui-org/navbar";
import logo from '../../public/assets/logo.svg';
import { UserButton } from "@clerk/nextjs";
import { Link, Button } from "@nextui-org/react";
import Image from "next/image";


export default function Header() {
  return (
		<Navbar className="border-b-1 border-gray-300">
      <NavbarBrand>
        <Image 
          src={logo}
          alt="TanAahra"
          width={115}
          height={25}
          priority={true}
        />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <UserButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
	)
}