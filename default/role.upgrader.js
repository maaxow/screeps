var CONSTANTS = require('constants');
var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('harvesting');
	    }
	    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.upgrading = true;
	        creep.say('upgrading');
	    }

	    if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
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

module.exports = roleUpgrader;