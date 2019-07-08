class User
{
    /**
     * Construtor padrão.
     * 
     * @param {String} email 
     * @param {String} pass 
     */
    constructor(email, pass)
    {
        this.email = email;
        this.pass  = pass;
        this.admin = false;
    }

    isAdmin()
    {        
        return this.admin === true;
    }
}

class Admin extends User
{
    constructor(email, password)
    {
        super(email, password);
        this.admin = true;
    }
}

const user1 = new User("email@teste.com", "1234");
const admin1 = new Admin("email2@teste2.com", "qwert");

console.log(user1.isAdmin()); //false
console.log(admin1.isAdmin()); //true