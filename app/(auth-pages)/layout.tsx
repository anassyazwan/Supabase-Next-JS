import Image from "next/image";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex flex-col gap-12 items-center">
      {/* Fullscreen Background Image */}
      <div className="fixed inset-0 -z-10 opacity-70">
        <Image
          src="/management.jpg"
          alt="Description"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div>{children}</div>
    </div>
  );
}
