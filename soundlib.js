import { world, system } from "@minecraft/server";

// change when the library is initiated!
export let dimension = "overworld";
export let location = [0,0,0];

export function registerWith(vm) {
  vm.registerOpCode("PLAYSOUND", (args, context) => {
    if (dimension === "none") {
      throw Error("Dimension not set for sound module");
    }
    world.getDimension(dimension).runCommand(`playsound ${args[0]} @a ${location[0]} ${location[1]} ${location[2]}`);
  });
}
