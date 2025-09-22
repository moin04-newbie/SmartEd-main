import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Search,
  FolderOpen,
  Calendar,
  MoreHorizontal,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
} from "lucide-react"

export default function WorkspacesPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Workspaces</h1>
          <p className="text-muted-foreground">Create and manage your collaborative projects</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Workspace
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search workspaces..." className="pl-10 border-border" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Active Projects */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Active Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Project Card 1 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FolderOpen className="w-4 h-4 text-purple-600" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Active
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg">React E-commerce App</CardTitle>
                  <CardDescription>Building a full-stack e-commerce platform with React and Node.js</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">JS</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">AM</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-green-100 text-green-600 text-xs">SK</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-sm text-muted-foreground">3 members</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Due Dec 15</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>75% complete</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      Open Project
                    </Button>
                    <Button size="sm" variant="outline">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project Card 2 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FolderOpen className="w-4 h-4 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                        In Review
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg">ML Data Analysis</CardTitle>
                  <CardDescription>Analyzing customer behavior data using Python and scikit-learn</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">JS</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">MK</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-sm text-muted-foreground">2 members</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Due Dec 20</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>90% complete</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      Open Project
                    </Button>
                    <Button size="sm" variant="outline">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project Card 3 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FolderOpen className="w-4 h-4 text-green-600" />
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        Planning
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg">Mobile App Design</CardTitle>
                  <CardDescription>UI/UX design for a fitness tracking mobile application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">JS</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-pink-100 text-pink-600 text-xs">LR</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-teal-100 text-teal-600 text-xs">DW</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">+2</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-sm text-muted-foreground">5 members</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Due Jan 10</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span>25% complete</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      Open Project
                    </Button>
                    <Button size="sm" variant="outline">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
            <Card className="border-border">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">John Smith</span> updated the task board in{" "}
                        <span className="font-medium">React E-commerce App</span>
                      </p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">AM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Alice Miller</span> completed the authentication module in{" "}
                        <span className="font-medium">React E-commerce App</span>
                      </p>
                      <p className="text-xs text-muted-foreground">4 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-green-100 text-green-600 text-xs">SK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Sarah Kim</span> shared new resources in{" "}
                        <span className="font-medium">ML Data Analysis</span>
                      </p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">MK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Mike Johnson</span> created a new workspace{" "}
                        <span className="font-medium">Mobile App Design</span>
                      </p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Templates */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Project Templates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FolderOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">Web Development</h3>
                  <p className="text-xs text-muted-foreground">Full-stack web projects</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FolderOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">Data Science</h3>
                  <p className="text-xs text-muted-foreground">ML and analytics projects</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FolderOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">Mobile Apps</h3>
                  <p className="text-xs text-muted-foreground">iOS and Android development</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FolderOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">Design</h3>
                  <p className="text-xs text-muted-foreground">UI/UX and graphic design</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="active">
          <div className="text-center py-12">
            <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Active Projects</h3>
            <p className="text-muted-foreground">Your currently active workspaces will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="text-center py-12">
            <CheckCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Completed Projects</h3>
            <p className="text-muted-foreground">Your finished workspaces will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="archived">
          <div className="text-center py-12">
            <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Archived Projects</h3>
            <p className="text-muted-foreground">Your archived workspaces will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
