class List
{
    constructor()
    {
        this.todos = [];
    }

    addTodo()
    {
        this.todos.push("Novo Todo");
        console.log(this.todos);
    }

}//end class TodoList

class TodoList extends List
{
    constructor()
    {
        super();
        this.user = "Felipe";
    }

    showUser()
    {
        console.log(this.user);
    }
}// end class TodoList

const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function() {
    MinhaLista.addTodo();
    MinhaLista.showUser();
}