const two = {
  data: function () {
    return {
      items: items,
      test: [{name0: 'test'}, {name1: 'sample'}]
    }
  },
  methods: {
    remove: function (index) {
      this.items.splice(index, 1);
    }
  },
  template: `
    <div id="two">
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items">
            <td>{{ item.name }}</td>
            <td>{{ item.comment }}</td>
            <td>
            <a class="button is-danger" @click="remove(index)">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ` 
}

const items = Array(10).fill().map((_, i) => ({
  name: `name${i}`,
  comment: `comment${i}`
}))