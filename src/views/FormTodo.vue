<template>
    <div class="form-todo form-group">
            <p>
              <input placeholder="nome" type="text" name="author" class="form-control" v-model="name" />
            </p>
            <p>
              <input placeholder="email" type="text" name="email" class="form-control" v-model="email"/>
            </p>
            <p>
              <input placeholder="idade" type="number" name="age" class="form-control" v-model="age" minlength="15" maxlength="100"/>
            </p>
            <p>
              <textarea placeholder="Comentário" name="message"  class="form-control" v-model="message"></textarea>
            </p>
            <button v-on:click="addComments" type="submit" class="btn btn-primary">Comentar</button>
          </div>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                message:'',
                email:'',
            }
        },
        methods: {
            addComments() {
          if (this.message.trim() === '' && this.message.trim() === '' && this.age.trim() === '' && this.email.trim() === '') {
            /* Evita que um nome null ou comentario null seja submitido*/
            return;
          }

          this.$emit('add-todo', {
              name: this.name,
              message: this.message,
              age: this.age,
              email: this.email,
          });

          this.name = '';
          this.message = '';
          this.age = '';
          this.email = '';
          /*  remove os nome e comentario assim que submit*/
        },

             

        },

    
    }
</script>
