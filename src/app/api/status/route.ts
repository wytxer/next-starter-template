import { NextRequest, NextResponse } from 'next/server'

// export const runtime = 'edge'

export const GET = async function (req: NextRequest) {
  try {
    return NextResponse.json({code: 0})
  } catch (error) {
    console.error(error)
    return NextResponse.json({code:500})
  }
}
