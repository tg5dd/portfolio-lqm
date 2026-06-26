export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  detail: string[];
  tags: string[];
  type: "work" | "education" | "campus";
}

export const timeline: TimelineItem[] = [
  {
    year: "2025.04 — 2026.06",
    title: "软件测试工程师 (实习)",
    org: "江门千星科技有限公司",
    detail: [
      "参与需求评审,基于业务逻辑梳理测试要点,设计思维导图与测试用例,组织用例评审,确保测试覆盖全面。",
      "使用 Postman 进行接口测试,验证接口在正常参数及异常场景下的响应正确性,保障前后端数据交互稳定。",
      "运用 JMeter 对接口开展压力测试,监测错误率、响应时间、吞吐量等核心性能指标,识别系统瓶颈。",
      "执行功能测试与回归测试,提交并跟踪缺陷全生命周期,使用 Fiddler 抓包辅助开发定位问题根因。",
      "通过 Navicat 进行数据库校验,确保数据落地准确;在 Linux 环境进行埋点测试与日志分析。",
      "基于 Python requests 库与 pytest 框架,搭建接口自动化测试脚本,提升测试效率与可复用性。",
      "Bug 修复完成后执行整体回归测试,输出测试报告,为项目上线提供质量保障。",
    ],
    tags: ["postman", "jmeter", "pytest", "fiddler", "linux", "接口测试", "性能测试"],
    type: "work",
  },
  {
    year: "2024.09 — 2025.03",
    title: "驻场工程师 (实习)",
    org: "广州佳众联科技有限公司",
    detail: [
      "参与数据中心网络架构评估,协助识别网络瓶颈,通过优化核心交换机 VLAN 配置与路由策略,将网络延迟降低 15%。",
      "辅助构建网络安全防护体系,部署防火墙规则,监测并预警外部异常流量 10 余次,成功拦截多起疑似攻击。",
      "整理安全漏洞报告,推动修复高危漏洞 5 个,有效提升公司网络整体安全性。",
    ],
    tags: ["vlan", "防火墙", "漏洞修复", "网络优化"],
    type: "work",
  },
  {
    year: "2021.09 — 2025.06",
    title: "网络工程(本科)",
    org: "广东石油化工学院",
    detail: [
      "平均绩点 2.62 / 4.0(专业前 30%)。",
      "主修课程:计算机网络、Python 程序设计、数据库原理、Linux 网络管理、操作系统原理、计算机组成原理、网络系统集成、虚拟化技术。",
    ],
    tags: ["bachelor", "network-engineering"],
    type: "education",
  },
  {
    year: "2021.11 — 2022.11",
    title: "宣传部执行人",
    org: "校轮滑社",
    detail: [
      "积极参与轮滑活动的策划与执行,协助组织多场校园轮滑赛事。",
      "有效协调社团资源,确保活动顺利开展,成功吸引大量师生参与,显著提升了社团在校园内的影响力。",
    ],
    tags: ["organizing", "campus", "communication"],
    type: "campus",
  },
];
