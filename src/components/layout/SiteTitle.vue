<template>
	<v-btn to="/" text plain class="text-none text-h6 px-0">{{title}}</v-btn>
</template>

<script>
import { mapState, map } from 'vuex';
export default {
	name : "SiteTitle",
	computed:{
		...mapState({
			title : state => state.config.title
		})
	}
}
</script>