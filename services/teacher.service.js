//1. Default export


//2. Named Export

const x = require("../mixins/db.mixin");

//2.1 module.exports
module.exports = {
    //1. P:V
    name:"teacher", //String

    /**
	 * Mixins
	 */
	mixins: [x("teacher")],

    settings: {
        // Available fields in the responses
		fields: [
			"_id",
			"name",
			"surname"
		],
    }, //JS Object,

    dependencies: [], // JS Array

    actions:{
        create:{
            //1. P:V
            rest:{
                method:"POST",
                path:"/create"
            },
            //2. Method
            async handler(ctx){
                //ctx.params
                let entity = ctx.params;
                return this.adapter.insert(entity)
                //return 'Hello from teacher '+ctx.params.name;
            }
        } // JS Object
    }, // JS Object

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

