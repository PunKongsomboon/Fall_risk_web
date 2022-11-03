<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center align-items-center">

            <div class="navigation p-0">
                <ul class="p-0 d-flex justify-content-between" style="flex-direction:column; height: 100%;">

                    <div>
                        <div style="background-color: #FF8FB1;">
                            <img src="@/assets/logo_mfu_3d_colour.png" alt="" class="col-12">
                        </div>
                        <li class="mt-3 d-flex justify-content-center"
                            style="background: rgba(255, 143, 177, 0.3); color: #FF8FB1; border-left: 3px solid #FF8FB1;">
                            <iconify-icon icon="fluent:document-multiple-16-regular" width="22" class="my-1">
                            </iconify-icon>
                        </li>
                    </div>


                    <div class="">
                        <li class="setting mx-auto my-3 d-flex justify-content-center col-6">
                            <iconify-icon icon="healthicons:ui-user-profile-outline" class="" width="22"></iconify-icon>
                        </li>
                        <li class="setting mx-auto my-3 d-flex justify-content-center col-6">
                            <iconify-icon icon="carbon:security-services" width="22"></iconify-icon>
                        </li>
                        <li class="setting mx-auto my-3 d-flex justify-content-center col-6">
                            <iconify-icon icon="fluent:arrow-exit-20-regular" @click="this.router('logout')" width="22">
                            </iconify-icon>
                        </li>
                    </div>


                </ul>

            </div>

            <!-- <div class="mt-5 pt-3">
                <div class="mt-5 pt-3">
                    <vue-good-table :columns="columns" :rows="rows" :search-options="{enabled: true,trigger: 'enter'} "
                        class="col-8 ms-auto me-5 pt-5 p-0 align-self-center mt-auto" style="z-index: -1;" />
                </div>
            </div> -->

            <div class="d-flex justify-content-center align-items-center text-center" style="height: 100vh;">

                <div class="col-9 table-area">
                    <div
                        style="position: absolute; z-index: 1; top: -4%; right: 85%; background: linear-gradient(90deg, #D175FF 0%, #FF8868 100%); border-radius: 10px; box-shadow: 0 8px 32px 0 rgba(10, 10, 20, 0.37);">
                        <h5 class="text-white m-3">Test Result</h5>
                    </div>
                    <!-- <b-thead class="d-flex">
                        <b-tr class="col-12 d-flex text-center justify-content-around pt-5 pb-2"
                            style="border-bottom: 0.5px solid black;">
                            <b-th>No.</b-th>
                            <b-th>ID</b-th>
                            <b-th>Score</b-th>
                            <b-th>Device</b-th>
                        </b-tr>
                    </b-thead> -->
                    <b-table sticky-header responsive hover :busy="isBusy"
                        class="col-12 d-flex text-center justify-content-between" style="height: 500px;" :items="items">
                        <!-- <template> -->
                            <div class="text-center text-dark my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <!-- <strong>Loading...</strong> -->
                            </div>
                        <!-- </template> -->
                        <!-- <b-tbody>
                            <tr v-for="(items, index) in items.length" :key="index" class="">
                                <b-td class="py-5 mx-3 col-2">{{ index + 1 }}</b-td>
                                <b-td class="py-5 mx-3 col-2">{{ items.id }}</b-td>
                                <b-td class="py-5 mx-3 col-2">{{ items.score }}</b-td>
                                <b-td class="py-5 mx-3 col-2">{{ items.device }}</b-td>
                            </tr>
                        </b-tbody> -->
                    </b-table>

                </div>

            </div>

            <img src="@/assets/bottom_right_PThomepage.svg" class="col-8 p-0"
                style="right: 0%; bottom: 0%; position: absolute; width: 30%; overflow: hidden; z-index: -1;" />



        </div>
    </div>

</template>


<script src="@/script_page/home_PT.js"></script>

<style>
@import '@/assets/css/home_PT.css';
</style>