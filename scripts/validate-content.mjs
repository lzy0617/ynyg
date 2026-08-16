import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { venueContent } from "../content/venue.js";
import { industryContent } from "../content/industry.js";
import { volunteerContent } from "../content/volunteer.js";
import { homeContent } from "../content/home.js";
import { validateMediaEntries } from "../src/lib/content-validation.js";

const release = process.argv.includes("--release");
const allMedia = [
  homeContent.heroMedia,
  ...Object.values(homeContent.topicMedia),
  ...venueContent.sections.flatMap((section) => section.media),
  ...venueContent.gallery,
  ...industryContent.companies.flatMap((company) => company.media),
  ...volunteerContent.sections.flatMap((section) => section.media),
  ...volunteerContent.gallery
];

const { errors } = validateMediaEntries(allMedia);

for (const item of allMedia) {
  if (item.src && !existsSync(resolve(process.cwd(), item.src.replace(/^\//, "")))) {
    errors.push(`${item.id}: file does not exist: ${item.src}`);
  }
  if (release && item.visibility === "public" && !item.src && item.featured) {
    errors.push(`${item.id}: featured release slot has no src`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(release ? "release content validation passed" : "content validation passed");
