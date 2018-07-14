<template>
	<div class="row justify-content-center">
		<div class="col-md-12">
			<div class="card card-default">
				<div class="card-header">About page</div>

				<div class="card-body">
					This is text about all of the world
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			// console.log('Component mounted.')
		}
	}
</script>
<style lang="scss" scoped>
	.card {
		overflow: hidden;
	}

	.card-header {
		background-color: rosybrown;
		color: white;
	}

	.card-body {
		background-color: lightyellow;
	}

	.row {
		margin-top: 2rem;
	}
</style>
