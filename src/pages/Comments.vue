<template>
  <div>
    <div v-for="comment in comments">
      <div>{{comment.body}} <a href="#" @click.prevent="remove(comment)">удалить</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comments",
    data(){
      return {
        comments: [
          {
            "id": 1,
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            "id": 2,
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
          },
          {
            "id": 3,
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
          },
          {
            "id": 4,
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
          },
          {
            "id": 5,
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
          },
          {
            "id": 6,
            "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
          },
          {
            "id": 7,
            "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
          },
          {
            "id": 8,
            "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
          },
          {
            "id": 9,
            "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
          },
          {
            "id": 10,
            "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
          }
        ],
        timeout: 5000,
        deleteList: new Set()
      }
    },
    created(){
      this.websocket = new WebSocket("ws://echo.websocket.org/");
      this.websocket.onmessage = evt => this.deleteFromComments(+evt.data);
    },
    methods: {
      remove({id}){
        this.markForDeletion(id);
        this.sendData(id);
        setTimeout(() => this.deleteFromDeleteList(id), this.timeout);
      },
      markForDeletion(id){
        this.deleteList.add(id);
      },
      sendData(id){
        this.websocket.send(id);
      },
      deleteFromDeleteList(id){
        this.deleteList.delete(id);
      },
      IsInListComment(id){
        return this.deleteList.has(id);
      },
      deleteFromComments(id){
        if(this.IsInListComment(id)){
          this.comments = this.comments.filter(comment => comment.id !== id);
        }
      },
    },
    destroyed(){
      this.websocket.close();
    }
  }
</script>

<style scoped>

</style>
