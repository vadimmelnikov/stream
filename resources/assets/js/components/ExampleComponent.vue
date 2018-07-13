<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
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
    .card{
        overflow: hidden;
    }
    .card-header{
        background-color: peru;
        color: white;
    }
    .card-body{
        background-color: snow;
    }
    .row{
        margin-top: 2rem;
    }
</style>
