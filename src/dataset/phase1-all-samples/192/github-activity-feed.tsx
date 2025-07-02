import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitCommit, GitFork, GitPullRequest, Star } from "lucide-react"

export default function Component() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage alt="Devon Code" src="/placeholder.svg?height=80&width=80" />
          <AvatarFallback>DC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-2xl">Devon Code</CardTitle>
          <CardDescription>Full-stack developer | Open source enthusiast</CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm text-muted-foreground">42 repositories</span>
            <span className="text-sm text-muted-foreground">1.2k followers</span>
            <span className="text-sm text-muted-foreground">587 following</span>
          </div>
        </div>
        <Button className="ml-auto" variant="outline">
          Follow
        </Button>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Recent Commits</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <GitCommit className="mt-1 w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium">Update README.md</p>
                <p className="text-sm text-muted-foreground">awesome-project • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GitCommit className="mt-1 w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium">Fix bug in user authentication</p>
                <p className="text-sm text-muted-foreground">auth-service • 1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GitCommit className="mt-1 w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium">Add new feature: dark mode</p>
                <p className="text-sm text-muted-foreground">react-ui-kit • 3 days ago</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Recent Contributions</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <GitPullRequest className="mt-1 w-5 h-5 text-blue-500" />
              <div>
                <p className="font-medium">Add TypeScript support</p>
                <p className="text-sm text-muted-foreground">open-source/cool-library • Merged</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GitFork className="mt-1 w-5 h-5 text-purple-500" />
              <div>
                <p className="font-medium">Fork: awesome-css-framework</p>
                <p className="text-sm text-muted-foreground">css-wizards/awesome-css-framework • Forked</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Star className="mt-1 w-5 h-5 text-yellow-500" />
              <div>
                <p className="font-medium">Starred: next-auth</p>
                <p className="text-sm text-muted-foreground">nextauthjs/next-auth • Starred</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Popular Projects</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">awesome-project</CardTitle>
                <CardDescription className="text-xs">A curated list of awesome things</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    1.2k
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    234
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">react-ui-kit</CardTitle>
                <CardDescription className="text-xs">A modern React UI component library</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    876
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    132
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}