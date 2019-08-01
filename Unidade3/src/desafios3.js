import axios from "axios";

//3.1
const delay = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("OK"), 1000);
});

async function exeDelay()
{
    await delay();
    console.log("1s");
    await delay();
    console.log("2s");
    await delay();
    console.log("3s");
}
//exeDelay();

//3.2
async function getUserFromGithub(user)
{
    try
    {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch(error)
    { console.warn("Usuário inexistente."); }
}//end gatuserFromGithub()
//getUserFromGithub("xXHachimanXx"); //user existente
//getUserFromGithub("by8vsf8shau9"); //user inexistente

//3.3
class Github
{
    static async getRepositories(repo)
    {
        try
        {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch(erro){ console.log("Repositório inexistente."); }


    }//end getRepositories()    

}//end class Github

//Github.getRepositories("rocketseat/rocketseat.com.br");