<template>
    <v-card
    class="mx-auto"
    max-width="300"
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
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>


<script>
export default {
        data: () => ({
      selectedItem: 0,
      items:[]
    }),
    mounted() {
      this.storage();
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
    }
  }
}
</script>