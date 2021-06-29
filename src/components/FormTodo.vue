<template>
    <div class="form-todo form-group">
            <p>
              <input placeholder="nome" type="text" name="author" class="form-control" v-model="name" />
            </p>
            <p>
              <input placeholder="email" type="text" name="email" class="form-control" v-model="email"/>
            </p>
            <p>
              <textarea placeholder="Comentário" name="message"  class="form-control" v-model="message"></textarea>
            </p>
            <div class="text-center">
              <v-btn
              class="btn btn-primary"
              color="teal lighten-2"
              @click="addComments"
    >
              Comentar
              </v-btn>
              
            </div>
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
          if (this.message.trim() === '' && this.message.trim() === '' && this.email.trim() === '') {
            /* Evita que um nome null ou comentario null seja submitido*/
            
            return;
          }

          this.$emit('add-todo', {
              name: this.name,
              message: this.message,
              email: this.email,
          });

          this.name = '';
          this.message = '';
          this.email = '';
          /*  remove os nome e comentario assim que submit*/

          this.addComments (event); {
          // `this` dentro de métodos aponta para a instância Vue
          alert('Comentario efetuado com sucesso!')
          // `event` é o evento DOM nativo

          }
        },
  },
        

        }
        
</script>
<style>


</style>
