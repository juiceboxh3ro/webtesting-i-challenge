module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  if(item.enhancement < 20) {
    const enhanced = {
      ...item,
      enhancement: item.enhancement += 1
    }
    return enhanced;
  } else {
    return item
  }

}

function fail(item) {

  if(item.enhancement < 15) {
    const damagedAxe = {
      ...item,
      durability: item.durability -= 5
    }
    return damagedAxe

  } else if(item.enhancement >=15) {
    if(item.enhancement > 16) {
      const damagedAxe = {
        ...item,
        durability: item.durability -= 10,
        enhancement: item.enhancement -= 1
      }
      return damagedAxe
    } else {
      const damagedAxe = {
        ...item,
        durability: item.durability -= 10
      }
      return damagedAxe
    }
  }
}

function repair(item) {

  const repaired = {
    ...item,
    durability: 100
  }

  return repaired;
}

function get(item) {
  return { ...item };
}
