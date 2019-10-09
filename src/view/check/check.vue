<template>
  <div id="container">
    <div id="top">
      <div id="searcBtns">
        <Select v-model="inputMode" style="width: 150px">
          <Option value="1">审核记录ID</Option>
          <Option value="2">申请人ID和文件ID</Option>
        </Select>
        <div v-if="inputMode == 1" class="inputgroup">
          <Input
            v-model="cr_id"
            id="search"
            size="default"
            @on-change="handleChange"
            placeholder="请输入审核记录ID"
          ></Input>
        </div>
        <div v-else class="inputgroup">
          <Input
            v-model="cr_applicant"
            id="search"
            size="default"
            @on-change="handleChange"
            placeholder="请输入申请人ID"
          ></Input>
          <Input
            v-model="file_id"
            id="search"
            size="default"
            @on-change="handleChange"
            placeholder="请输入文件ID"
          ></Input>
        </div>
        <Button icon="ios-search" @click="searchCheck"></Button>
      </div>
      <Button type="info" @click="handleAddUser">新增用户</Button>
    </div>
    <div v-if="loading" class="wrapper">
      <Col class="demo-spin-col" span="8">
        <Spin fix>
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
      </Col>
    </div>
    <div v-else class="wrapper">
      <Table :columns="columns10" :data="data2Display" width="1200"></Table>
      <Page
        :current="1"
        :total="$store.getters.getCheckList.length"
        @on-change="changePage"
        simple
        id="page"
      />
    </div>
  </div>
</template>
<script>
import expandRow from "./table-expand.vue";
export default {
  components: { expandRow },
  data() {
    return {
      inputMode: "1",
      curIndex: 0,
      cr_id: "",
      cr_applicant: "",
      file_id: "",
      statusArr: ["未审核", "通过", "不通过"],
      columns10: [
        {
          title: "审核记录Id",
          key: "cr_id"
        },
        {
          title: "密钥文件ID",
          key: "file_id"
        },
        {
          title: "申请者ID",
          key: "cr_applicant"
        },
        {
          title: "审核者ID",
          key: "cr_reviewer"
        },
        {
          title: "审核状态",
          key: "cr_status",
          width: 100,
          align: "center"
        },
        {
          title: "申请时间",
          key: "cr_applytime",
          width: 150,
          align: "center"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.edit(params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.getCheckList.length == 0;
    },
    data2Display() {
      return this.$store.getters.getCheckList
        .slice(this.curIndex * 10, this.curIndex * 10 + 10)
        .map(el => {
          el.cr_status = this.statusArr[parseInt(el.cr_status)];
          return el;
        })
        .filter(val => {
          return val.cr_id;
        });
    }
  },
  beforeMount() {
    this.$store.dispatch("pullCheckList");
  },
  methods: {
    changePage(num) {
      this.curIndex = num - 1;
    },
    handleChange(event) {
      if (this.inputMode == "1") {
        if (this.cr_id) {
          return;
        } else {
          this.$store.dispatch("resetCheckList");
        }
      } else {
        if (this.cr_applicant || this.file_id) {
          return;
        } else {
          this.$store.dispatch("resetCheckList");
        }
      }
    },
    searchCheck() {
      if (this.inputMode == "1") {
        if (this.cr_id == "") {
          return;
        }
      } else {
        if (this.cr_applicant == "" || this.file_id == "") {
          return;
        }
      }
      switch (this.inputMode) {
        case "1":
          this.$store.dispatch("pullCheckById", this.cr_id);
          break;
        case "2":
          this.$store.dispatch("pullCheckByApplicantAndFileId", {
            app: this.cr_applicant,
            id: this.file_id
          });
          break;
        default:
          break;
      }
    },
    edit(data) {
      this.$router.push({
        name: "checkEdit",
        params: {
          userInfo: data
        }
      });
    },
    remove(data) {
      // todo
    },
    handleAddUser() {
      this.$router.push({ name: "userAdd" });
    }
  }
};
</script>
<style scoped>
#container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#top {
  display: flex;
  align-items: center;
}
#search {
  width: 60%;
  margin: 40px;
  margin-left: 17%;
  margin-right: 30px;
}
#searcBtns {
  width: 60%;
  margin: 0 5% 0 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.inputgroup {
  width: 800px;
  display: flex;
  justify-content: center;
}
#page {
  left: 50%;
  margin: 60px auto 50px;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 616px;
  width: 1500px;
  position: relative;
  border: 1px solid #eee;
}
</style>