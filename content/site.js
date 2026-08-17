export const siteConfig = {
  project: {
    theme: "红韵山城承使命，精工报国践初心",
    teamName: "浙江大学竺可桢学院赴重庆社会实践团",
    displayTitle: "重庆社会实践成果展示",
    dates: "2026.7.20–2026.7.27",
    location: "重庆"
  },
  topics: [
    {
      key: "venue",
      title: "历史解码",
      href: "/venue/",
      description: "特园 · 桂园 · 周公馆 · 红岩 · 歌乐山"
    },
    {
      key: "industry",
      title: "精工报国",
      href: "/industry/",
      description: "重庆建设工业集团·中船（重庆）装备公司"
    },
    {
      key: "volunteer",
      title: "青年行动",
      href: "/volunteer/",
      description: "慰问老兵 · 深度访谈 · 文艺献礼"
    }
  ],
  navigation: [
    { key: "home", title: "首页", href: "/" },
    { key: "venue", titleFromTopic: "venue", href: "/venue/" },
    { key: "industry", titleFromTopic: "industry", href: "/industry/" },
    { key: "volunteer", titleFromTopic: "volunteer", href: "/volunteer/" },
    { key: "about", title: "关于实践", href: "/#about" }
  ]
};

export function topicByKey(key) {
  return siteConfig.topics.find((topic) => topic.key === key);
}

export function navigationItems() {
  return siteConfig.navigation.map((item) => ({
    ...item,
    title: item.titleFromTopic ? topicByKey(item.titleFromTopic).title : item.title
  }));
}
