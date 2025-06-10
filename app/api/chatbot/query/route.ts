import { type NextRequest, NextResponse } from "next/server"

// Mock AI response - no Firebase needed
async function getAIResponse(query: string, language: string, category: string) {
  const responses = {
    disease:
      "Based on the symptoms you described, it appears to be a fungal infection. I recommend applying organic fungicide and ensuring proper drainage.",
    yield:
      "Based on current weather conditions and your farming practices, you can expect approximately 25-30 quintals per hectare.",
    weather: "The weather forecast shows moderate rainfall in the next week. It's a good time for planting.",
    soil: "Your soil pH seems optimal for the crops you're planning. Consider adding organic compost for better nutrition.",
    general:
      "I'm here to help with all your farming questions. Feel free to ask about crops, diseases, weather, or soil management.",
  }

  return responses[category as keyof typeof responses] || responses.general
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, query, language = "en", category = "general" } = body

    // Get AI response
    const response = await getAIResponse(query, language, category)

    return NextResponse.json({
      success: true,
      response,
      queryId: "mock-query-" + Date.now(),
    })
  } catch (error: any) {
    console.error("Chatbot query error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
