function login(){
    var obj = {
    	name: 'howard_wang',
    	pw: '1234'
    }
    $.get('http://localhost:3000/login',obj,function(data){
    	console.log(data);
    })
}
