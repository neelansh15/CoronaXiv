<template>
  <v-app>

      <v-app-bar
        app
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title> Corona Xiv </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-container style="margin-top: 1.5em">
            <v-row>
                <v-col
                    cols="6"
                >
            <v-text-field
                dark
                filled=""
            ></v-text-field>
                </v-col>
                <v-col
                    cols="4"
                >
                <v-btn icon>
                    <v-icon large="">mdi-magnify</v-icon>
                </v-btn>
                </v-col>
                    
            </v-row>
        </v-container>

      </v-app-bar>

    <FrontPage />

  </v-app>
</template>

<script>
import FrontPage from './views/FrontPage'

export default {
    name: 'App',
    components:{
        FrontPage
    }
}
</script>

<style>

</style>