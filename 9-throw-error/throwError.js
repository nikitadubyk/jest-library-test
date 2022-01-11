function inedibleFood(food) {
    if (food === 'wood') {
        throw new Error("Oops, I don't eat wood");
    }
}

module.exports = inedibleFood;
