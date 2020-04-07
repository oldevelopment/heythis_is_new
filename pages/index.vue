<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" lg="8">
        <div class="my-8 py-5">
          <v-img
            alt="heythis.is Logo"
            contain
            src="/images/img-logo__menu.png"
            height="70"
            width="236"
          />

          <div class="display-1 mt-5">
            A simple solution to having all your social media on one page.
          </div>

          <p class="headline mt-5">
            Create a
            <span class="font-italic font-weight-bold">free</span> account, connect your Youtube
            and/or Instagram and choose your heythis.is/url. We build your page and make sure all
            your future updates are instantly published on your page.
          </p>

          <p class="headline mt-5">
            No more copy/pasting those updates, no more outdated websites and finally one page that
            shows it all. Branding yourself has never been this easy!!
          </p>

          <v-btn class="mt-5" x-large outlined>Create your page</v-btn>
        </div>
      </v-col>
    </v-row>

    <div class="mt-12 text-center">
      <div class="display-1 font-weight-bold">-New users-</div>
      <new-users />
      <v-btn class="mt-10" x-large outlined>show all</v-btn>
    </div>

    <content-block title="About heythis.is" light>
      <p class="headline">
        <span class="font-weight-bold">heythis.is</span> is for people, freelancers, creatives and
        businesses that use Sociale Media Networks for promoting their art, persona, services and/or
        products.
      </p>

      <p class="headline">
        <span class="font-weight-bold">heythis.is</span> comes as a free to use solution for anyone.
        The key features are content aggregation, automated new updates checks, content publishing
        &amp; content sharing.
      </p>

      <p class="headline">
        <span class="font-weight-bold">heythis.is</span> is solely build to support, help and
        improve anyones digital online promotion and branding efforts. Offering tools that take out
        the hard work for effective content management. Giving back tools that support ones
        promoting efforts.
      </p>

      <p class="headline">
        To deliver on his promiss heythis.is is comes as a content and publishing framework, that
        powers Pages, Widgets, Apps, Networks &amp; Portals.
      </p>
    </content-block>

    <v-row class="mt-12" justify="center">
      <v-col cols="8">
        <content-block title="Pages">
          <p class="headline">
            <span class="font-weight-bold">Pages</span> are dynamic landingspages for creatives,
            professionals and businesses that use social media to promote their persona’s, products
            and services. Linked to social media platforms, pages functions as a contenthub,
            supertimeline, business card and website in one.
          </p>
        </content-block>

        <content-block title="Features">
          <p class="headline">
            A single page with all social media content, videos ,updates &amp; photos integrated
            with Instagram &amp; Youtube.
          </p>

          <p class="headline">
            A heythis.is/url to share with your fans &amp; followers
          </p>
        </content-block>

        <content-block title="Benefits">
          <p class="headline">
            No more wasting time with copy/pasting content between social networks and your website.
          </p>

          <p class="headline">
            We automatically publish all your updates to your heythis.is page.
          </p>
        </content-block>
      </v-col>
    </v-row>

    <v-row class="mt-12" justify="center">
      <v-col cols="8">
        <v-row>
          <v-col cols="6">
            <upcoming>
              <span class="font-weight-bold">More Social Networks</span> such as Facebook Pages
              &amp; Events, Twitter, Meetup, Spotify, LinkedIn, Vimeo, Flickr and RSS
            </upcoming>
          </v-col>

          <v-col cols="6">
            <upcoming>
              Get connected to <span class="font-weight-bold">portals</span> to expand your online
              reach. Portal are efective promotional channel focussing on increasing visibility and
              traffic.
            </upcoming>
          </v-col>

          <v-col cols="6">
            <upcoming>
              <span class="font-weight-bold">Premium Pages</span> offer a full website/blog
              experience, with cusom urls, multiple pages, content management. And more automation:
              projects, reports, statistics, multiple sites management.
            </upcoming>
          </v-col>

          <v-col cols="6">
            <upcoming>
              Create your own network portal. Colloborate with peers to co-create and promote you
              shared goals, passions and profesions. It's like having your own insta-like network.
            </upcoming>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import NewUsers from '@/partials/home/NewUsers.vue';
import ContentBlock from '@/partials/home/ContentBlock.vue';
import Upcoming from '@/partials/home/Upcoming.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    NewUsers,
    ContentBlock,
    Upcoming,
  },

  async fetch({ store }) {
    await store.dispatch('users/fetch:latest');
  },
});
</script>
