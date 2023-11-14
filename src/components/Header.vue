<template>
    <header class="flex-row">
        <div class="logo-container flex-row">
            <img src="../assets/images/logo.png" alt="" class="logo-image">
            <h3>Bethzatha</h3>
        </div>
        <div class="navigation-container flex-row">
            <!-- <router-link to="/">
                <span>Dashboard</span>
            </router-link>
            <router-link to="/add_patient">
                <span>Manage patients</span>
            </router-link>
            <router-link to="/add_patient">
                <span>Transactions</span>
            </router-link> -->
        </div>
        <div class="account-info-container flex-row">
            <span class="text-bold">Test user</span>
            <img src="../assets/icons/logout.svg" alt="">
        </div>
    </header>
</template>
<style lang="scss" scoped>
header{
    padding: 0.5rem 4rem;
    justify-content: space-evenly;
    align-items: center;
    gap: 4rem;

    .logo-container{
        gap: 0.5rem;
        .logo-image{
            height: 4rem;
        }
    }
    .navigation-container{
        flex-grow: 1;
        gap: 2rem;
        a{
            color: inherit;
            text-decoration: none;
        }
        span{
            cursor: pointer;
        }
    }
    .account-info-container{
        gap: 1.5rem;
        align-items: center;
          
        img{
            width: 1.5rem;
        }
    }
}

</style>