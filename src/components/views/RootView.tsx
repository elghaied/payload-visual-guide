 
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ZoneButton from "../ZoneButton";
import DashboardLayout from "./DashboardLayout";

 

const RootView = ( ) => {
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
  <DashboardLayout>
      <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold">
            Welcome to your dashboard!
          </h1>

          <ZoneButton
             zone="before-dashboard"
          />
          
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
  </DashboardLayout>
  );
};

export default RootView;
