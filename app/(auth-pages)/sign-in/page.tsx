import Link from "next/link";

import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Login(
  props: Readonly<{ searchParams: Promise<Message> }>
) {
  const searchParams = await props.searchParams;
  return (
    <div>
      <Card className="w-full max-w-sm mt-56">
        <CardContent>
          <form className="flex-1 flex flex-col min-w-64">
            <CardHeader>
              <CardTitle>Sign in to your account</CardTitle>
            </CardHeader>
            <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
              <Label htmlFor="email">Email</Label>
              <Input name="email" placeholder="you@example.com" required />
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-xs text-foreground underline"
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                required
              />
              <CardFooter className="flex-col gap-2">
                <SubmitButton
                  className="w-full"
                  pendingText="Signing In..."
                  formAction={signInAction}
                >
                  Sign in
                </SubmitButton>
              </CardFooter>
              <FormMessage message={searchParams} />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
