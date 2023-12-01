<template>
    <section class="dashboard flex-column">

    </section>
</template>
<style lang="scss" scoped>
@import "../styles/colors.scss";
section{
    padding: 0.5rem 4rem;
    
    .recent-patient-container{
        padding: 1rem;
        border-radius: 0.7rem;
        background-color: #fff;

        .table-header{
            margin-bottom: 0.8rem;
            justify-content: space-between;
        }

        table{
            width: 100%;
            border-collapse: collapse;
            td{
                border-bottom: 1px solid rgb(230, 226, 226);
                padding: 0.6rem 0;
            }
        }
    }
}

</style>