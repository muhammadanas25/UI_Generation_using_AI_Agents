import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitCommit, GitFork, GitPullRequest, Star, Link2, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4"
    >
      <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage alt="Devon Code" src="/placeholder.svg?height=96&width=96" />
            <AvatarFallback>DC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1">
            <CardTitle className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Devon Code
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">Full-stack developer | Open source enthusiast</CardDescription>
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Eye className="w-4 h-4" /> 42 repositories
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Star className="w-4 h-4" /> 1.2k followers
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <GitFork className="w-4 h-4" /> 587 following
              </span>
            </div>
            <Button className="mt-4 w-fit" variant="default" size="lg">
              Follow
            </Button>
          </div>
          <Button className="mt-4 sm:mt-0" variant="secondary" size="icon" aria-label="Settings">
            <Link2 className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="grid gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-700">Recent Commits</h3>
            <div className="space-y-3">
              <Card className="p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <GitCommit className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">Update README.md</p>
                    <p className="text-sm text-muted-foreground">awesome-project • 2 hours ago</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <GitCommit className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">Fix bug in user authentication</p>
                    <p className="text-sm text-muted-foreground">auth-service • 1 day ago</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <GitCommit className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">Add new feature: dark mode</p>
                    <p className="text-sm text-muted-foreground">react-ui-kit • 3 days ago</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-700">Recent Contributions</h3>
            <div className="space-y-3">
              <Card className="p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <GitPullRequest className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Add TypeScript support</p>
                    <p className="text-sm text-muted-foreground">open-source/cool-library • Merged</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <GitFork className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="font-medium text-gray-800">Fork: awesome-css-framework</p>
                    <p className="text-sm text-muted-foreground">css-wizards/awesome-css-framework • Forked</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="font-medium text-gray-800">Starred: next-auth</p>
                    <p className="text-sm text-muted-foreground">nextauthjs/next-auth • Starred</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-700">Popular Projects</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-start">
                  <CardTitle className="text-xl text-blue-600">awesome-project</CardTitle>
                  <CardDescription className="text-sm text-gray-500">A curated list of awesome things</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <Star className="w-4 h-4" /> 1.2k
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <GitFork className="w-4 h-4" /> 234
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" aria-label="View Project">
                    <Eye className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors duration-200" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-start">
                  <CardTitle className="text-xl text-blue-600">react-ui-kit</CardTitle>
                  <CardDescription className="text-sm text-gray-500">A modern React UI component library</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <Star className="w-4 h-4" /> 876
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <GitFork className="w-4 h-4" /> 132
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" aria-label="View Project">
                    <Eye className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors duration-200" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-start">
                  <CardTitle className="text-xl text-blue-600">next-auth</CardTitle>
                  <CardDescription className="text-sm text-gray-500">Authentication for Next.js applications</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <Star className="w-4 h-4" /> 3.4k
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <GitFork className="w-4 h-4" /> 512
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" aria-label="View Project">
                    <Eye className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors duration-200" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-start">
                  <CardTitle className="text-xl text-blue-600">css-wizards</CardTitle>
                  <CardDescription className="text-sm text-gray-500">Advanced CSS tools and frameworks</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <Star className="w-4 h-4" /> 2k
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <GitFork className="w-4 h-4" /> 300
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" aria-label="View Project">
                    <Eye className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors duration-200" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Activity Insights</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="p-6 flex flex-col items-center hover:bg-blue-50 transition-colors duration-200">
                <Star className="w-8 h-8 text-yellow-500 mb-2" />
                <p className="text-lg font-medium text-gray-800">1.2k Stars</p>
                <p className="text-sm text-gray-500">Across all projects</p>
              </Card>
              <Card className="p-6 flex flex-col items-center hover:bg-green-50 transition-colors duration-200">
                <GitFork className="w-8 h-8 text-purple-500 mb-2" />
                <p className="text-lg font-medium text-gray-800">734 Forks</p>
                <p className="text-sm text-gray-500">Total repository forks</p>
              </Card>
              <Card className="p-6 flex flex-col items-center hover:bg-red-50 transition-colors duration-200">
                <GitPullRequest className="w-8 h-8 text-blue-500 mb-2" />
                <p className="text-lg font-medium text-gray-800">45 PRs Merged</p>
                <p className="text-sm text-gray-500">Contributions to projects</p>
              </Card>
              <Card className="p-6 flex flex-col items-center hover:bg-indigo-50 transition-colors duration-200">
                <Eye className="w-8 h-8 text-gray-500 mb-2" />
                <p className="text-lg font-medium text-gray-800">3.4k Views</p>
                <p className="text-sm text-gray-500">Profile views this month</p>
              </Card>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}