import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  return NextResponse.json({ message: `Hello from the API: ${request.url}` });
};