import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from "./track/track.module";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import *as path from 'path'

@Module({
    controllers:[],
    providers:[],
    imports: [
        ServeStaticModule.forRoot({
            rootPath:path.resolve(__dirname,'static')
        }),
        TrackModule,
        FileModule,
    MongooseModule.forRoot('mongodb+srv://arazaraz777:braolgaas@cluster0.lswujtk.mongodb.net/my_db?retryWrites=true&w=majority')
    ]
})


export class AppModule{

}