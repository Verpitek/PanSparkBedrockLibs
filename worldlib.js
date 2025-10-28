import { world, system } from "@minecraft/server";
import { Num } from "../panspark";

export function registerWith(vm) {
  vm.registerOpCode("GET_TIME", (args, context) => {
    context.setVar(args[0], Num(world.getTimeOfDay()));
  });
  vm.registerOpCode("GET_MOON_PHASE", (args, context) => {
    context.setVar(args[0], Num(world.getMoonPhase()));
  });
  vm.registerOpCode("GET_DAY", (args, context) => {
    context.setVar(args[0], Num(world.getDay()));
  });
  vm.registerOpCode("GET_DIFFICULTY", (args, context) => {
    const difficulty = world.getDifficulty();
    let diffToNum = null;
    if (difficulty == "Easy") {
      diffToNum = 0;
    } else if (difficulty == "Normal") {
      diffToNum = 1;
    } else {
      diffToNum = 2;
    }
    context.setVar(args[0], Num(diffToNum));
  });
}
