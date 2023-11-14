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
</style>