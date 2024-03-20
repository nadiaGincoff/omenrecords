import mongoose from "mongoose";
import {NextResponse} from "next/server";
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringToObjectId(id: string): mongoose.Types.ObjectId | null {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return new mongoose.Types.ObjectId(id);
  } else {
    return null;
  }
}

export function createErrorResponse(message: string, statusCode: number): NextResponse {
  const errorResponse = {
    status: statusCode >= 500 ? "error" : "fail",
    message,
  };

  return new NextResponse(JSON.stringify(errorResponse), {
    status: statusCode,
    headers: {"Content-Type": "application/json"},
  });
}
