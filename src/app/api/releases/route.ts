/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-throw-literal */
import type {NextRequest} from "next/server";

import {NextResponse} from "next/server";

import connectDB from "@/lib/connect-db";
import {createErrorResponse} from "@/lib/utils";
import {getReleases} from "@/lib/release-db";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");
    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;

    const {releases, results, error} = await getReleases({page, limit});

    if (error) {
      throw error;
    }

    const json_response = {
      status: "success",
      results,
      releases,
    };

    return NextResponse.json(json_response);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return createErrorResponse(error.message, 500);
  }
}
