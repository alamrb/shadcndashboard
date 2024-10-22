import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const font = Poppins({
  subsets: ["latin"],
  weight:["600"]
})


export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-indigo-500">
      <div className="space-y-6 text-center">
        <h1 className={cn("font-semibold scroll-m-20 text-6xl tracking-tight lg:text-5xl",
          font.className)}>Naria SEO</h1>
        <p className="text-white text-lg">A Simple authentation service</p>
        <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
          Sign In
        </Button>
        </LoginButton>
        
      </div>

    </main>
  );
}
