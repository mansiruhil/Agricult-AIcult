import { type NextRequest, NextResponse } from "next/server"

// Outlier detection algorithm
function detectOutliers(data: any) {
  const outliers = []

  // Temperature outliers (normal range: 15-35°C)
  if (data.temperature < 15 || data.temperature > 35) {
    outliers.push(`Temperature ${data.temperature}°C is outside normal range (15-35°C)`)
  }

  // Humidity outliers (normal range: 40-80%)
  if (data.humidity < 40 || data.humidity > 80) {
    outliers.push(`Humidity ${data.humidity}% is outside normal range (40-80%)`)
  }

  // Soil moisture outliers (normal range: 20-60%)
  if (data.soilMoisture < 20 || data.soilMoisture > 60) {
    outliers.push(`Soil moisture ${data.soilMoisture}% is outside normal range (20-60%)`)
  }

  // pH outliers (normal range: 6.0-7.5)
  if (data.ph < 6.0 || data.ph > 7.5) {
    outliers.push(`pH ${data.ph} is outside normal range (6.0-7.5)`)
  }

  return outliers
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, farmId, temperature, humidity, soilMoisture, ph } = body

    // Detect outliers
    const outlierReasons = detectOutliers({ temperature, humidity, soilMoisture, ph })
    const isOutlier = outlierReasons.length > 0

    return NextResponse.json({
      success: true,
      dataId: "mock-data-" + Date.now(),
      isOutlier,
      outlierReasons,
    })
  } catch (error: any) {
    console.error("Sensor data error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 })
    }

    // Mock sensor data
    const sensorData = [
      {
        id: "1",
        userId,
        farmId: "farm1",
        temperature: 28.5,
        humidity: 65,
        soilMoisture: 45,
        ph: 6.8,
        isOutlier: false,
        timestamp: new Date(),
      },
      {
        id: "2",
        userId,
        farmId: "farm1",
        temperature: 35.2,
        humidity: 90,
        soilMoisture: 25,
        ph: 7.8,
        isOutlier: true,
        timestamp: new Date(),
      },
    ]

    return NextResponse.json({
      success: true,
      data: sensorData,
    })
  } catch (error: any) {
    console.error("Get sensor data error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
