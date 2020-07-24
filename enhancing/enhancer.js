module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else if (item.enhancement < 20 && item.enhancement >= 0) {
    return { ...item, enhancement: item.enhancement + 1 };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15) {
    {
      if (item.enhancement > 16)
        return {
          ...item,
          durability: item.durability - 10,
          enhancement: item.enhancement - 1,
        };
    }
  }
}

function repair(item) {
  if (item.durability < 100 && item.durability >= 0) {
    return { ...item, durability: 100 };
  } else {
    return "error";
  }
}

function get(item) {
  return { ...item };
}
