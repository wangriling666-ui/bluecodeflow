// 全站共享数据：开源项目 + 博客
const PROJECTS = [
  { id:"flow-ui", name:"Flow-UI 组件库", en:"flow-ui", desc:"蓝色代码流风格的 React 组件库，60+ 原子组件，开箱即用的暗黑科技风。", lang:"TypeScript", langColor:"#3178c6", stars:3200, forks:412, tags:["前端","React","UI"], demo:"https://github.com/ant-design/ant-design", src:"https://github.com/ant-design/ant-design", cat:"frontend" },
  { id:"codeflow-engine", name:"CodeFlow 可视化引擎", en:"codeflow-engine", desc:"基于 Canvas/WebGL 的代码流动画与数据流可视化引擎，60fps 丝滑渲染。", lang:"JavaScript", langColor:"#f1e05a", stars:2100, forks:286, tags:["可视化","Canvas","开源"], demo:"https://github.com/facebook/react", src:"https://github.com/facebook/react", cat:"frontend" },
  { id:"vue-blue-admin", name:"Blue-Admin 中后台模板", en:"blue-admin", desc:"Vue3 + Vite + TS 企业级中后台模板，权限、Mock、图表一应俱全。", lang:"Vue", langColor:"#41b883", stars:1800, forks:350, tags:["Vue","Admin","模板"], demo:"https://github.com/vuejs/vue", src:"https://github.com/vuejs/vue", cat:"frontend" },
  { id:"tailwind-blue-kit", name:"Tailwind Blue Kit", en:"tailwind-blue-kit", desc:"深蓝霓虹风 Tailwind 工具包，含博客/作品站整套主题与动画。", lang:"CSS", langColor:"#563d7c", stars:950, forks:120, tags:["CSS","Tailwind"], demo:"https://github.com/tailwindlabs/tailwindcss", src:"https://github.com/tailwindlabs/tailwindcss", cat:"frontend" },
  { id:"nexus-api", name:"Nexus API 网关", en:"nexus-api-gateway", desc:"轻量 Node.js API 网关：限流、鉴权、聚合、日志追踪，开箱即用。", lang:"Node.js", langColor:"#68a063", stars:1600, forks:230, tags:["后端","Node","网关"], demo:"https://github.com/axios/axios", src:"https://github.com/axios/axios", cat:"backend" },
  { id:"vscode-blue-theme", name:"BlueFlow VSCode 主题", en:"vscode-blueflow", desc:"本书站同款蓝色代码流 VSCode 主题，护眼深蓝 + 霓虹高亮，10w+ 安装。", lang:"JSON", langColor:"#cbcb41", stars:780, forks:95, tags:["工具","VSCode","主题"], demo:"https://github.com/microsoft/vscode", src:"https://github.com/microsoft/vscode", cat:"tool" },
  { id:"langflow-chat", name:"LangFlow AI 问答助手", en:"langflow-chat", desc:"基于 LangChain + 向量库的本地知识库问答，支持流式输出与引用溯源。", lang:"Python", langColor:"#3572A5", stars:2400, forks:510, tags:["AI","LLM","RAG"], demo:"https://github.com/langchain-ai/langchain", src:"https://github.com/langchain-ai/langchain", cat:"ai" },
  { id:"sd-prompt-studio", name:"SD Prompt Studio", en:"sd-prompt-studio", desc:"Stable Diffusion 提示词工作台：翻译、权重调节、一键出图，设计师最爱。", lang:"Python", langColor:"#3572A5", stars:1320, forks:198, tags:["AI","AIGC","工具"], demo:"https://github.com/AUTOMATIC1111/stable-diffusion-webui", src:"https://github.com/AUTOMATIC1111/stable-diffusion-webui", cat:"ai" },
];

const POSTS = [
  { id:"p1", title:"从 0 打造蓝色代码流博客主题：CSS 变量 + Canvas 粒子全解析", date:"2026-09-28", read:"8 min", cat:"前端", desc:"深蓝底、霓虹线、代码雨背景怎么做才不卡？本文拆解本博客的完整实现，含 60fps 优化技巧。", tags:["CSS","Canvas","性能"] },
  { id:"p2", title:"React 19 实战：我用 3 天重构了 Flow-UI 组件库", date:"2026-09-10", read:"12 min", cat:"开源", desc:"Server Component、use()、Actions 全用上，包体积 -40%，记录一次激进的重构之旅。", tags:["React","开源"] },
  { id:"p3", title:"RAG 入门：LangChain + 本地向量库打造你的 AI 第二大脑", date:"2026-08-22", read:"15 min", cat:"AI", desc:"从文档切分到检索排序，手把手带你做一个可溯源的本地知识库问答助手。", tags:["LangChain","AI"] },
  { id:"p4", title:"Node.js API 网关性能优化：从 800 到 8000 QPS", date:"2026-08-05", read:"10 min", cat:"后端", desc:"连接池、缓存分层、限流熔断，Nexus 网关的压测调优全记录。", tags:["Node.js","性能"] },
  { id:"p5", title:"VSCode 主题配色科学：为什么程序员都爱深蓝色？", date:"2026-07-18", read:"6 min", cat:"工具", desc:"对比度、色温、护眼，从色彩心理学聊聊 BlueFlow 主题的配色公式。", tags:["VSCode","设计"] },
  { id:"p6", title:"开源 1 年涨 12k Star，我做对了这 5 件事", date:"2026-06-30", read:"9 min", cat:"开源", desc:"README、Demo 站、Issue 模板、社区运营……开源冷启动的真实经验分享。", tags:["开源","成长"] },
];
