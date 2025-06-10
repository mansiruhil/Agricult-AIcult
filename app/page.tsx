import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, MessageCircle, Activity, Shield, TrendingUp, Users, ShoppingCart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-2xl mr-4">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Agricult-AIcult
              </h1>
              <p className="text-xl text-slate-600 mt-2">Smart Farming Intelligence Platform</p>
            </div>
          </div>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Optimize farming operations with intelligent insights, disease detection and yield predictions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/working-demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 text-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg w-fit mb-3">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">AI Assistant</CardTitle>
              <CardDescription className="text-slate-600">24/7 intelligent farming guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Get instant expert advice on crop management, disease prevention and farming best practices through our
                advanced AI chatbot.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg w-fit mb-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Sensor Analytics</CardTitle>
              <CardDescription className="text-slate-600">Real time environmental monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Monitor temperature, humidity, soil moisture and pH levels with intelligent outlier detection and
                automated alerts.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg w-fit mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Disease Detection</CardTitle>
              <CardDescription className="text-slate-600">Early crop disease identification</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Advanced AI algorithms detect crop diseases in early stages, providing timely treatment recommendations
                to prevent losses.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg w-fit mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Yield Prediction</CardTitle>
              <CardDescription className="text-slate-600">Accurate harvest forecasting</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Machine learning models analyze multiple factors to provide accurate yield predictions and optimize your
                farming strategies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 rounded-lg w-fit mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Community Platform</CardTitle>
              <CardDescription className="text-slate-600">Connect with fellow farmers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Share experiences, discuss best practices and build a network of farming professionals in your area.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mb-3">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Marketplace</CardTitle>
              <CardDescription className="text-slate-600">Direct farmer-consumer connection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Sell your produce directly to consumers and access farming supplies from verified suppliers in your
                region.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 p-12 rounded-2xl shadow-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Transform Your Farming Operations</h2>
          <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of farmers who are already using AI-powered insights to increase productivity, reduce costs,
            and make data driven decisions.
          </p>
          <Link href="/working-demo">
            <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
