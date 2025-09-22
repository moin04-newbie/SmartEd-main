"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Brain,
  Send,
  Lightbulb,
  Target,
  BookOpen,
  TrendingUp,
  MessageCircle,
  Sparkles,
  Play,
  CheckCircle,
} from "lucide-react"

export default function AIMentorPage() {
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello John! I'm your AI mentor. I've analyzed your learning progress and I'm here to help you achieve your goals. What would you like to work on today?",
      timestamp: "2 minutes ago",
    },
    {
      id: 2,
      type: "user",
      content: "I'm struggling with understanding React hooks. Can you help me create a study plan?",
      timestamp: "1 minute ago",
    },
    {
      id: 3,
      type: "ai",
      content:
        "Based on your current progress, I recommend starting with useState and useEffect. I've created a personalized 5-day study plan for you. Would you like me to break it down day by day?",
      timestamp: "30 seconds ago",
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          type: "user",
          content: message,
          timestamp: "Just now",
        },
      ])
      setMessage("")

      // Simulate AI response
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            type: "ai",
            content:
              "I understand your question. Let me analyze your learning patterns and provide you with a tailored recommendation...",
            timestamp: "Just now",
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center">
            <Brain className="w-8 h-8 text-purple-600 mr-3" />
            AI Mentor
          </h1>
          <p className="text-muted-foreground">Get personalized learning guidance and adaptive study plans</p>
        </div>
        <Badge className="bg-purple-600 text-white">
          <Sparkles className="w-4 h-4 mr-1" />
          AI Powered
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="border-border h-[600px] flex flex-col">
            <CardHeader className="border-b border-border">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/ai-assistant-concept.png" alt="AI Mentor" />
                  <AvatarFallback className="bg-purple-100 text-purple-600">AI</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">SmartEd AI Mentor</CardTitle>
                  <CardDescription className="text-muted-foreground">Your personal learning assistant</CardDescription>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-1 text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-xs">Online</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] ${msg.type === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`flex items-start space-x-2 ${msg.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      <Avatar className="h-8 w-8">
                        {msg.type === "ai" ? (
                          <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">AI</AvatarFallback>
                        ) : (
                          <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">JS</AvatarFallback>
                        )}
                      </Avatar>
                      <div
                        className={`rounded-lg p-3 ${
                          msg.type === "user" ? "bg-purple-600 text-white" : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.type === "user" ? "text-purple-100" : "text-muted-foreground"
                          }`}
                        >
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>

            <div className="border-t border-border p-4">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Ask your AI mentor anything..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 border-border"
                />
                <Button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                <Target className="w-4 h-4 mr-2" />
                Create Study Plan
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Analyze Progress
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                Get Recommendations
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Find Resources
              </Button>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">AI Insights</CardTitle>
              <CardDescription className="text-muted-foreground">
                Personalized recommendations based on your progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-purple-900 text-sm">Learning Tip</span>
                </div>
                <p className="text-xs text-purple-700">
                  Your best learning time is between 2-4 PM. Consider scheduling complex topics during this window.
                </p>
              </div>

              <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-blue-900 text-sm">Focus Area</span>
                </div>
                <p className="text-xs text-blue-700">
                  Strengthen your JavaScript fundamentals before moving to advanced React patterns.
                </p>
              </div>

              <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-green-900 text-sm">Progress Update</span>
                </div>
                <p className="text-xs text-green-700">
                  You're 75% through your React learning path. Great progress this week!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Suggestions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Recent Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">React Hooks Tutorial</p>
                  <p className="text-xs text-muted-foreground">Recommended 2 hours ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">JavaScript Practice</p>
                  <p className="text-xs text-muted-foreground">Recommended 5 hours ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">CSS Grid Layout</p>
                  <p className="text-xs text-muted-foreground">Completed yesterday</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Smart Study Plans</h3>
            <p className="text-xs text-muted-foreground">AI-generated personalized learning paths</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Progress Analysis</h3>
            <p className="text-xs text-muted-foreground">Deep insights into your learning patterns</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Smart Recommendations</h3>
            <p className="text-xs text-muted-foreground">Adaptive content suggestions</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-medium text-foreground mb-1">24/7 Support</h3>
            <p className="text-xs text-muted-foreground">Always available learning assistant</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
