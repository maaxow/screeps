var CONSTANTS = require('constants');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            } else {
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                /*structure.structureType == STRUCTURE_SPAWN ||*/
                                structure.structureType == STRUCTURE_TOWER ||
                                structure.structureType == STRUCTURE_WALL ||
                                structure.structureType == STRUCTURE_STORAGE) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }// else {
             //  creep.moveTo(CONSTANTS.spawnPosition);
                
//          }
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

module.exports = roleHarvester;