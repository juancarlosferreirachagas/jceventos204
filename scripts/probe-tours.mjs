/** Probe Google photo IDs to find equirectangular 360° panoramas */
const GPS_IDS = [
  "APNQkAEAP5c7b2TArvLSKDMIwV7Td3YyEgajTc2WN-ouE3jMogCmhlB9-RN5BE8OxBk8AFKjoFu3Fk1B3QjYkpjidYRPPCsbjTyR8gI4MsiC9rkfxSarCQyE60SvtlqBnFm5jvzhXsMxjA",
  "APNQkAECwiRCrS2AUbTmreDiJTiinRENKqWHTLkh1sEYTtA-qfUC8IJMaZa9xmoUIknZvPveYDuWML0IGRP5tbYbJqVCcckJVYdm767Jn-a1FZpRZd01K-ZfOEvJEvLSTXWF36hYcUcYZtC7dN_W",
  "APNQkAEWygK_eCsbnsfOlju1Acgm4Haq3im11SJG3CoSa4Y8CCFswI3w6veYG6pd7mcVh15lNzikyq1R7gTwgg0zUEPoPGK4DORmrG3hX_ZUXriphla9UBIUSm3IPtVYwIvtBim0WK91W1Z-Db4",
  "APNQkAFGA2KIjUA6D-74j1_7OootfCZh-505qMdeQrQg-6rxY4Y6eEmrhkxzp_LXodqMGBjLxCW83JBAQipIZQLoHub1d6ZPqRL6TNXjDrM9r_M7Oii7b2xgHoDJEBuA25BAtsDeuyo",
  "APNQkAF-V2qnHw1oWawszyynqG70LRe6ERwDACLiNlTtFs7-ga89XsMkTYctoEApibevKbMP-5giduX5y2t9eHlCn9_gjRoMvRk7fR_rNRnXAooi0w1G0Op_jgpB6awPUKytgbxYThcDeLJVLcN1",
  "APNQkAFx3Uxj3VOGLdx3QAhO0J5XD4AMi3pFMJjhGE4ijJLDbbzZo5eQmrNRBjBL-9UNklVO_KcMOD2DxVUSNaftuw5q53O1J1owBiDgEdvD7dy6e1YAJTweG_wSwQDIg-W5NDJqJ6xpwmZCJKrs",
  "APNQkAGnhPCWFXrkUHeyvTrvQRjW89eOLgjAKo2O1HuvtvHQR9Ri5_5TfAoByPKdRMOSGE-wvFj5tlRhD4BBobpU7SeTP1M3W9afQu6t_hh4IAqXh8iXz4WF5fQw9PiHgHPburw26IYPUc-zHMMy",
  "APNQkAGrlpD-Yu6AEJg-A4vgwrt7Ez_XltDqjm2vi7V1S96_eQEIY1w8fjhfMOJfr1Bd2EYCrHgw8xhamZD2a2kZXI70kHLS1K3cTDKFedUM5Ict3rFVymJEFyB_7GP_VHBaxqa-nsRX51lX0UA",
  "APNQkAGZ_VuORP_zymqt5-c84DZyn5XnQfHyYszLP-VaZmYxL2GhbudnMGWlqVh18FD5oZT2VBNZdLkcloIlsQQFISmxrSofyjI2tU_r2F1wIFj16uHrso1BEWquv8AqCsdYMCem4ATC6_BszhRY",
  "APNQkAH4gEsghOwspgohOrwgnqHKEGF4POBVw7XAPdQrN5bzr1uG_j_SZp1BsrDBb9k6vscn5yed4hUG5BXyjDzMZAt-Z6p_9nnTgMMMOI2jc4YKofhHt7FKFUBYpXXY44gfO6zYAJs4",
  "APNQkAHKs5Q82o3KVc_xoFD5-RUlAK_PBqLhBdtM3HdjeK_KM7SSSP8pd_GCWhEsVDYkfQfY6ChctU1-fF_N-l4JubvKJlRM9cyGPVXIL2nwBFH2xdioZimfDwZA2lQLdosOyEXI2TKqarpV-w7g",
  "APNQkAHp2p_xzAthrLRA65SSxceJCNZznDSoZfo_Lg73MIuE2OWGgM9MBU0ONtim6Pl221NBe0i0QDXXs2u_-5hnba_oIllV7wotwMScczKDQr0N75tK1oEzmPKVm96LYfiAnhaRMHzaMA3PP8cP",
  "APNQkAHPLy_xmGRAith9jeOJ3wp2-mqtdaJXztUUq0fK9BwY14YsXM61pGphlbjjde8HmVoNDCmhqdzt7aWd6bPJQF_AnDFoBZC_AEmqgj-yHjVydjbaTTxXgV1Bz9Q3lTgABiIksfRIfQQC9i5U",
  "APNQkAHvhvczfoRlBEXZvOkKPig-_389wyxbgJaKpwA-zEnR_sl2eTa6KPsmZerqrk0vHpIjLiN9f8BpEl9PEL4eXFToaTJV4RAftjUKgq0tW4lsQ4CWX_TK-WpSMyj7zB6x6WrJX1ZA",
];

async function probe(id) {
  const url = `https://lh3.googleusercontent.com/gps-cs-s/${id}=w512-h512-k-no`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) return { id, ok: false, status: res.status };
  const buf = Buffer.from(await res.arrayBuffer());
  // JPEG: check SOF markers for dimensions
  let w = 0;
  let h = 0;
  for (let i = 0; i < buf.length - 8; i++) {
    if (buf[i] === 0xff && (buf[i + 1] === 0xc0 || buf[i + 1] === 0xc2)) {
      h = buf.readUInt16BE(i + 5);
      w = buf.readUInt16BE(i + 7);
      break;
    }
  }
  const ratio = w && h ? (w / h).toFixed(2) : "?";
  const is360 = w > 0 && h > 0 && Math.abs(w / h - 2) < 0.05;
  return { id, ok: true, w, h, ratio, is360, bytes: buf.length };
}

const results = [];
for (const id of GPS_IDS) {
  const r = await probe(id);
  results.push(r);
  console.log(r);
}

console.log("\n360 panoramas:", results.filter((r) => r.is360));
