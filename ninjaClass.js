//Define the class
	function Ninja(name){

		this.name = name;
		this.health = 100;
		let speed = 3;
		let strength = 3;
		

	
	this.showStas = function(){
		console.log("my name is" + this.name + ", I'm a cool ninja " + "my health level " + this.health + " , speed is " + speed + ", and  Strength: " + strength);
				return this;
		}

	 
	}
	Ninja.prototype.sayName = function(){
		console.log("my name is, " + this.name);

		return this;	
	}
    Ninja.prototype.drinkSake = function(){
	 	this.health += 10;
	 	return this;
		
	}
	let newNinja = new Ninja("Fuma Kotaro");
	newNinja.sayName();
	newNinja.showStas();