const two = {
  data: function () {
    return {
      items: items
    }
  },
  template: `
    <div id="two">
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <td>{{ item.name }}</td>
            <td>{{ item.comment }}</td>
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