import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CounselingModel } from "src/models/counseling.model";
@Injectable()
export class CounselingService {
    constructor(
        @InjectModel(CounselingModel) private counselingModel: typeof CounselingModel,
    ) { }
    SaveRecording(data) {
        let recordingData = new this.counselingModel({

            id: data.id,
            username: data.username,
            email: data.email,
            recordingUrl: data.recordingUrl,
            date: new Date(),
            counselorId: data.counselorId,
            counselorUserName: data.counselorUserName

        });
        recordingData.save();
        return 'recording saved';


    }

}
//  Hiij avsan recordingoo togluulah tovchiig darahad database eesee ter recording ni tataad togluuln
