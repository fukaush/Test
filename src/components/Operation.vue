<template>
    <div class="operation">
      <input type="text"
         v-bind:value="value"
         v-on:input="update"
      />
    </div>
</template>

<script>
    export default {
      name: "Operation",
      created(){
        console.log(this.id)
      },
      methods: {
        update(e){
          this.$emit('update:operation', this.id, e.target.value)
        }
      },
      props: ['value', 'id'],
    }
</script>

<style scoped>
input {
  width: 20px;
  height: 40px;
  font-size: 20px;
}
</style>
