import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from "./track/track.module";


@Module({
    controllers:[],
    providers:[],
    imports: [
        TrackModule,
    MongooseModule.forRoot('mongodb+srv://arazaraz777:braolgaas@cluster0.lswujtk.mongodb.net/my_db?retryWrites=true&w=majority')
    ]
})


export class AppModule{

}