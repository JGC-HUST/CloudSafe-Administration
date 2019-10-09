<template>
  <div id="container">
    <div id="top">
      <Input v-model="inputValue" id="search" size="default" @on-change="handleChange">
        <Select v-model="selectValue" slot="prepend" style="width: 100px">
          <Option value="uid">用户ID</Option>
          <Option value="uphone">用户电话</Option>
          <Option value="uname">用户名</Option>
          <Option value="uemail">用户邮箱</Option>
        </Select>
        <Button slot="append" icon="ios-search" @click="searchUser"></Button>
      </Input>
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
        :total="$store.getters.getUserList.length"
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
      curIndex: 0,
      inputValue: "",
      selectValue: "uid",
      columns10: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "Id",
          key: "user_id"
        },
        {
          title: "用户名",
          key: "user_name"
        },
        {
          title: "电话",
          key: "user_phone"
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
      return this.$store.getters.getUserList.length == 0;
    },
    data2Display() {
      return this.$store.getters.getUserList
        .slice(this.curIndex * 10, this.curIndex * 10 + 10)
        .filter(val => {
          return val.user_id;
        });
    }
  },
  beforeMount() {
    this.$store.dispatch("pullUserList");
  },
  methods: {
    changePage(num) {
      this.curIndex = num - 1;
    },
    handleChange(event) {
      if (this.inputValue) {
        return;
      } else {
        this.$store.dispatch("resetUserList");
      }
    },
    searchUser() {
      console.log(this.selectValue);
      if (this.inputValue == "") {
        return;
      }
      switch (this.selectValue) {
        case "uid":
          this.$store.dispatch("pullUserById", this.inputValue);
          break;
        case "uname":
          this.$store.dispatch("pullUserByName", this.inputValue);
          break;
        case "uphone":
          this.$store.dispatch("pullUserByPhone", this.inputValue);
          break;
        case "uemail":
          this.$store.dispatch("pullUserByEmail", this.inputValue);
          break;
        default:
          break;
      }
    },
    edit(data) {
      this.$router.push({
        name: "userEdit",
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