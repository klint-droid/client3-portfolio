export interface VideoProject {
  id: string;
  title: string;
  category: 'UGC Ads' | 'Product Videos' | 'AI Avatars' | 'Short-Form';
  timecode: string;
  description: string;
  toolsUsed: string[];
  // If videoUrl is provided, it will render an iframe or HTML5 video.
  // Supports Google Drive preview links: "https://drive.google.com/file/d/YOUR_FILE_ID/preview"
  // or direct MP4 links, or YouTube embed URLs.
  videoUrl?: string;
  thumbnailUrl?: string;
  aspectRatio?: '9/16' | '16/9';
  tag?: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  iconName: string;
  badge?: string;
  color?: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  timecode: string;
}

export const PERSONAL_INFO = {
  name: "Christian James Amar",
  role: "AI Video Specialist & E-commerce UGC",
  bioHeadline: "High-converting AI video ads & authentic E-commerce UGC.",
  aboutParagraphs: [
    "Hi, I’m Christian James Amar, an experienced AI Video Specialist specializing in E-commerce UGC. With over a year of experience in video production and digital advertising, I create engaging AI-powered UGC ads, product videos, and short-form content that help brands capture attention and showcase their products effectively.",
    "I combine AI video generation, creative storytelling, and strategic visuals to produce content that feels authentic, engaging, and aligned with e-commerce marketing goals. My focus is helping brands stand out, connect with their audience, and turn creative ideas into high-quality video content that drives results."
  ],
  stats: [
    { label: "Experience", value: "1+ Year", note: "Video production & digital ads" },
    { label: "Focus", value: "E-Com UGC", note: "High-converting short-form" },
    { label: "Pipeline", value: "End-to-End", note: "Script, generate, voice & edit" },
    { label: "Pacing", value: "Retention First", note: "Optimized for TikTok & Meta ads" }
  ],
  contact: {
    whatsappNumber: "09165341310",
    whatsappUrl: "https://wa.me/639165341310",
    email: "christianjames0131@gmail.com",
    location: "Philippines / Global Remote",
    availability: "Available for Projects & Retainers"
  }
};

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01 / IDEA",
    title: "Market & Hook Concept",
    tagline: "Research first, generate second.",
    description: "Deep dive into the e-commerce brand, target buyer avatars, and viral platform trends to lock down scroll-stopping hook angles before writing a single line.",
    tools: ["Audience Research", "Trend Analysis", "Claude"],
    timecode: "00:00:05"
  },
  {
    step: "02 / SCRIPT",
    title: "High-Retention Scripting",
    tagline: "Built for conversions.",
    description: "Drafting punchy, persuasive scripts crafted for TikTok, Instagram Reels, and Meta ads with problem-agitate-solve structures and visual cue timing.",
    tools: ["ChatGPT", "Claude", "Storyboarding"],
    timecode: "00:00:15"
  },
  {
    step: "03 / GENERATE",
    title: "AI Video Generation",
    tagline: "Ultra-realistic visuals.",
    description: "Directing cinematic AI scenes, realistic product interactions, character expressions, and camera moves with precise prompt engineering.",
    tools: ["Higgsfield", "Google Flow", "HeyGen"],
    timecode: "00:00:25"
  },
  {
    step: "04 / VOICE",
    title: "Voice & Audio Synthesis",
    tagline: "Authentic UGC delivery.",
    description: "Generating hyper-realistic AI voiceovers with natural cadence, tone inflection, and emotional resonance timed seamlessly to visual transitions.",
    tools: ["Eleven Labs", "Voice Tuning"],
    timecode: "00:00:30"
  },
  {
    step: "05 / EDIT",
    title: "Assembly & Dynamic Cut",
    tagline: "Pacing that keeps viewers watching.",
    description: "Tightening every cut, syncing sound design, applying kinetic captions, visual zooms, color polish, and platform-optimized exporting.",
    tools: ["CapCut", "Post-Production", "Color/FX"],
    timecode: "00:00:45"
  }
];

