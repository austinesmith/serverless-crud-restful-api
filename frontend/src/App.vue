<template>
  <v-app>
    <!-- Toolbar -->
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase word-wrap:">
        <span class="font-weight-bold">SEVERLESS REST API: </span><br>
        <span>CREATE - READ - UPDATE - DELETE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://portfolio.austinesmith.com/" target="_self">
        <span class="mr-m10">RETURN</span>
        <v-icon>mdi-reply</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- <v-toolbar
          
          dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar> -->

    <!-- Content -->
    <v-content>
          <v-card
            color="#385F73"
            dark
            flat
            class="ma-2"
            >

            <v-card-title class="headline">This project consisted of creating a RESTful web API using API Gateway, Lambda, and DynamoDB and then creating a front end in Vue.js to implement it. The purpose is to create a dynamic application with an entirely serverless architecture in using AWS (Amazon Web Services).</v-card-title> 

            <v-card
              class="d-flex justify-space-around mb-6"
              :color='blue-darken-3'
              flat
                tile
                >
                
              <v-card
          class="pa-2"
          outlined
          tile
        >
          <img src="./assets/apigw.png" class="toptopimg">
        </v-card>

        <v-card
          class="pa-2"
          outlined
          tile
        >
          <img src="./assets/lambda.png" class="toptopimg">
        </v-card>

        <v-card
          class="pa-2"
          outlined
          tile
        >
          <img src="./assets/ddb2.png" class="toptopimg">
        </v-card>

    
              
              
    </v-card>
              

            <v-card-text>
              This website is served as a static application powered by the Vue.js JavaScript framework.
              The user interface was built using a component framework called Vuetify for responsive design.
              The code uses asynchronous JavaScript to react to user events and deliver dynamic content.
              The web application is stored on a regional AWS object database called S3 (Simple Storage Service).
              Both the application and the API are routed to from an AWS Cloudfront distribution for edge caching.
              AWS API Gateway exceeds at network scaling allowing this architecture to be capable of enormous workloads.
              Operations used to manage the API's database interactions are divided into separate event triggered AWS Lambda functions.
              Each Lambda performs a different database operation based on the C.R.U.D. model (Create, Read, Read-all, Update, and Delete).
              A DynamoDB table is used for it's relaxed NoSQL key/value schema allowing more flexibility in what data can be stored.
              Route53 was used to create a custom domain for the API Gateway and route records in the AWS hosted zone.
              All infrastructure used for this project was written as code using Typescript to leverage automation.
              AWS CDK (Cloud Development Kit) makes it so the AWS Management Console isn't necessary in any stage of development.
              JSON and REST principles are used to enable a stateless transfer between the presentation and application tiers.
              Github Actions are used to seamlessly automate the building and deployment of this application on push.
              NPM (Node Package Manager) and Git are used for configuration management within the application.<br><br>

              <img src="./assets/vue.png" class="topimg">
              <img src="./assets/vuetify.png" class="topimg">
              <img src="./assets/js.png" class="topimg">
              <img src="./assets/s33.png" class="topimg">
              <img src="./assets/cf.png" class="topimg">
              <img src="./assets/apigw.png" class="topimg">
              <img src="./assets/lambda.png" class="topimg">
              <img src="./assets/ddb2.png" class="topimg">
              <img src="./assets/git.png" class="topimg">
              <img src="./assets/ts.png" class="topimg">
              <img src="./assets/cdk.png" class="topimg">
              <img src="./assets/github.png" class="topimg">
              <img src="./assets/npm.png" class="topimg">
              <img src="./assets/cfn.webp" class="topimg">
              <img src="./assets/aws-route53.svg" class="topimg">
              <img src="./assets/json.png" class="topimg">

              </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer><v-btn 
                text
                href="https://github.com/austinesmith/serverless-crud-restful-api"
                >VIEW: GITHUB REPOSITORY</v-btn>
            </v-card-actions>
          </v-card>
