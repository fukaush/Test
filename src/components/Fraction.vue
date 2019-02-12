<template>
    <div class="fraction">
        <input class="dividend" type="text"
          v-bind:value="dividend"
          v-on:input="update($event, 'dividend')"
        />
        <input class="divider" type="text"
          v-bind:value="divider"
          v-on:input="update($event, 'divider')"
        />
    </div>
</template>

<script>
    export default {
      name: "Fraction",
      created(){
        this.dividend = this.value.dividend;
        this.divider = this.value.divider;
      },
      data(){
        return {
          dividend: '',
          divider: ''
        }
      },
      methods: {
        update(evt, part){
          const value = evt.target.value;

          const isEmpty = value === '';
          if(isEmpty){
            return;
          }

          const isNumber = !(isEmpty && isNaN(value));
          if(!isNumber){
            return;
          }
          const number = +value;

          const isPositive = number > 0;
          if(!isPositive){
            return;
          }

          const isInteger = Number.isInteger(number);
          if(!isInteger){
            return;
          }

          this.$emit('update:fraction', this.id, value, part)
        },
      },
      props: ['value', 'id']
    }
</script>

<style scoped>
.dividend, .divider {
  display: block;
}
input {
  width: 20px;
}
</style>
