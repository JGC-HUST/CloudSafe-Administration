<template>
  <div id="container">
    <div id="top">
      <Input v-model="inputValue" id="search" size="default" @on-change="handleChange">
        <Select v-model="selectValue" slot="prepend" style="width: 100px">
          <Option value="kname">密钥名称</Option>
          <Option value="kid">密钥ID</Option>
          <Option value="kuid">用户ID</Option>
        </Select>
        <Button slot="append" icon="ios-search" @click="searchUser"></Button>
      </Input>
      <Button type="info" @click="handleAddUser">新增密钥</Button>
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
        :total="$store.getters.getKeyList.length"
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
      selectValue: "kname",
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
          key: "kfile_id"
        },
        {
          title: "用户Id",
          key: "kfile_user_id",
          width: 300
        },
        {
          title: "密钥名",
          key: "kfile_name",
          width: 300
        },
        {
          title: "密钥类型",
          key: "kfile_type"
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
      return this.$store.getters.getKeyList.length == 0;
    },
    data2Display() {
      return this.$store.getters.getKeyList
        .slice(this.curIndex * 10, this.curIndex * 10 + 10)
        .filter(val => {
          return val.kfile_id;
        });
    }
  },
  beforeMount() {
    this.$store.dispatch("pullKfileList");
  },
  methods: {
    changePage(num) {
      this.curIndex = num - 1;
    },
    handleChange(event) {
      if (this.inputValue) {
        return;
      } else {
        this.$store.dispatch("resetKfileList");
      }
    },
    searchUser() {
      // console.log(this.selectValue);
      // console.log(this.inputValue);
      if (this.inputValue == "") {
        return;
      }
      switch (this.selectValue) {
        case "kname":
          this.$store.dispatch("pullKfileByName", this.inputValue);
          break;
        case "kid":
          this.$store.dispatch("pullKfileById", this.inputValue);
          break;
        case "kuid":
          this.$store.dispatch("pullKfileByUID", this.inputValue);
          break;
        default:
          break;
      }
    },
    edit(data) {
      this.$router.push({
        name: "kfileEdit",
        params: {
          kfileInfo: data
        }
      });
    },
    remove(data) {
      // todo
    },
    handleAddUser() {
      this.$router.push({ name: "kfileAdd" });
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