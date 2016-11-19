var CONSTANTS = require('constants');
var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('building');
	    }

	    if(creep.memory.building) {
	        var nearTargets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        if(nearTargets.length){
	            creep.build(nearTargets[0]);
	        }
            else if(targets.length) {
                //for(var index in targets){
                //    console.log("targets["+index+"] = " + targets[index]);
                //}
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } //else {
                //creep.moveTo(Game.spawns['Home'].pos.x, Game.spawns['Home'].pos.y);
            //}
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
	        if(sources){
	            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
	        }
	    }
	    
	    if(creep.ticksToLive < 100){
	        creep.moveTo(CONSTANTS.spawnPosition);
	        if(Game.spawns['Home'].transferEnergy(creep) == OK){
    	        if(Game.spawns['Home'].recycleCreep(creep) == OK){
    	            if(Game.spawns['Home'].canCreateCreep(creep.body, creep.name) == OK){
    	                Game.spawns['Home'].renewCreep(creep);
    	            }
    	        }
	            
	        }
	    }
	}
};

module.exports = roleBuilder;