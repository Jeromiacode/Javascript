function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in!');
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out!');
}

// function Admin(...args){
//      User.apply(this, args);
//      this.role = 'super admin';    
// }
//  Admin.prototype = Object.create(User.prototype);
//  Admin.deleteUser = function(user){
//          users = users.filter((u) => {
//            return u.email != user.email;
//   });
// }

class Admin extends User {

    get getName(){
        return this.name
    }

    deleteUser(user) {
      // Filter renvoie un nouveau tableau avec les éléments qui correspondent à la condition donnée (et ne renvoie pas ceux qui ne correspondent pas).
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

let userOne = new User("ryu@ninjas.com", "Ryu");
console.log(userOne);
let userTwo = new User("yoshi@mariokorp.com", "Yoshi");
console.log(userTwo);
let admin = new Admin("shaun@ninjas.com", "Shaun");
console.log(admin );

let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
// userTwo.deleteUser(userOne); // won't work

console.log(users);
console.log(admin.getName);