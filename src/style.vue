<template>

<v-app id="inspire">
    <v-app-bar
      app
      color="teal"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'teal darken-4' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="teal lighten-4"
      >
         <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}</v-tabs>

       <v-avatar>
      <img
        src="https://i.imgur.com/9uqDi7c.jpeg"
        alt="Lui"
      >
    </v-avatar>
    </v-app-bar>
    

    <v-main class="teal lighten-4">
      <v-container>
        <v-row>
  

          <v-col
            centered
            cols="12"
            sm="12"
          >
            <v-sheet
              centered
              min-height="70vh"
              rounded="lg"
            >
          
            </v-sheet>
          </v-col>

         
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  
</template>
<script>
export default {
    data: () => ({
      links: [
    
        'Profile',
        'Comments',
      ],
    }),
  }
</script>

 
