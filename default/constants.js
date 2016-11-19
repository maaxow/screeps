 /**
  * WORK : 100
  * CARRY : 50
  * MOVE : 50
  * ATTACK : 80
  * RANGED_ATTACK : 150
  * HEAL : 250
  * CLAIM : 600
  * TOUGH : 10
  * 
  */

module.exports = {
    spawnPosition : Game.spawns['Home'].pos,
    forceStayHarvester : false,
    forceStayUpgrader : false,
    northSourceFlag : 'northSource',
    southSourceFlag : 'southSource',
    creepsInfos : {
        harvester : {
            total : 2,
            names : ['Harry1', 'Harry2', 'Harry3', 'Harry4'],
            bodys : {
                '300' : [WORK, CARRY, CARRY, MOVE, MOVE],
                '350' : [WORK, CARRY, CARRY, MOVE, MOVE, MOVE],
                '400' : [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
                '450' : [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], 
                '500' : [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
                '550' : [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
                '600' : [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
            }
        },
        builder : {
            total : 2,
            names : ['Bui1', 'Bui2', 'Bui3', 'Bui4'],
            bodys : {
                '300' : [WORK, CARRY, MOVE, MOVE, MOVE],
                '350' : [WORK, CARRY, MOVE, MOVE, MOVE, MOVE],
                '400' : [WORK, WORK, CARRY, MOVE, MOVE, MOVE],
                '450' : [WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE], 
                '500' : [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
                '550' : [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
                '600' : [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
            }
        },
        warrior : {
            total : 0,
            names : ['War1', 'War2', 'War3', 'War4'],
            bodys : {
                '300' : [ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],
                '350' : [ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],
                '400' : [ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],
                '450' : [ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],
                '500' : [ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],
                '550' : [ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],
                '600' : [ATTACK,ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH],
            }
        },
        upgrader : {
            total : 2,
            names : ['Up1', 'Up2', 'Up3', 'Up4'],
            bodys : {
                '300' : [WORK, CARRY, MOVE, MOVE, MOVE],
                '350' : [WORK, CARRY, MOVE, MOVE, MOVE, MOVE],
                '400' : [WORK, WORK, CARRY, MOVE, MOVE, MOVE],
                '450' : [WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE], 
                '500' : [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
                '550' : [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
                '600' : [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
            }
        }
    }
};