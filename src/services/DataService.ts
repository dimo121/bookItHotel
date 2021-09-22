import { ICreateSpaceState } from '../components/spaces/CreateSpace';
import { Space } from '../model/Model';
import { S3, config } from 'aws-sdk';
import { config as appConfig } from './config';


config.update({
    region: appConfig.REGION
})

export class DataService {


    private async uploadPublicFile(file:File,bucket:string){
        const fileName = file.name;
        const uploadResult = await new S3({region: appConfig.REGION}).upload({
            Bucket: bucket,
            Key: fileName,
            Body: file,
            ACL: 'public-read'
        }).promise();
        return uploadResult.Location;
    }

    public async createSpace(iCreateSpace: ICreateSpaceState): Promise<string>{
        
        if(iCreateSpace.photo){
            const photoUrl = await this.uploadPublicFile(
                iCreateSpace.photo,
                appConfig.SPACES_PHOTO_BUCKET
            )
            iCreateSpace.photoURL = photoUrl;
            iCreateSpace.photo = undefined;
        }
        const requestUrl = appConfig.api.spacesUrl;
        const requestOptions: RequestInit = {
            method: 'POST',
            body: JSON.stringify(iCreateSpace)
        }
        const result = await fetch(requestUrl, requestOptions);
        const resultJSON = await result.json();

        return JSON.stringify(resultJSON.id);
    }

    public async getSpaces(): Promise<Space[]>{
        
        const requestUrl = appConfig.api.spacesUrl;
        const requestOptions:RequestInit = {
            method: 'GET'
        }
        
        const result = await fetch(requestUrl,requestOptions)

        const resultJSON = await result.json();
        
        return resultJSON.Items;
        
    }

    public async reserveSpace(spaceId:string): Promise<string|undefined>{
        if(spaceId === '1'){
            return ('5555')
        }else{
            return undefined
        }
    }

}