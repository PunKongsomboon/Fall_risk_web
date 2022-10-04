<template>
    <div class="container">
        <div class="row text-center align-items-center" style="height: 100vh;">

            <div class="col-12 d-flex text-center justify-content-center align-items-center">
                <div class="col-5 login-left mx-auto">
                    <div class="mt-5 justify-content-center">
                        <img src="@/assets/login_logo.svg" class="col-7" style="height: 50px;" />
                        <p style="color: #D58F8F; font-weight: bold; font-size: 13px;" class="my-4 mx-3">Physical
                            Therapy Mae Fah Luang
                            University</p>
                        <div>
                            <form action="" class="">
                                <div class="box col-8 mx-auto">
                                    <input type="text" class="" required />
                                    <span>Email</span>
                                    <i></i>
                                </div>
                                <div class="box col-8 mx-auto">
                                    <input type="text" required />
                                    <span>Password</span>
                                    <i></i>
                                </div>
                            </form>

                            <button class="btn col-7 my-4"
                                style="background-color: #FFA1BE; color: white; border-radius: 20px;">Sign In</button>
                        </div>
                    </div>
                </div>

                <div class="col-6 login-right d-flex">
                    <img src="@/assets/leftconer_login.svg" class="col-7"
                        style="position: absolute; border-radius: 20px 0px 0px 0px;" />
                    <div class="m-auto text-white" style="height: 200px; z-index: 1;">
                        <h1>New Here?</h1>
                        <p class="col-7 mx-auto">Sign up and view the result of testing</p>
                        <button class="btn col-8 my-4 text-dark"
                            style="background-color: #FFF; color: white; border-radius: 20px; box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.124);">Sign
                            In</button>
                    </div>
                    <img src="@/assets/rightconer_login.svg" class="col-8"
                        style="right: 0%; bottom: 0%; position: absolute; border-radius: 0px 0px 20px 0px ;" />
                </div>

            </div>


        </div>

    </div>
</template>

<script src="@/script_page/login.js"></script>

<style scoped>
@import "@/assets/css/login.css";
</style>