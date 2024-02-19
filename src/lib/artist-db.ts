import {Artist} from "@/models/Artist";

import connectDB from "./connect-db";

interface ArtistFilter {
  page?: number;
  limit?: number;
}

export async function getArtists(filter: ArtistFilter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const artists = await Artist.find().skip(skip).limit(limit).lean().exec();
    const results = artists.length;

    return {
      artists,
      page,
      limit,
      results,
    };
  } catch (error) {
    return {error};
  }
}

export async function getArtist(name: string) {
  try {
    await connectDB();

    const artist = await Artist.findOne({name}).lean().exec();

    if (artist) {
      return {
        artist,
      };
    } else {
      return {error: "Artist not found"};
    }
  } catch (error) {
    return {error};
  }
}
