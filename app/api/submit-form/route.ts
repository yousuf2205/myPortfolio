import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // Adjust relative path

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db('my-portfolio'); // Replace with your DB name

    const { name, email, phonenumber, subject, textarea } = body;

    if (!name || !email || !phonenumber || !subject || !textarea) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    const timestamp = new Date().toISOString(); // Get the current timestamp

    const result = await db
      .collection('clients')
      .insertOne({ name, email, phonenumber, subject, submittedAt: timestamp, textarea }); // Include the timestamp

    return NextResponse.json(
      { message: 'Form data saved successfully.', data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
