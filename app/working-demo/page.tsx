"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Activity, Shield, TrendingUp, CheckCircle, AlertTriangle, Leaf } from "lucide-react"

const mockSensorData = [
  { id: 1, temperature: 28.5, humidity: 65, soilMoisture: 45, ph: 6.8, timestamp: new Date(), isOutlier: false },
  { id: 2, temperature: 30.2, humidity: 70, soilMoisture: 38, ph: 6.5, timestamp: new Date(), isOutlier: false },
  { id: 3, temperature: 35.1, humidity: 55, soilMoisture: 25, ph: 7.8, timestamp: new Date(), isOutlier: true },
]

const mockDiseases = [
  { id: 1, crop: "Rice", disease: "Blast", severity: "Medium", status: "Active" },
  { id: 2, crop: "Wheat", disease: "Rust", severity: "Low", status: "Treated" },
]

const mockYieldPredictions = [
  { id: 1, crop: "Rice", predicted: 28.5, confidence: 85, date: "2024-04-15" },
  { id: 2, crop: "Wheat", predicted: 24.2, confidence: 80, date: "2024-03-20" },
]

export default function WorkingDemo() {
  const [activeTab, setActiveTab] = useState("chat")
  const [chatQuery, setChatQuery] = useState("")
  const [chatHistory, setChatHistory] = useState<Array<{ query: string; response: string; timestamp: Date }>>([])
  const [sensorInput, setSensorInput] = useState({
    temperature: "",
    humidity: "",
    soilMoisture: "",
    ph: "",
  })
  const [diseaseInput, setDiseaseInput] = useState({
    crop: "",
    symptoms: "",
  })


  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("disease") || lowerQuery.includes("pest")) {
      return "For crop diseases, I recommend: Regular monitoring, use organic fungicides like neem oil, ensure proper drainage, and remove infected plants immediately. Early detection is crucial for effective treatment."
    }

    if (lowerQuery.includes("yield") || lowerQuery.includes("production")) {
      return "To improve yield: Maintain optimal soil moisture (30-60%), use balanced fertilizers, monitor pH levels (6.0-7.5), and plant at the right time according to weather patterns."
    }

    if (lowerQuery.includes("weather") || lowerQuery.includes("rain")) {
      return "Weather management tips: Check 7-day forecasts before planting, prepare drainage for heavy rains, use mulching during dry periods, and adjust irrigation based on rainfall predictions."
    }

    if (lowerQuery.includes("soil") || lowerQuery.includes("fertilizer")) {
      return "Soil management: Test soil pH regularly, add organic compost, rotate crops to maintain nutrients, and use appropriate fertilizers based on soil test results."
    }

    return "I'm your AI farming assistant. Ask me about crop diseases, yield improvement, weather planning, soil management, or any other farming questions. I'm here to help with evidence-based agricultural advice."
  }

  const handleChatSubmit = () => {
    if (!chatQuery.trim()) return

    const response = getAIResponse(chatQuery)
    setChatHistory((prev) => [
      ...prev,
      {
        query: chatQuery,
        response,
        timestamp: new Date(),
      },
    ])
    setChatQuery("")
  }

  const handleSensorSubmit = () => {
    const { temperature, humidity, soilMoisture, ph } = sensorInput

    if (!temperature || !humidity || !soilMoisture || !ph) {
      alert("Please fill all sensor values")
      return
    }

    const outliers = []
    const temp = Number.parseFloat(temperature)
    const hum = Number.parseFloat(humidity)
    const soil = Number.parseFloat(soilMoisture)
    const phVal = Number.parseFloat(ph)

    if (temp < 15 || temp > 35) outliers.push(`Temperature ${temp}°C`)
    if (hum < 40 || hum > 80) outliers.push(`Humidity ${hum}%`)
    if (soil < 20 || soil > 60) outliers.push(`Soil moisture ${soil}%`)
    if (phVal < 6.0 || phVal > 7.5) outliers.push(`pH ${phVal}`)

    if (outliers.length > 0) {
      alert(`Outliers detected: ${outliers.join(", ")} are outside normal ranges`)
    } else {
      alert("All sensor values are within normal ranges")
    }

    setSensorInput({ temperature: "", humidity: "", soilMoisture: "", ph: "" })
  }

  const handleDiseaseDetection = () => {
    if (!diseaseInput.crop || !diseaseInput.symptoms) {
      alert("Please enter crop type and symptoms")
      return
    }

    const diseases = ["Blast", "Blight", "Rust", "Mosaic Virus", "Leaf Spot"]
    const severities = ["Low", "Medium", "High"]
    const recommendations = [
      "Apply organic fungicide",
      "Improve drainage",
      "Remove infected plants",
      "Use resistant varieties",
      "Adjust irrigation schedule",
    ]

    const detectedDisease = diseases[Math.floor(Math.random() * diseases.length)]
    const severity = severities[Math.floor(Math.random() * severities.length)]
    const recommendation = recommendations[Math.floor(Math.random() * recommendations.length)]

    alert(
      `Disease Detection Result:\n\nCrop: ${diseaseInput.crop}\nDetected: ${detectedDisease}\nSeverity: ${severity}\nRecommendation: ${recommendation}`,
    )

    setDiseaseInput({ crop: "", symptoms: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-xl mr-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Agricult-AIcult
              </h1>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Active Sensors</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <Activity className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100 text-sm font-medium">Disease Alerts</p>
                  <p className="text-3xl font-bold">1</p>
                </div>
                <Shield className="h-8 w-8 text-red-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Avg Yield (q/ha)</p>
                  <p className="text-3xl font-bold">26.4</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Chat Queries</p>
                  <p className="text-3xl font-bold">{chatHistory.length}</p>
                </div>
                <MessageCircle className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg rounded-xl p-1">
            <TabsTrigger
              value="chat"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger
              value="sensors"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              <Activity className="h-4 w-4" />
              Sensors
            </TabsTrigger>
            <TabsTrigger
              value="disease"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              <Shield className="h-4 w-4" />
              Disease Detection
            </TabsTrigger>
            <TabsTrigger
              value="data"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Chat Tab */}
          <TabsContent value="chat">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  AI Farming Assistant
                </CardTitle>
                <CardDescription className="text-green-100">
                  Get expert advice on farming, crops, diseases, weather, and more
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex gap-3">
                  <Input
                    placeholder="Ask about crop diseases, yield improvement, weather planning..."
                    value={chatQuery}
                    onChange={(e) => setChatQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                    className="flex-1 border-2 focus:border-green-500"
                  />
                  <Button
                    onClick={handleChatSubmit}
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8"
                  >
                    Send
                  </Button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {chatHistory.length === 0 ? (
                    <Alert className="border-blue-200 bg-blue-50">
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        Welcome! Ask me anything about farming. Try: "How to prevent rice diseases?" or "Tips for better
                        yield"
                      </AlertDescription>
                    </Alert>
                  ) : (
                    chatHistory.map((chat, index) => (
                      <div key={index} className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-blue-900">You</p>
                          <p className="text-blue-800 mt-1">{chat.query}</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
                          <p className="font-semibold text-green-900">AI Assistant</p>
                          <p className="text-green-800 mt-1">{chat.response}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sensors Tab */}
          <TabsContent value="sensors">
            <div className="grid gap-8">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Sensor Data Input
                  </CardTitle>
                  <CardDescription className="text-green-100">
                    Enter your farm sensor readings for intelligent analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Temperature (°C)</label>
                      <Input
                        type="number"
                        placeholder="Normal range: 15-35°C"
                        value={sensorInput.temperature}
                        onChange={(e) => setSensorInput({ ...sensorInput, temperature: e.target.value })}
                        className="border-2 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Humidity (%)</label>
                      <Input
                        type="number"
                        placeholder="Normal range: 40-80%"
                        value={sensorInput.humidity}
                        onChange={(e) => setSensorInput({ ...sensorInput, humidity: e.target.value })}
                        className="border-2 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Soil Moisture (%)</label>
                      <Input
                        type="number"
                        placeholder="Normal range: 20-60%"
                        value={sensorInput.soilMoisture}
                        onChange={(e) => setSensorInput({ ...sensorInput, soilMoisture: e.target.value })}
                        className="border-2 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">pH Level</label>
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="Normal range: 6.0-7.5"
                        value={sensorInput.ph}
                        onChange={(e) => setSensorInput({ ...sensorInput, ph: e.target.value })}
                        className="border-2 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleSensorSubmit}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 py-3 text-lg"
                  >
                    Analyze Sensor Data
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-800">Recent Sensor Readings</CardTitle>
                  <CardDescription>Latest environmental data from your farm</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {mockSensorData.map((data) => (
                      <div
                        key={data.id}
                        className={`p-4 rounded-xl border-2 ${
                          data.isOutlier
                            ? "bg-gradient-to-r from-red-50 to-red-100 border-red-200"
                            : "bg-gradient-to-r from-green-50 to-green-100 border-green-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">Temperature:</span>
                              <span>{data.temperature}°C</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-blue-600">Humidity:</span>
                              <span>{data.humidity}%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">Soil:</span>
                              <span>{data.soilMoisture}%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-purple-600">pH:</span>
                              <span>{data.ph}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {data.isOutlier ? (
                              <Badge variant="destructive" className="flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3" />
                                Outlier
                              </Badge>
                            ) : (
                              <Badge variant="default" className="bg-green-500 flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" />
                                Normal
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Disease Tab */}
          <TabsContent value="disease">
            <div className="grid gap-8">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Disease Detection System
                  </CardTitle>
                  <CardDescription className="text-red-100">
                    Early identification and treatment recommendations for crop diseases
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Crop Type</label>
                      <Input
                        placeholder="e.g., Rice, Wheat, Tomato, Potato"
                        value={diseaseInput.crop}
                        onChange={(e) => setDiseaseInput({ ...diseaseInput, crop: e.target.value })}
                        className="border-2 focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Symptoms Description</label>
                      <Textarea
                        placeholder="Describe symptoms: yellow leaves, brown spots, wilting, etc."
                        value={diseaseInput.symptoms}
                        onChange={(e) => setDiseaseInput({ ...diseaseInput, symptoms: e.target.value })}
                        className="border-2 focus:border-red-500 min-h-[100px]"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleDiseaseDetection}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 py-3 text-lg"
                  >
                    Detect Disease
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-800">Disease Records</CardTitle>
                  <CardDescription>Current disease status and treatment history</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {mockDiseases.map((disease) => (
                      <div
                        key={disease.id}
                        className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-semibold text-slate-800">
                              {disease.crop} - {disease.disease}
                            </p>
                            <p className="text-sm text-slate-600">Severity: {disease.severity}</p>
                          </div>
                          <Badge
                            variant={disease.status === "Active" ? "destructive" : "default"}
                            className={disease.status === "Active" ? "" : "bg-green-500"}
                          >
                            {disease.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Tab */}
          <TabsContent value="data">
            <div className="grid gap-8">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Yield Predictions
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    AI-powered crop yield forecasting and analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {mockYieldPredictions.map((prediction) => (
                      <div
                        key={prediction.id}
                        className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <p className="font-semibold text-blue-900 text-lg">{prediction.crop}</p>
                            <p className="text-sm text-blue-700">Expected Harvest: {prediction.date}</p>
                          </div>
                          <div className="text-right space-y-1">
                            <p className="text-3xl font-bold text-blue-800">{prediction.predicted}</p>
                            <p className="text-sm text-blue-600">quintals/hectare</p>
                            <Badge className="bg-blue-500">{prediction.confidence}% confidence</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-800">Smart Recommendations</CardTitle>
                  <CardDescription>AI-generated insights and actionable advice</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Alert className="border-green-200 bg-gradient-to-r from-green-50 to-green-100">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>Irrigation Status:</strong> Soil moisture levels are optimal. Continue current watering
                        schedule for best results.
                      </AlertDescription>
                    </Alert>
                    <Alert className="border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800">
                        <strong>Disease Alert:</strong> Monitor rice crops for blast symptoms. Consider preventive
                        fungicide application based on weather conditions.
                      </AlertDescription>
                    </Alert>
                    <Alert className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>Weather Forecast:</strong> Favorable conditions expected for the next 7 days. Optimal
                        time for field activities and crop management.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

