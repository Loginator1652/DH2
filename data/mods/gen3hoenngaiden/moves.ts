/**
 * Gen 3 moves
 */

export const Moves: {[k: string]: ModdedMoveData} = {
	acrobatics: {
		num: 512,
		accuracy: 100,
		basePower: 55,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.item) {
				this.debug("Power doubled for no item");
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Acrobatics",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		gen: 3,
	},
	batonpass: {
		inherit: true,
		self: {
			onHit(source) {
				if (source.positiveBoosts()) {
					source.clearBoosts();
					this.add('-clearpositiveboost', source);
					this.hint("Baton Pass can't pass Stat Boosts.");
				}
			}
		}

	},
	bodypress: {
		num: 776,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Body Press",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		useSourceDefensiveAsOffensive: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		gen: 3,
	},
	boomburst: {
		num: 586,
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		name: "Boomburst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Tough",
		gen: 3,
	},
	circlethrow: {
		num: 509,
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		name: "Circle Throw",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		forceSwitch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 3,
	},
	foulplay: {
		num: 492,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Foul Play",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		useTargetOffensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		gen: 3,
	},
	gigadrain: {
		num: 202,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Giga Drain",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	icehammer: {
		num: 665,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		name: "Ice Hammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		gen: 3,
	},
	iceshard: {
		num: 420,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Ice Shard",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		gen: 3,
	},
	junglehealing: {
		num: 816,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Jungle Healing",
		pp: 10,
		priority: 0,
		flags: {heal: 1, authentic: 1, mystery: 1},
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
			return pokemon.cureStatus() || success;
		},
		secondary: null,
		target: "allies",
		type: "Grass",
		gen: 3,
	},
	lunge: {
		num: 679,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Lunge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Bug",
		contestType: "Cute",
		gen: 3,
	},
	multiattack: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattack",
		isViable: true,
		name: "Multi-Attack",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Normal",
		gen: 3,
	},
	multiattackbug: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackbug",
		isViable: true,
		name: "Multi-Attack-Bug",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Bug",
	},
	multiattackdark: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackdark",
		isViable: true,
		name: "Multi-Attack-Dark",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Dark",
	},
	multiattackdragon: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackdragon",
		isViable: true,
		name: "Multi-Attack-Dragon",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Dragon",
	},
	multiattackelectric: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackelectric",
		isViable: true,
		name: "Multi-Attack-Electric",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Electric",
	},
	multiattackfighting: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackfighting",
		isViable: true,
		name: "Multi-Attack-Fighting",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Fighting",
	},
	multiattackfire: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackfire",
		isViable: true,
		name: "Multi-Attack-Fire",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Fire",
	},
	multiattackflying: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackflying",
		isViable: true,
		name: "Multi-Attack-Flying",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Flying",
	},
	multiattackghost: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackghost",
		isViable: true,
		name: "Multi-Attack-Ghost",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Ghost",
	},
	multiattackgrass: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackgrass",
		isViable: true,
		name: "Multi-Attack-Grass",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Grass",
	},
	multiattackground: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackground",
		isViable: true,
		name: "Multi-Attack-Ground",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Ground",
	},
	multiattackice: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackice",
		isViable: true,
		name: "Multi-Attack-Ice",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Ice",
	},
	multiattackpoison: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackpoison",
		isViable: true,
		name: "Multi-Attack-Poison",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Poison",
	},
	multiattackpsychic: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackpsychic",
		isViable: true,
		name: "Multi-Attack-Psychic",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Psychic",
	},
	multiattackrock: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackrock",
		isViable: true,
		name: "Multi-Attack-Rock",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Rock",
	},
	multiattacksteel: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattacksteel",
		isViable: true,
		name: "Multi-Attack-Steel",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Steel",
	},
	multiattackwater: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattackwater",
		isViable: true,
		name: "Multi-Attack-Water",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		type: "Water",
	},
	recover: {
		inherit: true,
		pp: 10,
	},
	spikyshield: {
		num: 596,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spiky Shield",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'spikyshield',
		onTryHit(target, source, move) {
			return !!this.queue.willAct() && this.runEvent('StallMove', target);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ || (move.isMax && !move.breaksProtect)) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && move.flags['contact']) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Grass",
		contestType: "Tough",
		gen: 3,
	},
	spiritbreak: {
		num: 789,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Spirit Break",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		gen: 3,
	},
	suckerpunch: {
		num: 389,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Sucker Punch",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
				this.add('-fail', source);
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
		gen: 3,
	},
	//Temporary Multi-Attack Fix
	/*multiattack: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		shortDesc: "Type varies based on the held Memory.",
		isViable: true,
		name: "Multi-Attack",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			switch (pokemon.item.id) {
			case 'bugmemory':
				move.type = 'Bug';
				break;
			case 'darkmemory':
				move.type = 'Dark';
				break;
			case 'dragonmemory':
				move.type = 'Dragon';
				break;
			case 'electricmemory':
				move.type = 'Electric';
				break;
			case 'fightingmemory':
				move.type = 'Fighting';
				break;
			case 'firememory':
				move.type = 'Fire';
				break;
			case 'flyingmemory':
				move.type = 'Flying';
				break;
			case 'ghostmemory':
				move.type = 'Ghost';
				break;
			case 'grassmemory':
				move.type = 'Grass';
				break;
			case 'groundmemory':
				move.type = 'Ground';
				break;
			case 'icememory':
				move.type = 'Ice';
				break;
			case 'poisonmemory':
				move.type = 'Poison';
				break;
			case 'psychicmemory':
				move.type = 'Psychic';
				break;
			case 'rockmemory':
				move.type = 'Rock';
				break;
			case 'steelmemory':
				move.type = 'Steel';
				break;
			case 'watermemory':
				move.type = 'Water';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			if (['darkmemory', 'dragonmemory', 'electricmemory', 'firememory', 'grassmemory', 'icememory', 'psychicmemory', 'watermemory'].includes(pokemon.item.id)) move.category = 'Special';
		},
		type: "Normal",
	},*/
};
