export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  category: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "What Is Naturopathy? A Simple Introduction",
    excerpt:
      "Naturopathy is not about supplements or strict diets. It's about supporting your body's natural healing intelligence through elements like mud, water, and sun.",
    date: "October 15, 2023",
    author: "Dr. Sharma",
    slug: "what-is-naturopathy",
    category: "Naturopathy",
    image: "/images/new/blog-naturopathy.avif",
    content: [
      "Naturopathy is a gentle, whole-body approach to healing that works with the body rather than against it. Instead of forcing symptoms to disappear, it focuses on creating conditions where the body can restore balance naturally.",
      "At Hillton, naturopathy is often the first step for people who want to feel better without relying only on aggressive treatments. The philosophy is simple: support digestion, improve circulation, reduce stress, and allow the body to recover at its own pace.",
      "Common tools include mud therapy, hydrotherapy, diet guidance, massage, sunlight exposure, and breathing practices. When these methods are chosen carefully, they can create meaningful improvements in energy, sleep, digestion, and overall comfort.",
      "The beauty of naturopathy is that it is practical. It can be woven into everyday life through simple routines, nourishing food choices, and therapy sessions that are tailored to your unique needs.",
    ],
  },
  {
    title: "Panchakarma Explained Without the Jargon",
    excerpt:
      "Panchakarma sounds complex, but it's essentially a gentle detox process that clears toxins and resets your system using oil and heat therapies.",
    date: "October 22, 2023",
    author: "Dr. Gupta",
    slug: "panchakarma-basics",
    category: "Ayurveda",
    image: "/images/new/blog-panchakarma.avif",
    content: [
      "Panchakarma is often described as Ayurveda’s deepest cleansing process. In simple terms, it is a structured way of helping the body remove accumulated waste, reset digestion, and restore balance.",
      "The process usually begins with preparation, where the body is gently warmed and loosened through oil massage, steam, and other supportive therapies. This makes the later cleansing phases more effective and comfortable.",
      "Depending on the individual, Panchakarma may include therapies such as herbal oil massage, steam, enemas, nasal treatment, or purgation. These are not random treatments; they are selected based on the person’s constitution, symptoms, and goals.",
      "The long-term benefit is often better energy, improved digestion, lighter emotional states, and a stronger sense of clarity. It is a deeply restorative experience when done with proper guidance.",
    ],
  },
  {
    title: "Hydrotherapy for Pain Relief",
    excerpt:
      "Why water is one of the most powerful tools for pain relief and circulation, and how therapeutic baths and packs can help joint issues.",
    date: "November 05, 2023",
    author: "Hillton Team",
    slug: "hydrotherapy-pain-relief",
    category: "Hydrotherapy",
    image: "/images/new/blog-hydrotherapy.avif",
    content: [
      "Hydrotherapy uses the physical properties of water to support healing. Heat relaxes muscles, cold can reduce swelling, and contrast therapies stimulate circulation. This makes water a remarkably versatile tool in pain management and recovery.",
      "For people with stiff joints, muscle tension, or stress-related body discomfort, hydrotherapy offers an approach that feels soothing while still being therapeutic. It is especially helpful when movement is limited or other forms of therapy feel too intense.",
      "A session may involve a warm bath, packs, compresses, or a carefully guided water-based routine. The treatment is typically gentle, calming, and highly adaptable to the individual’s condition.",
      "Many people find that hydrotherapy helps them feel looser, lighter, and more comfortable very quickly, which can make the rest of their recovery plan feel more manageable.",
    ],
  },
  {
    title: "Yoga for Stress & Anxiety",
    excerpt:
      "Simple yoga postures and breathing techniques that you can do daily to calm the nervous system and reduce anxiety naturally.",
    date: "November 12, 2023",
    author: "Dr. Sharma",
    slug: "yoga-for-stress",
    category: "Wellness",
    image: "/images/new/blog-yoga.avif",
    content: [
      "Stress often settles in the body before it becomes obvious in the mind. Tight shoulders, shallow breathing, restless sleep, and racing thoughts are all common signals that the nervous system needs support.",
      "Yoga offers a simple, structured way to calm the body and mind. Gentle postures can release tension while breathing practices help slow the pace of mental activity.",
      "Even a short daily routine can make a difference. The aim is not perfection but consistency. A few minutes of breathing, stretching, and mindful movement can reduce anxiety and improve emotional steadiness over time.",
      "At Hillton, we often combine yoga therapy with lifestyle guidance so the benefits can extend beyond the therapy room and into daily life.",
    ],
  },
  {
    title: "Mud Therapy Benefits for Skin & Joints",
    excerpt:
      "Discover how earth therapy can draw out toxins, cool the body, and improve skin health. A core practice in natural healing.",
    date: "November 19, 2023",
    author: "Hillton Team",
    slug: "mud-therapy-benefits",
    category: "Naturopathy",
    image: "/images/new/blog-mud-therapy.avif",
    content: [
      "Mud therapy is one of the oldest healing practices in nature-based medicine. Applied as a pack or full-body treatment, it can help cool the body, support circulation, and calm inflammation.",
      "The benefits are especially helpful for people dealing with heat-related discomfort, skin irritation, joint swelling, or general fatigue. Mud acts as a soothing medium that draws out excess heat and supports the body’s natural regulation processes.",
      "In many cases, mud therapy is used alongside massage, hydrotherapy, or diet therapy to create a deeper sense of relief. It is simple, grounding, and often surprisingly effective.",
      "When offered thoughtfully, it becomes not just a treatment but a restorative ritual that helps the body feel cared for from the outside in.",
    ],
  },
  {
    title: "Daily Detox Rituals You Can Do at Home",
    excerpt:
      "You don't need a retreat to detox. Small daily habits like tongue scraping and warm water can make a huge difference to your health.",
    date: "November 26, 2023",
    author: "Dr. Gupta",
    slug: "daily-detox-rituals",
    category: "Wellness",
    image: "/images/new/detox-ritual.avif",
    content: [
      "Detox does not have to mean a dramatic reset or a difficult retreat. In many cases, the most effective support comes from simple, consistent rituals that are realistic to maintain.",
      "A few habits such as warm water in the morning, a mindful meal schedule, lighter evening meals, regular movement, and restful sleep can make a meaningful difference in how the body feels.",
      "A simple home schedule can also support the digestive system and reduce that heavy, sluggish feeling that often comes from modern lifestyles. The goal is not to be extreme, but to make healthy habits easier to sustain.",
      "These small rituals create a calmer rhythm in the body and mind, which is often the first step toward real, lasting wellbeing.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
