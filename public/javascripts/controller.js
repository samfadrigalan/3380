function login(){
    var obj = {
    	name: 'howard_wang',
    	pw: '1234'
    }
    $.get('http://localhost:3000/login',obj,function(data){
    	if(JSON.parse(data).success){
    		alert("Login successful");
    	}else{
    		alert("Login unsuccesful please try again");
    	}
    })
}
