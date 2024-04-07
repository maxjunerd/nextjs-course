"use client";

import Logo from "./Logo";
import Menu from "./Menu";

interface Name {
  name: string;
  age: number;
  isMan: boolean;
  children: string;
}

export default function Header({ name, age, isMan, children }: Name) {
  return (
    <header>
      <Logo />
      <Menu {...{ name, age, isMan }} />
      <p>{children}</p>
    </header>
  );
}
