import { world, system } from "@minecraft/server";
export function registerWith(vm) {
  vm.registerOpCode("NET_SEND", (args, context) => {
    if (args[1] == ">>") {
      const data = context.getVar(args[0], 0).value;
      const targetId = context.getVar(args[2], 0).value;
      world.setDynamicProperty(`lunatech:lunanet:${targetId}`, data);
    } else {
      throw Error(`syntax incorrect, it has to be: NET_SEND <variable> >> <targetVar>`);
    }
  });
  
  vm.registerOpCode("NET_FETCH", (args, context) => {
    if (args[1] == ">>") {
      const targetId = context.getVar(args[0], 0).value;
      let data = world.getDynamicProperty(`lunatech:lunanet:${targetId}`);
      if (data == undefined) {
        data = 0;
      }
      context.setVar(args[2], { type: 0, value: data });
    } else {
      throw Error(`syntax incorrect, it has to be: NET_FETCH <targetVar> >> <variable>`);
    }
  });
}
