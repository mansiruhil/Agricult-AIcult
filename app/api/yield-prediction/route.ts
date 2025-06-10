import { type NextRequest, NextResponse } from "next/server"

async function predictYield(cropType: string, plantingDate: Date, factors: any) {
  const baseYields = {
    rice: 30,
    wheat: 25,
    tomato: 40,
    potato: 35,
    corn: 28,
  }

  const baseYield = baseYields[cropType.toLowerCase() as keyof typeof baseYields] || 20

  // calculate yield (0-1 scale)
  const weatherFactor = factors.weather || 0.8
  const soilFactor = factors.soil || 0.8
  const irrigationFactor = factors.irrigation || 0.8
  const fertilizerFactor = factors.fertilizer || 0.8

  const predictedYield = baseYield * weatherFactor * soilFactor * irrigationFactor * fertilizerFactor
  const confidence = (weatherFactor + soilFactor + irrigationFactor + fertilizerFactor) / 4

  return {
    predictedYield: Math.round(predictedYield * 100) / 100,
    confidence: Math.round(confidence * 100),
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, cropType, plantingDate, expectedHarvestDate, factors } = body
    const prediction = await predictYield(cropType, new Date(plantingDate), factors)

    return NextResponse.json({
      success: true,
      predictionId: "mock-prediction-" + Date.now(),
      prediction,
    })
  } catch (error: any) {
    console.error("Yield prediction error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

