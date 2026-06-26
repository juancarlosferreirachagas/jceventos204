/**
 * Tours 360° oficiais do Google Meu Negócio — JC Eventos 204.
 * Fonte: links photosphere fornecidos pelo cliente.
 * Uso: npm run images:tour
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "images", "tour");
const thumbDir = path.join(outDir, "thumbs");
const dataDir = path.join(root, "public", "data");

const GOOGLE_FEATURE_ID = "0x94ceff4f4eec8451:0x32d504f55a440d13";

/** Catálogo oficial — cada item = um panorama 360° real (ik único) */
const OFFICIAL_TOURS = [
  {
    id: "camarim-noiva",
    label: "Camarim da noiva",
    audience: "eventos",
    ik: "CAoSHENJQUJJaEQxRC1STl9MaDhFTlZ0WjlKSC1NcTE=",
    gpsId: "APNQkAFv1PuMcgqYEFlUk619ou6chmv3Yopeq5HYHJkj4q_KJLFrWGUGEHf9YlRTtobMGnXmeAXGAvcM5RzT-I2LTmtDHekE6OGe1Cl3iICg393BAKWZBrHMwSGS_OokBWYvbQlHEZ6sCjPUKbs",
  },
  {
    id: "camarim-noiva-ii",
    label: "Camarim da noiva II",
    audience: "eventos",
    ik: "CAoSHENJQUJJaEN5Wmdpd29VR2hYQl9ZZEhnVGNYVHQ=",
    gpsId: "APNQkAHFEUGwEjILZr2y3CRSDTJaNU40oFqIZRaxV3C9LGtLmImotNGmGBUQ7NaCxctyuq9EGQPKmzQRCjGFI9QH0MEU5ybfSgF66_MsurPC0d1jGOmZQZgCnRVMY2DvRd7xU0Jh2d6iEcPDDwTB",
  },
  {
    id: "salao",
    label: "Salão",
    audience: "eventos",
    ik: "CAoSHENJQUJJaEFHeEFJZ0xlemlTdmNUZnhEYkxkQjQ=",
    gpsId: "APNQkAEm_9PERJFRO0nCJrmRihKuITJVnfWE2taMu48Wj5LntCaXfPQpTPt9Ji-vYoW_mr-t6zaoENk2erD3W7o7H5-eopusgzsj8MhXC4g6w38kqjOoOKJ6p9KAj5AD8yDv53nSvuediw3Eh6g",
  },
  {
    id: "salao-ii",
    label: "Salão II",
    audience: "eventos",
    ik: "CAoSHENJQUJJaENSQzJVSWl1cDBCOUgybXFvZjVaZGQ=",
    gpsId: "APNQkAEru60PV-CaqL8mBq58BRszYtRRGXa6g29-Vi3B4V5maORvC773giSNZ66x-hXMdZpHFy-46PbGLhyGm4hrV3v5IfReQvkFo-fkSyYZ0KIpz269Mo7PHc9POk6VSOaPNFlITsL1u3IaDyg",
  },
  {
    id: "entrada",
    label: "Entrada",
    audience: "eventos",
    ik: "CAoSF0NJSE0wb2dLRUlDQWdJRExoNHJEMGdF",
    gpsId: "APNQkAGDdyqEXbhm8vbJ_WgP7OXkWCAVdIbe5Wl9IWxN9zQiiqiPEcL_Kvoqfu8A7xQHl9_IOWY-QFTf2i8D86Iq6lmSr-v6Q-_5TqjtDSRxCMHmWpm4YDqBrb6POU2V5tkYoeu5DEa2",
  },
  {
    id: "cozinha",
    label: "Cozinha",
    audience: "eventos",
    ik: "CAoSHENJQUJJaEIzYmR5WjBQLTJwNC1xa083a3VUT0w=",
    gpsId: "APNQkAHPJaQBcxRCEQikdRX2iJO8zgzRYVNBWHV8Sg0CoB7YShCU2c8oea8CkwOpuu6ZJAJ3jz1pZ45BQJTLkDz7D6_rDYX_HWr92BfRpkyyA7GbE6ApNtebdiFixcOoBkt7asYHFzvZSMYmqzK6",
  },
  {
    id: "frente",
    label: "Frente",
    audience: "eventos",
    ik: "CAoSFkNJSE0wb2dLRUlDQWdJRExoX0xCWUE=",
    gpsId: "APNQkAHc2pVnkWsOHTSxG76j13CfKUF_dnBrWEu9hu8-15BulJ76ymdILgttMZ299a1guahrqUeMVHSwPL-hkg_z-tUazhex-q06fpi51RRotcp01N253VwY-mPQPRZcyn2F7yo9RVBT",
  },
  {
    id: "jc-kids",
    label: "JC Kids",
    audience: "kids",
    ik: "CAoSHENJQUJJaENqUmdVZkl2cUJzaVNCUkM3TEg3VTk=",
    gpsId: "APNQkAFB_g0HWc5DVZplGHRWQl3-wIJv63QxQOb2hwrnsHNuocw1m6Sn7IlkaKkra7Dgq0QXUfUwFr0HmvXLh5BtIvM9tEMEqEdT0mkzGE1jeaxOOeoVHqkZS01xLEyDW2gzSIp7OVkmPuNjwLAE",
  },
  {
    id: "jc-kids-ii",
    label: "JC Kids II",
    audience: "kids",
    ik: "CAoSHENJQUJJaEIxOVE5T081encyNS1DSVJ2ejg0UmM=",
    gpsId: "APNQkAFHEAAz7aTgU9vCaOvI-v2nL0ZOZLJ__6E_KLgbRyN9x2IIZs9l-GvwSkclYw-BxZUIunpxOJJiXmVWmQyuJqytDqnqPewx7Ary3pwWvdAQKqBc1w_LwhiQSGBOFNKZzVriXMmrVqHY2R0",
  },
];

