var UserLogin =function(user,role)
{
    switch (role) {
        case "admin":
            return `${user} have all access`            
           
        case "Subadmin":
            return `Subadmin ${user} create delete access`            
            
        case "admin":
            return `testprep${user} test access creste detele`            
            
        case "user":
            return `${user} just browsing`            
            
                            
        default:
            return "trial user"
            break;
    }
}
var Detailuserlogin = UserLogin('Gauresh','Subadmin')
console.log(Detailuserlogin);
console.log(UserLogin("nimi","admin"))