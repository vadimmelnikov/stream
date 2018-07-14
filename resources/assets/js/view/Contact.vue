<template>
	<div class="row justify-content-center">
		<div class="col-md-12">
			<div class="card card-default">
				<div class="card-header">Contact page</div>

				<div class="card-body">
					White me on email and maybe i white you)
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
		background-color: salmon;
		color: white;
	}

	.card-body {
		background-color: mediumslateblue;
		color: white;
	}

	.row {
		margin-top: 2rem;
	}
</style>
