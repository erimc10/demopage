import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Presentation from "./views/Presentation.vue";
import Components from "./views/Components.vue";
import Sections from "./views/Sections.vue";
import About from "./views/About.vue";
import BlogPosts from "./views/BlogPosts.vue";
import BlogPost from "./views/BlogPost.vue";
import ContactUs from "./views/ContactUs.vue";
import LandingPage from "./views/LandingPage.vue";
import Pricing from "./views/Pricing.vue";
import Ecommerce from "./views/Ecommerce.vue";
import ProfilePage from "./views/ProfilePage.vue";
import Error from "./views/Error.vue";
import Error500 from "./views/Error500.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Reset from "./views/Reset.vue";
import Invoice from "./views/Invoice.vue";
import ChatPage from "./views/ChatPage.vue";
import ProductPage from "./views/ProductPage.vue";
import Account from "./views/Account.vue";
import Checkout from "./views/Checkout.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter,
      },
    },
    {
      path: "/presentation",
      name: "presentation",
      components: {
        header: AppHeader,
        default: Presentation,
        footer: AppFooter,
      },
      props: {
        header: { navbarType: "primary" },
      },
    },
    {
      path: "/sections",
      name: "sections",
      components: {
        header: AppHeader,
        default: Sections,
        footer: AppFooter,
      },
      props: {
        header: { navbarType: "default" },
      },
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter,
      },
      props: {
        header: { navbarType: "primary" },
      },
    },
    {
      path: "/blog-posts",
      name: "blog-posts",
      components: {
        header: AppHeader,
        default: BlogPosts,
        footer: AppFooter,
      },
    },
    {
      path: "/blog-post",
      name: "blog-post",
      components: {
        header: AppHeader,
        default: BlogPost,
        footer: AppFooter,
      },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      components: {
        header: AppHeader,
        default: ContactUs,
        footer: AppFooter,
      },
      props: {
        header: { navbarType: "default" },
      },
    },
    {
      path: "/landing-page",
      name: "landing-page",
      components: {
        header: AppHeader,
        default: LandingPage,
        footer: AppFooter,
      },
    },
    {
      path: "/pricing",
      name: "pricing",
      components: {
        header: AppHeader,
        default: Pricing,
        footer: AppFooter,
      },
      props: {
        header: { navbarType: "primary" },
      },
    },
    {
      path: "/ecommerce",
      name: "ecommerce",
      components: {
        header: AppHeader,
        default: Ecommerce,
        footer: AppFooter,
      },
    },
    {
      path: "/profile-page",
      name: "profile-page",
      components: {
        header: AppHeader,
        default: ProfilePage,
        footer: AppFooter,
      },
    },
    {
      path: "/error",
      name: "error",
      components: {
        header: AppHeader,
        default: Error,
      },
      props: {
        header: { navbarType: "default" },
      },
    },
    {
      path: "/500-error",
      name: "500-error",
      components: {
        header: AppHeader,
        default: Error500,
      },
      props: {
        header: { navbarType: "primary" },
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/reset",
      name: "reset",
      components: {
        header: AppHeader,
        default: Reset,
        footer: AppFooter,
      },
    },
    {
      path: "/invoice",
      name: "invoice",
      components: {
        header: AppHeader,
        default: Invoice,
        footer: AppFooter,
      },
    },
    {
      path: "/chat-page",
      name: "chat-page",
      components: {
        header: AppHeader,
        default: ChatPage,
        footer: AppFooter,
      },
    },
    {
      path: "/product-page",
      name: "product-page",
      components: {
        header: AppHeader,
        default: ProductPage,
        footer: AppFooter,
      },
    },
    {
      path: "/account",
      name: "account",
      components: {
        header: AppHeader,
        default: Account,
        footer: AppFooter,
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      components: {
        header: AppHeader,
        default: Checkout,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
