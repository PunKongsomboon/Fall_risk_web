<template>
    <div class="container">
        <div class="row text-center align-items-center" style="height: 100vh;">

            <div class="col-12 d-flex text-center justify-content-center align-items-center">
                <div class="col-5 col-lg-3 login-left mx-auto">
                    <div class="mt-5 justify-content-center">
                        <img src="@/assets/login_logo.svg" class="col-7" style="height: 50px;" />
                        <p style="color: #D58F8F; font-weight: bold; font-size: 13px;" class="my-4 mx-3">Physical
                            Therapy Mae Fah Luang
                            University</p>
                        <div v-if="stateSignUp == false">
                            <form action="" class="">
                                <div class="box col-8 mx-auto">
                                    <input type="text" @input="event => {
                                    this.email = event.target.value;
                                    }" required />
                                    <span>Email</span>
                                    <i></i>
                                </div>
                                <div class="box col-8 mx-auto">
                                    <input type="password" @input="event => {
                                    this.pass = event.target.value;
                                    }" required />
                                    <span>Password</span>
                                    <i></i>
                                </div>
                            </form>

                            <button class="btn col-7 my-4"
                                style="background-color: #FFA1BE; color: white; border-radius: 20px;"
                                @click="Signin()">Sign
                                In</button>
                        </div>

                        <div v-if="stateSignUp == true" class="text-center">
                            <div class="d-flex justify-content-center mt-5 mx-auto spinner col-5">
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="46" />
                                </svg>
                            </div>
                            <div>
                                <p style="color: #D58F8F; font-weight: bold; font-size: 13px;" class="my-4 mx-3">
                                    Wating for Sign up...
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="col-6 col-lg-4 login-right d-flex">
                    <img src="@/assets/leftconer_login.svg" class="col-7"
                        style="position: absolute; border-radius: 20px 0px 0px 0px;" />
                    <div class="m-auto col-8 text-white" style=" z-index: 1;">
                        <div v-if="stateSignUp == false">
                            <h1>New Here?</h1>
                            <p class="col-7 mx-auto">Sign up and view the result of testing</p>
                            <button class="btn col-8 my-4 text-dark"
                                style="background-color: #FFF; color: white; border-radius: 20px; box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.124);"
                                @click="this.ChangeStateSignUp">Sign
                                Up</button>
                        </div>
                        <div v-if="stateSignUp == true">
                            <h2>Create Account</h2>

                            <div class="col-12 signup-area p-2 text-dark">
                                <div class="box mx-auto mt-3">
                                    <input type="text" @input="event => {
                                    this.email = event.target.value;
                                    }" required />
                                    <span>Email</span>
                                    <i></i>
                                </div>
                                <div class="box mx-auto mt-3">
                                    <input type="text" @input="event => {
                                    this.pass = event.target.value;
                                    }" required />
                                    <span>Password</span>
                                    <i></i>
                                </div>
                                <div class="box mx-auto mt-3">
                                    <input type="text" @input="event => {
                                    this.name = event.target.value;
                                    }" required />
                                    <span>Name</span>
                                    <i></i>
                                </div>

                                <p class="text-dark text-start">Select hospital</p>
                                <select @change="selectHospital($event)" v-model="this.Hospital"
                                    class="form-select text-center mb-3">
                                    <option value="MFU Hospistal">MFU Hospistal</option>
                                </select>
                            </div>

                            <div class="d-flex justify-content-between">
                                <button class="btn col-6 my-4 me-3 text-dark"
                                    style="background-color: #FFF; color: white; border-radius: 20px; box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.124);"
                                    @click="signup">Sign
                                    Up</button>
                                <div>

                                </div>
                                <button class="btn col-6 my-4 text-dark"
                                    style="background-color: #FFF; color: white; border-radius: 20px; box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.124);"
                                    @click="() => {this.stateSignUp = false}">Cancel</button>
                            </div>
                        </div>
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