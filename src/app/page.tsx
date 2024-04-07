import Header from "@/components/Header";
import Image from "next/image";
import winter from "../../public/vercel.svg";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "page title",
  description: "page description",
  openGraph: {
    title: "page title",
    description: "page description",
    url: "mywebsite.com",
    siteName: "Max website",
    images: [
      {
        url: "/winter.jpg",
        width: 1260,
        height: 800,
      },
    ],
    locale: "en-En",
  },
};

export default function Home() {
  // const [loading, setLoading] = useState(false);
  // const fetchDataFromApi = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("/api/users", {
  //       headers: {
  //         Accept: "application/json",
  //         method: "GET",
  //       },
  //     });
  //     if (response) {
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div>
      {/* <Image src="/winter.jpg" alt="mountain" width="990" height="750" /> */}
      {/* <div className="w-[550px]">
        <Image src={winter} alt="winter" />
      </div> */}
      <h1>Hello</h1>
      {/* <button onClick={fetchDataFromApi}>Fetch Users</button> */}
    </div>
  );
}
