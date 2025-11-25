import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

export default function LogoCloudDemo() {
  return (
    <div className="min-h-screen w-full place-content-center">
      <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="relative mx-auto max-w-3xl">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}

const logos = [
  {
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=60&fit=crop",
    alt: "Tech Company 1",
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=60&fit=crop",
    alt: "Tech Company 2",
  },
  {
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=60&fit=crop",
    alt: "Tech Company 3",
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=60&fit=crop",
    alt: "Tech Company 4",
  },
  {
    src: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&h=60&fit=crop",
    alt: "Tech Company 5",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=60&fit=crop",
    alt: "Tech Company 6",
  },
  {
    src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=60&fit=crop",
    alt: "Tech Company 7",
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=60&fit=crop",
    alt: "Tech Company 8",
  },
];