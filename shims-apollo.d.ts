import { DollarApollo } from 'vue-apollo/types/vue-apollo';

declare module 'vue/types/vue' {
  interface Vue {
    $apollo: DollarApollo<this>;
  }
}
