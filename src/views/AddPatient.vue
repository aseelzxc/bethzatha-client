<template>
    <main class="flex-column">
        <header class="flex-row">
            <div class="title text-heading">
                Register new patient
            </div>
            <div class="button-container flex-row">
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </header>
        <section class="form-container">
            <div class="personal-information">
                <div class="heading">I. PERSONAL INFORMATION</div>
                <div class="input-container flex-row">
                    <div>
                        <label for="">Last Name</label><br/>
                        <input type="text"/>
                    </div>
                    <div>
                        <label for="">First Name</label><br/>
                        <input type="text"/>
                    </div>
                    <div>
                        <label for="">Middle Name</label><br/>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@import '../assets/colors.scss';

main{
    padding: 1rem;
    align-items: center;
    width: 100%;
    justify-content: center;
}
header{
    width: 95%;
    padding: 1rem;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
.form-container{
    background-color: #fff;
    width: 60%;
    padding: 2rem;
    box-shadow: 0 0 .6em .05em rgba(0,0,0,0.2);
    margin: 1rem;
}
.heading{
    color: $--main-blue;
}

.input-container{
    justify-content: space-between;
    div{
        input{
            width: 10rem;
            height: 1rem;
        }
    }
}
</style>