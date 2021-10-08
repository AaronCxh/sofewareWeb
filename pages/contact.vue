<template>
  <div class="layout-min-height">
    <div class="contact-section">
      <div class="container">
        <div class="hd">
          <h1>{{ data.Title }}</h1>
          <p>{{ data.Summary }}</p>
          <a-row :gutter="30">
            <a-col :span="12" :offset="6">
              <div class="form-group">
                <input
                  ref="input"
                  class="form-control"
                  type="text"
                  :value="data.Email"
                  disabled
                />
                <button class="button button-default" @click="onCopy">
                  复制
                </button>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestSiteConfig } from "@/api/app";

function copy(txt) {
  return new Promise(resolve => {
    let transfer = document.createElement("input");
    document.body.appendChild(transfer);
    transfer.value = txt;
    transfer.focus();
    transfer.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
    }
    transfer.blur();
    document.body.removeChild(transfer);
    resolve();
  });
}
export default {
  name: "contact",
  layout: "layout",
  async asyncData() {
    let data = await requestSiteConfig("contact");
    return { data };
  },
  data() {
    return {
      data: {}
    };
  },
  methods: {
    onCopy() {
      copy(this.$refs.input.value).then(() => {
        this.$message.info({
          content: h => {
            return h("div", { class: "test-class" }, [`复制成功`]);
          },
          duration: 3
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-section {
  padding: 104px 0 48px;
}
.hd {
  text-align: center;
  h1 {
    font-size: 42px;
    color: var(--color-fontColor);
    margin-bottom: 8px;
  }
  p {
    font-size: 20px;
    opacity: 0.7;
    margin-bottom: 40px;
  }
}
.form-group {
  display: flex;
  .form-control {
    height: 64px;
    padding: 8px 24px;
    border: 1px solid rgba(120, 130, 140, 0.09);
    font-size: 20px;
    font-weight: 500;
    flex: 1;
  }
  .button {
    height: 64px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0 24px;
  }
}
</style>
