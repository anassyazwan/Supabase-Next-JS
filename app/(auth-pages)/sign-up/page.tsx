import Link from "next/link";

import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SmtpMessage } from "../smtp-message";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default async function Signup(
  props: Readonly<{
    searchParams: Promise<Message>;
  }>
) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <div>
        <Card className="w-full max-w-sm mt-56">
          <CardContent>
            <form className="flex-1 flex flex-col min-w-64">
              <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription className="text-sm text-secondary-foreground">
                  Already have an account?{" "}
                  <Link className="text-primary underline" href="/sign-in">
                    Sign in
                  </Link>
                </CardDescription>
              </CardHeader>
              <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                <Label htmlFor="email">Email</Label>
                <Input name="email" placeholder="you@example.com" required />
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
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
                    pendingText="Signing Up..."
                    formAction={signUpAction}
                  >
                    Sign Up
                  </SubmitButton>
                </CardFooter>
                <FormMessage message={searchParams} />
              </div>
              <SmtpMessage />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
