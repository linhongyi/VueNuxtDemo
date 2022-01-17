<template>

  <div id="app">
   <v-card
    class="mx-auto"
    max-widt1h="300"
    tile
  >
    <v-list flat>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" @click="menuActionClick(item.text)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
    <!-- <a href="https://www.npmjs.com/package/vue2-editor" target="_blank">Vue2-Editor</a> -->
    <!-- <vue-editor v-model="content"></vue-editor> -->
    
    <v-data-table
        :headers="headers"
        :items="desserts"
        :options.sync="options"
        :server-items-length="totalDesserts"
        :loading="loading"
        class="elevation-1">
    </v-data-table>

    <a href="https://www.npmjs.com/package/ckeditor4-vue" target="_blank">Ckeditor4-Vue</a>
    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>

  

    <!-- <a href="https://www.npmjs.com/package/tinymce" target="_blank">Tinymce</a>
     <editor
       api-key="no-api-key"
       :init="{
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
     /> -->
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { CKEditor } from 'ckeditor4-vue';
import Editor from '@tinymce/tinymce-vue';

export default {

  components: {
    VueEditor,
    CKEditor,
    Editor
  },
  setup(props) {

  },
  data() {
    return {
      content: "<h1>Some initial content</h1>",
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        contentsCss: 'customFont.css',
        font_names: 'OpenDyslexic',
        extraPlugins: 'font'
      },
      selectedItem: 0,
      items:[],
      totalDesserts: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [
        {
          text: 'No',
          align: 'start',
          sortable: true,
          value: 'no',
        },
        { text: 'Title', value: 'title' },
        { text: 'Name', value: 'name' }
      ]
    };
  },
    mounted() {
      this.storage();
    },
    watch: {
    options: {
      handler () {
        this.getDataFromApi()
      },
      deep: true,
      },
    },
    methods:{
    storage(){
      if (process.browser){
          const records  = localStorage.getItem("dataRecords");

          if(records==undefined)
          {
            var dataRecords = [];
            dataRecords[0] = {text:"Hello world 1"};
            dataRecords[1] = {text:"Hello world 2"};
            localStorage.setItem("dataRecords", JSON.stringify(dataRecords));
          }

          this.$store.commit('textRecords/removeAll')

          const sourceDatas  = JSON.parse(localStorage.getItem("dataRecords"));
           
          sourceDatas.forEach(element => {
            this.$store.commit('textRecords/addRecord', element)
          });

          this.items = this.$store.state.textRecords.dataRecord
      }
    },
    menuActionClick(text) {
      console.log(text)
      this.editorData = text
    },
    getDataFromApi () {
      this.loading = true
      this.fakeApiCall().then(data => {
        this.desserts = data.items
        this.totalDesserts = data.total
        this.loading = false
      })
    },
    /**
     * In a real application this would be a call to fetch() or axios.get()
     */
    fakeApiCall () {
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options

        let items = this.getDesserts()
        const total = items.length

        if (sortBy.length === 1 && sortDesc.length === 1) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy[0]]
            const sortB = b[sortBy[0]]

            if (sortDesc[0]) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        }

        if (itemsPerPage > 0) {
          items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        }

        setTimeout(() => {
          resolve({
            items,
            total,
          })
        }, 1000)
      })
    },
    getDesserts () {
      
      return [
        {
          title: 'Howard1',
          name: 'Content Howard1',
          no: '1'
        },
        {
          title: 'Howard2',
          name: 'Content Howard2',
          no: '2'
        },
        {
          title: 'Howard3',
          name: 'Content Howard3',
          no: '3'
        }
      ]
    }
  }
};
</script>