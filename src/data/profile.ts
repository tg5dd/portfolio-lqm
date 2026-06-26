export const profile = {
  name: "梁秦铭",
  nameEn: "LIANG QINMING",
  handle: "lqm",
  callsign: "OP-0xLQM",
  roles: ["网络安全工程师", "网络运维工程师", "软件测试工程师"],
  headline: "Network Security × QA",
  tagline: "筑牢网络防线 · 把控软件质量",
  bio: {
    en: "Recent CS graduate focused on network security and software quality. I harden enterprise networks, design test plans from scratch, and automate the boring parts so releases can ship with confidence.",
    cn: "应届网络工程毕业生,专注网络安全与软件质量。日常为企业网络做安全加固与运维,从零设计测试方案,并把重复工作交给脚本,让每一次上线都更安心。",
  },
  location: {
    city: "广东,中国",
    coords: "23.1291° N, 113.2644° E",
    timezone: "UTC+8",
  },
  status: "OPEN_TO_OFFERS",
  email: "2425489881@qq.com",
  phone: "13380970696",
  gender: "男",
  age: 23,
  social: {
    github: "https://github.com/liangqinming",
    linkedin: "https://linkedin.com/in/liangqinming",
    qq: "2425489881",
  },
  years: { network: 2, qa: 1 },
  gpa: "2.62 / 4.0 (专业前 30%)",
  learning: ["eBPF 入门", "Golang 在网络工具中的应用", "OWASP Top 10 复现"],
  education: {
    school: "广东石油化工学院",
    major: "网络工程(本科)",
    period: "2021.09 — 2025.06",
  },
};

export const skillMatrix = [
  {
    group: "Network",
    items: ["TCP/IP 协议栈", "HTTP/HTTPS", "DNS / DHCP", "VLAN 划分", "路由策略", "防火墙规则", "网络分段与隔离", "网络故障排查"],
  },
  {
    group: "QA",
    items: ["测试用例设计", "等价类 / 边界值", "功能测试", "回归测试", "兼容性测试", "缺陷全生命周期管理", "测试报告输出", "需求评审"],
  },
  {
    group: "Tools",
    items: ["Postman", "JMeter", "Fiddler", "Pytest", "Navicat", "Chrome DevTools", "Wireshark", "Linux Shell"],
  },
  {
    group: "Stack",
    items: ["Python", "SQL", "Linux", "MySQL", "虚拟化平台", "Shell 脚本", "Git", "VMware"],
  },
];

export const certs: { code: string; org: string; year: string }[] = [
  // 留空,等待考取更多证书后补充(如 HCIA / RHCE / ISTQB 等)
];

export const courses = [
  "计算机网络",
  "Python 程序设计",
  "数据库原理",
  "Linux 网络管理",
  "操作系统原理",
  "计算机组成原理",
  "网络系统集成",
  "虚拟化技术",
];
