export default  {
  name: 'home',
  props: [],
  data() {
    return {
      
    }
  },
  methods: {
    pingMe() { this.$store.dispatch("PingIt"); }
  },
  computed: {
    ping() { return this.$store.getters.ping; }
  },
  mounted() { },
  created() { }
}
