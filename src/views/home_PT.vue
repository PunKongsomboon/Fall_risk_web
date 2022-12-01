<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center align-items-center" style="overflow: hidden;">

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

                <div class="col-9 table-area" style="height: 500px;">
                    <div
                        style="position: absolute; z-index: 1; top: -35px; right: 87%; background: linear-gradient(90deg, #D175FF 0%, #FF8868 100%); border-radius: 10px; box-shadow: 0 8px 32px 0 rgba(10, 10, 20, 0.37);">
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
                    <b-table sticky-header responsive hover borderless
                        class="col-12 d-flex text-center justify-content-between mb-0 mt-4" :items="items"
                        @row-clicked="onRowSelected" select-mode="single" :fields="items_header">
                        <!-- <template> -->
                        <!-- <template #empty="scope">
                            Empty row
                        </template> -->
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

            <Transition name="slide-fade-detailPopup" class="">
                <div class="col-4 p-4 detail-result-popup popupdetail" v-if="popupDetail"
                    style="height: 95%; z-index: 1; position: absolute; right:30px;  border-radius: 20px;">

                    <div class="">
                        <div class="d-flex justify-content-between col-12">
                            <h5 style="font-weight: bold; color: #AD35E9;">Result Information</h5>
                            <button class="btn p-0" @click="popupDetail = !popupDetail">
                                <iconify-icon icon="clarity:close-line" style="font-size: 30px;">
                                </iconify-icon>
                            </button>
                        </div>

                        <div class="d-flex justify-content-center">

                            <div class="d-flex align-items-center me-3">
                                <iconify-icon icon="fluent:patient-20-regular"
                                    style="font-size: 70px; border-radius: 10%; background-color: #AD35E9; color: white;">
                                </iconify-icon>
                            </div>

                            <div>
                                <p>ID : {{ popupiduser }}</p>
                                <P>PTID : {{ popupidpt }}</P>
                                <p>Date : {{ popupdate }}</p>
                            </div>

                        </div>

                        <hr style="height: 2px; border: none; background: black;">


                        <div class="container">

                            <h5 class="">Chair stand test</h5>
                            <div class="">

                                <div class="d-flex col-9 justify-content-center mx-auto px-2 py-3 align-items-center"
                                    style="border-radius: 20px; background-color: white;  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);">
                                    <iconify-icon icon="la:chair" class="me-3"
                                        style="font-size: 60px; background-color: #AC58D6; color: white; border-radius: 10px;">
                                    </iconify-icon>
                                    <div class="pt-1">
                                        <iconify-icon icon="ant-design:clock-circle-outlined" class="col-12">
                                        </iconify-icon>
                                        <iconify-icon icon="fluent:document-checkmark-20-regular"></iconify-icon>
                                    </div>
                                    <div>
                                        <p class="m-0">Test time : {{ ((popupdeviceTime[0] / 1000) % 60).toFixed(2) }}
                                            s.</p>
                                        <p class="m-0">Score : {{ popupdeviceScore[0] }}</p>
                                    </div>

                                </div>
                            </div>


                            <h5 class="mt-5">Time up and go</h5>
                            <div class="">

                                <div class="d-flex col-9 justify-content-center mx-auto px-2 py-3 align-items-center"
                                    style="border-radius: 20px; background-color: white;  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);">
                                    <iconify-icon icon="ic:twotone-assist-walker" class="me-3"
                                        style="font-size: 60px; background-color: #AC58D6; color: white; border-radius: 10px;">
                                    </iconify-icon>

                                    <div class="pt-1">
                                        <iconify-icon icon="ant-design:clock-circle-outlined" class="col-12">
                                        </iconify-icon>
                                        <iconify-icon icon="fluent:document-checkmark-20-regular"></iconify-icon>
                                    </div>
                                    <div>
                                        <p class="m-0">Test time : {{ ((popupdeviceTime[1] / 1000) % 60).toFixed(2) }}
                                            s.</p>
                                        <p class="m-0">Score : {{ popupdeviceScore[1] }}</p>
                                    </div>

                                </div>
                            </div>

                            <h5 class="mt-5">Balance test</h5>
                            <div class="">

                                <div class="d-flex col-9 justify-content-center mx-auto px-2 py-3 align-items-center"
                                    style="border-radius: 20px; background-color: white;  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);">
                                    <iconify-icon icon="healthicons:exercise-walk-supported" class="me-3"
                                        style="font-size: 60px; background-color: #AC58D6; color: white; border-radius: 10px;">
                                    </iconify-icon>

                                    <div class="pt-1">
                                        <iconify-icon icon="ant-design:clock-circle-outlined" class="col-12">
                                        </iconify-icon>
                                        <iconify-icon icon="fluent:document-checkmark-20-regular"></iconify-icon>
                                    </div>
                                    <div>
                                        <p class="m-0">Test time : {{ ((popupdeviceTime[2] / 1000) % 60).toFixed(2) }}
                                            s.</p>
                                        <p class="m-0">Score : {{ popupdeviceScore[2] }}</p>
                                    </div>

                                </div>
                            </div>

                            <h5 class="mt-5">Gait speed test</h5>
                            <div class="">

                                <div class="d-flex col-9 justify-content-center mx-auto px-2 py-3 align-items-center"
                                    style="border-radius: 20px; background-color: white;  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);">
                                    <iconify-icon icon="tabler:walk" class="me-3"
                                        style="font-size: 60px; background-color: #AC58D6; color: white; border-radius: 10px;">
                                    </iconify-icon>

                                    <div class="pt-1 mx-2">
                                        <iconify-icon icon="ant-design:clock-circle-outlined" class="col-12">
                                        </iconify-icon>
                                        <!-- <iconify-icon icon="fluent:document-checkmark-20-regular"></iconify-icon> -->
                                    </div>
                                    <div class="align-items-center">
                                        <p class="m-0">Test time : {{ ((popupdeviceTime[3] / 1000) % 60).toFixed(2) }}
                                            s.</p>
                                        <!-- <p class="m-0">Score : 4</p> -->
                                    </div>

                                </div>
                            </div>


                        </div>


                        <hr style="height: 2px; border: none; background: black;">


                        <div class="mx-auto text-center col-7 text-white px-3 py-2"
                            style="border-radius: 20px; background-color: #FF9534;  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);">
                            <h5 class="">Total score : {{ popupTotalscore }} score</h5>
                        </div>
                    </div>


                </div>
            </Transition>



            <img src="@/assets/bottom_right_PThomepage.svg" class="col-8 p-0"
                style="right: 0%; bottom: 0%; position: absolute; width: 30%; overflow: hidden; z-index: -1;" />


        </div>


    </div>

</template>


<script src="@/script_page/home_PT.js"></script>

<style>
@import '@/assets/css/home_PT.css';
</style>