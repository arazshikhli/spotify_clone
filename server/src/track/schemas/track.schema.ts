import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type } from 'os';
import * as mongoose from 'mongoose'


export type TrackDocument=mongoose.HydratedDocument<Track>

@Schema()
export class Track{
    @Prop()
    name: string;

    @Prop()
    artist: string;

    @Prop()
    text: string;

    @Prop()
    listens: string;

    @Prop()
    picture: string;

    @Prop()
    audio: string;

    @Prop({
      type: [
        {type:mongoose.Schema.Types.ObjectId,ref:'Comment'}
       ]
    })
    comments: Comment[];
}

export const CommentSchema=SchemaFactory.createForClass(Track)