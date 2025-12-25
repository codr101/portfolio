import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, date, time } = body;

    // Validate required fields
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Here you would integrate with a calendar service like:
    // - Google Calendar API
    // - Calendly webhook
    // - Or send an email notification

    // For now, we'll log the scheduling request
    console.log("Call scheduled:", {
      name,
      email,
      date,
      time,
    });

    // In production, you would:
    // 1. Create a calendar event
    // 2. Send confirmation emails to both parties
    // 3. Store the appointment in a database

    return NextResponse.json(
      { message: "Call scheduled successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error scheduling call:", error);
    return NextResponse.json(
      { error: "Failed to schedule call" },
      { status: 500 }
    );
  }
}

