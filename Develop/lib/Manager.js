const Employee =require("./employee")

class Manager extends Employee{
       constructor(name,id,email, officeNumber){
           super(name,id,email);
           this.officeNumber=officeNumber;
           this.role=this.getRole();
       }

       getRole(){
         return "Manager" ;
       }
       getOffice(){
        return 100 ;
      }
}

module.exports= Manager