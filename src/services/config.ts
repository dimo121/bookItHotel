const spacesUrl = '	https://35wqd3ztkd.execute-api.ap-southeast-2.amazonaws.com/prod/';

export const config = {
    REGION: 'ap-southeast-2',
    USER_POOL_ID: 'ap-southeast-2_EcdMNVail',
    APP_CLIENT_ID: '327v0ohcahj7j03e7oumaiknsd',
    IDENTITY_POOL_ID: 'ap-southeast-2:bc55e356-6b52-4c67-8f81-62150f983da3',
    SPACES_PHOTO_BUCKET: 'spaces-photos-0a066d6e213a',
    api: {
        baseUrl : spacesUrl,
        spacesUrl : `${spacesUrl}spaces`
    }
}