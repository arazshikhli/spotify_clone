import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start=async()=>{
    try {
        const PORT=5000
        const app=await NestFactory.create(AppModule)
        await app.listen(PORT,()=>{
            console.log("Server started")
        })

    } catch (error) {
        console.log(error)
    }
}
start()