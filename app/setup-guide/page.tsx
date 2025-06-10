import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Leaf } from "lucide-react"

export default function SetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-6 border-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-xl mr-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Platform Guide
              </h1>
              <p className="text-slate-600 text-lg">Everything you need to know about our smart farming platform</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-3">
                <CheckCircle className="h-6 w-6" />
                Ready-to-Use Platform
              </CardTitle>
              <CardDescription className="text-green-700">
                Full-featured agricultural intelligence system available immediately
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-green-800 text-lg">
                  Our platform provides comprehensive farming solutions with intelligent AI assistance, real-time
                  monitoring, and predictive analytics.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">Core Features</h4>
                    <ul className="text-sm space-y-2 text-green-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        AI-powered farming assistant
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Environmental sensor analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Disease detection system
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Yield prediction models
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Smart recommendations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">Getting Started</h4>
                    <ol className="text-sm space-y-2 text-green-800">
                      <li className="flex items-start gap-2">
                        <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                          1
                        </span>
                        Launch the platform
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                          2
                        </span>
                        Explore the AI assistant
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                          3
                        </span>
                        Input your sensor data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                          4
                        </span>
                        Test disease detection
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                          5
                        </span>
                        Review analytics dashboard
                      </li>
                    </ol>
                  </div>
                </div>
                <Link href="/working-demo">
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                    Get Started
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Platform Demonstration</CardTitle>
              <CardDescription>Recommended flow for showcasing platform capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-800">Demonstration Sequence</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-900 mb-2">1. AI Assistant Demo</h5>
                    <p className="text-blue-800 text-sm">
                      Ask: "How to prevent rice diseases?" to demonstrate intelligent agricultural advice and
                      evidence-based recommendations.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-900 mb-2">2. Sensor Analysis</h5>
                    <p className="text-green-800 text-sm">
                      Input extreme values (Temperature: 40°C, Humidity: 90%) to trigger outlier detection and show
                      intelligent monitoring capabilities.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h5 className="font-semibold text-red-900 mb-2">3. Disease Detection</h5>
                    <p className="text-red-800 text-sm">
                      Enter crop type "Rice" with symptoms "yellow leaves, brown spots" to demonstrate AI-powered
                      disease identification.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h5 className="font-semibold text-purple-900 mb-2">4. Analytics Overview</h5>
                    <p className="text-purple-800 text-sm">
                      Navigate through all dashboard sections to showcase comprehensive data visualization and
                      predictive analytics.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Technical Architecture</CardTitle>
              <CardDescription>Platform technology stack and capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Frontend Technologies</h4>
                  <ul className="text-sm space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Next.js 14 with App Router
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      React with TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Tailwind CSS styling
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Shadcn/ui components
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Responsive design system
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Platform Features</h4>
                  <ul className="text-sm space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Intelligent user interface
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Real-time data processing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Advanced analytics dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Cross-platform compatibility
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Scalable architecture
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Future Enhancements</CardTitle>
              <CardDescription>Planned features and integrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Advanced Integrations</h4>
                  <ul className="text-sm space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Real-time weather API integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      IoT sensor connectivity
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Satellite imagery analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Machine learning models
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Blockchain supply chain
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Enhanced Features</h4>
                  <ul className="text-sm space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Multi-language support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Voice command interface
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Mobile application
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Community marketplace
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Expert consultation system
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Transform Agriculture</h3>
            <p className="text-green-100 mb-6 text-lg">
              Experience the future of farming with our comprehensive AI-powered agricultural intelligence platform.
            </p>
            <Link href="/working-demo">
              <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
