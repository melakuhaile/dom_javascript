//Define the class
	function Ninja(name){

		this.name = name;
		this.health = 100;
		let speed = 3;
		let strength = 3;
		

	
	this.showStats = function(){
		console.log("my name is" + this.name + ", I'm a cool ninja " + "my health level " + this.health + " , speed is " + speed + ", and  Strength: " + strength);
				return this;
        }
    this.kick = function(ninja) {
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        return this;

    }
    }
    
	Ninja.prototype.punch = function(ninja){
        ninja.health -= 5;
		console.log("my name is, " + ninja.name + " i was punched by " +  this.name + " and lost 5 health!");

		return this;	
    }
    Ninja.prototype.sayName = function(){
		console.log("my name is, " + this.name);

		return this;	
    }
    


    Ninja.prototype.drinkSake = function(){
	 	this.health += 10;
	 	return this;
		
    }
    let blueNinja = new Ninja("Bill Gates");
    var redNinja = new Ninja("Hyabusa");
    blueNinja.sayName();
    redNinja.sayName();

    blueNinja.punch(redNinja);
    redNinja.kick(blueNinja);

    blueNinja.showStats();
    redNinja.showStats();