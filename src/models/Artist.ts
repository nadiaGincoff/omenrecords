import type mongoose from "mongoose";

import {ModelOptions, Severity, getModelForClass, index, post, prop} from "@typegoose/typegoose";

@post<ArtistClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    doc._id = doc.id;
  }
})
@post<ArtistClass[]>(/^find/, function (docs) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error

  if (this.op === "find") {
    docs.forEach((doc) => {
      doc.id = doc._id.toString();

      doc._id = doc.id;
    });
  }
})
@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "artists",
  },

  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({name: 1})
class ArtistClass {
  @prop({required: true})
  name: string;

  @prop({required: true})
  imageSrc: string;

  @prop({required: true})
  isActive: boolean;

  @prop({required: true})
  soundcloudUrl: string;

  @prop({required: true})
  instagramUrl: string;

  @prop({required: true})
  spotifyUrl: string;

  @prop({required: true})
  biography: string;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const Artist = getModelForClass(ArtistClass);

export {Artist, ArtistClass};
