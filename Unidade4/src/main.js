class App
{
    constructor()
    {
        this.repositories = [];
        this.formEl = document.getElementById("repo-form");
        this.listEl = document.getElementById("repo-list");               
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

    /**
     * Método para adicionar repositório.
     * 
     * @param {Event} event 
     */
    addRepository(event)
    {               
        event.preventDefault();
        this.repositories.push({
            name: "rocketseat.com.br",
            description: "Tire a sua ideia do papel.",
            avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
            html_url: "https://github.com/rocketseat/docs",
        });
        this.render();
        console.log(this.repositories);        
    }

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
        linkEl.appendChild(document.createTextNode("Acessar"));        

        listItemEl.appendChild(imgEl);
        listItemEl.appendChild(strongEl);
        listItemEl.appendChild(pEl);
        listItemEl.appendChild(linkEl);
        this.listEl.appendChild(listItemEl);        
    }
    
}//end class App

new App();