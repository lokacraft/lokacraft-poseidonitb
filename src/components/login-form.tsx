"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { signIn } from "@/lib/Auth"
import { useRouter } from 'next/navigation';
import { Checkbox } from "./ui/checkbox"
import Logo from "../../public/img/c2logo.png"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter();
  // const searchParams = useSearchParams();
  // const continueTo = searchParams.get("continueTo") ?? "/admin/dashboard";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const username = form.username.value;
        const password = form.password.value;
        const rememberMe = form.rememberMe.checked;
        try {
              await signIn(username, password, rememberMe);
              router.replace("/admin/article")
        } catch (e) {
              console.error(e);
        }
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Selamat datang</h1>
                  <p className="text-balance text-muted-foreground">
                    Masuk ke akun HMO TRITON ITB
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="username"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" name="password" required />
                </div>
                <div className="flex items-center space-x-2">
      <Checkbox id="terms" name="rememberMe" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Remember me
      </label>
    </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
            <div className="relative hidden bg-muted md:block">
              <Image
                src={Logo}
                alt="Image"
                className="absolute inset-0 h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
                width={500}
                height={500}
              />
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
