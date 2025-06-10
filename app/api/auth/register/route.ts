import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, phone, location, farmDetails } = body

    // Mock registration - no Firebase needed
    return NextResponse.json({
      success: true,
      message: "User registered successfully",
      userId: "demo-user-" + Date.now(),
    })
  } catch (error: any) {
    console.error("Registration error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 400 })
  }
}
