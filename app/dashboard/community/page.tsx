import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  MessageCircle,
  Users,
  TrendingUp,
  Heart,
  Share,
  Bookmark,
  Plus,
  Pin,
  Award,
  Eye,
  ThumbsUp,
  MessageSquare,
} from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground">Connect with students worldwide and share knowledge</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search discussions..." className="pl-10 border-border" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Tabs */}
          <Tabs defaultValue="discussions" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="questions">Q&A</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="space-y-4">
              {/* Pinned Post */}
              <Card className="border-border border-l-4 border-l-purple-600">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Pin className="w-4 h-4 text-purple-600" />
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      Pinned
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Announcement
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">Welcome to SmartEd Community!</CardTitle>
                  <CardDescription>Guidelines and tips for making the most of our learning community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">SE</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">SmartEd Team</p>
                      <p className="text-xs text-muted-foreground">Admin • 1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>2.3k views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>89 likes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>23 replies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Discussion Posts */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Discussion
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      JavaScript
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">Best practices for React state management in 2024?</CardTitle>
                  <CardDescription>
                    I'm working on a large React application and wondering about the current best practices for state
                    management. Should I use Redux, Zustand, or stick with Context API?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">Alice Miller</p>
                      <p className="text-xs text-muted-foreground">Computer Science Student • 3 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>156 views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>12 likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>8 replies</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Success Story
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Career
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">Just landed my first developer job! 🎉</CardTitle>
                  <CardDescription>
                    After 8 months of learning through SmartEd, I finally got my first job as a frontend developer.
                    Here's what helped me the most...
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-green-100 text-green-600 text-xs">SK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">Sarah Kim</p>
                      <p className="text-xs text-muted-foreground">Web Development Student • 5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>423 views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>67 likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>15 replies</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      Help Needed
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Machine Learning
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">Struggling with neural network implementation</CardTitle>
                  <CardDescription>
                    I'm trying to implement a basic neural network from scratch in Python but getting stuck on the
                    backpropagation algorithm. Any resources or tips?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">Mike Johnson</p>
                      <p className="text-xs text-muted-foreground">Data Science Student • 1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>89 views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>5 likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>12 replies</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="questions">
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Questions & Answers</h3>
                <p className="text-muted-foreground">Get help from the community with your questions.</p>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="text-center py-12">
                <Share className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Shared Resources</h3>
                <p className="text-muted-foreground">Discover resources shared by community members.</p>
              </div>
            </TabsContent>

            <TabsContent value="challenges">
              <div className="text-center py-12">
                <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Community Challenges</h3>
                <p className="text-muted-foreground">Participate in coding challenges and competitions.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Community Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-muted-foreground">Total Members</span>
                </div>
                <span className="font-semibold text-foreground">12,456</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-muted-foreground">Discussions</span>
                </div>
                <span className="font-semibold text-foreground">3,289</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">Active Today</span>
                </div>
                <span className="font-semibold text-foreground">1,234</span>
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Trending Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  #react
                </Badge>
                <span className="text-sm text-muted-foreground">234 posts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  #javascript
                </Badge>
                <span className="text-sm text-muted-foreground">189 posts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  #python
                </Badge>
                <span className="text-sm text-muted-foreground">156 posts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  #machinelearning
                </Badge>
                <span className="text-sm text-muted-foreground">98 posts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  #webdev
                </Badge>
                <span className="text-sm text-muted-foreground">87 posts</span>
              </div>
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">John Smith</p>
                  <p className="text-xs text-muted-foreground">234 helpful answers</p>
                </div>
                <Award className="w-4 h-4 text-yellow-500" />
              </div>

              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">AM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Alice Miller</p>
                  <p className="text-xs text-muted-foreground">189 helpful answers</p>
                </div>
                <Award className="w-4 h-4 text-gray-400" />
              </div>

              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-green-100 text-green-600 text-xs">SK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Sarah Kim</p>
                  <p className="text-xs text-muted-foreground">156 helpful answers</p>
                </div>
                <Award className="w-4 h-4 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Start Discussion
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask Question
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share Resource
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Award className="w-4 h-4 mr-2" />
                Join Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
