export type ProjectCategory = "qa" | "network" | "lab";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  bullets?: string[];
  stack: string[];
  links: { repo?: string; demo?: string };
  year: number;
  status: "SHIPPED" | "WIP" | "ARCHIVED";
  highlight?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "p01",
    name: "白月 Web 官网",
    category: "qa",
    role: "软件测试工程师",
    description: "负责官网功能测试与质量保障,基于产品需求深入分析业务逻辑,确保测试覆盖全面。",
    bullets: [
      "设计思维导图与测试用例,覆盖正常与异常路径,组织用例评审。",
      "针对 Chrome、Firefox、Edge 等主流浏览器开展兼容性测试,保障多环境一致性。",
      "使用 Fiddler 协助开发定位 Bug,全流程跟踪缺陷修复。",
      "运用 JMeter 对核心接口进行压力测试,分析高并发场景下的性能表现。",
      "通过 Navicat 连接数据库校验数据准确性,保障数据一致性与完整性。",
    ],
    stack: ["Postman", "JMeter", "Fiddler", "Navicat", "Chrome DevTools"],
    links: {},
    year: 2025,
    status: "SHIPPED",
    highlight: "项目顺利上线,无 P0/P1 缺陷遗留",
  },
  {
    id: "p02",
    name: "白月 Web 后台管理系统",
    category: "qa",
    role: "软件测试工程师",
    description: "全面参与系统测试工作,覆盖用户管理、内容管理、权限管理等核心模块。",
    bullets: [
      "积极参与需求评审,高效梳理并编写测试用例,结合团队反馈持续优化用例质量。",
      "严格执行功能测试、兼容性测试与回归测试,及时发现并提交缺陷,详细记录并跟进修复进度。",
      "利用 Chrome 开发者工具进行接口抓包与数据分析,辅助定位复杂问题。",
      "测试结束后输出详细测试报告,为项目上线提供数据支持与质量保障。",
    ],
    stack: ["Postman", "Fiddler", "Chrome DevTools", "Navicat"],
    links: {},
    year: 2025,
    status: "SHIPPED",
    highlight: "覆盖 3 大核心模块全量用例",
  },
  {
    id: "p03",
    name: "接口自动化测试框架 (内部)",
    category: "qa",
    role: "测试工程师 / 个人实践",
    description: "基于 Python requests + pytest 搭建的接口自动化测试脚本,用于回归阶段自动验证核心接口。",
    bullets: [
      "封装通用 HTTP 客户端与会话复用,降低用例编写成本。",
      "使用 pytest 组织用例、参数化与 fixture,支持环境切换。",
      "与人工回归流程并行,缩短回归周期。",
    ],
    stack: ["Python", "requests", "pytest"],
    links: {},
    year: 2025,
    status: "SHIPPED",
    highlight: "复用至 2 个项目的回归流程",
  },
  {
    id: "p04",
    name: "数据中心网络优化",
    category: "network",
    role: "驻场工程师",
    description: "在数据中心驻场期间,参与网络架构评估并落地核心交换机配置优化。",
    bullets: [
      "识别核心交换机上的网络瓶颈,优化 VLAN 配置与路由策略。",
      "重新规划网络分段与访问控制,降低东西向流量风险。",
      "对比优化前后的关键指标(延迟、丢包、广播域)。",
    ],
    stack: ["VLAN", "路由策略", "交换机配置", "Wireshark"],
    links: {},
    year: 2024,
    status: "SHIPPED",
    highlight: "网络延迟降低 15%",
  },
  {
    id: "p05",
    name: "企业网络安全防护体系建设",
    category: "network",
    role: "驻场工程师",
    description: "辅助构建企业网络安全防护体系,从规则部署到告警监控的完整链路。",
    bullets: [
      "部署防火墙规则,梳理出入站策略最小化原则。",
      "搭建异常流量监测与预警,记录 10+ 次外部异常事件。",
      "整理安全漏洞报告,推动修复 5 个高危漏洞。",
    ],
    stack: ["防火墙", "漏洞扫描", "流量分析"],
    links: {},
    year: 2024,
    status: "SHIPPED",
    highlight: "修复 5 个高危漏洞",
  },
  {
    id: "p06",
    name: "Linux 系统实验",
    category: "lab",
    role: "团队成员",
    description: "通过虚拟机搭建 Linux 系统环境,深入学习系统管理与网络服务。",
    bullets: [
      "完成文件系统、用户管理、进程管理、网络配置等核心知识学习。",
      "完成 MySQL 数据库的安装与管理。",
      "搭建并运行多个网络服务(Nginx / SSH / DNS 等),为网络工程实践奠定基础。",
    ],
    stack: ["Linux", "VMware", "MySQL", "Shell"],
    links: {},
    year: 2024,
    status: "ARCHIVED",
    highlight: "为后续网络工程实践奠定基础",
  },
];

export const projectCategoryLabel: Record<ProjectCategory | "all", string> = {
  all: "ALL",
  qa: "QA",
  network: "NETWORK",
  lab: "LAB",
};
