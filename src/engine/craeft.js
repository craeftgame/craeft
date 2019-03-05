const Armor = require('./items/armor');
const Weapon = require('./items/weapon');
const Weaponsmith = require('./crafter/weaponsmith');
const Armorsmith = require('./crafter/armorsmith');

{
    const armor = new Armor({def: 10});
    armor.print();
}

{
    const weapon = new Weapon({atk: 100});
    weapon.print();
}

const resources = {
    lumber: 100,
    iron: 100
};

{
    const ws = new Weaponsmith({
        luk: 10,
        dex: 5,
        str: 7
    });

    ws.print();

    const w = ws.craft(
        resources
    );

    w.print();
}

console.log(resources);

{
    const as = new Armorsmith({
        luk: 10,
        dex: 5,
        str: 7
    });

    as.print();

    const a = as.craft(
        resources
    );

    a.print();
}

console.log(resources);
