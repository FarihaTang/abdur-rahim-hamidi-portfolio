module.exports = {
  darkMode: 'class', // ★★ 这是关键！！
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#f7f9fc', // 浅色背景
          primary: '#0f172a', // 主文字
          secondary: '#334155', // 次文字
          muted: '#64748b', // 淡文字
          accent: '#2563eb', // 强调蓝
          border: 'rgba(0,0,0,0.12)',
        },
        dark: {
          bg: '#0b1120', // 深色背景
          primary: '#f1f5f9',
          secondary: '#e2e8f0',
          muted: '#94a3b8',
          accent: '#60a5fa', // 发光蓝
          border: 'rgba(255,255,255,0.12)',
        },
      },
    },
  },
};
