<template>
  <v-app>
    <!-- Toolbar -->
    <v-toolbar app dark lighten>
      <img src="./assets/awslite.png" height="80%" padding="20px">
      <v-toolbar-title class="headline text-uppercase">
        
        <span>SERVERLESS WEB APP</span>
      </v-toolbar-title> 
    <v-toolbar-text>
    </v-toolbar-text>
      <v-spacer></v-spacer>
      <v-btn color="#fc9b00" href="https://portfolio.austinesmith.com/" target="_self">
        <span class="mr-m10"><div style="color:black;"><Strong>RETURN</Strong></div></span>
        <v-icon>open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Content -->
    <v-content>
          <v-card
            color="#385F73"
            dark
            elevation="2"
            class="ma-2"
            >

            <v-card-title class="headline "><Strong>This project demonstrates a RESTful web API built with API Gateway, Lambda, and DynamoDB.  This web page is an implementation of that API with a static Vue.js application hosted on S3. The result is a dynamic website with a completely serverless architecture fully managed by AWS (Amazon Web Services).</Strong><br></v-card-title>

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
          color="#2d3642"
        >
          <img src="./assets/apigw.png" class="toptopimg">
        </v-card>

        <v-card
          class="pa-2"
          outlined
          tile
          color="#252f3c"
        >
          <img src="./assets/lambda.png" class="toptopimg">
        </v-card>

        <v-card
          class="pa-2"
          outlined
          tile
          color="#1f2937"
        >
          <img src="./assets/ddb2.png" class="toptopimg">
        </v-card>

    
              
              
    </v-card>
              

            <v-card-text>
              <br>This website is served as a static application powered by the <Strong>Vue.js</Strong> JavaScript framework.
              The user interface was built using a material design framework called <Strong>Vuetify</Strong> for responsive web applications.
              The code uses asynchronous <Strong>JavaScript</Strong> to react to user events and deliver dynamic content.
              The web application is stored on a regional AWS object database called <Strong>S3</Strong> (Simple Storage Service).
              Both the application and the API are routed to from an AWS Cloudfront distribution for edge caching.
              AWS <Strong>API Gateway's</Strong> exceptional network scaling is what allows this architecture to be capable of enormous workloads.
              Operations used to execute the API's database interactions are divided into separate event triggered AWS <Strong>Lambda</Strong> functions.
              Each Lambda performs a different database operation based on the <Strong>C.R.U.D.</Strong> model (Create, Read, Read-all, Update, and Delete).
              A <Strong>DynamoDB Table</Strong> is used for it's relaxed NoSQL key/value schema allowing more flexibility in what data can be stored.
              <Strong>Route53</Strong> is used to create a custom domain for the API Gateway and route records in the AWS hosted zone.
              All infrastructure created for this project was written entirely in code using <Strong>Typescript</Strong> to leverage automation.
              AWS <Strong>CDK</Strong> (Cloud Development Kit) makes it so the AWS Management Console isn't necessary in any stage of development.
              <Strong>JSON</Strong> and <Strong>RESTful</Strong> standards are used to enable a stateless transfer between the presentation and application tiers.
              <Strong>Github Actions</Strong> are used to seamlessly automate the building and deployment of this application on push.
              <Strong>NPM</Strong> (Node Package Manager) and <Strong>Git</Strong> are used for configuration management within the application.<br><br>

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
              <!-- <img src="./assets/cdk.png" class="topimg"> -->
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

      <!-- VecTable -->
      <vec-table
        title="CRUD DB"
        :items="players"
        :headers="vecHeaders"
        @add-item="addPlayer"
        @update-item="updatePlayer"
        @delete-item="deletePlayer"
        class="pb-20"
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

      <template
        
      ><v-card
        height="147"
      >
        </v-card></template>

  <!-- footer -->
      <template>
  <v-card>
    <v-footer
      v-bind="localAttrs"
      absolute
      fixed
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
              color="#232f3f"
        class="text-center"
      >
        <v-card-text>
          <v-btn
          class="mx-8 white--text"
          icon
          href="https://github.com/austinesmith"
          target="_blank"
        >
          <v-icon size="40px"
            class="my-8"
          >
            mdi-github
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-8 white--text"
          icon
          href="https://www.linkedin.com/in/austinfosec/"
          target="_blank"
        >
          <v-icon size="40px"
            class="my-8"
          >
            mdi-linkedin
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-8 white--text"
          icon
          href="mailto:austinfosec@gmail.com"
          target="_blank"
        >
          <v-icon size="40px"
            class="my-8"
          >
            mdi-email
          </v-icon>
        </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="grey--text">
          <strong class="grey--text">Created by Austin Smith</strong> — <a href="https://opensource.org/licenses/ISC">ISC</a> {{ new Date().getFullYear() }}<br><br>
        <span font-size="200%"><em>powered by:</em></span><br>
        <img src="./assets/awswhite.png" width="100">
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
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Roboto&family=Source+Sans+Pro&display=swap');

a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
    text-decoration: none;
    color: darken(#000, 30%);
}


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.topimg {
  width: 50px;
  margin: 10px;
}
.toptopimg {
  height: 100px; 
  margin: 5px;
}

.v-toolbar {
  font-family: 'Lato', sans-serif;
}

.v-toolbar__title {
  font-size: 1rem !important;
  font-family: 'Lato', sans-serif;
  line-height: 2px;
  @media (max-width: 599px) {
      .v-toolbar__title {
        font-size: .4rem !important;
      }
    }
}

.v-card__title {
  font-size: 1.4rem !important;
}

</style>