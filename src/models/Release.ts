import type mongoose from "mongoose";

import {ModelOptions, Severity, getModelForClass, index, post, prop} from "@typegoose/typegoose";

@post<ReleaseClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();

    doc._id = doc.id;
  }
})
@post<ReleaseClass[]>(/^find/, function (docs) {
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
    collection: "releases",
  },

  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({artistName: 1})
class ReleaseClass {
  @prop({required: true})
  artistName: string;

  @prop({required: true})
  imageSrc: string;

  @prop({required: true})
  songName: string;

  @prop({required: true})
  soundcloudId: string;

  @prop({required: true})
  hypedditUrl: string;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const Release = getModelForClass(ReleaseClass);

export {Release, ReleaseClass};
