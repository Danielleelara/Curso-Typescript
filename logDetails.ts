//type alias
type Uid = number | string | undefined;
function logDetails(uid: Uid , item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo( uid: Uid|string, user: string){
    console.log(`An user with ${uid} has a name as ${user}.`);
}

type Platform = 'Windows' |'Linux' | 'Mac Os' |'ios'

function renderPlatform(platform: Platform){
    return platform;
}

renderPlatform('ios');

logDetails(123, 'sapato');
logDetails(5, '123');

logInfo(123, 'Danielle');
logInfo('123', 'Willian');



