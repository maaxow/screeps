var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleWarrior = require('role.warrior');
var checker = require('checker');
var CONSTANTS = require('constants');

module.exports.loop = function () {
    
    checker.check();

    //var tower = Game.getObjectById('c26181b17888b84351e659f4');
    //if(tower) {
    //    var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    //        filter: (structure) => structure.hits < structure.hitsMax
    //    });
    //    if(closestDamagedStructure) {
    //        tower.repair(closestDamagedStructure);
    //    }

    //    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //    if(closestHostile) {
    //        tower.attack(closestHostile);
    //    }
    //}

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            if(!CONSTANTS.forceStayHarvester){
                roleHarvester.run(creep);
            } else {
                creep.moveTo(Game.flags[creep.name]);
            }
        }
        if(creep.memory.role == 'upgrader') {
            if(!CONSTANTS.forceStayUpgrader){
                roleUpgrader.run(creep);
            } else {
                creep.moveTo(Game.flags[creep.name]);
            }
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
		if(creep.memory.role == 'warrior') {
            roleWarrior.run(creep);
        }
    }
}