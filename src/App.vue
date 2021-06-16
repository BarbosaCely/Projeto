  <template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="teal lighten-2"
      mini-variant
    >
       <v-avatar size="50">
         <img src="https://i.imgur.com/9uqDi7c.jpeg">

      </v-avatar>       
       <p>
         </p>
         <v-btn
            class="mx-2"
            fab
            small
            color="teal darken-3"
            @click="Lui"
            href="https://i.imgur.com/yZsemM2.jpeg" target="_blank">
            <img src="https://i.imgur.com/THMj3Py.png">
            </v-btn>
 

    </v-navigation-drawer>
        <v-main class="teal lighten-4">
            <v-container>
        <v-row>      
                    <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <comments />
            </v-sheet>

          </v-col>
            <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <socialmidias />
            </v-sheet>
            </v-col>
            </v-row>
 </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Comments from './components/Comments'
import Socialmidias from './components/Socialmidias.vue'
export default {
  name: 'app',
  components: {
    Comments,
    Socialmidias
    
  }
}
</script>

<style>

</style>