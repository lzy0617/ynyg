import { makeMediaSlots } from "../src/lib/media.js";

const venueTeyuanSlots = makeMediaSlots("venue-teyuan", 4);
const venueZhouGongGuanSlots = makeMediaSlots("venue-zhougongguan", 3);
const venueGuiyuanSlots = makeMediaSlots("venue-guiyuan", 4);
const venueHongYanSlots = makeMediaSlots("venue-hongyan", 4);
const venueGeLeShanSlots = makeMediaSlots("venue-geleshan", 4);
const venueGallerySlots = makeMediaSlots("venue-gallery", 10, "gallery");

export const venueContent = {
  article: {
    status: "published",
    url: "https://mp.weixin.qq.com/s/bu5oQ_fTI93BOWftP_WrQA"
  },
  intro: `重庆，是一座在战火中淬炼、在红岩精神中铸魂、在科技强国征程中加速奔跑的英雄之城。2026年7月，竺可桢学院“红韵山城承使命，精工报国践初心”社会实践团队，跨越千里山海，奔赴山城重庆。团队循着山城百年红色足迹开展实地实践，走访抗战遗址、红岩旧址追忆峥嵘岁月。

山城长风掠过旧墙砖瓦，无声诉说着跨越百年的热血过往。

接下来，让我们共同走进这段寻访红色印记的山城之行。`,
  sections: [
    {
      key: "teyuan",
      navTitle: "特园",
      title: "特园",
      paragraphs: [
        `特园被誉为抗战时期的“民主之家”，是中共中央南方局联络各民主党派、爱国人士的重要场所。`,
        `无数进步人士在此共商救国大计，推动抗日民族统一战线不断巩固壮大。我们也深有体会，在民族危难面前，正是靠着广泛团结各方力量，才能凝聚起共御外侮的磅礴合力。`
      ],
      media: [
        {
          ...venueTeyuanSlots[0],
          src: "/assets/images/venue/659A1891.webp",
          alt: "特园合影"
        },
        {
          ...venueTeyuanSlots[1],
          src: "/assets/images/venue/659A1893.webp",
          alt: "特园展品"
        },
        {
          ...venueTeyuanSlots[2],
          src: "/assets/images/venue/659A1896.webp",
          alt: "特园 小小讲解员"
        },
        {
          ...venueTeyuanSlots[3],
          src: "/assets/images/venue/659A1914.webp",
          alt: "实践团成员在特园参观"
        },
      ]
    },
    {
      key: "zhougongguan",
      navTitle: "周公馆",
      title: "周公馆",
      paragraphs: [
        `周公馆是中共中央南方局秘密联络据点，承载复杂环境下的统战工作。`,
        `屋内陈设朴素简单，空间狭小局促。一桌一椅皆是寻常，没有多余的器物装饰。`,
        `国统区白色恐怖密布，监视重重，周恩来、邓颖超等革命家于危局中开展统战联络与舆论宣传，于暗流之中坚守立场、巧妙周旋。先辈们矢志不渝的坚定信仰，令我们深深敬佩。`
      ],
      media: [
        {
          ...venueZhouGongGuanSlots[0],
          src: "/assets/images/venue/659A1922.webp",
          alt: "周公馆"
        },
        {
          ...venueZhouGongGuanSlots[1],
          src: "/assets/images/venue/659A1923.webp",
          alt: "实践团成员在周公馆参观"
        },
        {
          ...venueZhouGongGuanSlots[2],
          src: "/assets/images/venue/659A1921.webp",
          alt: "周公馆卧室展览"
        },
      ]
    },
    {
      key: "guiyuan",
      navTitle: "桂园",
      title: "桂园",
      paragraphs: [
        `桂园原为张治中的私人公馆，重庆谈判期间被借作毛泽东会客与谈判活动的场所，著名的《双十协定》便在此签署。抗战胜利后，国共双方在此展开磋商，镌刻下共产党员为停止内战、谋求和平建国作出的不懈努力。`,
        `庭院之内，谈判器物尚存，映照出先辈以民族大义为重的博大胸襟，更警醒我辈和平来之不易。`
      ],
      media: [
        {
          ...venueGuiyuanSlots[0],
          src: "/assets/images/venue/gyhy.webp",
          alt: "桂园合影"
        },
        {
          ...venueGuiyuanSlots[1],
          src: "/assets/images/venue/659A1954.webp",
          alt: "实践团成员在桂园参观"
        },
        {
          ...venueGuiyuanSlots[2],
          src: "/assets/images/venue/659A1945.webp",
          alt: "桂园 讲解员"
        },
        {
          ...venueGuiyuanSlots[3],
          src: "/assets/images/venue/659A1972.webp",
          alt: "实践团成员在桂园听讲解"
        },
      ]
    },
    {
      key: "hongyan",
      navTitle: "红岩纪念馆",
      title: "红岩革命纪念馆",
      paragraphs: [
        `团队成员到访红岩革命纪念馆，回望中共中央南方局在国统区艰苦斗争的岁月。`,
        `红岩村原为农场，后变为八路军驻重庆办事处公开驻地，也是中共中央南方局的秘密机关所在地。1939-1946年间，以周恩来为书记的中共中央南方局于此统筹国统区党的工作，开展统战联络、舆论宣传，领导南方多地党组织坚持团结抗战。`,
        `红岩精神诞生于国统区艰苦复杂的斗争环境，是中共中央南方局革命实践淬炼而成的宝贵精神财富。透过旧址遗存与历史往事，我们看到那坚如磐石的理想信念、和衷共济的爱国情怀、百折不挠的斗争意志与清正高洁的浩然正气。`,
        `红岩精神，永放光芒。`
      ],
      media: [
        {
          ...venueHongYanSlots[0],
          src: "/assets/images/venue/659A2003.webp",
          alt: "红岩革命纪念馆前合影"
        },
        {
          ...venueHongYanSlots[1],
          src: "/assets/images/venue/659A1981.webp",
          alt: "实践团成员在红岩革命纪念馆参观"
        },
        {
          ...venueHongYanSlots[2],
          src: "/assets/images/venue/659A1978.webp",
          alt: "红岩革命纪念馆展览"
        },
        {
          ...venueHongYanSlots[3],
          src: "/assets/images/venue/659A1987.webp",
          alt: "红岩精神，永放光芒"
        },
      ]
    },
    {
      key: "geleshan",
      navTitle: "歌乐山纪念馆",
      title: "歌乐山革命纪念馆",
      paragraphs: [
        `歌乐山革命纪念馆依托原“中美合作所”集中营旧址建成，包含白公馆、渣滓洞等监狱遗址。纪念馆通过实物、史料还原革命志士遭受残酷迫害却依旧坚守气节，以及“一一・二七”大屠杀的悲壮史实。`,
        `白公馆原为军阀白驹的私人别墅，后被改造为国民党特务监狱。这里曾关押大批共产党员与爱国进步人士。狱中环境阴暗压抑，革命者在严密监视下坚持斗争，传递消息、鼓舞同伴。众多英烈在此遭受迫害，不少志士牺牲于此。`,
        `伫立在囚室旧址前，一束束鲜花静静摆放于此。这是后世无声的致敬，替万千后人回应这片浸满热血的土地。尽管历史已为灰烬，此地再无轰轰烈烈的呐喊。但深处的余温，却穿过岁月，换得今日山河无恙。一寸山河一寸心，一捧热土一捧魂。`
      ],
      media: [
        {
          ...venueGeLeShanSlots[0],
          src: "/assets/images/venue/14.webp",
          alt: "歌乐山革命纪念馆前合影"
        },
        {
          ...venueGeLeShanSlots[1],
          src: "/assets/images/venue/5.webp",
          alt: "重庆歌乐山烈士陵园"
        },
        {
          ...venueGeLeShanSlots[2],
          src: "/assets/images/venue/18.webp",
          alt: "人们献上鲜花"
        },
        {
          ...venueGeLeShanSlots[3],
          src: "/assets/images/venue/20.webp",
          alt: "墙上的游客留言卡"
        },
      ]
    }
  ],
  afterSections: [
    `从特园、周公馆、桂园里统战同心、和谈寻路的艰难求索，到红岩村红岩革命纪念馆中红岩驻地、星火长明的坚守奋斗，再到白公馆、歌乐山革命纪念馆内歌乐忠魂、信仰不朽的壮烈悲歌。`,
    `一路寻访，回望那段风雨如晦的岁月，既有为和平奔走的不懈探索，也有绝境之中宁死不屈的赤诚担当。`,
    `寻访途中，我们发现很多红色场馆都有小小志愿者。他们有的才刚上小学，却已经有了好几年的讲解经历。宽大的志愿套服垂落在孩童身上，仿佛是偷穿上大人衣衫，可谈起家国历史，他们神态沉静、娓娓道来、语句铿锵，有着远超年龄的从容与气度。炎炎盛夏，当同龄人享受假期欢愉，他们选择站在展厅之中，以稚嫩嗓音诉说峥嵘过往。`,
    `这一幕深深触动了我们。红色传承从不是书本上空洞的词语，而是一场跨越时空的接力。先辈以血肉播撒信仰火种，而我们接过炬火，星火相传。作为新时代青年，缅怀历史不应止于感动与感慨。读懂来路，更要接过传承的火炬，把红岩精神内化于心，向外发声、躬身实践，让跨越百年的信仰，在一代代人的接续讲述中生生不息。`,
    `山河静默，英魂永存。历史硝烟已然远去，但红岩精神代代相传。缅怀不是回望苦难，而是汲取前行力量，我辈当铭记来路初心，传承红岩风骨，勇担时代使命。`
  ],
  gallery: [
    {
      ...venueGallerySlots[0],
      src: "/assets/images/venue/659A1892.webp",
      alt: "展品"
    },
    {
      ...venueGallerySlots[1],
      src: "/assets/images/venue/659A1894.webp",
      alt: "展品"
    },
    {
      ...venueGallerySlots[2],
      src: "/assets/images/venue/659A1895.webp",
      alt: "特园 小小讲解员"
    },
    {
      ...venueGallerySlots[3],
      src: "/assets/images/venue/659A1897.webp",
      alt: "实践团成员在特园参观"
    },
    {
      ...venueGallerySlots[4],
      src: "/assets/images/venue/659A1922.webp",
      alt: "周公馆"
    },
    {
      ...venueGallerySlots[5],
      src: "/assets/images/venue/659A1908.webp",
      alt: "还原布设"
    },
    {
      ...venueGallerySlots[6],
      src: "/assets/images/venue/659A1980.webp",
      alt: "展品"
    },
    {
      ...venueGallerySlots[7],
      src: "/assets/images/venue/659A1983.webp",
      alt: "千秋红岩"
    },
    {
      ...venueGallerySlots[8],
      src: "/assets/images/venue/659A1986.webp",
      alt: "展品"
    },
    {
      ...venueGallerySlots[9],
      src: "/assets/images/venue/659A1988.webp",
      alt: "留言卡"
    }
  ]
};
