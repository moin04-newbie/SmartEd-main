import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, BookOpen, Users, Brain, BarChart3, Target } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Discovery Score Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">Discovery score</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    View how you rank and get detailed insights on how to boost your score.
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Unlock with <span className="font-semibold ml-1">PRO</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/diverse-student-profiles.png" alt="Student" />
                  <AvatarFallback className="bg-purple-100 text-purple-600 text-2xl">JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-6xl font-bold text-foreground">85</div>
                  <div className="text-muted-foreground">pts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Learning Streak</p>
                  <p className="text-2xl font-bold text-foreground">12 days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Completed</p>
                  <p className="text-2xl font-bold text-foreground">24 courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Start a Project Section */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">Start a project</CardTitle>
              <CardDescription className="text-muted-foreground">
                Start your first project with a few easy steps.
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              More analytics with <span className="font-semibold ml-1">PRO</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-purple-600">1</span>
                </div>
                <p className="text-sm text-muted-foreground">Choose a project template</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-purple-600">2</span>
                </div>
                <p className="text-sm text-muted-foreground">Set up your workspace</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-purple-600">3</span>
                </div>
                <p className="text-sm text-muted-foreground">Invite collaborators</p>
              </div>
              <Link href="/dashboard/workspaces">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Create Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Progress Chart Placeholder */}
            <div className="bg-muted/30 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Progress visualization</p>
                <div className="mt-4 text-2xl font-bold text-purple-600">$20,000</div>
                <p className="text-xs text-muted-foreground">Potential earnings</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/dashboard/workspaces">
          <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Workspaces</p>
                  <p className="text-sm text-muted-foreground">Manage projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/community">
          <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Community</p>
                  <p className="text-sm text-muted-foreground">Connect & learn</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/ai-mentor">
          <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">AI Mentor</p>
                  <p className="text-sm text-muted-foreground">Get guidance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* AI Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <Card className="w-80 border-border shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/ai-assistant-concept.png" alt="AI" />
                <AvatarFallback className="bg-purple-100 text-purple-600">AI</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">SmartEd AI</p>
                <Badge className="bg-purple-600 text-white text-xs">AI</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">What are you looking for today?</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Ask AI Mentor
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
