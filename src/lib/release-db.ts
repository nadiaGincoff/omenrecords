import {Release} from "@/models/Release";

import connectDB from "./connect-db";
import {stringToObjectId} from "./utils";

interface ReleaseFilter {
  page?: number;
  limit?: number;
}

export async function getReleases(filter: ReleaseFilter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const releases = await Release.find().skip(skip).limit(limit).lean().exec();

    const results = releases.length;

    return {
      releases: releases,
      page,
      limit,
      results,
    };
  } catch (error) {
    return {error};
  }
}

export async function getRelease(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return {error: "Release not found"};
    }
    const release = await Release.findOne({_id: id}).lean().exec();

    if (release) {
      return {
        release,
      };
    } else {
      return {error: "Release not found"};
    }
  } catch (error) {
    return {error};
  }
}
