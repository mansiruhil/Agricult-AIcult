import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Mock authentication - no Firebase needed
    if (email && password) {
      return NextResponse.json({
        success: true,
        message: "Login successful",
        user: {
          id: "demo-user",
          email: email,
          name: "Demo User",
        },
      })
    } else {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }
  } catch (error: any) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 401 })
  }
}
