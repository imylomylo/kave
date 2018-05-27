<template>
  <v-data-table
    :headers="headers"
    :items="blocks"
    :pagination.sync="pagination"
    :rows-per-page-items="[10,50]"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ moment(props.item.createdAt).format('ddd MMM Do h:mm:ss a') }}</td>
      <td class="text-xs-right"><a href="#">{{ props.item.height}}</a></td>
      <td class="text-xs-right">{{ moment(props.item.createdAt).calendar(null,{sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'})}}</td>
      <td class="text-xs-right">{{ props.item.txcount}}</td>
      <td class="text-xs-right">{{ props.item.size}}</td>
      <td class="text-xs-right">{{ props.item.size}}</td>
    </template>
  </v-data-table>
</template>
<script>
import moment from 'moment'
import axios from "axios";
export default {
  data: function() {
    return {
      pagination: {
        sortBy: 'height'
      },
      headers: [
        { text: "Created At", value: "createdAt",sortable: false, align: "right"},
        {
          text: "Height",
          align: "right",
          sortable: true,
          value: "name"
        },
        { text: "Age", value: "age", align: "right" },
        { text: "Transactions", value: "txs", align: "right" },
        { text: "Total Sent", value: "total", align: "right"},
        { text: "Size", value: "size", align: "right" }
      ],
      blocks: [],
      customerrors: [],
      desserts: [
        {
          height: "1234",
          age: 159,
          txs: 60,
          total: 24.72724,
          size: 3098
        },
        {
          height: "1235",
          age: 237,
          txs: 90,
          total: 37.90082,
          size: 4387
        },
        {
          height: "1236",
          age: 262,
          txs: 160,
          total: 23.0019111,
          size: 6076
        },
        {
          height: "1237",
          age: 305,
          txs: 37,
          total: 67.771199777,
          size: 4311
        },
        {
          height: "1238",
          age: 356,
          txs: 16,
          total: 49.65151109,
          size: 13909
        },
        {
          height: "1239",
          age: 375,
          txs: 67,
          total: 94.28222,
          size: 9087
        }
      ]
    };
  },
  created: function() {
    console.log("Created");
    axios
      .get(
        "https://gx3i17vd08.execute-api.ap-southeast-2.amazonaws.com/v0/blocknotify"
      )
      .then(response => {
        console.log("ReceiveTX: " + JSON.stringify(response.data));
        // JSON responses are automatically parsed.
        if (response.data !== undefined) {
          this.blocks = response.data;
          console.log(this.blocks.length);
        }
      })
      .catch(e => {
        this.customerrors.push(e);
      });
  }
};
</script>