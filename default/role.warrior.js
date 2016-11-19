
/** TODO remake all */
var roleWarrior = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var targets = creep.room.find(FIND_HOSTILE_CREEPS, {
            filter: function(object) {
                return object.getActiveBodyparts(ATTACK) == 0;
            }
        });
        //onsole.log("attack = " + targets);
        if(creep.room.controller && !creep.room.controller.my) {
            if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.say('hodor!');
                creep.moveTo(creep.room.controller);
            }
        }
	    if(creep.ticksToLive < 100){
	        creep.moveTo(Game.spawns['Home'].pos);
	        if(Game.spawns['Home'].recycleCreep(creep) == OK){
	            Game.spawns['Home'].renewCreep(creep);
	        }
	    }
	}
};

module.exports = roleWarrior;