<script>
import { useAppOptionStore } from '@/stores/app-option';
import highlightjs from '@/components/plugins/Highlightjs.vue';
import axios from 'axios';

const appOption = useAppOptionStore();

export default {
	data () {
		return {
			code1: ''
		}
	},
	components: {
		highlightjs: highlightjs
	},
	mounted() {
		appOption.appContentFullHeight = true;
		appOption.appContentClass = 'p-0';
		
		axios.get('/assets/data/page-option/with-fixed-footer.json').then((response) => {
			this.code1 = response.data;
		});
	},
	beforeRouteLeave (to, from, next) {
		appOption.appContentFullHeight = false;
		appOption.appContentClass = '';
		next();
	}
}
</script>
<template>
	<div class="d-flex flex-column h-100">
		<!-- BEGIN content-container -->
		<perfect-scrollbar class="app-content-padding flex-grow-1 overflow-hidden h-100">
			<!-- BEGIN breadcrumb -->
			<ol class="breadcrumb float-xl-end">
				<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
				<li class="breadcrumb-item"><a href="javascript:;">Page Options</a></li>
				<li class="breadcrumb-item active">Page with Footer</li>
			</ol>
			<!-- END breadcrumb -->
			<!-- BEGIN page-header -->
			<h1 class="page-header">Page with Fixed Footer <small>header small text goes here...</small></h1>
			<!-- END page-header -->
		
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Installation Settings</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>
						Add the following app settings to the <code>page.vue</code> that you wish to change 
						<b>OR</b> change it from <code>/stores/app-option.ts</code> to make it affected to the whole app.
					</p>
				</panel-body>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code1" />
			</panel>
			<!-- END panel -->
		</perfect-scrollbar>
		<!-- END content-container -->
			
			
		<!-- BEGIN #footer -->
		<div id="footer" class="app-footer m-0">
			&copy; 2025 Color Admin Responsive Admin Template - Sean Ngu All Rights Reserved
		</div>
		<!-- END #footer -->
	</div>
</template>