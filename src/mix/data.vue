<script>
  export default {
    created () {
      for (var key in this.data) {
        this.$options.props[key] && (this[key] = this.data[key])
      }
    }
  }
</script>
