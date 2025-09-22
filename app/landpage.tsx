"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Brain, 
  BarChart3, 
  Github, 
  FolderOpen,
  User,
  Crown,
  Star,
  Check,
  Zap,
  TrendingUp,
  Globe,
  Sparkles
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const featureCards = [
  {
    icon: FolderOpen,
    title: "Workspaces",
    description: "Collaborate on projects with peers in real-time",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Github,
    title: "Repository", 
    description: "Access documentation, GitHub repos, APIs, tutorials",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Community",
    description: "Join discussions, challenges, and global student networks", 
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track progress, skills, and growth",
    color: "from-gray-800 to-gray-900"
  },
  {
    icon: Brain,
    title: "AI Mentor",
    description: "Personalized smart recommendations for learning",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: User,
    title: "Profile",
    description: "Build your student identity and showcase achievements",
    color: "from-indigo-500 to-blue-500"
  }
]

const premiumFeatures = [
  "Advanced Analytics & Insights",
  "Exclusive Student Challenges", 
  "AI Mentor Pro with GPT-4",
  "Creative Competition Access",
  "Priority Community Support",
  "Advanced Collaboration Tools"
]

const testimonials = [
  {
    name: "Alex Chen",
    role: "Computer Science Student",
    avatar: "A",
    content: "SmartEd's AI mentor helped me identify knowledge gaps and create a personalized study plan. My grades improved by 25%!",
    rating: 5
  },
  {
    name: "Sarah Johnson", 
    role: "Engineering Student",
    avatar: "S",
    content: "The collaborative workspaces made group projects so much easier. We completed our capstone project ahead of schedule!",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Business Student", 
    avatar: "M",
    content: "The community feature connected me with like-minded students. I found my study group and lifelong friends here!",
    rating: 5
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">SmartEd</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gray-800 hover:bg-gray-900 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="py-20 px-6"
      >
        <div className="container mx-auto text-center max-w-5xl">
          <motion.div variants={fadeInUp}>
            <Badge variant="secondary" className="mb-6 bg-gray-100 text-gray-800 border-gray-200">
              <Sparkles className="w-3 h-3 mr-1" />
              Next-Gen Education Platform
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
          >
            SmartEd – The Next-Gen Smart Education Platform for Students
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed"
          >
            Collaborate, learn, and grow with AI-powered tools and global communities. Transform your learning journey with intelligent insights and collaborative workspaces.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/signup">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-6 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent px-8 py-6 text-lg"
              >
                <Crown className="mr-2 w-5 h-5" />
                Explore Premium
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Feature Cards */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 px-6 bg-muted/30"
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need to Excel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover powerful tools designed to enhance your learning experience and academic success.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featureCards.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="h-full"
                >
                  <Card className="border-border hover:shadow-2xl transition-all duration-300 cursor-pointer h-full group">
                    <CardContent className="p-8">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Subscription Plans Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 px-6 bg-muted/20"
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300">
              <Crown className="w-3 h-3 mr-1" />
              Choose Your Plan
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Unlock Premium Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Take your education to the next level with advanced AI features and exclusive content.
            </p>
          </motion.div>

          <motion.div variants={staggerChildren} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="border border-border hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Free</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-foreground">$0</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Perfect for getting started</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      "Basic Workspaces (3 max)",
                      "Community Access",
                      "Basic Analytics",
                      "Standard Support"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro Plan - Highlighted */}
            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-[#131313] shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#131313]"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#131313] text-white">Most Popular</Badge>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-[#131313] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">SmartEd Pro</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-4xl font-bold text-foreground">$9.99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground">Everything you need for premium learning</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {premiumFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-[#131313] hover:bg-gray-800 text-white py-6 text-lg">
                    <Crown className="mr-2 w-5 h-5" />
                    Upgrade to Pro
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="border border-border hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Enterprise</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-foreground">Custom</span>
                    </div>
                    <p className="text-muted-foreground text-sm">For institutions and organizations</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      "Everything in Pro",
                      "Unlimited Workspaces",
                      "Custom AI Models",
                      "Priority Support",
                      "API Access",
                      "White-label Options",
                      "Custom Integrations",
                      "Dedicated Account Manager"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full border-[#131313] text-[#131313] hover:bg-[#131313] hover:text-white">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              All plans include a 14-day free trial. Cancel anytime. No hidden fees.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Demo Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 px-6 bg-muted/30"
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How SmartEd Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get started with SmartEd in 3 simple steps and transform your learning experience.
            </p>
          </motion.div>

          <motion.div variants={staggerChildren} className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Template",
                description: "Select from our curated templates or create your own learning workspace",
                icon: BookOpen
              },
              {
                step: "02", 
                title: "Invite Collaborators",
                description: "Connect with peers, mentors, and study groups from around the world",
                icon: Users
              },
              {
                step: "03",
                title: "Launch Project", 
                description: "Start collaborating, track progress, and achieve your learning goals",
                icon: Zap
              }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-gray-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 px-6"
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">10,000+ Students Worldwide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              See how SmartEd is transforming learning experiences for students everywhere.
            </p>
          </motion.div>

          <motion.div variants={staggerChildren} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <Card className="border-border hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {testimonial.avatar}
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <div className="inline-flex items-center gap-8 bg-muted/50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
        <div className="container mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your journey to smarter learning starts today.
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of students who are already using SmartEd to achieve their academic goals and build their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg">
                  Sign Up Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
                  <Crown className="mr-2 w-5 h-5" />
                  Upgrade to Pro*
                </Button>
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">*Premium features available with SmartEd Pro</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8 px-6 border-t border-border"
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-foreground">SmartEd</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 SmartEd. All rights reserved. Empowering students worldwide.
          </p>
        </div>
      </motion.footer>
    </div>
  )
}