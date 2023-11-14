<template>
    <section class="dashboard flex-column">

        <div class="main-card-container">
            <div class="greetings-container">
                Good morning!
            </div>
        </div>

        <div class="actions-container">
            <p class="text-bold">Actions</p>
            <div class="action-card-container flex-row">
                <div class="action-card">
                    Add Patient
                </div>
                <div class="action-card">
                    Manage Patient
                </div>
                <div class="action-card">
                    Transactions
                </div>
            </div>
            
        </div>

        <div class="recent-patient-container">
            <div class="table-header flex-row">
                <p class="text-bold">Latest transactions</p>
                <img src="../assets/icons/right-arrow.svg" alt="">
            </div>
            <table>
                <tr>
                    <td><b>12:55</b></td>                  
                    <td><span>Ronaldo Hehe</span></td>                  
                    <td>Pending</td>                  
                    <td>500</td>                  
                </tr>
                <tr>
                    <td><b>12:55</b></td>                  
                    <td><span>Ronaldo Hehe</span></td>                  
                    <td>Pending</td>                  
                    <td>500</td>                  
                </tr>
                <tr>
                    <td><b>12:55</b></td>                  
                    <td><span>Ronaldo Hehe</span></td>                  
                    <td>Pending</td>                  
                    <td>500</td>                  
                </tr>
                <tr>
                    <td><b>12:55</b></td>                  
                    <td><span>Ronaldo Hehe</span></td>                  
                    <td>Pending</td>                  
                    <td>500</td>                  
                </tr>
            </table>
        </div>
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

.actions-container{
    margin-bottom: 1rem;
    
    .action-card-container{
        gap: 1rem;
        .action-card{
            background-color: $--red;
            padding: 0.5rem;
            width: 20rem;
            height: 5rem;
            border-radius: 0.7rem;
        }
        .action-card:nth-child(2){
            background-color: $--cyan;
        }
        .action-card:nth-child(3){
            background-color: $--light-blue;
        }
    }

}

</style>