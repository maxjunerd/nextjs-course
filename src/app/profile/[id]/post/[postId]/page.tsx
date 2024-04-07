"use client";
import { useParams } from "next/navigation";

export default function ProfileIDPostID() {
  const params = useParams();
  console.log(params);
  return <div>my id profile's posts page</div>;
}
