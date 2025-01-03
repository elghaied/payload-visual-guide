import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface RootViewProps {
  onZoneClick: (zone: string) => void;
}

const RootView: FC<RootViewProps> = ({ onZoneClick }) => {
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
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold">
            Welcome to your dashboard!
          </h1>

          <Button
            variant="destructive"
            className="w-full h-16"
            onClick={() => onZoneClick("before-dashboard")}
          >
            Before Dashboard Zone
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Collections</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <Card key={collection.title} className="bg-muted/60">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {collection.title}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    asChild
                  >
                    <Link href={`${collection.href}/create`}>
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add {collection.title}</span>
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Globals</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {globals.map((global) => (
              <Card key={global.title} className="bg-muted/60">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {global.title}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    asChild
                  >
                    <Link href={global.href}>
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Edit {global.title}</span>
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RootView;
