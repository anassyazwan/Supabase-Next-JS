import Link from "next/link";

import { resetPasswordAction } from "@/app/actions";
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
  CardDescription,
} from "@/components/ui/card";

export default async function ResetPassword(
  props: Readonly<{
    searchParams: Promise<Message>;
  }>
) {
  const searchParams = await props.searchParams;
  return (
    <div>
      <Card className="w-full max-w-sm mt-56">
        <CardContent>
          <form className="flex-1 flex flex-col min-w-64">
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
            </CardHeader>
            <CardDescription className="text-sm text-secondary-foreground">
              Please enter your new password below.
            </CardDescription>
            <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
              <Label htmlFor="password">New password</Label>
              <Input
                type="password"
                name="password"
                placeholder="New password"
                required
              />
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
              />
              <CardFooter className="flex-col gap-2">
                <SubmitButton
                  className="w-full"
                  pendingText="Resetting Password..."
                  formAction={resetPasswordAction}
                >
                  Reset Password
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
