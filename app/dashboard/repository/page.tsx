import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  BookOpen,
  FileText,
  Code,
  Github,
  Star,
  Download,
  Eye,
  Heart,
  MessageCircle,
  Tag,
  Upload,
} from "lucide-react"

export default function RepositoryPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Repository</h1>
          <p className="text-muted-foreground">Central knowledge hub with docs, tutorials, and resources</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Upload className="w-4 h-4 mr-2" />
          Upload Resource
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search resources..." className="pl-10 border-border" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full max-w-2xl grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="apis">APIs</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Featured Resources */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Featured Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-purple-600" />
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        Tutorial
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg">React Hooks Complete Guide</CardTitle>
                  <CardDescription>Comprehensive tutorial covering all React hooks with examples</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>1.2k views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>89 likes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>234</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">JS</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">by John Smith</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      View Resource
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Code className="w-4 h-4 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        Code
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg">Authentication Boilerplate</CardTitle>
                  <CardDescription>Ready-to-use authentication system with JWT and bcrypt</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>856 views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>67 likes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Github className="w-4 h-4" />
                      <span>45 forks</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">AM</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">by Alice Miller</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">1 week ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      View Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Documentation
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg">API Design Best Practices</CardTitle>
                  <CardDescription>Comprehensive guide to designing RESTful APIs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>2.1k views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>156 likes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>23 comments</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-green-100 text-green-600 text-xs">SK</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">by Sarah Kim</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">3 days ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      Read Docs
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">Tutorials</h3>
                  <p className="text-xs text-muted-foreground">234 resources</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">Code Samples</h3>
                  <p className="text-xs text-muted-foreground">189 resources</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">Documentation</h3>
                  <p className="text-xs text-muted-foreground">156 resources</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Github className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">GitHub Repos</h3>
                  <p className="text-xs text-muted-foreground">98 resources</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Tag className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">APIs</h3>
                  <p className="text-xs text-muted-foreground">67 resources</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Upload className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">Submissions</h3>
                  <p className="text-xs text-muted-foreground">45 resources</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Uploads */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Uploads</h2>
            <Card className="border-border">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">TypeScript Advanced Types</h3>
                      <p className="text-sm text-muted-foreground">Tutorial • Uploaded by Mike Johnson</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Eye className="w-3 h-3" />
                        <span>12 views</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">Redux Toolkit Setup</h3>
                      <p className="text-sm text-muted-foreground">Code • Uploaded by Lisa Rodriguez</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Eye className="w-3 h-3" />
                        <span>34 views</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">Database Design Patterns</h3>
                      <p className="text-sm text-muted-foreground">Documentation • Uploaded by David Wilson</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Eye className="w-3 h-3" />
                        <span>89 views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Other tab contents would be similar but filtered */}
        <TabsContent value="docs">
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Documentation</h3>
            <p className="text-muted-foreground">Browse through comprehensive documentation and guides.</p>
          </div>
        </TabsContent>

        <TabsContent value="tutorials">
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Tutorials</h3>
            <p className="text-muted-foreground">Step-by-step tutorials and learning materials.</p>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="text-center py-12">
            <Code className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Code Samples</h3>
            <p className="text-muted-foreground">Reusable code snippets and examples.</p>
          </div>
        </TabsContent>

        <TabsContent value="apis">
          <div className="text-center py-12">
            <Tag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">APIs</h3>
            <p className="text-muted-foreground">API documentation and integration guides.</p>
          </div>
        </TabsContent>

        <TabsContent value="submissions">
          <div className="text-center py-12">
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Student Submissions</h3>
            <p className="text-muted-foreground">Projects and assignments submitted by students.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
