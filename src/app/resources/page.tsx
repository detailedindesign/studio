import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { resources } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

export default function ResourcesPage() {
  const categories = Array.from(new Set(resources.map(r => r.category)));

  return (
    <div className="space-y-8">
       <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-full">
                <BookOpen className="h-8 w-8" />
            </div>
            <div>
                <h1 className="text-2xl font-bold font-headline">Resource Library</h1>
                <p className="text-muted-foreground">Curated articles and guides to support you in your caregiving journey.</p>
            </div>
       </div>

      {categories.map(category => (
        <section key={category}>
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">{category}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.filter(r => r.category === category).map(resource => (
              <Card key={resource.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                    <Badge variant={
                        category === 'Condition Specific' ? 'default' :
                        category === 'Caregiver Support' ? 'secondary' :
                        'outline'
                    }>{category}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
