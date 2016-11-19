var CONSTANTS = require('constants');
var checking = {

    check: function() {
        var creepsList = Game.creeps;
        var nbHarvester = 0;
        var nbBuilder = 0;
        var nbWarrior = 0;
        var nbUpgrader = 0;
        
        for(var index in creepsList){
            var currentName = creepsList[index].name;
            var currentRole = creepsList[index].memory.role;
            
            if(currentRole == 'harvester'){
                nbHarvester = nbHarvester + 1;
            }
            else if(currentRole == 'builder'){
                nbBuilder = nbBuilder + 1;
            } 
            else if(currentRole == 'warrior'){
                nbWarrior = nbWarrior + 1;
            }
            else if(currentRole == 'upgrader'){
                nbUpgrader = nbUpgrader + 1;
            }
        }
        
        if(nbHarvester < CONSTANTS.creepsInfos.harvester.total){
            for(var i = 0; i < CONSTANTS.creepsInfos.harvester.names.length; i++){
                if(Game.spawns['Home'].canCreateCreep(CONSTANTS.creepsInfos.harvester.bodys[Game.spawns['Home'].energyCapacity], CONSTANTS.creepsInfos.harvester.names[i]) == OK){
                    Game.spawns['Home'].createCreep(CONSTANTS.creepsInfos.harvester.bodys[Game.spawns['Home'].energyCapacity], CONSTANTS.creepsInfos.harvester.names[i], {role: 'harvester'});
                    break;
                }
            }
        }
        if(nbBuilder < CONSTANTS.creepsInfos.builder.total){
            for(var i = 0; i < CONSTANTS.creepsInfos.builder.names.length; i++){
                if(Game.spawns['Home'].canCreateCreep(CONSTANTS.creepsInfos.builder.bodys[Game.spawns['Home'].energyCapacity], CONSTANTS.creepsInfos.builder.names[i]) == OK){
                    Game.spawns['Home'].createCreep(CONSTANTS.creepsInfos.builder.bodys[Game.spawns['Home'].energyCapacity], CONSTANTS.creepsInfos.builder.names[i], {role: 'builder'});
                    break;
                }
            }
        }
        //if(nbWarrior < CONSTANTS.creepsInfos.warrior.total){
            //for(var i = 0; i < CONSTANTS.creepsInfos.warrior.names.length; i++){
                //if(Game.spawns['Home'].canCreateCreep(CONSTANTS.creepsInfos.warrior.bodys[Game.spawns['Home'].energyCapacity], CONSTANTS.creepsInfos.warrior.names[i]) == OK){
                    //Game.spawns['Home'].createCreep(CONSTANTS.creepsInfos.warrior.bodys[Game.spawns['Home'].energyCapacity], CONSTANTS.creepsInfos.warrior.names[i], {role: 'warrior'});
                    //break;
                //}
            //}
        //}
        if(nbUpgrader < CONSTANTS.creepsInfos.upgrader.total){
            for(var i = 0; i < CONSTANTS.creepsInfos.upgrader.names.length; i++){
                if(Game.spawns['Home'].canCreateCreep(CONSTANTS.creepsInfos.upgrader.bodys[Game.spawns['Home'].energyCapacity], CONSTANTS.creepsInfos.upgrader.names[i]) == OK){
                    Game.spawns['Home'].createCreep(CONSTANTS.creepsInfos.upgrader.bodys[Game.spawns['Home'].energyCapacity], CONSTANTS.creepsInfos.upgrader.names[i], {role: 'upgrader'});
                    break;
                }
            }
        }
    }

};

module.exports = checking;