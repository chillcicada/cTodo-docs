---
background: https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3
hideInToc: true
---

# cTodo Project

This slide is only for the trial review. Press <u>Space</u> to continue. [中文版本](/zh/slides/trial)

[![wakatime](https://wakatime.com/badge/user/018b2987-2ecc-45d3-9469-0a8572bb2e32/project/018d9b06-1a8e-419a-a70a-2f35a155fdaf.svg)](https://wakatime.com/badge/user/018b2987-2ecc-45d3-9469-0a8572bb2e32/project/018d9b06-1a8e-419a-a70a-2f35a155fdaf)

<br />
<p style="text-align: right">Author: <a href="https://github.com/chillcicada"><span>ChillCicada</span></a> (aka 寒蝉)</p>

---

# Preface

Please ensure that you have read and made sense of this page.

- Due to the design specification (i.e., this slide) in drafting with the design and development ideas, considering the openness and justice of the competition, it will be formally released public on the docs after the final review. Currently, it is hosted on GitHub Pages and in a semi-public state (accessible through a link or from the GitHub repository, but not visible on the docs interface).
- The user manual hasn't finalized yet and will be uploaded after cTodo (client) completed. This version is for reference only now.

---

# Introduction

Press <u>o</u> to get the slide overview. Move the mouse to the bottom left corner or use arrow keys for interaction. <br />
This slide is powered by [slidev](https://sli.dev), used to make a brief introduction to the cTodo project.

<Toc />

---

# What's cTodo?

cTodo is a project, aimed to help users to manage their tasks and time. Currently, it contains (repo means GitHub repository):

- A web-extension client (cTodo) for users to manage their tasks and time, based on the new [wxt](https://wxt.dev) framework.<br />
  Repo: chillcicada/ctodo, will get full released after the final review.
- A simple websocket server (cTodo Server) for collecting the error logs and user feedbacks.<br />
  Repo: chillcicada/ctodo-server, will released after launch.
- The docs (i.e., this site).<br />
  Repo: chillcicada/ctodo-docs.

**Info**:

- Due to the scale of the project and the fact that both the cTodo-server and cTodo-docs are primarily focused on development-related content, they will not be explained or emphasized as the main focus.
- Also, in the following, I will use "ctodo" as a reference to "ctodo-client", which is the main part of the project.

---

# Why design cTodo?

Currently, there are many tools related to web extension domain, and when designing cTodo, I also referred to some existing tools, such as stayfree and site block. The purpose of cTodo is to solve the following problems:

- Lack of data interoperability: The inherent limitation of the web is that it cannot directly access users' task and time data. Many schedules need to be manually added. Therefore, it was decided to design a plugin interface to facilitate the interaction with external data and reduce some repetitive schedules.
- Insufficient functionality: This statement is actually subjective, because I am a user of Tomato Todo, but there is no similar plugin with similar functionality on PC. There are many web applications, but they are more or less lacking. The two plugins mentioned above do not have todo and schedule functions, so I decided to write one myself.
- Personalization: This part is my personal preference. I have a high requirement for personalization, but I have not found a plugin that meets my needs yet.

---

# cTodo Design Map Ideas

You can learn about the specific construction steps of the cTodo project through the README.md file and package.json file of the cTodo project. Here, only the design ideas are introduced.

cTodo is built based on the wxt framework as a web-extension, using TypeScript and Vue for development. It can be divided into the following four parts:

- **Home**: The main page, used to display the task list and time statistics.
- Popup: The pop-up page, used to add tasks and view task details.
- **Background**: The background, used to handle task data and time statistics.
- ContentScript: The content script, used to interact with the page.

The core functions of cTodo are not complicated, including basic todo, time management, website blocking, and statistics.

---

# Application Logic

The application logic of cTodo can be described by the following diagram:

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1023 703.4443969726562" width="1023" height="703.4443969726562" class="svg-logic">
  <!-- svg-source:excalidraw -->
  <rect x="0" y="0" width="1023" height="703.4443969726562" fill="#ffffff"></rect><g stroke-linecap="round" transform="translate(20.50006103515625 330.37042236328125) rotate(0 53.5 29)"><path d="M14.5 0 M14.5 0 C40.92 -0.42, 63.2 1.43, 92.5 0 M14.5 0 C44.19 -0.17, 74.55 -0.28, 92.5 0 M92.5 0 C103.43 0.78, 105.16 5.26, 107 14.5 M92.5 0 C101.15 -0.44, 106.07 5.7, 107 14.5 M107 14.5 C108.94 21.69, 107.75 31.62, 107 43.5 M107 14.5 C106.92 23.45, 106.86 33.72, 107 43.5 M107 43.5 C107.16 55.03, 103.99 57.9, 92.5 58 M107 43.5 C105.87 52.88, 102.07 56.88, 92.5 58 M92.5 58 C71.17 59.06, 44.88 57.69, 14.5 58 M92.5 58 C72.34 58.13, 52.1 57.74, 14.5 58 M14.5 58 C6.78 56.09, 1.68 52.72, 0 43.5 M14.5 58 C6.33 59.9, -2.07 52.11, 0 43.5 M0 43.5 C-1.73 32.13, -0.37 22.25, 0 14.5 M0 43.5 C-0.36 32.9, 0 22.04, 0 14.5 M0 14.5 C1.55 6.08, 5.96 0.5, 14.5 0 M0 14.5 C-0.95 5.31, 3.06 -1.57, 14.5 0" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(38.00006103515625 339.87042236328125) rotate(0 36 19.5)"><text x="36" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#808080" text-anchor="middle" style="white-space: pre;" direction="ltr">User</text></g><g stroke-linecap="round" transform="translate(180.77777099609375 204.333251953125) rotate(0 53.5 29)"><path d="M14.5 0 M14.5 0 C34.04 0.46, 49.85 -1.7, 92.5 0 M14.5 0 C37.64 -0.33, 59.58 0.67, 92.5 0 M92.5 0 C104.09 -0.47, 106.19 4, 107 14.5 M92.5 0 C101.61 1.93, 108.74 4.5, 107 14.5 M107 14.5 C104.91 23.28, 107.22 27.17, 107 43.5 M107 14.5 C106.99 23.7, 107.11 33.07, 107 43.5 M107 43.5 C107.9 54.95, 102.85 59.2, 92.5 58 M107 43.5 C104.74 51.07, 101.18 58.49, 92.5 58 M92.5 58 C71.69 58.43, 54.25 58.66, 14.5 58 M92.5 58 C73.09 59.1, 52.41 58.9, 14.5 58 M14.5 58 C4.22 59.5, 1.96 52.26, 0 43.5 M14.5 58 C6.32 57.72, 1.19 51.41, 0 43.5 M0 43.5 C-0.94 37.34, -0.7 30.09, 0 14.5 M0 43.5 C-0.86 33.16, 0.5 23.41, 0 14.5 M0 14.5 C-0.26 4.16, 4.93 -0.1, 14.5 0 M0 14.5 C1.98 6.37, 4.37 2.25, 14.5 0" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(197.27777099609375 213.833251953125) rotate(0 37 19.5)"><text x="37" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#808080" text-anchor="middle" style="white-space: pre;" direction="ltr">Home</text></g><g stroke-linecap="round" transform="translate(188.85198974609375 462.92596435546875) rotate(0 53.5 29)"><path d="M14.5 0 M14.5 0 C35.15 1.45, 56.67 0.51, 92.5 0 M14.5 0 C33.83 1.45, 52.37 -0.07, 92.5 0 M92.5 0 C101.55 -1.65, 105.28 3.15, 107 14.5 M92.5 0 C103.86 1.35, 106.33 4.93, 107 14.5 M107 14.5 C108.71 20.59, 108.24 28.09, 107 43.5 M107 14.5 C107.15 24.92, 107.21 34.07, 107 43.5 M107 43.5 C108.88 53.87, 100.33 57.86, 92.5 58 M107 43.5 C107.21 55.15, 101.87 58.98, 92.5 58 M92.5 58 C76.02 56.93, 56.95 59.55, 14.5 58 M92.5 58 C73.98 58.3, 54.93 58.98, 14.5 58 M14.5 58 C2.95 59.91, 0.69 52.5, 0 43.5 M14.5 58 C3 56.78, -2.03 54.03, 0 43.5 M0 43.5 C1.68 37.81, -0.82 28.46, 0 14.5 M0 43.5 C0.25 31.8, 0.87 20.49, 0 14.5 M0 14.5 C0.3 4.65, 5.4 1.32, 14.5 0 M0 14.5 C2.23 6.52, 5.36 2.17, 14.5 0" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(199.35198974609375 472.42596435546875) rotate(0 43 19.5)"><text x="43" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#808080" text-anchor="middle" style="white-space: pre;" direction="ltr">Popup</text></g><g stroke-linecap="round"><g transform="translate(137.01330172155758 321.02811311426063) rotate(0 17.16017495371466 -26.11344127694406)"><path d="M0.3 -0.18 C5.76 -8.98, 27.62 -43.54, 33.08 -52.04 M-1 -1.33 C4.81 -10.08, 29.24 -42.97, 35.32 -51.08" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(137.01330172155758 321.02811311426063) rotate(0 17.16017495371466 -26.11344127694406)"><path d="M26.42 -23.84 C27.51 -33.25, 31.71 -42.62, 36.95 -51.33 M25.75 -23.23 C29.98 -33.55, 32.7 -44.6, 35.54 -50.9" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(137.01330172155758 321.02811311426063) rotate(0 17.16017495371466 -26.11344127694406)"><path d="M9.95 -36.09 C16.49 -41.55, 26.05 -46.93, 36.95 -51.33 M9.28 -35.48 C19.94 -40.87, 29.08 -47.14, 35.54 -50.9" stroke="#808080" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(131.1440042267592 401.7343374043773) rotate(0 23.87436681978943 29.681160317928402)"><path d="M-0.24 0.55 C7.86 10.39, 41.48 50.11, 49.58 59.57 M-1.83 -0.2 C6.08 9.28, 40.74 48.31, 48.92 58.01" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(131.1440042267592 401.7343374043773) rotate(0 23.87436681978943 29.681160317928402)"><path d="M23.61 44.36 C34.54 47.91, 40.79 53.39, 49.98 57.27 M23.19 43.58 C30.52 48.17, 38.52 52.22, 48.38 58.51" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(131.1440042267592 401.7343374043773) rotate(0 23.87436681978943 29.681160317928402)"><path d="M39.11 30.91 C44.18 39.56, 44.52 50.17, 49.98 57.27 M38.69 30.13 C41.42 38.69, 44.73 46.8, 48.38 58.51" stroke="#808080" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(246.4259033203125 451.111083984375) rotate(0 -2.7493880353868008 -88.93768513575196)"><path d="M-1.16 0.31 C-2.05 -29.41, -4 -148.23, -4.34 -178.18" stroke="#808080" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g><g transform="translate(246.4259033203125 451.111083984375) rotate(0 -2.7493880353868008 -88.93768513575196)"><path d="M-4.16 -180.14 L2.56 -166.2 L-8.73 -165.56 L-3.36 -178.12" stroke="none" stroke-width="0" fill="#808080" fill-rule="evenodd"></path><path d="M-3.96 -178.98 C-1.41 -172.37, -0.47 -168.08, 2.06 -164.66 M3.26 -165.33 C0.05 -165.7, -2.93 -164.86, -9.39 -164.75 M-9.87 -163.46 C-9.85 -167.12, -7.61 -171.14, -3.38 -178.15 M-4.34 -178.18 C-4.34 -178.18, -4.34 -178.18, -4.34 -178.18" stroke="#808080" stroke-width="1.5" fill="none"></path></g></g><mask></mask><g transform="translate(173.8333740234375 531.7036743164062) rotate(0 67.5 38)"><text x="0" y="20.333333333333332" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">Popup用于快速</text><text x="0" y="45.666666666666664" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">展示一些信息和</text><text x="0" y="71" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">一些快捷选项。</text></g><g transform="translate(104.5926513671875 134.40737915039062) rotate(0 86 38)"><text x="0" y="20.333333333333332" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">Home 即主页，包含</text><text x="0" y="45.666666666666664" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">了完整的应用服务和</text><text x="0" y="71" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">选项</text></g><g transform="translate(10 617.4443969726562) rotate(0 501.5 38)"><text x="0" y="20.333333333333332" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">假设用户打开了一个界面，url 将被 background 记录，包装后数据将交给下层处理，如果满足匹配模式将触发</text><text x="0" y="45.666666666666664" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">ContentScript 向页面注入代码来屏蔽信息，访问时间不会被记录，反之，将会将数据存储到本地，home 和 popup</text><text x="0" y="71" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">监听存储变化来重绘组件</text></g><g stroke-linecap="round" transform="translate(518.1109619140625 194.66659545898438) rotate(0 97 33.5)"><path d="M16.75 0 M16.75 0 C56.28 0.75, 94.8 -0.47, 177.25 0 M16.75 0 C71.45 0.23, 127.86 0.3, 177.25 0 M177.25 0 C189.07 0.18, 195.35 6.78, 194 16.75 M177.25 0 C190.45 1.7, 195.37 4.99, 194 16.75 M194 16.75 C194.81 29.59, 192.84 39.38, 194 50.25 M194 16.75 C193.27 23.55, 193.93 30.3, 194 50.25 M194 50.25 C194.33 62.15, 190.39 67.12, 177.25 67 M194 50.25 C191.78 62.24, 188.95 65.97, 177.25 67 M177.25 67 C121.85 65.77, 65.7 66.02, 16.75 67 M177.25 67 C134.35 67.2, 92.31 66.66, 16.75 67 M16.75 67 C4.87 65.66, -0.44 61.31, 0 50.25 M16.75 67 C6.38 67.16, 1.14 59.38, 0 50.25 M0 50.25 C1.34 39.1, 1.37 31.25, 0 16.75 M0 50.25 C-0.68 40.5, -0.19 31.71, 0 16.75 M0 16.75 C0.34 7.2, 6.22 1.61, 16.75 0 M0 16.75 C0.61 5.22, 4.03 1.17, 16.75 0" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(526.1109619140625 208.66659545898438) rotate(0 89 19.5)"><text x="89" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#808080" text-anchor="middle" style="white-space: pre;" direction="ltr">Background</text></g><g transform="translate(733.8147583007812 157.40740966796875) rotate(0 104 75.5)"><text x="0" y="20.166666666666668" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">Background包含一系列</text><text x="0" y="45.333333333333336" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">后端逻辑，目前有：</text><text x="0" y="70.5" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">- 监听网站活动</text><text x="0" y="95.66666666666667" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">- 统计浏览数据</text><text x="0" y="120.83333333333334" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">- 匹配规则处理</text><text x="0" y="146" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">- 订阅规则与云服务</text></g><g stroke-linecap="round" transform="translate(505.83331298828125 460.90740966796875) rotate(0 120 32)"><path d="M16 0 M16 0 C74.17 -2.75, 129.68 0.37, 224 0 M16 0 C73.94 -1.25, 133.8 -1.18, 224 0 M224 0 C234.92 0.08, 238.11 3.71, 240 16 M224 0 C233.33 -0.58, 239.13 7.08, 240 16 M240 16 C240.3 23.71, 240.08 29.77, 240 48 M240 16 C240.7 26.66, 240.77 38.09, 240 48 M240 48 C240.52 60.46, 234.39 65.81, 224 64 M240 48 C239.26 58.82, 232.43 63.66, 224 64 M224 64 C182.18 67.36, 139.86 65.69, 16 64 M224 64 C168.69 63.41, 114.02 63.24, 16 64 M16 64 C3.99 64.06, 0.82 60.11, 0 48 M16 64 C3.52 62.53, 2.05 58.5, 0 48 M0 48 C0.76 42.01, -0.95 34.01, 0 16 M0 48 C0.24 37.21, 0.92 28.06, 0 16 M0 16 C1.11 5.59, 4.17 0.85, 16 0 M0 16 C1.23 3.54, 5 -2.19, 16 0" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(514.8333129882812 473.40740966796875) rotate(0 111 19.5)"><text x="111" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#808080" text-anchor="middle" style="white-space: pre;" direction="ltr">ContentScript</text></g><g transform="translate(760.5924682617188 442.62957763671875) rotate(0 124.5 50.5)"><text x="0" y="20.25" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">ContentScript 仅在满足</text><text x="0" y="45.5" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">匹配模式时被 background</text><text x="0" y="70.75" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">触发，用 ShadowRoot 绘制</text><text x="0" y="96" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">遮罩层来屏蔽页面内容</text></g><g stroke-linecap="round"><g transform="translate(300.5 234.07403564453125) rotate(0 101.46367932930588 0.36656616520320995)"><path d="M0.34 0.55 C34 0.41, 169.14 0.15, 202.58 0.19" stroke="#808080" stroke-width="1.5" fill="none" stroke-dasharray="1.5 7"></path></g><g transform="translate(300.5 234.07403564453125) rotate(0 101.46367932930588 0.36656616520320995)"><path d="M-0.61 0.53 L12.65 -7.63 L14.24 5.68 L1.78 -0.91" stroke="none" stroke-width="0" fill="#808080" fill-rule="evenodd"></path><path d="M1.03 1.92 C5.31 -2.36, 10.83 -3.06, 13.78 -5.71 M14.66 -4.58 C13.31 -1.67, 13.53 0.68, 14.25 6.2 M14.9 7.19 C9.96 6.33, 8.6 2.71, 0.28 1.18 M0.34 0.55 C0.34 0.55, 0.34 0.55, 0.34 0.55" stroke="#808080" stroke-width="1.5" fill="none"></path></g><g transform="translate(300.5 234.07403564453125) rotate(0 101.46367932930588 0.36656616520320995)"><path d="M201.64 0.18 L187.71 4.74 L189.28 -7.31 L204.02 -1.27" stroke="none" stroke-width="0" fill="#808080" fill-rule="evenodd"></path><path d="M203.27 1.57 C198.09 1.84, 194.03 5.62, 188.85 6.65 M189.73 7.78 C188.29 3.91, 188.5 -0.53, 189.29 -6.8 M189.94 -5.81 C191.76 -3.32, 197.28 -3.74, 202.52 0.83 M202.58 0.19 C202.58 0.19, 202.58 0.19, 202.58 0.19" stroke="#808080" stroke-width="1.5" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(603.4629516601562 273.33331298828125) rotate(0 1.7135415993631113 88.26937488690018)"><path d="M-0.98 1.09 C-0.24 30.31, 3.64 146.49, 4.41 175.45" stroke="#808080" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g><g transform="translate(603.4629516601562 273.33331298828125) rotate(0 1.7135415993631113 88.26937488690018)"><path d="M3.7 176.56 L-2.38 161.97 L8.43 162.43 L5.46 176.81" stroke="none" stroke-width="0" fill="#808080" fill-rule="evenodd"></path><path d="M5.76 176.33 C3.2 171.36, 0.46 167.07, -1.08 161.29 M-3.12 162.58 C0.73 161.37, 2.18 161.89, 9.9 160.7 M10.15 161.42 C8.25 164.78, 7.84 169.64, 5.2 174.36 M4.41 175.45 C4.41 175.45, 4.41 175.45, 4.41 175.45" stroke="#808080" stroke-width="1.5" fill="none"></path></g></g><mask></mask><g stroke-linecap="round" transform="translate(510.12957763671875 10) rotate(0 100.74078369140625 32.22221374511719)"><path d="M126.25 8.25 M126.25 8.25 C136.52 10.63, 147.21 15.38, 176.23 24.75 M176.23 24.75 C202.83 33.39, 202.94 32.21, 176.23 41.25 M176.23 41.25 C163.51 44.17, 148.5 50.04, 126.25 56.19 M126.25 56.19 C100.63 63.92, 99.48 63.86, 75.75 56.19 M75.75 56.19 C55.39 50.59, 38.32 43.59, 25.25 41.25 M25.25 41.25 C-0.79 32.57, 1.17 33.73, 25.25 24.75 M25.25 24.75 C38.08 22.13, 50.26 16.89, 75.75 8.25 M75.75 8.25 C100.56 1.6, 99.53 0.41, 126.25 8.25" stroke="#808080" stroke-width="4.5" fill="none" stroke-dasharray="8 12"></path></g><g transform="translate(543.870361328125 27.222213745117188) rotate(0 67 15)"><text x="67" y="25" font-family="Virgil, Segoe UI Emoji" font-size="28px" fill="#808080" text-anchor="middle" style="white-space: pre;" direction="ltr">UserAction</text></g><g stroke-linecap="round"><g transform="translate(610.8704223632812 81.111083984375) rotate(0 0.6982993088662397 50.32387651577592)"><path d="M-0.44 0.38 C-0.28 16.89, 1.62 83.59, 1.84 100.27" stroke="#84a2d4" stroke-width="4.5" fill="none" stroke-dasharray="1.5 10"></path></g><g transform="translate(610.8704223632812 81.111083984375) rotate(0 0.6982993088662397 50.32387651577592)"><path d="M2.1 101.72 L-5.15 86.44 L6.65 86.78 L3.33 99.04" stroke="none" stroke-width="0" fill="#84a2d4" fill-rule="evenodd"></path><path d="M2.31 101.64 C0.49 95.41, -1.76 89.05, -5.08 85.4 M-5.99 86.2 C-2.74 85.72, 2.24 86.05, 6.69 87.76 M8.76 87.66 C7.33 91.41, 3.11 93.01, 2.4 99.42 M1.84 100.27 C1.84 100.27, 1.84 100.27, 1.84 100.27" stroke="#84a2d4" stroke-width="4.5" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(632.3518676757812 270.74078369140625) rotate(0 1.9598053418100108 87.89553927555679)"><path d="M0.29 -0.42 C1 28.75, 3.11 146.6, 3.63 176.22" stroke="#84a2d4" stroke-width="4.5" fill="none" stroke-dasharray="1.5 10"></path></g><g transform="translate(632.3518676757812 270.74078369140625) rotate(0 1.9598053418100108 87.89553927555679)"><path d="M4.6 176.4 L-2.33 161.94 L9.68 163.15 L1.7 175.79" stroke="none" stroke-width="0" fill="#84a2d4" fill-rule="evenodd"></path><path d="M3.1 175.2 C1.77 171.61, 1.45 170.53, -3.33 162.44 M-2.53 163.74 C0.53 162.89, 3.62 162.47, 10.07 162.64 M9.4 161.15 C7.45 166.79, 4.26 171.77, 2.84 175.32 M3.63 176.22 C3.63 176.22, 3.63 176.22, 3.63 176.22" stroke="#84a2d4" stroke-width="4.5" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(308.4807786785067 497.48524047542173) rotate(0 116.58389077559116 -112.87934312000868)"><path d="M-0.29 -0.56 C29.53 -9.63, 140.66 -16.39, 179.62 -53.83 C218.58 -91.27, 224.4 -196.63, 233.46 -225.2" stroke="#808080" stroke-width="1.5" fill="none" stroke-dasharray="1.5 7"></path></g><g transform="translate(308.4807786785067 497.48524047542173) rotate(0 116.58389077559116 -112.87934312000868)"><path d="M1.07 -1.86 L11.51 -11.5 L14.72 3.78 L-0.34 -1.34" stroke="none" stroke-width="0" fill="#808080" fill-rule="evenodd"></path><path d="M-0.99 -1.24 C5.29 -3.58, 7.31 -6.15, 10.74 -10.44 M11.1 -9.2 C12.68 -6.69, 12.83 -4.38, 15.53 3.21 M14.4 2.09 C9.28 0.5, 5.03 0.94, -0.78 0.44 M-0.29 -0.56 C-0.29 -0.56, -0.29 -0.56, -0.29 -0.56" stroke="#808080" stroke-width="1.5" fill="none"></path></g><g transform="translate(308.4807786785067 497.48524047542173) rotate(0 116.58389077559116 -112.87934312000868)"><path d="M234.82 -226.5 L236.87 -212.62 L225.06 -212.16 L233.41 -225.99" stroke="none" stroke-width="0" fill="#808080" fill-rule="evenodd"></path><path d="M232.76 -225.89 C236.16 -219.83, 235.18 -213.99, 236.1 -211.56 M236.47 -210.32 C234.91 -211.06, 231.82 -211.94, 225.86 -212.73 M224.74 -213.85 C227.43 -218.6, 231.06 -221.1, 232.97 -224.2 M233.46 -225.2 C233.46 -225.2, 233.46 -225.2, 233.46 -225.2" stroke="#808080" stroke-width="1.5" fill="none"></path></g></g><mask></mask><g transform="translate(722.72216796875 557.4999389648438) rotate(0 141 18.5)"><text x="0" y="30" font-family="Helvetica, Segoe UI Emoji" font-size="28px" fill="#d484a2" text-anchor="start" style="white-space: pre;" direction="ltr">箭头和直线表示数据流</text></g><g stroke-linecap="round" transform="translate(307.4259033203125 328.2407531738281) rotate(0 86 29.5)"><path d="M14.75 0 M14.75 0 C49.59 0.83, 84.07 0.36, 157.25 0 M14.75 0 C56.27 -1.26, 97.73 -0.65, 157.25 0 M157.25 0 C166.15 0.37, 170.49 4.21, 172 14.75 M157.25 0 C166.2 1.5, 174.21 2.77, 172 14.75 M172 14.75 C173.61 22.83, 169.88 26.42, 172 44.25 M172 14.75 C171.71 20.55, 172.75 28.17, 172 44.25 M172 44.25 C171.11 52.73, 166.24 59.25, 157.25 59 M172 44.25 C171.26 53.67, 168.43 57.18, 157.25 59 M157.25 59 C124.97 59.7, 90.52 59.66, 14.75 59 M157.25 59 C126.84 58.7, 94.98 58.78, 14.75 59 M14.75 59 C3.41 57.08, -0.14 54.5, 0 44.25 M14.75 59 C3.39 59.42, -1.05 55.81, 0 44.25 M0 44.25 C-0.13 34.27, -1.83 28.15, 0 14.75 M0 44.25 C-0.72 32.71, -0.23 20.28, 0 14.75 M0 14.75 C0.68 4.44, 3 -0.15, 14.75 0 M0 14.75 C1.46 5.03, 3.75 2.27, 14.75 0" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(330.4259033203125 338.2407531738281) rotate(0 63 19.5)"><text x="63" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#808080" text-anchor="middle" style="white-space: pre;" direction="ltr">Storage</text></g><g stroke-linecap="round" transform="translate(326.0925598144531 99.87030029296875) rotate(0 67.5 25)"><path d="M12.5 0 M12.5 0 C35.78 -2.4, 58.81 -0.89, 122.5 0 M12.5 0 C41.55 -1.34, 71.01 0.26, 122.5 0 M122.5 0 C130.93 -1.02, 136.98 3.97, 135 12.5 M122.5 0 C132.44 1.18, 136.87 5.96, 135 12.5 M135 12.5 C136.22 19.43, 133.16 23.12, 135 37.5 M135 12.5 C134.41 18.71, 135.37 27.16, 135 37.5 M135 37.5 C135.64 46.78, 129.54 48.43, 122.5 50 M135 37.5 C136.57 46.51, 129.52 51.88, 122.5 50 M122.5 50 C97.71 48.49, 74.68 49.45, 12.5 50 M122.5 50 C84.2 49.84, 45.82 50.85, 12.5 50 M12.5 50 C3.46 51.48, 1.23 47.32, 0 37.5 M12.5 50 C4.49 50.42, 2.08 47.61, 0 37.5 M0 37.5 C2.2 29.37, 0.41 19.61, 0 12.5 M0 37.5 C-0.74 29.47, -0.34 21.55, 0 12.5 M0 12.5 C-0.71 5.29, 4.24 1.99, 12.5 0 M0 12.5 C1.59 2.44, 3.96 1.32, 12.5 0" stroke="#808080" stroke-width="1" fill="none"></path></g><g transform="translate(331.0925598144531 105.37030029296875) rotate(0 62.5 19.5)"><text x="62.5" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#808080" text-anchor="middle" style="white-space: pre;" direction="ltr">Vendors</text></g><g stroke-linecap="round"><g transform="translate(295.3604720197618 270.1597920693457) rotate(0 6.663097210973547 23.073365799337637)"><path d="M0.83 0.13 C2.77 7.88, 10.76 38.23, 12.5 46.02" stroke="#d484a2" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g><g transform="translate(295.3604720197618 270.1597920693457) rotate(0 6.663097210973547 23.073365799337637)"><path d="M1.9 0.2 L11.97 10.05 L-0.26 16.79 L2.59 1.28" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M0.99 0.94 C3.49 3.61, 8.06 8.94, 9.4 10.3 M11.02 11.12 C8.47 11.91, 4.09 12.69, -2.78 15.52 M-2.99 14.5 C-0.75 11.09, -0.4 6.98, 1.01 1.18 M0.83 0.13 C0.83 0.13, 0.83 0.13, 0.83 0.13" stroke="#d484a2" stroke-width="1.5" fill="none"></path></g><g transform="translate(295.3604720197618 270.1597920693457) rotate(0 6.663097210973547 23.073365799337637)"><path d="M13.57 46.09 L4.71 32.66 L17.07 33.22 L14.26 47.16" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M12.66 46.82 C8.25 41.01, 5.82 37.74, 2.15 32.91 M3.76 33.73 C7.27 32.82, 8.98 32.07, 14.55 31.94 M14.34 30.92 C15.09 35.62, 13.88 39.6, 12.68 47.07 M12.5 46.02 C12.5 46.02, 12.5 46.02, 12.5 46.02" stroke="#d484a2" stroke-width="1.5" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(294.42955415621395 453.5931991420686) rotate(0 13.73666054829954 -25.987478574365355)"><path d="M-1.17 0.78 C3.78 -7.93, 23.59 -43.93, 28.65 -52.75" stroke="#d484a2" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g><g transform="translate(294.42955415621395 453.5931991420686) rotate(0 13.73666054829954 -25.987478574365355)"><path d="M-1.71 0.13 L1.87 -13.44 L9.62 -6.36 L-0.55 -0.99" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M-0.2 0.47 C-1.08 -2.01, -0.08 -6.83, -1.04 -14.65 M-0.88 -14.83 C2.66 -10.86, 8.1 -8.6, 11.77 -6.99 M11.53 -8.34 C8.88 -5.47, 3.97 -3.48, -2.15 1.03 M-1.17 0.78 C-1.17 0.78, -1.17 0.78, -1.17 0.78" stroke="#d484a2" stroke-width="1.5" fill="none"></path></g><g transform="translate(294.42955415621395 453.5931991420686) rotate(0 13.73666054829954 -25.987478574365355)"><path d="M28.11 -53.39 L29.5 -37.04 L15.12 -42.32 L29.27 -54.51" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M29.62 -53.05 C28.15 -49.25, 28.69 -47.75, 26.6 -38.26 M26.76 -38.43 C22.25 -39.16, 19.65 -41.39, 17.27 -42.96 M17.03 -44.31 C20.38 -45.55, 21.48 -47.9, 27.67 -52.49 M28.65 -52.75 C28.65 -52.75, 28.65 -52.75, 28.65 -52.75" stroke="#d484a2" stroke-width="1.5" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(322.43240291789425 161.0891400589062) rotate(0 -12.10447578642129 18.53845661259784)"><path d="M-0.43 -1.18 C-4.57 5.15, -20.75 31.7, -25.19 38.25 M1.54 0.82 C-2.65 6.81, -21.37 30.74, -25.75 36.65" stroke="#d484a2" stroke-width="1" fill="none"></path></g><g transform="translate(322.43240291789425 161.0891400589062) rotate(0 -12.10447578642129 18.53845661259784)"><path d="M-0.55 -2.75 L-2.85 13.36 L-13.47 7.88 L1.32 -2.68" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M-1.9 -0.26 C0.36 1.41, -0.24 7.11, -3.46 14.3 M-0.47 -0.66 C-1.21 4.37, -1.1 9.06, -2.52 13.17 M-1.36 14.87 C-7.17 10.72, -11.27 8.68, -12.06 7.61 M-2.53 13.1 C-6.08 11, -10.29 8.77, -12.76 6.67 M-12.93 7.4 C-10.55 5.68, -8.05 2.21, 0.92 -1.64 M-12.61 7.3 C-8.09 3.66, -3.5 1.38, -0.49 -0.96 M-0.43 -1.18 C-0.43 -1.18, -0.43 -1.18, -0.43 -1.18 M-0.43 -1.18 C-0.43 -1.18, -0.43 -1.18, -0.43 -1.18" stroke="#d484a2" stroke-width="1" fill="none"></path></g><g transform="translate(322.43240291789425 161.0891400589062) rotate(0 -12.10447578642129 18.53845661259784)"><path d="M-25.87 35.08 L-23.14 21.65 L-12.93 30.57 L-24 35.15" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M-27.22 37.57 C-23.68 31.33, -22.93 29.1, -23.75 22.59 M-25.79 37.17 C-24.71 32.15, -22.9 26.85, -22.81 21.46 M-21.65 23.16 C-19.4 24.77, -15.32 28.38, -11.51 30.31 M-22.83 21.39 C-18.27 24.87, -14.26 28.33, -12.22 29.37 M-12.38 30.09 C-15.38 31.36, -18.37 31.1, -24.4 36.19 M-12.07 29.99 C-17 31.72, -21.88 34.99, -25.81 36.87 M-25.75 36.65 C-25.75 36.65, -25.75 36.65, -25.75 36.65 M-25.75 36.65 C-25.75 36.65, -25.75 36.65, -25.75 36.65" stroke="#d484a2" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(513.1633226193487 274.8895248256623) rotate(0 -15.227903994172777 22.91884061917662)"><path d="M0.49 -0.3 C-4.65 7.31, -25.98 38.49, -30.94 46.14" stroke="#d484a2" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g><g transform="translate(513.1633226193487 274.8895248256623) rotate(0 -15.227903994172777 22.91884061917662)"><path d="M-1.46 0.36 L-0.55 14.88 L-12.48 6.43 L2.07 -1.58" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M0.11 -1.02 C0.11 5.37, -1.3 8.74, -2.39 14.59 M-2.91 14.13 C-4.53 12.57, -6.16 12.34, -13.35 7.06 M-12.01 8.74 C-9.04 4.55, -4.18 1.91, 0.74 -0.43 M0.49 -0.3 C0.49 -0.3, 0.49 -0.3, 0.49 -0.3" stroke="#d484a2" stroke-width="1.5" fill="none"></path></g><g transform="translate(513.1633226193487 274.8895248256623) rotate(0 -15.227903994172777 22.91884061917662)"><path d="M-32.89 46.8 L-27.29 31.69 L-18.2 37.41 L-29.36 44.86" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M-31.32 45.42 C-30.07 43.16, -30.12 37.9, -29.13 31.4 M-29.65 30.94 C-26.46 32.64, -23.27 35.66, -19.06 38.05 M-17.73 39.73 C-23.83 40.71, -27.98 43.48, -30.69 46.01 M-30.94 46.14 C-30.94 46.14, -30.94 46.14, -30.94 46.14" stroke="#d484a2" stroke-width="1.5" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(507.9195543697307 208.18425947193066) rotate(0 -19.72082627662411 -25.033050065363796)"><path d="M-0.13 -0.14 C-6.59 -8.63, -32.93 -41.55, -39.31 -49.93 M-1.66 -1.26 C-7.7 -9.07, -30.84 -40.6, -37.1 -48.64" stroke="#d484a2" stroke-width="1" fill="none"></path></g><g transform="translate(507.9195543697307 208.18425947193066) rotate(0 -19.72082627662411 -25.033050065363796)"><path d="M0.86 -1.47 L-11.9 -7.01 L-2.85 -15.98 L1.82 0.14" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M-0.31 -1.34 C-4.18 -1.95, -8.11 -4.2, -12.8 -8.22 M-0.86 -0.44 C-3.98 -2.57, -8.14 -4.09, -13.79 -7.3 M-14.48 -6.6 C-10.3 -9.1, -8.96 -10.69, -4.53 -15.21 M-13.82 -6.78 C-11.36 -8.54, -8.25 -10.33, -3.33 -14.62 M-3.58 -15.4 C-2.58 -10.58, -0.56 -2.52, 0.59 -0.63 M-3.32 -14.99 C-3.07 -10.52, -1.97 -5.88, -0.3 0.5 M-0.13 -0.14 C-0.13 -0.14, -0.13 -0.14, -0.13 -0.14 M-0.13 -0.14 C-0.13 -0.14, -0.13 -0.14, -0.13 -0.14" stroke="#d484a2" stroke-width="1" fill="none"></path></g><g transform="translate(507.9195543697307 208.18425947193066) rotate(0 -19.72082627662411 -25.033050065363796)"><path d="M-36.1 -49.98 L-22.23 -41.71 L-33.26 -35.21 L-35.14 -48.36" stroke="none" stroke-width="0" fill="#d484a2" fill-rule="evenodd"></path><path d="M-37.27 -49.84 C-34.3 -46.94, -31.5 -45.7, -23.12 -42.92 M-37.82 -48.94 C-32.98 -46.87, -29.13 -44.24, -24.11 -42 M-24.8 -41.3 C-24.88 -40.41, -27.9 -38.64, -34.94 -34.43 M-24.15 -41.48 C-26.72 -39.46, -28.77 -37.27, -33.74 -33.85 M-33.99 -34.62 C-35.51 -41.1, -36.02 -44.39, -36.38 -49.14 M-33.73 -34.22 C-35.53 -38.95, -36.48 -43.5, -37.26 -48 M-37.1 -48.64 C-37.1 -48.64, -37.1 -48.64, -37.1 -48.64 M-37.1 -48.64 C-37.1 -48.64, -37.1 -48.64, -37.1 -48.64" stroke="#d484a2" stroke-width="1" fill="none"></path></g></g><mask></mask><g transform="translate(291.73376846313477 18.555526733398438) rotate(0 99 38)"><text x="0" y="20.333333333333332" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">Vendor 为第三方服务</text><text x="0" y="45.666666666666664" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">主要为请求 api，云服</text><text x="0" y="71" font-family="Cascadia, Segoe UI Emoji" font-size="19.031019056165494px" fill="#808080" text-anchor="start" style="white-space: pre;" direction="ltr">务，插件库等</text></g></svg>

<style>
  .svg-logic {
    max-width: 100%;
    max-height: 80%;
  }
</style>

---

# Application Services

The user primarily interacts with the home, and the popup is considered a simplified interface for the home. Therefore, this section only discusses the interaction between the user and the home. <br />
This section involves an introduction to parts of the user manual.

The home provides the following options:

- User <br />
  Although ctodo does not have a user system, it still provides some convenient interfaces such as cloud services and AnonymousUserAgent.
- Data <br />
  Interfaces related to data.
- Page <br />
  Interfaces related to page management, including local storage and web caching.
- Plugin <br />
  This is a special interface for extending the functionality of ctodo.

The purpose of this separation is to facilitate better data export and data separation for users.

---

# Other Features

- I added a dynamic color scheme feature to cTodo awww
- ~~You can find it in the settings in the future~~
- Planning to add an atomic function for rules (referencing PowerToys)
- i18n
- ...

---

# User Guide (Draft)

In principle, it is better to create a setupWizard view than to draft a user guide manual (this part is already on the roadmap). However, here is a brief introduction.

## Overview

cTodo is a web extension application that integrates pomodoro timers, to-do schedules, and website blocking. Its goal is to help users better manage their time, schedule reminders, and improve work efficiency while using the browser.

---
hideInToc: true
---

# User Guide (Draft)

## Relevant Concepts

- To-Do: Some schedules or non-scheduled tasks, with forward counting, backward counting, or no counting, periodic or non-periodic, can all be treated as to-dos.
- Goal: Goals are not explicitly displayed as to-dos but are shown in the popup and home. In other words, they are long-term schedules.
- Blocklist: A series of related rules used to block or allow websites, with some built-in rules.

---
hideInToc: true
---

# User Guide (Draft)

If you have used a pomodoro todo before, the usage of this application should not be unfamiliar to you.

## Basic Features

In the setup interface, you can choose to create a new to-do, goal, or blocklist. In the home interface, you can view all the to-dos, goals, and blocklists.

---
hideInToc: true
---

# User Guide (Draft)

Currently, only the interface for color schemes is provided, and there is no clear idea for layout schemes yet.

## Personalization

- Automatically adjust the color scheme after providing a background image.
- Provide a custom scheme for each to-do card.

---
hideInToc: true
---

# User Guide (Draft)

I'm too lazy to write, as long as you can understand it.

## Advanced Features

- Rule subscription
- Cloud services
- Plugin system

---
hideInToc: true
---

# User Guide (Draft)

## Help and Feedback

You can access the help page and user documentation in the setup interface, as well as find the corresponding options in the home interface to provide feedback to the author.

---
layout: center
---

# End

Thank you for watching.
