// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', // API默认请求地址
  
  // Important page_id！！！
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  
  // 核心修改：将默认主题改为 'simple' 以激活下方配置
  THEME: process.env.NEXT_PUBLIC_THEME || 'simple', 
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, 

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, // 更新缓存间隔 单位(秒)
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto']
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], 

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'NotionNext', // 您的昵称
  BIO: process.env.NEXT_PUBLIC_BIO || '一个跑马拉松的程序员🏃', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://notion.z17code.top', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客', // 网站关键词
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', 
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', 
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', 

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, 

  // 其它复杂配置拆分引入
  ...require('./conf/comment.config'), 
  ...require('./conf/contact.config'), 
  ...require('./conf/post.config'), 
  ...require('./conf/analytics.config'), 
  ...require('./conf/image.config'), 
  ...require('./conf/font.config'), 
  ...require('./conf/right-click-menu'), 
  ...require('./conf/code.config'), 
  ...require('./conf/animation.config'), 
  ...require('./conf/widget.config'), 
  ...require('./conf/ad.config'), 
  ...require('./conf/plugin.config'), 
  ...require('./conf/performance.config'), 

  // 高级用法
  ...require('./conf/layout-map.config'), 
  ...require('./conf/notion.config'), 
  ...require('./conf/dev.config'), 

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], 
  CUSTOM_EXTERNAL_CSS: [''], 

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, 

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, 

  // 侧栏布局 是否反转
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 欢迎语打字效果
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，我是一个软工大学生, Hi，我是一个马拉松跑者,Hi，我是一个程序员,欢迎来到我的博客🎉',

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false,

  // ==========================================
  // 以下为成功并入的 SIMPLE 主题专属配置
  // ==========================================
  SIMPLE_LOGO_IMG: '/Logo.webp',
  SIMPLE_TOP_BAR: true, // 显示顶栏
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  SIMPLE_LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>编程爱好者<br/>/互联网从业者<br/>/知识分享博主</div>',

  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',
  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false, // 文章列表是否插入广告
  SIMPLE_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || false, // 是否展示博客封面
  SIMPLE_ARTICLE_RECOMMEND_POSTS: process.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS || true, // 文章详情底部显示推荐

  // 菜单配置
  SIMPLE_MENU_CATEGORY: true, // 显示分类
  SIMPLE_MENU_TAG: true, // 显示标签
  SIMPLE_MENU_ARCHIVE: true, // 显示归档
  SIMPLE_MENU_SEARCH: true // 显示搜索
}

module.exports = BLOG
