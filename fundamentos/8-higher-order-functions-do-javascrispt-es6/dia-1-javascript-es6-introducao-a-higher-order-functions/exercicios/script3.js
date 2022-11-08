const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  //Passo 1 - Criar uma function que gere um numero aleatorio entre 15 e 50 para representar o dano do Dragão.

  const damageDragon = (max, min) => Math.ceil(Math.random() * (max - min) + min);
  // console.log(damageDragon(dragon.strength, 15));
  

  //Passo 2 - Criar uma function que gere um numero aleatorio entre 30 e 30 * 2.

//   const damageWarrior = (max, min, multiplicador) => (Math.ceil(Math.random() * (max - min) * multiplicador + min) > min * multiplicador) ? min * multiplicador : 
//   console.log(damageWarrior(warrior.strength * 2, warrior.strength, warrior.weaponDmg));

  const damageWarrior = (max, min, multiplicador) => {
  const danoPreMitigado = Math.ceil(Math.random() * (max - min) * multiplicador + min);
  console.log(danoPreMitigado);
if(danoPreMitigado > min * multiplicador){
		return min * multiplicador;
 } else {
		return danoPreMitigado;
 }
};
// console.log(damageWarrior(warrior.strength * 2, warrior.strength, warrior.weaponDmg));

  //Passo 3 - Criar uma function que retorna um objeto, contendo 2 chaves 'mana: dano:' e dois valores 'dano = um numero aleatorio entre 45 e 90 && mana = 15'

const spellCastingMago = (max, min, multiplicador, mana) => {
	if(mana < 15)
	return 'Acho melhor tomar uma mana potion'
	const conjuracao = {
	dano: Math.ceil(Math.random() * (max * multiplicador - min) + min),
		mana: (mana > 15) ? mana - 15 : mana,
	}
	return conjuracao
}

 console.log(spellCastingMago(mage.intelligence, mage.intelligence, 2, mage.mana));
console.log(mage.mana);