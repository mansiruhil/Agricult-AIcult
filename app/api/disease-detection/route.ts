import { type NextRequest, NextResponse } from "next/server"

// Mock disease detection - no Firebase needed
async function detectDisease(cropType: string, symptoms: string[], imageUrl?: string) {
  const diseases = {
    rice: ["blast", "blight", "sheath_rot"],
    wheat: ["rust", "smut", "bunt"],
    tomato: ["early_blight", "late_blight", "mosaic_virus"],
    potato: ["late_blight", "early_blight", "scab"],
  }

  const recommendations = {
    blast: ["Apply fungicide", "Improve drainage", "Reduce nitrogen fertilizer"],
    blight: ["Remove infected plants", "Apply copper-based fungicide", "Ensure proper spacing"],
    rust: ["Apply fungicide spray", "Plant resistant varieties", "Remove infected leaves"],
  }

  const cropDiseases = diseases[cropType.toLowerCase() as keyof typeof diseases] || ["unknown_disease"]
  const detectedDisease = cropDiseases[0] // Mock detection
  const severity = symptoms.length > 3 ? "high" : symptoms.length > 1 ? "medium" : "low"

  return {
    diseaseType: detectedDisease,
    severity,
    recommendations: recommendations[detectedDisease as keyof typeof recommendations] || [
      "Consult agricultural expert",
    ],
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, cropType, symptoms, imageUrl } = body

    // Detect disease using mock logic
    const detection = await detectDisease(cropType, symptoms, imageUrl)

    return NextResponse.json({
      success: true,
      diseaseId: "mock-disease-" + Date.now(),
      detection,
    })
  } catch (error: any) {
    console.error("Disease detection error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
