import { Column, Table, Model } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
import { Url } from 'url';
// yg ngo umnuh medeelluudig ni duudaj haruulhad olon hunii medeellees herhen uurinh ni gdgyyg taniad zuviig avchrah ve
//magadgui hun blgon deer tusad ni data base deer neg folder shig ym uusgej hadgalah ystoi yu esvel buh medeellee hadgalahdaa ene huniih shu gej zaaj uguud duudahdaa dndaa teriigee todruulj uguh gh met shiidel bj boloh ym
// frontend deer ymar2 medeelel hadgalagdaj uguhiig zzaj ugn
@Table
export class CounselingModel extends Model {
    static save() {
        throw new Error("Method not implemented.");
    }
    @Column({ primaryKey: true, defaultValue: UUIDV4() })
    id: string;

    @Column
    username: string;

    @Column
    email: string;
    @Column
    recordingUrl: string;
    @Column
    date: string;
    @Column
    counselorId: string;
    @Column
    counselorUserName: string;

}
