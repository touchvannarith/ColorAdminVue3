<script setup lang="ts">
import { ref } from 'vue'

const year = ref<number>(new Date().getFullYear())
</script>

<template>
	<!-- BEGIN #footer -->
	<div id="footer" class="app-footer">
		&copy; {{ year }} seanTheme All Right Reserved
	</div>
	<!-- END #footer -->
</template>
