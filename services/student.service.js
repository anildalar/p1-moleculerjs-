



//1. Default export


//2. Named Export

//2.1 module.exports
module.exports = {
    //1. P:V
    name:"student", //String

    settings: {}, //JS Object,

    dependencies: ["teacher"], // JS Array

    actions:{}, // JS Object

    methods:{}, // JS Object

    events:{}, // JS Object

    //2. MEthod

    //Service LIfe cycle methods
    
    created(){
        
    },
    async started(){
        
    },
    async stopped(){},


}; //JS Object

//2.2 exports.something

