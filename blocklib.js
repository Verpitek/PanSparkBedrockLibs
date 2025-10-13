import { world, system } from "@minecraft/server";
export function registerWith(vm) {
  vm.registerOpCode("PLACE", (args, context) => {
    const x = context.getVar(args[0].trim(), 0).value;
    const y = context.getVar(args[1].trim(), 0).value;
    const z = context.getVar(args[2].trim(), 0).value;
    const overworld = world.getDimension("overworld");
    const block = overworld.getBlock({ x: x, y: y, z: z });
    if (block) {
      block.setType(`${args[3]}`);
    }
  });
}
