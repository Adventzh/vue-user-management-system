<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <br />
    
    <h1 class="page-header glyphicon glyphicon-user">
      {{ customer.name }}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>&nbsp;
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone">{{ customer.phone }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope">{{ customer.email }}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span>{{ customer.education }}</span>
      </li>
      <li class="list-group-item">
        <span>{{ customer.graduationschool }}</span>
      </li>
      <li class="list-group-item">
        <span>{{ customer.profession }}</span>
      </li>
      <li class="list-group-item">
        <span>{{ customer.profile }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      customer: ""
    };
  },
  methods: {
    fetchCustomers(id) {
      this.$http
        .get("http://localhost:3000/customers/" + id)
        .then(function(response) {
          this.customer = response.body;
        });
    },
    deleteCustomer(id) {
      this.$http
        .delete("http://localhost:3000/customers/" + id)
        .then(function(response) {
          this.$router.push({ path: "/", query: { alert: "用户删除成功！" } });
        });
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-header {
  width: 100%;
}
</style>