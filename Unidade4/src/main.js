import api from "./api";

class App
{
    constructor()
    {
        this.repositories = [];
        this.formEl = document.getElementById("repo-form");
        this.listEl = document.getElementById("repo-list");               
        this.inputEl = document.querySelector("input[name=repository]");
        this.registerHandlers();        
    }//end constructor()

    /**
     * Método para registrar eventos.
     */
    registerHandlers()
    {
        this.formEl.onsubmit = (e) => 
        {            
            this.addRepository(event);
        };
    }

    setLoading(loading = true)
    {
        if(loading)
        {
            let loadingEl = document.createElement("span");
            loadingEl.setAttribute("id", "loadingEl");
            loadingEl.appendChild(document.createTextNode("Carregando..."));

            this.formEl.appendChild(loadingEl);
        }
        else
        {
            document.getElementById("loadingEl").remove();
        }

    }//end setLoading()

    /**
     * Método para adicionar repositório.
     * 
     * @param {Event} event 
     */
    async addRepository(event)
    {               
        event.preventDefault();

        const inputValue = this.inputEl.value;
        this.inputEl.value = "";

        if(inputValue === 0)
        { return; }

        this.setLoading();

        try
        {
            const response = await api.get(`/repos/${inputValue}`);
            const { name, description, html_url, avatar_url} = response.data;          

            this.repositories.push({ 
                name, 
                description, 
                html_url, 
                avatar_url: response.data.owner.avatar_url
            });

            this.render();
        }
        catch(erro)
        {
            alert("O repositório não exite!");
        }//end try-catch 

        this.setLoading(false);
    }//end addRepository()

    /**
     * Métodor para renderizar em tela todos os elementos.
     */
    render()
    {
        //apagar lista para recomeçar
        this.listEl.innerHTML = "";

        this.repositories.forEach( repo => {
            this.createElements(repo);
        });        
    }

    /**
     * Método para criar elementos e renderizar na tela.
     * 
     * @param {*} repo 
     */
    createElements(repo)
    {        
        //criar 'li'
        let listItemEl = document.createElement('li');

        //criar imagem
        let imgEl = document.createElement("img");
        imgEl.setAttribute('src', repo.avatar_url);

        //criar strong
        let strongEl = document.createElement("strong");
        strongEl.appendChild(document.createTextNode(repo.name));

        //criar descrição            
        let pEl = document.createElement('p');
        pEl.appendChild(document.createTextNode(repo.description));
        
        //criar link
        let linkEl = document.createElement('a');
        linkEl.setAttribute("target", "_blank");
        linkEl.setAttribute('href', repo.html_url);
        linkEl.appendChild(document.createTextNode("Acessar"));        

        listItemEl.appendChild(imgEl);
        listItemEl.appendChild(strongEl);
        listItemEl.appendChild(pEl);
        listItemEl.appendChild(linkEl);
        this.listEl.appendChild(listItemEl);        
    }
    
}//end class App

new App();