export const TOOLS_LIST: ToolItem[] = [
  {
    name: "CapCut",
    category: "Editing & Post-Production",
    description: "Fast-paced assembly, kinetic captions, seamless visual transitions, sound design, and TikTok/Reels native pacing.",
    iconName: "Scissors",
    badge: "Assembly & Sync",
    color: "#00F2FE"
  },
  {
    name: "Higgsfield",
    category: "AI Video & Motion",
    description: "High-fidelity AI video generation with realistic human movement, dynamic camera dynamics, and fluid scene continuity.",
    iconName: "Sparkles",
    badge: "Motion Physics",
    color: "#8B5CF6"
  },
  {
    name: "Google Flow",
    category: "Scene Generation",
    description: "Cinematic AI video rendering, prompt orchestration, and scalable scene synthesis for commercial-grade aesthetics.",
    iconName: "Clapperboard",
    badge: "Cinematic Gen",
    color: "#3B82F6"
  },
  {
    name: "Claude",
    category: "Logic & Copywriting",
    description: "Structuring high-converting direct response UGC scripts, psychographic hooks, objection handling, and creative angles.",
    iconName: "Cpu",
    badge: "Ad Copy & Logic",
    color: "#D97706"
  },
  {
    name: "Eleven Labs",
    category: "Voice & Audio Synthesis",
    description: "Studio-grade AI voiceovers with emotional depth, regional dialect accuracy, and natural conversational cadence.",
    iconName: "Mic",
    badge: "Human Voice AI",
    color: "#10B981"
  },
  {
    name: "Chat GPT",
    category: "Ideation & Prompting",
    description: "Brainstorming viral hooks, competitor gap research, iterative prompt engineering, and creative storyboard generation.",
    iconName: "MessageSquare",
    badge: "Prompt Engineering",
    color: "#10A37F"
  },
  {
    name: "HeyGen",
    category: "AI Avatars & UGC",
    description: "Photorealistic AI avatars and digital presenters for authentic customer-facing product reviews, demos, and UGC ad creative.",
    iconName: "UserCheck",
    badge: "Spokesperson UGC",
    color: "#EC4899"
  }
];

/**
 * VIDEO TEMPLATES:
 * When you receive your video links, simply update the videoUrl or videoId below!
 * Supports:
 * - Google Drive preview: "https://drive.google.com/file/d/YOUR_ID/preview"
 * - Direct MP4 files
 * - YouTube or Vimeo iframe links
 */
export const INITIAL_VIDEOS: VideoProject[] = [
  {
    id: "v-01",
    title: "E-Commerce Product UGC Ad",
    category: "UGC Ads",
    timecode: "00:24",
    description: "High-hook UGC ad showcasing product benefits, unboxing angle, and direct response call to action for Meta & TikTok.",
    toolsUsed: ["CapCut", "Higgsfield", "Eleven Labs"],
    aspectRatio: "9/16",
    tag: "High Conversion"
  },
  {
    id: "v-02",
    title: "AI Spokesperson Review",
    category: "AI Avatars",
    timecode: "00:18",
    description: "Hyper-realistic AI avatar presenting customer review testimonial with natural conversational delivery and product close-ups.",
    toolsUsed: ["HeyGen", "Claude", "CapCut"],
    aspectRatio: "9/16",
    tag: "Authentic UGC"
  },
  {
    id: "v-03",
    title: "Cinematic Product Feature",
    category: "Product Videos",
    timecode: "00:30",
    description: "Clean macro product shots with 3D-like depth, showcasing ingredients, craftsmanship, and aesthetic brand value.",
    toolsUsed: ["Google Flow", "ChatGPT", "CapCut"],
    aspectRatio: "9/16",
    tag: "Brand Aesthetic"
  },
  {
    id: "v-04",
    title: "Problem vs Solution Hook Ad",
    category: "UGC Ads",
    timecode: "00:22",
    description: "First-3-second retention hook addressing a core customer pain point followed by immediate product demonstration.",
    toolsUsed: ["Higgsfield", "Eleven Labs", "CapCut"],
    aspectRatio: "9/16",
    tag: "TikTok / Reels"
  },
  {
    id: "v-05",
    title: "Short-Form Viral Story Ad",
    category: "Short-Form",
    timecode: "00:28",
    description: "Story-driven narrative combining captivating AI visuals with an engaging soundscape tailored to maximize watch time.",
    toolsUsed: ["Google Flow", "Claude", "Eleven Labs"],
    aspectRatio: "9/16",
    tag: "Viral Retention"
  },
  {
    id: "v-06",
    title: "Multi-Angle AI Demo Showcase",
    category: "Product Videos",
    timecode: "00:20",
    description: "Multi-scene dynamic showcase highlighting key product attributes, texture, and real-world lifestyle application.",
    toolsUsed: ["HeyGen", "Higgsfield", "CapCut"],
    aspectRatio: "9/16",
    tag: "Social Commerce"
  }
];
