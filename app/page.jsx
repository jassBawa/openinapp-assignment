"use client";
import SignUpComponent from "@/components/SignUpComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (session) {
    router.push("/dashboard");
  }

  return (
    <main className="h-full flex flex-col md:flex-row overflow-auto bg-[#F8FAFF]">
      <SignUpComponent />
    </main>
  );
}
