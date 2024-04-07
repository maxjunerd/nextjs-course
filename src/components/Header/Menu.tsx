"use client";

interface Name {
  name: string;
  age: number;
  isMan: boolean;
}

export default function Menu(props: Name) {
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  );
}
