import { makeMediaSlots } from "../src/lib/media.js";

export const homeContent = {
  heroMedia: {
    ...makeMediaSlots("home-hero", 1, "wide")[0],
    src: "/assets/images/home/home.webp",
    alt: "红岩映山城，赤心赴家园",
    caption: ""
  },
  topicMedia: {
    venue: {
      ...makeMediaSlots("home-topic-venue", 1, "wide")[0],
      src: "/assets/images/venue/659A1901.webp",
    },
    industry: {
      ...makeMediaSlots("home-topic-industry", 1, "wide")[0],
      src: "/assets/images/industry/csscmeeting.webp",
    },
    volunteer: {
      ...makeMediaSlots("home-topic-volunteer", 1, "wide")[0],
      src: "/assets/images/volunteer/659A2483.webp",
    }
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
