import axios from "axios";

class Api
{
    /**
     * Metodo para pegar dados de um usuário.
     * 
     * @param {String} user 
     */
    static async getUserInfo(user) 
    {
        try
        {        
            const userInfo = await axios.get(`https://api.github.com/users/${user}`);
            console.log(userInfo);
        }
        catch(erro){ console.warn("Erro na API."); }
    }//end getUserInfo()

}//end class Api

Api.getUserInfo("gaoaasbadg");