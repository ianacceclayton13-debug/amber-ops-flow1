export type CalloutType = "caution" | "warning" | "note" | "tip";

export interface Callout {
  type: CalloutType;
  title?: string;
  text: string;
}

export interface Step {
  n: number;
  title: string;
  body: string;
  callouts?: Callout[];
}

export interface Procedure {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  steps: Step[];
}

const C = (type: CalloutType, text: string, title?: string): Callout => ({ type, text, title });

export const procedures: Procedure[] = [
  {
    id: "disassembly",
    code: "6.6.1",
    title: "Type III — Disassembly",
    subtitle: "QMST-D Service Tool teardown & redress",
    steps: [
      {
        n: 1,
        title: "Secure top sub in vise",
        body: "Place the top sub (1) of the service tool in a vise and place tool supports toward the lower section of the service tool.",
        callouts: [
          C("caution", "Disassemble and redress as soon as the tool returns from the jobsite. Trapped completion fluids will corrode the tool and significantly reduce service life.", "Corrosion risk"),
        ],
      },
      { n: 2, title: "Break off mule shoe", body: "Hold a backup wrench on the centralizing sub (19) and break off the mule shoe (20)." },
      { n: 3, title: "Remove centralizing sub", body: "Hold a backup wrench on the upper seal sub (16) and break off the centralizing sub (19)." },
      { n: 4, title: "Remove ball seat module", body: "Wrench on the upper seal sub (16) and break off the ball seat module (18)." },
      {
        n: 5,
        title: "Separate coupling/splined mandrel assembly",
        body: "Wrench on the upper seal sub (16) to break off the coupling (10)/splined mandrel (13) assembly from the setting mandrel (2).",
        callouts: [
          C("caution", "Do not wrench or vise on the running collet (14) or the splines. Do not bend or overextend the collet fingers.", "Collet damage"),
          C("note", "The tool may not break at the intended connection. If so, remove components individually from the splined mandrel (13). Vise on top of the Coupling (10)."),
        ],
      },
      { n: 6, title: "Break off upper seal sub", body: "Break off the upper seal sub (16) from the splined mandrel (13)." },
      { n: 7, title: "Remove rotation bearing", body: "Remove the rotation bearing (15) from the splined mandrel (13)." },
      {
        n: 8,
        title: "Remove secondary ball seat",
        body: "Remove the secondary ball seat (17) from inside the upper seal sub (16).",
        callouts: [C("note", "Place a brass ball into the back side of the upper ported seal sub and use a 1-in brass bar and hammer to knock out the secondary ball seat.")],
      },
      {
        n: 9,
        title: "Break spline mandrel from coupling",
        body: "Break the spline mandrel (13) from the coupling (10).",
        callouts: [C("tip", "Use a 36-in pipe wrench on the smaller OD (under the rotational bearing).")],
      },
      { n: 10, title: "Remove coupling & spring", body: "Remove the coupling (10) and the compression spring (26) from the end of the splined mandrel (13)." },
      { n: 11, title: "Remove shear screws", body: "Remove the shear screws (47) from the release piston (11)." },
      { n: 12, title: "Remove release piston assembly", body: "Remove the release piston (11)/support sleeve (12) and the running collet (14) from the splined mandrel (13)." },
      { n: 13, title: "Remove set screws", body: "Remove all set screws from the threaded sleeve (7) and clutch sleeve (8)." },
      {
        n: 14,
        title: "Break off threaded sleeve",
        body: "Hold a backup wrench on the lower cylinder (5) and break off the threaded sleeve (7).",
        callouts: [C("warning", "Threaded sleeve has LEFT-HAND thread. Excessive wrench load can egg the sleeve and lock it onto the inner threads.", "Left-hand thread")],
      },
      {
        n: 15,
        title: "Drive out clutch sleeve assembly",
        body: "Drive the clutch sleeve (8), lower setting piston (6) and setting sleeve (9) from the lower cylinder (5) and setting mandrel (2).",
        callouts: [C("tip", "Facing downhole, use the Clutch Sleeve (8) as a hammer to jar the Lower Setting Piston (6) and Setting Sleeve (9) free.")],
      },
      { n: 16, title: "Separate clutch sleeve from piston", body: "Place the lower setting piston (6) in a vise. Wrench on the clutch sleeve (8) and remove it from the lower setting piston (6)." },
      {
        n: 17,
        title: "Break off lower cylinder",
        body: "Break off the lower cylinder (5) by holding a backup wrench on the upper cylinder (4) and wrenching on the lower cylinder (5).",
        callouts: [C("note", "Wrench right above the pin thread on the upper cylinder (4) and near the box thread on the lower cylinder (5).")],
      },
      { n: 18, title: "Drive out lower setting piston", body: "Drive out the lower setting piston (6) from the lower cylinder (5) with a brass bar and hammer." },
      { n: 19, title: "Break off upper cylinders", body: "Break off the two upper cylinders (4), individually, by holding a backup wrench on the next sub." },
      { n: 20, title: "Drive out upper setting pistons", body: "Drive out the upper setting pistons (3) from the upper cylinders (4) with a brass bar and hammer or by dropping the cylinders on a non-metallic surface." },
      {
        n: 21,
        title: "Break off setting mandrel",
        body: "Break off the setting mandrel (2) from the top sub (1).",
        callouts: [C("caution", "Do not wrench on the large sealing surface OD of the setting mandrel. Wrench at the top of the setting mandrel near the top sub.", "Sealing surface")],
      },
      { n: 22, title: "Discard bonded seals", body: "Remove and discard all bonded seals." },
      {
        n: 23,
        title: "Remove O-rings",
        body: "Remove all O-rings and discard them, being careful not to damage the backup rings.",
        callouts: [C("note", "Backup rings do not require replacement between jobs. Inspect and replace only if damaged or worn.")],
      },
      { n: 24, title: "Disassembly complete", body: "Disassembly of the service tool is complete." },
      { n: 25, title: "Degrease & inspect", body: "Degrease and inspect all parts. File off any wrench marks." },
    ],
  },
  {
    id: "assembly",
    code: "6.6.2",
    title: "Type III — Assembly",
    subtitle: "QMST-D Service Tool buildup",
    steps: [
      { n: 1, title: "Install top sub in vise", body: "Install the top sub (1) in a vise (Figure 6-105)." },
      { n: 2, title: "Seal top sub OD", body: "Place one size 347 O-ring (26) and two size 347 backup rings (36) on the OD of the top sub (1)." },
      {
        n: 3,
        title: "Make up setting mandrel to top sub",
        body: "Makeup the setting mandrel (2) into the top sub (1), making sure this connection is tight.",
        callouts: [
          C("caution", "Vise area on the setting mandrel is between the two sets of ports. Avoid deep wrench or vise marks on the OD sealing surface.", "Sealing surface"),
          C("note", "A tight setting mandrel/top sub connection prevents the setting mandrel from backing out early during disassembly."),
        ],
      },
      { n: 4, title: "Seal upper cylinder pin ID", body: "Insert one size 340 O-ring (27) and two size 340 backup rings (37) into the ID groove at the pin end on each of the two upper cylinders (4)." },
      { n: 5, title: "Seal upper cylinder pin OD", body: "Insert one size 347 O-ring (26) and two size 347 backup rings (36) on the OD groove at the pin end of each upper cylinder (4)." },
      { n: 6, title: "Seal upper setting pistons", body: "Install one size 347 O-ring (26) and two size 347 backup rings (36) on the OD groove of each upper setting piston (3)." },
      { n: 7, title: "Lubricate upper cylinder IDs", body: "Apply Lubriplate to the ID of both upper cylinders (4) and place them box-end-up on a non-metal work surface." },
      { n: 8, title: "Lubricate upper setting pistons", body: "Apply Lubriplate to the OD and ID of the two upper setting pistons (3)." },
      { n: 9, title: "Insert first piston", body: "Insert the small OD end of an upper setting piston (3) into the upper cylinder (4)." },
      {
        n: 10,
        title: "Drive piston flush",
        body: "Drive the upper setting piston (3) into the upper cylinder (4) until the lower end of the piston is flush with the lower end of the cylinder.",
        callouts: [C("tip", "Drop the pin end of the upper cylinder against a rubber or wood workbench surface until the piston is flush.")],
      },
      { n: 11, title: "Install second piston", body: "Insert the small OD end of the second upper setting piston (3) into the remaining upper cylinder (4)." },
      { n: 12, title: "Lubricate setting mandrel OD", body: "Apply a light coat of Lubriplate to the OD of the setting mandrel (2)." },
      {
        n: 13,
        title: "Install first upper cylinder",
        body: "Slide the first upper cylinder/setting piston assembly over the setting mandrel (2) and make it up to the top sub (1).",
        callouts: [C("note", "Wrench on the upper cylinder right above the pin end.")],
      },
      { n: 14, title: "Install second upper cylinder", body: "Slide the second upper cylinder/setting piston assembly over the setting mandrel (2) and make it up to the bottom of the first upper cylinder." },
      { n: 15, title: "Lubricate threaded sleeve", body: "Apply KoperKote to the ID threads on the threaded sleeve (7)." },
      { n: 16, title: "Slide threaded sleeve over cylinder", body: "With the beveled end facing uphole, slide the threaded sleeve (7) over the second upper cylinder (4)." },
      { n: 17, title: "Lubricate lower cylinder ID", body: "Apply O-ring lubricant to the ID of the lower cylinder (5)." },
      { n: 18, title: "Make up lower cylinder", body: "Make up the lower cylinder (5) to the upper cylinder (4)." },
      {
        n: 19,
        title: "Lubricate clutch sleeve ID",
        body: "Lubricate the ID of the clutch sleeve (8).",
        callouts: [C("note", "Confirm which packer you are setting. A conversion kit is required to set QUANTUM packers with the QUANTUM MAX service tool.", "Packer selection")],
      },
      { n: 20, title: "Install clutch sleeve", body: "Slide the clutch sleeve (8) over the lower cylinder (5), aligning tabs, slots and screw holes." },
      { n: 21, title: "Seal lower setting piston ID", body: "Install two size 334 backup rings (38) and one size 334 O-ring (28) into the ID groove of the lower setting piston (6)." },
      { n: 22, title: "Seal lower setting piston OD", body: "Place two size 347 backup rings (36) and one size 347 O-ring (26) in the OD groove of the lower setting piston (6)." },
      {
        n: 23,
        title: "Make up setting sleeve",
        body: "Place the lower setting piston (6) in a vise and make up the setting sleeve (9) to the lower setting piston.",
        callouts: [C("note", "Wrench area on the lower setting piston is the long undercut between the O-ring and the pin thread.")],
      },
      { n: 24, title: "Align slots & insert assembly", body: "Align the slots in the setting sleeve (9) with the screw holes/tabs in the clutch sleeve (8), and insert the lower setting piston/setting sleeve assembly over the setting mandrel (2)." },
      { n: 25, title: "Hammer piston home", body: "Hammer the lower setting piston (6) into the lower cylinder (5) until it shoulders against the upper cylinder (4), keeping setting sleeve slots and clutch sleeve set screw holes aligned." },
      { n: 26, title: "Install threaded sleeve set screws", body: "Make up the threaded sleeve to the lower cylinder and install two set screws (45)." },
      { n: 27, title: "Install clutch sleeve set screws", body: "Install two set screws (45) in the clutch sleeve, ensuring they contact the spot-faced milled slots in the lower cylinder." },
      { n: 28, title: "Seal release piston ID", body: "Insert two size 231 backup rings (40) and one size 231 O-ring (31) in the ID of the release piston (11)." },
      { n: 29, title: "Fit support sleeve", body: "Place the release piston (11) on a flat workbench with slots facing up, and slip the support sleeve (12) into place." },
      { n: 30, title: "Insert collet gauge", body: "Insert the collet installation/gauge inside the release piston and support sleeve assembly." },
      { n: 31, title: "Inspect running collet", body: "Visually inspect the running collet (14) for burrs, twisted fingers and uniformity. Replace if damaged." },
      {
        n: 32,
        title: "Gauge running collet",
        body: "Slide the running collet (14) over the installation tool/gauge. Position the fingers on the 3.31-in diameter upset and verify that all eight fingers contact the gauge.",
        callouts: [C("caution", "Replace the collet if it does not gauge properly. Sprung or bent fingers may cause failure of the hydraulic release.", "Collet gauge")],
      },
      {
        n: 33,
        title: "Install collet over release piston",
        body: "Align the slots in the running collet (14) with the slots in the support sleeve (12). Force the collet fingers over the OD of the release piston.",
        callouts: [C("note", "Keep slots aligned and be careful not to bend fingers during installation.")],
      },
      { n: 34, title: "Remove gauge", body: "Remove the installation gauge and set the running collet/release piston assembly aside." },
      { n: 35, title: "Seal splined mandrel downhole end", body: "Place two size 331 backup rings (42) and one size 331 O-ring (32) on the OD groove at the downhole end of the splined mandrel (13)." },
      { n: 36, title: "Seal splined mandrel port area", body: "Install two size 233 backup rings (41) and one size 233 O-ring (30) in the O-ring groove near the port holes on the splined mandrel." },
      { n: 37, title: "Lubricate splined mandrel", body: "Lightly lubricate the O-rings with high-pressure O-ring grease and the surfaces of the splined mandrel with Lubriplate." },
      { n: 38, title: "Install rotational bearing", body: "Slide the rotational bearing (15) over the splined mandrel (13) so the large OD of the bearing faces the splines." },
      { n: 39, title: "Seal upper seal sub ID", body: "Install two size 228 backup rings (43) and one size 228 O-ring (34) in the ID of the upper seal sub (16)." },
      { n: 40, title: "Lubricate upper seal sub", body: "Lubricate the seal bore with O-ring grease and the thread with KoperKote." },
      {
        n: 41,
        title: "Seal secondary ball seat",
        body: "Install two size 331 backup rings (42) and one size 331 O-ring (32) on the secondary ball seat (17).",
        callouts: [C("note", "Make sure inspection is done on the ball seat prior to assembly.")],
      },
      { n: 42, title: "Seat secondary ball seat", body: "Install the secondary ball seat (17) small-OD end first into the top of the upper seal sub (16). Drop on a rubber-lined surface to seat it." },
      { n: 43, title: "Hand-tighten upper seal sub", body: "Make up the top end of the upper seal sub (16) to the bottom of the splined mandrel (13) and hand tighten." },
      {
        n: 44,
        title: "Tighten splined mandrel",
        body: "Vise on the top of the upper seal sub (16). Using a pipe wrench, make up and tighten the splined mandrel (13) to the upper seal sub.",
        callouts: [
          C("caution", "Use the wrench relief when making up the splined mandrel.", "Wrench relief"),
          C("note", "You may need a backup chain wrench on the upper seal sub to keep it from spinning."),
        ],
      },
      { n: 45, title: "Align collet with splines", body: "Place the collet end of the running collet (14) assembly over the upper end of the splined mandrel (13) and align the slots with the splines." },
      { n: 46, title: "Drive release piston home", body: "Using a brass pin and mallet, drive the release piston (11) and support sleeve (12) down the splined mandrel (13) until it shoulders out." },
      {
        n: 47,
        title: "Install shear screws",
        body: "Install six 1/4-20 x 0.44 in brass shear screws (47) into the release piston (11). Bottom out, then back out each screw 1/4 turn.",
        callouts: [C("warning", "Shear screws must not be installed so tight that the bottom is pressed against the groove in the splined mandrel. Improper installation may cause operational failure.", "Shear screw torque")],
      },
      { n: 48, title: "Seal coupling ID", body: "Install four size 332 backup rings (39) — large diameter first — and two size 332 O-rings (29) in the two ID grooves of the coupling (10)." },
      { n: 49, title: "Install compression spring", body: "Slide the compression spring (21) over the end of the release piston (11)." },
      { n: 50, title: "Screw coupling onto splined mandrel", body: "Screw the coupling (10) onto the uphole end of the splined mandrel assembly." },
      {
        n: 51,
        title: "Final coupling makeup",
        body: "Vise down on the upper seal sub (16) and tighten the coupling (10) to the splined mandrel using a chain wrench.",
        callouts: [C("caution", "Do not wrench or vise on the running collet or splines. Do not bend or extend the collet fingers.", "Collet protection")],
      },
      { n: 52, title: "Make up to setting mandrel", body: "Make up the splined mandrel/coupling assembly to the setting mandrel (2) and tighten the connection." },
      { n: 53, title: "Install clutch sleeve set screws", body: "Screw three 5/16-18 x 1 in socket set screws (46) into the clutch sleeve (8) until they shoulder against the coupling (10)." },
      {
        n: 54,
        title: "Install bonded seal O-rings",
        body: "Install a size 154 O-ring (33) into each of the two bonded seals (25).",
        callouts: [
          C("note", "Wrench area on all seal subs is the undercut area. Do not wrench on the upset or the bonded seal surface."),
          C("tip", "Install one bonded seal and press it in place by temporarily making up a seal sub to the thread. Remove, position the second seal at the start of the seal area; final connection presses it home."),
        ],
      },
      {
        n: 55,
        title: "Install bonded seals on upper seal sub",
        body: "Slide two bonded seals (25) with O-rings onto the seal surface of the upper seal sub.",
        callouts: [C("note", "Non-ported sub is used in the Check Valve version; ported sub in the FBSD version.")],
      },
      { n: 56, title: "Seal upper seal sub pin", body: "Install one size 235 O-ring (35) and two backup rings (44) onto the pin of the upper seal sub (16)." },
    ],
  },
  {
    id: "ball-seat-module",
    code: "100407788",
    title: "Ball Seat Module",
    subtitle: "Module buildup & final makeup to upper seal sub",
    steps: [
      { n: 1, title: "Paint ball seat groove", body: "Paint the groove of ball seat (2) with yellow or white paint marker for orientation." },
      { n: 2, title: "Seal ball seat", body: "Install one size 223 O-ring (4) and two backup rings onto the ball seat (2)." },
      { n: 3, title: "Insert ball seat in sub", body: "Install the ball seat (2) into the pin end of the ball seat sub (1) with the painted groove facing down." },
      {
        n: 4,
        title: "Install shear screws",
        body: "Install 11 shear screws (3) into the ball seat sub (1). Back off one quarter turn after bottoming out.",
        callouts: [C("warning", "Do not over-torque shear screws — controlled shear value is critical to module function.", "Shear value")],
      },
      { n: 5, title: "Make up ball seat module to upper seal sub", body: "Make up the ball seat module (18) to the upper seal sub (16)." },
      { n: 6, title: "Make up centralizing sub", body: "Make up the centralizing sub (19) to the upper seal sub (16)." },
      { n: 7, title: "Install centralizing ring", body: "Install centralizing ring (24) onto the centralizing sub (19)." },
      { n: 8, title: "Seal centralizing sub", body: "Install one size 235 O-ring (35) and two backup rings (44) onto the centralizing sub (19)." },
      { n: 9, title: "Make up mule shoe", body: "Make up the mule shoe (20) to the centralizing sub (19). Assembly complete." },
    ],
  },
];
