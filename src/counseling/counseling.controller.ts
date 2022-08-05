import { Controller, Get, Post, Body } from "@nestjs/common";
import { CounselingService } from "./counseling.service";
@Controller()
export class CounselingController {
    constructor(private readonly CounselingService: CounselingService) { }

    @Post('/saverecording')
    SaveRecording(@Body() data) {
        return this.CounselingService.SaveRecording(data);
    }


}
