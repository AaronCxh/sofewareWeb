<template>
  <div class="artilce-detail layout-min-height">
    <div class="container-sm">
      <div class="artilce-banner">
        <img
          class="lazyload img-responsive"
          src="~assets/images/ball-loading.svg"
          data-src="https://cdn.macwk.com/public/uploads/_/originals/macos-file-damage-main.jpg"
          alt=""
        />
      </div>
      <div class="artilce-content">
        <h1>
          xxx.app 已损坏，无法打开，你应该将它移到废纸篓/打不开
          xxx，因为它来自身份不明的开发者解决方法
        </h1>
        <div class="flex-box align-center">
          <img
            class="avatar"
            src="~assets/images/special-photo-edit.jpg"
            alt=""
          />
          <div class="con">
            <div class="name">Pertim</div>
            <div class="time">2021-09-4</div>
          </div>
        </div>
        <blockquote class="summary">
          <div class="text-muted">
            刚用 macOS 的小伙伴或者在更新某个系统版本后运行 App
            会提示提示【xxx已损坏，无法打开，你应该将它移到废纸篓解决办法】、【打不开
            xxx，因为它来自身份不明的开发者】，【打不开xxxx，因为 Apple
            无法检查其是否包含恶意软件】下面小编就教大家如何修复。
          </div>
        </blockquote>
        <div class="content-markdown">
          <h2 id="常见的几种报错">常见的几种报错</h2>
          <ul>
            <li>xxx已损坏，无法打开，你应该将它移到废纸篓解决办法</li>
            <li>xxx已损坏，无法打开，你应该将它移到废纸篓解决办法</li>
            <li>xxx已损坏，无法打开，你应该将它移到废纸篓解决办法</li>
            <li>xxx已损坏，无法打开，你应该将它移到废纸篓解决办法</li>
            <li>xxx已损坏，无法打开，你应该将它移到废纸篓解决办法</li>
          </ul>
          <h2 id="为什么会出现？">为什么会出现？</h2>
          <p>这是 macOS 启用了新的安全机制的问题。</p>
          <p>
            苹果默认是只允许安装自家【App
            Store】来源的应用，如果你想安装第三方的应用，那么需要在【系统偏
            好设置 -&gt; 安全性与隐私 -&gt; 通用】中勾选【App Store
            和被认可的开发者】选项。而被认可的开发者是需要购买苹果的企业证书对应用进行签名，然后再提交给苹果审核才可以，这对破解应用来说很不现实，因为破解应用必定会修改应用的文件从而导致签名失效而运行显示【已损坏】。另外一些开源免费类应用没有收益（用户主动打赏太难了），所以开发者一般也不会购买证书签名。
          </p>
          <p>
            解决方法就是去开启【任何来源】选项了，但是 macOS
            默认是隐藏了这个设置的，需要用户手动通过终端执行命令行代码来开启。
          </p>
          <p>下面就让 MacWk.com 教大家使用命令行代码开启隐藏的任何来源选项。</p>
          <h2 id="开启任何来源（主要）">开启任何来源（主要）</h2>
          <p>
            先打开
            <code>系统偏好设置 -&gt; 安全与隐私 -&gt; 通用</code>
            选项卡，检查是否已经启用了 <code>任何来源</code> 选项。
          </p>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/check-macos-gatekeeper-status-01.jpg"
              alt=""
            />
          </p>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/check-macos-gatekeeper-status-02.jpg"
              alt=""
            />
          </p>
          <p>如果没有这个选项，复制以下面的命令：</p>
          <pre
            class="language-bash"
          ><code class="language-bash">sudo spctl --master-disable</code></pre>
          <p>打开<code>终端</code>：</p>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/disabled-macos-gatekeeper-open-terminal.app.jpg"
              alt=""
            />
          </p>
          <p>将刚刚复制的命令粘贴到终端中。</p>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/disabled-macos-gatekeeper-step-02.jpg"
              alt=""
            />
          </p>
          <p>然后按下键盘的回车键（return）</p>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/disabled-macos-gatekeeper-step-03.jpg"
              alt=""
            />
          </p>
          <p>输入密码</p>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/disabled-macos-gatekeeper-step-04.jpg"
              alt=""
            />
          </p>
          <p>恭喜您，<code>您已成功开启任何来源</code>。<br /><br /></p>
          <p>如果你是在 MacWk 安装软件的时候出现了下图的这个提示：</p>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/disabled-macos-gatekeeper-step-09.jpg"
              alt=""
            />
          </p>
          <p>
            在开启任何来源后，只需要在 Dmg
            安装包界面的空白处右键，然后点击推出，再重新运行一下 DMG
            安装包就可以正常安装啦，如下图：
          </p>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/disabled-macos-gatekeeper-step-06.jpg"
              alt=""
            />
          </p>
          <p>到这里一般情况下 85% 的应用都可以安装运行了。</p>
          <p>
            然而有的应用开启了任何来源还是不行，这是因为苹果进一步收缩了对未签名应用的权限，这时候就需要过终端执行命令行代码来绕过应用签名认证啦。下面
            MacWk.com 就教大家通过命令绕过苹果的公证 Gatekeeper。
          </p>
          <p>来，让我们继续往下看。</p>
          <p><br /><br /></p>
          <hr />
          <br />
          <br />
          <p></p>
          <h2 id="绕过公证（扩展）">绕过公证（扩展）</h2>
          <p>打开终端，输入以下命令：</p>
          <pre
            class="language-bash"
          ><code class="language-bash">sudo xattr -rd com.apple.quarantine /Applications/xxxxxx.app</code></pre>
          <p>
            将上面的 <code>xxxxxx</code>.app 换成你的App名称，比如
            <code>Sketch.app</code>
          </p>

          <pre
            class="language-bash"
          ><code class="language-bash">sudo xattr -rd com.apple.quarantine /Applications/Sketch.app</code></pre>
          <p>或者复制以下命令粘贴到终端后</p>
          <pre
            class="language-bash"
          ><code class="language-bash">sudo xattr -rd com.apple.quarantine </code></pre>
          <p>
            打开Finder（访达），点击左侧的
            <code>应用程序</code
            >，将应用拖进终端中，然后按键盘的回车键（return），输入密码，再按回车键，完成。
          </p>
          <blockquote>
            <p>注意 <code>quarantine</code> 后面必须有个空格</p>
          </blockquote>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/mac-catalina-10.15-file-damage-03.jpg"
              alt=""
            />
          </p>
          <p>
            好了再看一下是不是可以打开APP了！到这里一般情况下 90%
            的应用都可以安装运行了（在 MacWk 下载安装的几乎不会有这种情况）
          </p>
          <p>如果还不行，那就需要对应用进行本地签名操作了！</p>
          <h2 id="应用签名（扩展）">应用签名（扩展）</h2>
          <ol>
            <li>安装Command Line Tools 工具</li>
          </ol>
          <p>打开终端工具输入如下命令：</p>
          <pre
            class="language-bash"
          ><code class="language-bash">xcode-select --install</code></pre>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/macos-beta-damage-01.jpg"
              alt=""
            />
          </p>
          <ol start="2">
            <li>
              <p>
                弹出安装窗口后选择<code>继续安装</code>，安装过程需要几分钟，请耐心等待。如果安装的时候提示“不能安装该软件，因为当前无法从软件更新服务器获得”，请按这篇教程操作：<a
                  href="https://www.macwk.com/article/macos-command-line-tools-cannot-be-installed"
                  >点我查看</a
                >
              </p>
            </li>
            <li><p>打开终端工具输入并执行如下命令对应用签名：</p></li>
          </ol>
          <pre
            class="language-bash"
          ><code class="language-bash">sudo codesign --force --deep --sign - (应用路径)</code></pre>
          <blockquote>
            <p>
              应用路径：打开访达（Finder），点击左侧导航栏的
              <code>应用程序</code
              >，找到相关应用，将它拖进终端命令<code>-</code>的后面，然后按下回车即可，注意最后一个
              <code>-</code>后面有一个空格。
            </p>
          </blockquote>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/macos-beta-damage-02.jpg"
              alt=""
            />
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/macos-beta-damage-03.jpg"
              alt=""
            />
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/macos-beta-damage-04-1.jpg"
              alt=""
            />
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/macos-beta-damage-05.jpg"
              alt=""
            />
          </p>

          <p>正常情况下只有一行提示，即成功：</p>
          <pre
            class="language-success"
          ><code class="language-success">/文件位置 : replacing existing signature</code></pre>
          <p>
            <img
              src="https://cdn.macwk.com/public/uploads/_/originals/macos-beta-damage-06.jpg"
              alt=""
            />
          </p>
          <h5 id="如遇如下错误：">如遇如下错误：</h5>
          <pre
            class="language-error"
          ><code class="language-error">/文件位置 : replacing existing signature/文件位置 : resource fork,Finder information,or similar detritus not allowed</code></pre>
          <ol>
            <li>先在终端执行：</li>
          </ol>
          <pre
            class="language-bash"
          ><code class="language-bash">xattr -cr /文件位置（直接将应用拖进去即可）</code></pre>
          <ol start="2">
            <li>然后再次执行如下指令即可：</li>
          </ol>
          <pre
            class="language-bash"
          ><code class="language-bash">codesign --force --deep --sign - /文件位置（直接将应用拖进去即可）</code></pre>

          <h2 id="还有问题？">还有问题？</h2>
          <h4 class="text-danger">
            以上操作如果还不能解决，那就需要尝试关闭SIP系统完整性保护了。
          </h4>
          <p>
            <a
              href="https://www.macwk.com/article/sipmac"
              target="_blank"
              class="btn btn-outline-primary"
              >关闭SIP教程</a
            >
          </p>
        </div>
      </div>
      <aside v-show="show">
        <a-anchor class="my-anchor" :offsetTop="50" @change="onChange">
          <a-anchor-link :href="`#${$route.path}#${h2}`" :title="h2" v-for="h2 in h2s" :key="h2" />
        </a-anchor>
      </aside>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "artilceDetail",
  layout: "layout",
  data() {
    return {
      h2s: [],
      show: false
    }
  },
  mounted() {
    const h2s = document.querySelectorAll('.content-markdown h2');
    h2s.forEach((h2) => {
      this.h2s.push(h2.id)
    })
  },
  methods: {
    onChange(currentActiveLink) {
      console.log(currentActiveLink)
      if (!currentActiveLink) {
        this.show = false
      } else {
        this.show = true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";

.artilce-detail {
  padding: 32px 0;
  .artilce-banner {
    .lazyload {
      height: 384px;
      object-fit: scale-down;
    }
  }
  .artilce-content {
    color: rgba(160, 180, 200, 0.9);
    padding: vw(48) vw(144);
    font-family: Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    h1 {
      color: $color-fontColor;
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 32px;
    }
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 16px;
    }
    .name {
      font-size: 15px;
      font-weight: 600;
    }
    .time {
      font-size: 14px;
      font-weight: 500;
    }
    .summary {
      margin-top: 32px;
      &::before {
        content: "“";
        display: inline-block;
        font-size: 4rem;
        line-height: 0.2;
        font-weight: 600;
        padding-top: 0px;
        vertical-align: -30px;
        opacity: 0.1;
      }
      .text-muted {
        color: $color-fontColor;
        opacity: 0.7;
        font-style: italic;
        line-height: 2;
      }
    }
    .content-markdown {
      margin-top: 32px;
      color: $color-fontColor;
      h2 {
        position: relative;
        font-size: 24px;
        display: table;
        margin-top: 32px;
        margin-bottom: 32px;
        color: inherit;
        font-weight: 600;
        &:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          height: 4px;
          width: 80%;
          background: $color-default;
        }
      }
      ul,
      ol {
        list-style-position: inside;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 4px;
      }
      li {
        padding-top: 8px;
        padding-bottom: 8px;
      }
      p {
        line-height: 2;
        padding-top: 4px;
        padding-bottom: 4px;
        margin-bottom: 4px;
      }
      code {
        color: #50a1ff;
        background-color: #16202f;
        font-size: 13px;
        border-radius: 3px;
        overflow: auto;
      }
      pre {
        position: relative;
        border-radius: 4px;
        padding: 0;
        background: #eff2f4;
        border: 0;
        margin-top: 8px;
        margin-bottom: 16px;
        overflow: unset;
        code {
          background: #25354e;
          padding: 12px 16px;
          display: block;
          line-height: 1.75;
          color: $color-fontColor;
        }
      }
      img {
        display: block;
        margin: 25px auto;
        max-width: 100%;
        height: auto;
        border: 0;
        border-radius: 5px;
      }
      h4 {
        margin-bottom: 8px;
        margin-top: 16px;
        font-weight: 600;
      }
      .btn {
        padding: 6px 12px;
        border: 1px solid $color-default;
        display: inline-block;
        color: $color-default;
        border-radius: 3px;
        font-weight: 600;
        &:hover {
          background: $color-default;
          color: #fff;
        }
      }
    }
  }
}
aside {
  position: fixed;
  z-index: 999;
  left: calc(50% - 550px);
  top: 100px;
}
</style>
<style lang="scss">
@import "@/scss/var/var";
@import "@/scss/mixins/mixins";
.my-anchor {
  .ant-anchor-wrapper {
    background: transparent;
    a {
      color: $color-fontColor;
    }
    .ant-anchor-link-active {
      a {
        color: $color-default;
      }
    }
    .ant-anchor-ink {
      &::before {
        display: none !important;
      }
    }
  }
}
</style>
