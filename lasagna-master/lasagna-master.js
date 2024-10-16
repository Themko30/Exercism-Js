/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer == 0) {
    return "Lasagna is done.";
  } else if (timer === undefined) {
    return "You forgot to set the timer.";
  } else return "Not done, please wait.";
}

export function preparationTime(layers, averageTime) {
  var completeTime;
  if (averageTime === undefined) {
    completeTime = layers.length * 2;
  } else {
    completeTime = layers.length * averageTime;
  }
  return completeTime;
}

export function quantities(layers) {
  var noodles = layers.filter((layer) => layer === "noodles").length;
  var sauce = layers.filter((layer) => layer === "sauce").length;
  noodles *= 50;
  sauce *= 0.2;
  return { noodles: noodles, sauce: sauce };
}

export function addSecretIngredient(friendsList, myList) {
  var secretIngredient = friendsList.pop();
  friendsList.push(secretIngredient);
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, scaleFactor) {
  var clonedRecipe = { ...recipe };
  for (let key in clonedRecipe) {
    if (typeof clonedRecipe[key] == "number") {
      clonedRecipe[key] *= scaleFactor / 2;
    }
  }
  return clonedRecipe;
}
