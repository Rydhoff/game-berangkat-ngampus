import k from "../kaplayCtx";

export default function disclaimer() {
  k.add([
    k.text(
      `
        Game Berangkat Ngampus.
        This is a game made by Juan, Refa, Ridho, Kahfi, Nayla.
      `,
      { font: "mania", size: 32 }
    ),
  ]);

  k.add([
    k.text("Press Space/Click/Touch to Start The Game", {
      font: "mania",
      size: 64,
    }),
    k.anchor("center"),
    k.pos(k.center()),
  ]);

  k.onButtonPress("jump", () => k.go("main-menu"));
}
