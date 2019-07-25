const myPromise = () => new Promise((resolve, reject) => {
    setTimeout( () => { resolve("OK") }, 2000 );
});

/*
myPromise()
    .then(
        response => {
            console.log(response);
        }
    )
    .catch();
*/
/*
async function exePromise()
{
    const response = await myPromise();
    console.log(response);
}
*/
/*
async function exePromise()
{
    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
}
*/

const exePromise = async () => {
    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
};
exePromise();

// OBS.: Async/await são funcionalidades do ES8, logo,
// é necessário instalar uma biblioteca nova para utilizá-los.
// COMANDO(s): yarn add @babel/plugin-transform-async-to-generator -D
//             yarn add @babel/polyfill -D