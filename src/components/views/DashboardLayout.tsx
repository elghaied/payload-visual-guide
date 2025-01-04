
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
 

 

const DashboardLayout = ( { children } : { children: React.ReactNode }) => {
  const collections = [
    { title: "Pages", href: "/pages" },
    { title: "Posts", href: "/posts" },
    { title: "Media", href: "/media" },
    { title: "Categories", href: "/categories" },
    { title: "Users", href: "/users" },
    { title: "Redirects", href: "/redirects" },
    { title: "Forms", href: "/forms" },
    { title: "Form Submissions", href: "/form-submissions" },
    { title: "Search Results", href: "/search-results" },
  ];

  const globals = [
    { title: "Header", href: "/globals/header" },
    { title: "Footer", href: "/globals/footer" },
  ];

  return (
    <div className="flex min-h-screen bg-background border-2 border-dashed border-gray-300 p-4 h-full">
      <aside className="w-64 border-r bg-muted/40">
        <nav className="flex flex-col gap-2 p-4">
          <div className="font-medium">Collections</div>
          {collections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
          <Separator className="my-2" />
          <div className="font-medium">Globals</div>
          {globals.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8">
      {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
