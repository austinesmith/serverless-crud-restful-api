<template>
  <v-card>
    <!-- TITLE -->
    <v-card-title>
      <span class="headline">Add a new item</span>
    </v-card-title>

    <!-- FORM -->
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field v-model="editableItem.name" label="name"></v-text-field>
            </v-flex>

            <v-flex xs12 md4>
              <v-text-field v-model="editableItem.age" type="number" label="age"></v-text-field>
            </v-flex>

            <v-flex xs12 md4>
              <v-text-field v-model="editableItem.jobtitle" label="jobtitle"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md6>
              <v-text-field v-model="editableItem.company" label="company"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>

    <!-- FORM ACTIONS -->
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click.prevent="exit">Close</v-btn>
      <v-btn color="blue darken-1" flat @click.prevent="createAndExit">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { VecFormMixin } from '@tmigone/vuetify-easy-crud'
// import { VecFormMixin } from '../../../vuetify-easy-crud/dist/vuetify-easy-crud.common.js'

export default {
  mixins: [ VecFormMixin ]
}
</script>
