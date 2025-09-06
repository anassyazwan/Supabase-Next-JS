import {
  InfoIcon,
  BadgeCheckIcon,
  AlertCircleIcon,
  CheckCircle2Icon,
  PopcornIcon,
  ChevronRightIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ExampleCombobox } from "@/components/combo-box-example";
import { ComboboxDropdownMenu } from "@/components/combo-box-dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Input } from "@/components/ui/input";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Label } from "@/components/ui/label";

import { NavigationMenuDemo } from "@/components/navigation-menu";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Skeleton } from "@/components/ui/skeleton";

import { Slider } from "@/components/ui/slider";

import { Switch } from "@/components/ui/switch";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Textarea } from "@/components/ui/textarea";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function uiPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Accordion
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Alert
          </div>
          <div className="grid w-full max-w-xl items-start gap-4">
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is an alert with icon, title and description.
              </AlertDescription>
            </Alert>
            <Alert>
              <PopcornIcon />
              <AlertTitle>
                This Alert has a title and an icon. No description.
              </AlertTitle>
            </Alert>
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Unable to process your payment.</AlertTitle>
              <AlertDescription>
                <p>Please verify your billing information and try again.</p>
                <ul className="list-inside list-disc text-sm">
                  <li>Check your card details</li>
                  <li>Ensure sufficient funds</li>
                  <li>Verify billing address</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Avatar
          </div>
          <div className="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="rounded-lg">
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Badge
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex w-full flex-wrap gap-2">
              <Badge>Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                8
              </Badge>
              <Badge
                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                variant="destructive"
              >
                99
              </Badge>
              <Badge
                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                variant="outline"
              >
                20+
              </Badge>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Breadcrumb
          </div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Button
          </div>
          <div>
            <Button variant="outline" size="sm" className="mr-2">
              <ChevronRightIcon /> New Branch
            </Button>
            <Button className="mr-2">Button</Button>
            <Button variant="secondary" className="mr-2">
              Secondary
            </Button>
          </div>
          <Button variant="destructive" className="mr-2">
            Destructive
          </Button>
          <Button variant="outline" className="mr-2">
            Outline
          </Button>
          <Button variant="ghost" className="mr-2">
            Ghost
          </Button>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Card
          </div>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
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
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Carousel
          </div>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Checkbox
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="terms-2" defaultChecked />
              <div className="grid gap-2">
                <Label htmlFor="terms-2">Accept terms and conditions</Label>
                <p className="text-muted-foreground text-sm">
                  By clicking this checkbox, you agree to the terms and
                  conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="toggle" disabled />
              <Label htmlFor="toggle">Enable notifications</Label>
            </div>
            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox
                id="toggle-2"
                defaultChecked
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              <div className="grid gap-1.5 font-normal">
                <p className="text-sm leading-none font-medium">
                  Enable notifications
                </p>
                <p className="text-muted-foreground text-sm">
                  You can enable or disable notifications at any time.
                </p>
              </div>
            </Label>
          </div>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Collapsible
          </div>
          <Collapsible>
            <CollapsibleTrigger>
              Can I use this in my project?
            </CollapsibleTrigger>
            <CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No
              attribution required.
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Combobox
          </div>
          <div className="mb-2">
            <ExampleCombobox />
          </div>
          <div className="mb-2">
            <ComboboxDropdownMenu />
          </div>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            End
          </div>
        </div>
      </div>
      <div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Dialog
          </div>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Username</Label>
                    <Input
                      id="username-1"
                      name="username"
                      defaultValue="@peduarte"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            HoverCard
          </div>
          <HoverCard>
            <HoverCardTrigger>Hover</HoverCardTrigger>
            <HoverCardContent>
              The React Framework created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Input
          </div>
          <div className="grid w-full max-w-sm items-center gap-3 mb-2">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Input OTP
          </div>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Label
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Navigation Menu
          </div>
          <NavigationMenuDemo />
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Pagination
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Popover
          </div>
          <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Radio Group
          </div>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Scroll Area
          </div>
          <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king's pillow, in
            his soup, even in the royal toilet. The king was furious, but he
            couldn't seem to stop Jokester. And then, one day, the people of the
            kingdom
            <Separator className="my-2" />
            discovered that the jokes left by Jokester were so funny that they
            couldn't help but laugh. And once they started laughing, they
            couldn't stop.
          </ScrollArea>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Select
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Separator
          </div>
          <Separator />
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Sheet
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Name</Label>
                  <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Username</Label>
                  <Input id="sheet-demo-username" defaultValue="@peduarte" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Skeleton
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl mr-2" />
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Slider
          </div>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Switch
          </div>
          <Switch />
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Tabs
          </div>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Textarea
          </div>
          <Textarea />
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            <InfoIcon size="16" strokeWidth={2} />
            Tooltip
          </div>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="m-5">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mb-5">
            End
          </div>
        </div>
      </div>
    </div>
  );
}
