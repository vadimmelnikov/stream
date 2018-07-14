<template>

	<div class="row justify-content-center">
		<div class="col-md-12">
			<div class="card card-default">
				<div class="card-header">Push to the stream</div>
				<div class="card-body">
					<form @submit.prevent="onSubmit">
						<div class="form-group">
							<textarea class="form-control" rows="3" placeholder="Add text please" v-model="form.body"></textarea>

							<span class="text-danger" v-if="form.errors.has('body')" v-text="form.errors.get('body')"></span>
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: "add-to-stream",

		data() {

			return{

				form: new Form({ body: '' })
			}
		},

		methods: {
			onSubmit(){
				this.form
					.post('/statuses')
					.then(status => this.$emit('completed', status));
			}
		}

	}
</script>

<style scoped>

</style>