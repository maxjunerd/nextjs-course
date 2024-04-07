import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <h1>my list of profiles</h1>
      <div>
        <ul>
          <Link href="/profile/1">Profile 1</Link>
          <Link href="/profile/2">Profile 2</Link>
          <Link
            prefetch={false}
            href={{ pathname: "/profile/3", query: { name: "max" } }}
          >
            Profile 3
          </Link>
          <a href="https://google.com">Google</a>
        </ul>
      </div>
    </div>
  );
}
