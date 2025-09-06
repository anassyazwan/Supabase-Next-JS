import Link from "next/link";

import { forgotPasswordAction } from "@/app/actions";
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

export default async function ForgotPassword(
  props: Readonly<{ searchParams: Promise<Message> }>
) {
  const searchParams = await props.searchParams;
  return (
    <>
      <Card className="w-full max-w-sm mt-56">
        <CardContent>
          <form className="flex-1 flex flex-col min-w-64">
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
            </CardHeader>
            <CardDescription className="text-sm text-secondary-foreground">
              Already have an account?{" "}
              <Link className="text-primary underline" href="/sign-in">
                Sign in
              </Link>
            </CardDescription>
            <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
              <Label htmlFor="email">Email</Label>
              <Input name="email" placeholder="you@example.com" required />
              <CardFooter className="flex-col gap-2">
                <SubmitButton
                  className="w-full"
                  pendingText="Resetting Password..."
                  formAction={forgotPasswordAction}
                >
                  Reset Password
                </SubmitButton>
              </CardFooter>
              <FormMessage message={searchParams} />
            </div>
            <SmtpMessage />
          </form>
        </CardContent>
      </Card>
    </>
  );
}