<!-- <template>
  

  </template>

      <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="n in length"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
          <v-card flat>
            <v-card-text>
              <v-row
                class="mb-4"
                align="center"
              >
                <v-avatar
                  color="grey"
                  class="mr-4"
                ></v-avatar>
                <strong class="title">Title {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>

  <template>
  <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="n in length"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
          <v-card flat>
            <v-card-text>
              <v-row
                class="mb-4"
                align="center"
              >
                <v-avatar
                  color="grey"
                  class="mr-4"
                ></v-avatar>
                <strong class="title">Title {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template> -->
      <!-- VecTable -->
      <vec-table
        title="Items Table"
        :items="players"
        :headers="vecHeaders"
        @add-item="addPlayer"
        @update-item="updatePlayer"
        @delete-item="deletePlayer"
        
      >
        <template v-slot:list-view="props">
          <list-view :item="props.item"></list-view>
        </template>
        <template v-slot:create-form="props">
          <create-form :item="props.item"></create-form>
        </template>
        <template v-slot:update-form="props">
          <update-form :item="props.item"></update-form>
        </template>
      </vec-table>

      <!-- VexTable -->
      <vex-table module="players" title="vex-table" :headers="vexHeaders">
        <template v-slot:create-form="props">
          <create-form :item="props.item"></create-form>
        </template>
        <template v-slot:update-form="props">
          <update-form :item="props.item"></update-form>
        </template>
      </vex-table>

      <!-- VefTable -->
      <vef-table module="playersFirestore" title="vef-table" :headers="vexHeaders">
        <template v-slot:create-form="props">
          <create-form :item="props.item"></create-form>
        </template>
        <template v-slot:update-form="props">
          <update-form :item="props.item"></update-form>
        </template>
      </vef-table>

   


  <!-- footer -->
  <template>
  <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="n in length"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
          <v-card flat>
            <v-card-text>
              <v-row
                class="mb-4"
                align="center"
              >
                <v-avatar
                  color="grey"
                  class="mr-4"
                ></v-avatar>
                <strong class="title">Title {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

  <!-- footer -->
      <template>
  <v-card>
    <v-footer
      v-bind="localAttrs"
      absolute
      fixed
      :padless="padless"
      class="pt-200"
    >
      <v-card
        flat
        tile
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          Created by Austin Smith — ISC {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>

  </v-card>
</template>

    </v-content>
  </v-app>
</template>

<script>
import ListView from '@/components/ListView.vue'
import CreateForm from '@/components/CreateForm.vue'
import UpdateForm from '@/components/UpdateForm.vue'
export default {
  name: 'App',

  components: { ListView, CreateForm, UpdateForm },
  data: () => {
    return {
      vecHeaders: [
        { text: 'Name', value: 'name' },
        'Surname (not searchable)',
        { text: 'Age', value: 'age', sortable: true },
        { text: 'Country', value: 'country' },
        { text: 'Club', value: 'club', sortable: true }
      ],
      vexHeaders: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        'Surname (not shown)',
        { text: 'Age', value: 'age', sortable: true },
        { text: 'Country', value: 'country' },
        { text: 'Club', value: 'club', sortable: true }
      ],
      players: [
        { id: 0, name: 'Lionel', surname: 'Messi', age: 32, country: 'Argentina', club: 'Barcelona' },
        { id: 1, name: 'Cristiano', surname: 'Ronaldo', age: 34, country: 'Portugal', club: 'Juventus' },
        { id: 2, name: 'Ramiro', surname: 'Funes Mori', age: 28, country: 'Argentina', club: 'Villareal' }
      ]
    }
  },
  methods: {
    addPlayer: function (player) {
      player.id = this.players.length
      this.players.push(player)
    },
    updatePlayer: function (player) {
      this.players = this.players.map(i => i.id === player.id ? player : i)
    },
    deletePlayer: function (player) {
      this.players = this.players.filter(i => i.id !== player.id)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

.topimg {
  width: 50px;
  margin: 10px;
}
.toptopimg {
  height: 100px; 
  margin: 5px;
}
</style>