function sourceUrl(gpsId) {
  return `https://lh3.googleusercontent.com/gps-cs-s/${gpsId}=w4096-h2048-k-no`;
}

function thumbSourceUrl(gpsId) {
  return `https://lh3.googleusercontent.com/gps-cs-s/${gpsId}=w480-h240-k-no`;
}

function jpegDimensions(buf) {
  for (let i = 0; i < buf.length - 8; i++) {
    if (buf[i] === 0xff && (buf[i + 1] === 0xc0 || buf[i + 1] === 0xc2)) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
  }
  return null;
}

async function download(url, dest) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, buf);
  return { bytes: buf.length, dim: jpegDimensions(buf) };
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  await fs.mkdir(thumbDir, { recursive: true });

  const tours = [];

  for (const item of OFFICIAL_TOURS) {
    const panoFile = `${item.id}.jpg`;
    const thumbFile = `${item.id}.jpg`;
    const src = sourceUrl(item.gpsId);
    const thumbSrc = thumbSourceUrl(item.gpsId);

    const { bytes, dim } = await download(src, path.join(outDir, panoFile));
    if (bytes < 80_000) throw new Error(`${panoFile} muito pequeno (${bytes} bytes)`);
    if (dim && Math.abs(dim.w / dim.h - 2) > 0.1) {
      console.warn(`⚠ ${item.label}: proporção ${dim.w}x${dim.h} (esperado ~2:1)`);
    }

    await download(thumbSrc, path.join(thumbDir, thumbFile));

    tours.push({
      id: item.id,
      label: item.label,
      audience: item.audience,
      ik: item.ik,
      gpsId: item.gpsId,
      sourceUrl: src,
      panorama: `/images/tour/${panoFile}`,
      thumb: `/images/tour/thumbs/${thumbFile}`,
      hint: `Arraste para explorar`,
      defaultYaw: 0,
      defaultPitch: 0,
      zoom: 50,
    });

    console.log(`✓ ${item.label} — ${(bytes / 1024).toFixed(0)} KB${dim ? ` (${dim.w}×${dim.h})` : ""}`);
  }

  const manifest = {
    scannedAt: new Date().toISOString(),
    source: "google-business-photosphere-official",
    googleFeatureId: GOOGLE_FEATURE_ID,
    tours,
    photos: [],
  };

  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(path.join(dataDir, "google-tours-manifest.json"), JSON.stringify(manifest, null, 2));

  console.log(`\n✓ ${tours.length} panoramas 360° reais`);
  console.log(`  Eventos: ${tours.filter((t) => t.audience === "eventos").length}`);
  console.log(`  Kids: ${tours.filter((t) => t.audience === "kids").length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
