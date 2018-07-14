<template>
	<div class="row justify-content-center">
		<div class="col-md-12">
			<div class="card card-default" v-for="status in statuses">
				<div class="card-header">
					<div>
						<!--{{ status.user.name }} said....-->
					</div>
					<div>
						{{ status.created_at | ago | capitalize}}
					</div>
				</div>

				<div class="card-body" v-text="status.body">

				</div>
			</div>
			<add-to-stream @completed="addStatus"> </add-to-stream>
		</div>
	</div>
</template>

<script>
	import moment from 'moment';

	import Status from '../model/Status';

	import AddToStream from '../components/AddToStream';

	export default {
		components: { AddToStream },
		data(){
			return{
				statuses: []
			}
		},
		filters: {
			ago(date){
				return moment(date).fromNow();
			},
			capitalize(value){
				return value.toUpperCase();
			}
		},
		created(){
			Status.all(statuses => this.statuses = statuses);
		},

		methods: {
			addStatus(status){
				this.statuses.unshift(status);

				alert('Your status has been added');

				window.scrollTo(0, 0);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.card {
		overflow: hidden;
		margin-bottom: 2rem;
	}

	.card-header {
		background-color: peru;
		color: white;
	}

	.card-body {
		background-color: snow;
	}

	.row {
		margin-top: 2rem;
	}
</style>
