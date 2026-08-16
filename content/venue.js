import { makeMediaSlots } from "../src/lib/media.js";

export const venueContent = {
  article: { status: "pending", url: "" },
  intro: "",
  sections: [
    { key: "teyuan", navTitle: "特园", title: "特园", paragraphs: [], media: makeMediaSlots("venue-teyuan", 4) },
    { key: "guiyuan", navTitle: "桂园", title: "桂园", paragraphs: [], media: makeMediaSlots("venue-guiyuan", 4) },
    { key: "zhougongguan", navTitle: "周公馆", title: "周公馆", paragraphs: [], media: makeMediaSlots("venue-zhougongguan", 4) },
    { key: "hongyan", navTitle: "红岩纪念馆", title: "红岩革命纪念馆", paragraphs: [], media: makeMediaSlots("venue-hongyan", 4) },
    { key: "geleshan", navTitle: "歌乐山纪念馆", title: "歌乐山革命纪念馆", paragraphs: [], media: makeMediaSlots("venue-geleshan", 4) }
  ],
  gallery: makeMediaSlots("venue-gallery", 10, "gallery")
};
