import { makeMediaSlots } from "../src/lib/media.js";

export const homeContent = {
  heroMedia: makeMediaSlots("home-hero", 1, "wide")[0],
  topicMedia: {
    venue: makeMediaSlots("home-topic-venue", 1, "wide")[0],
    industry: makeMediaSlots("home-topic-industry", 1, "wide")[0],
    volunteer: makeMediaSlots("home-topic-volunteer", 1, "wide")[0]
  },
  videos: [
    {
      id: "practice-film",
      title: "实践纪实片",
      description: "聚焦实践团在重庆的企业参访、红色场馆实践与志愿服务。",
      cover: "",
      url: "",
      status: "pending",
      priority: "primary"
    },
    {
      id: "city-film",
      title: "山城印象",
      description: "聚焦重庆城市风貌、地方文化、人文特色与城市精神。",
      cover: "",
      url: "",
      status: "pending",
      priority: "secondary"
    }
  ],
  documents: []
};
