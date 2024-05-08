export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	gen: 9,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['Mega', 'Paldea', 'Paldea (NFE)'],
		customDoublesTiers: ['Mega', 'Paldea', 'Paldea (NFE)'],
	},
	init() {
		for (const id in this.dataCache.Pokedex) {
			const pokemon = this.dataCache.Pokedex[id];

			if (pokemon.movepoolAdditions) {
				for (const move of pokemon.movepoolAdditions) {
					this.modData('Learnsets', this.toID(id)).learnset[this.toID(move)] = ["9M"];
				}
			}

			if (!pokemon || !pokemon.mega) continue; // weeding out Pokémon that aren't new Megas
			const newMega = this.dataCache.Pokedex[pokemon.mega] = {name: pokemon.megaName};

			pokemon.otherFormes = pokemon.otherFormes ? pokemon.otherFormes.concat([newMega.name]) : [pokemon.megaName];
			pokemon.formeOrder = pokemon.formeOrder ? pokemon.formeOrder.concat([newMega.name]) : [pokemon.name, pokemon.megaName];

			newMega.num = pokemon.num;
			newMega.baseSpecies = pokemon.name;
			newMega.forme = "Mega";

			newMega.types = pokemon.megaType || pokemon.types;
			newMega.abilities = pokemon.megaAbility || pokemon.abilities;
			newMega.baseStats = pokemon.megaStats || pokemon.baseStats;
			newMega.heightm = pokemon.megaHeightm || pokemon.heightm;
			newMega.weightkg = pokemon.megaWeightkg || pokemon.weightkg;
			newMega.eggGroups = pokemon.eggGroups;
			newMega.color = pokemon.megaColor || pokemon.color;

			newMega.creator = pokemon.megaCreator || null;
			newMega.requiredItem = pokemon.megaStone || null;
			if (!this.modData('FormatsData', pokemon.mega)) this.data.FormatsData[pokemon.mega] = {tier: "Mega"};
		}
	},

	actions: {
	canMegaEvo(pokemon) { // modded for forms
		const altForme = pokemon.baseSpecies.otherFormes && this.dex.species.get(pokemon.baseSpecies.otherFormes[0]);
		const item = pokemon.getItem();
		if (
			altForme?.isMega && altForme?.requiredMove &&
			pokemon.baseMoves.includes(this.toID(altForme.requiredMove)) && !item.zMove
		) {
			return altForme.name;
		}
    // this is where form-specific Megas are defined when that becomes relevant
    /* examples:
		if (item.name === "Wormadamite") {
			if (pokemon.species.name === "Wormadam-Sandy") return "Wormadam-Sandy-Mega";
			else return null;
		}
		if (item.name === "Hoopanite" && pokemon.species.name === "Hoopa-Unbound") return null;
    */
		if (item.megaEvolves !== pokemon.species.name || item.megaStone === pokemon.species.name) return null;
		return item.megaStone;
	},
	},
};
