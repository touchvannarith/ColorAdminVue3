import { useAuthStore } from "@/stores/auth-store";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard/v3', meta: { requiresAuth: true } },
		{ path: '/:pathMatch(.*)*', component: () => import('../views/Error.vue') },
    { path: '/dashboard/v1', component: () => import('../views/Dashboard-v1.vue'), meta: { requiresAuth: true } },
    { path: '/dashboard/v2', component: () => import('../views/Dashboard-v2.vue'), meta: { requiresAuth: true } },
    { path: '/dashboard/v3', component: () => import('../views/Dashboard-v3.vue'), meta: { requiresAuth: true } },
    { path: '/ai/chat', component: () => import('../views/AI-chat.vue') },
    { path: '/ai/image-generator', component: () => import('../views/AI-image-generator.vue') },
    { path: '/email/inbox', component: () => import('../views/Email-inbox.vue') },
    { path: '/email/compose', component: () => import('../views/Email-compose.vue') },
    { path: '/email/detail', component: () => import('../views/Email-detail.vue') },
    { path: '/widgets', component: () => import('../views/Widgets.vue') },
    { path: '/ui/general', component: () => import('../views/Ui-general.vue') },
    { path: '/ui/typography', component: () => import('../views/Ui-typography.vue') },
    { path: '/ui/tabs-accordions', component: () => import('../views/Ui-tabs-accordions.vue') },
    { path: '/ui/modal-notification', component: () => import('../views/Ui-modal-notification.vue') },
    { path: '/ui/widget-boxes', component: () => import('../views/Ui-widget-boxes.vue') },
    { path: '/ui/media-object', component: () => import('../views/Ui-media-object.vue') },
    { path: '/ui/buttons', component: () => import('../views/Ui-buttons.vue') },
    { path: '/ui/icon-duotone', component: () => import('../views/Ui-icon-duotone.vue') },
    { path: '/ui/icon-fontawesome', component: () => import('../views/Ui-icon-fontawesome.vue') },
    { path: '/ui/icon-bootstrap-icons', component: () => import('../views/Ui-icon-bootstrap-icons.vue') },
    { path: '/ui/icon-simple-line-icons', component: () => import('../views/Ui-icon-simple-line-icons.vue') },
    { path: '/ui/language-bar-icon', component: () => import('../views/Ui-language-bar-icon.vue') },
    { path: '/ui/social-buttons', component: () => import('../views/Ui-social-buttons.vue') },
		{ path: '/bootstrap-5', component: () => import('../views/Bootstrap-5.vue') },
		{ path: '/form/elements', component: () => import('../views/Form-elements.vue') },
		{ path: '/form/plugins', component: () => import('../views/Form-plugins.vue') },
		{ path: '/form/wizards', component: () => import('../views/Form-wizards.vue') },
		{ path: '/table/elements', component: () => import('../views/Table-elements.vue') },
		{ path: '/table/plugins', component: () => import('../views/Table-plugins.vue') },
		{ path: '/pos/counter-checkout', component: () => import('../views/Pos-counter-checkout.vue') },
		{ path: '/pos/customer-order', component: () => import('../views/Pos-customer-order.vue') },
		{ path: '/pos/counter-checkout', component: () => import('../views/Pos-counter-checkout.vue') },
		{ path: '/pos/kitchen-order', component: () => import('../views/Pos-kitchen-order.vue') },
		{ path: '/pos/table-booking', component: () => import('../views/Pos-table-booking.vue') },
		{ path: '/pos/menu-stock', component: () => import('../views/Pos-menu-stock.vue') },
    { path: '/chart/js', component: () => import('../views/Chart-js.vue') },
    { path: '/chart/apex', component: () => import('../views/Chart-apex.vue') },
    { path: '/landing', component: () => import('../views/Landing.vue') },
    { path: '/calendar', component: () => import('../views/Calendar.vue') },
    { path: '/map', component: () => import('../views/Map.vue') },
    { path: '/gallery', component: () => import('../views/Gallery.vue') },
    { path: '/page-option/blank', component: () => import('../views/Page-blank.vue') },
    { path: '/page-option/with-footer', component: () => import('../views/Page-with-footer.vue') },
    { path: '/page-option/with-fixed-footer', component: () => import('../views/Page-with-fixed-footer.vue') },
    { path: '/page-option/without-sidebar', component: () => import('../views/Page-without-sidebar.vue') },
    { path: '/page-option/with-right-sidebar', component: () => import('../views/Page-with-right-sidebar.vue') },
    { path: '/page-option/with-minified-sidebar', component: () => import('../views/Page-with-minified-sidebar.vue') },
    { path: '/page-option/with-two-sidebar', component: () => import('../views/Page-with-two-sidebar.vue') },
    { path: '/page-option/full-height', component: () => import('../views/Page-full-height.vue') },
    { path: '/page-option/with-wide-sidebar', component: () => import('../views/Page-with-wide-sidebar.vue') },
    { path: '/page-option/with-light-sidebar', component: () => import('../views/Page-with-light-sidebar.vue') },
    { path: '/page-option/with-mega-menu', component: () => import('../views/Page-with-mega-menu.vue') },
    { path: '/page-option/with-top-menu', component: () => import('../views/Page-with-top-menu.vue') },
    { path: '/page-option/with-boxed-layout', component: () => import('../views/Page-with-boxed-layout.vue') },
    { path: '/page-option/with-mixed-menu', component: () => import('../views/Page-with-mixed-menu.vue') },
    { path: '/page-option/boxed-layout-with-mixed-menu', component: () => import('../views/Page-boxed-layout-with-mixed-menu.vue') },
    { path: '/page-option/with-transparent-sidebar', component: () => import('../views/Page-with-transparent-sidebar.vue') },
    { path: '/page-option/with-search-sidebar', component: () => import('../views/Page-with-search-sidebar.vue') },
    { path: '/page-option/with-hover-sidebar', component: () => import('../views/Page-with-hover-sidebar.vue') },
    { path: '/extra/timeline', component: () => import('../views/Extra-timeline.vue') },
    { path: '/extra/coming-soon', component: () => import('../views/Extra-coming-soon.vue') },
    { path: '/extra/search', component: () => import('../views/Extra-search.vue') },
    { path: '/extra/invoice', component: () => import('../views/Extra-invoice.vue') },
    { path: '/extra/error', component: () => import('../views/Extra-error.vue') },
    { path: '/extra/profile', component: () => import('../views/Extra-profile.vue') },
    { path: '/extra/scrum-board', component: () => import('../views/Extra-scrum-board.vue') },
    { path: '/extra/cookie-acceptance-banner', component: () => import('../views/Extra-cookie-acceptance-banner.vue') },
    { path: '/extra/orders', component: () => import('../views/Extra-orders.vue') },
    { path: '/extra/order-details', component: () => import('../views/Extra-order-details.vue') },
    { path: '/extra/products', component: () => import('../views/Extra-products.vue') },
    { path: '/extra/product-details', component: () => import('../views/Extra-product-details.vue') },
    { path: '/extra/file-manager', component: () => import('../views/Extra-file-manager.vue') },
    { path: '/extra/pricing-page', component: () => import('../views/Extra-pricing-page.vue') },
    { path: '/extra/messenger-page', component: () => import('../views/Extra-messenger-page.vue') },
    { path: '/extra/data-management', component: () => import('../views/Extra-data-management.vue') },
    { path: '/extra/settings-page', component: () => import('../views/Extra-settings-page.vue') },
    { path: '/login', component: () => import('../views/Login.vue') },
    { path: '/user/login-v1', component: () => import('../views/User-login-v1.vue') },
    { path: '/user/login-v2', component: () => import('../views/User-login-v2.vue') },
    { path: '/user/login-v3', component: () => import('../views/User-login-v3.vue') },
    { path: '/user/register-v3', component: () => import('../views/User-register-v3.vue') },
    { path: '/helper/css', component: () => import('../views/Helper-css.vue') }
  ],
});

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login') // Redirect unauthorized users
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    next('/dashboard/v1') // Redirect logged-in users away from login page
  } else {
    next()
  }
})

export default router;
