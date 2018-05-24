<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.height}}</td>
      <td class="text-xs-right">{{ props.item.age }}</td>
      <td class="text-xs-right">{{ props.item.txs }}</td>
      <td class="text-xs-right">{{ props.item.total }}</td>
      <td class="text-xs-right">{{ props.item.size }}</td>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Height',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Age', value: 'age' },
          { text: 'Transactions', value: 'txs' },
          { text: 'Total Sent', value: 'total' },
          { text: 'Size', value: 'size' }
        ],
        desserts: [
          {
            height: '1234',
            age: 159,
            txs: 60,
            total: 24.72724,
            size: 3098,
          },
          {
            height: '1235',
            age: 237,
            txs: 90,
            total: 37.90082,
            size: 4387
          },
          {
            height: '1236',
            age: 262,
            txs: 160,
            total: 23.0019111,
            size: 6076
          },
          {
            height: '1237',
            age: 305,
            txs: 37,
            total: 67.771199777,
            size: 4311
          },
          {
            height: '1238',
            age: 356,
            txs: 16,
            total: 49.65151109,
            size: 13909
          },
          {
            height: '1239',
            age: 375,
            txs: 67,
            total: 94.28222,
            size: 9087
          }
        ]
      }
    }
  }
</script>