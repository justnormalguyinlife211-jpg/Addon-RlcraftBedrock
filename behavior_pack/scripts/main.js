import { world } from "@minecraft/server";

const FIRE_SWORD_ID = "asr:fire_sword";
const BURN_DURATION_SECONDS = 4;

world.afterEvents.entityHurt.subscribe((event) => {
  const attacker = event.damageSource.damagingEntity;
  const victim = event.hurtEntity;

  if (!attacker || !victim) {
    return;
  }

  const equippable = attacker.getComponent("minecraft:equippable");
  const mainhand = equippable?.getEquipment("Mainhand");

  if (!mainhand || mainhand.typeId !== FIRE_SWORD_ID) {
    return;
  }

  victim.setOnFire(BURN_DURATION_SECONDS, true);
});
