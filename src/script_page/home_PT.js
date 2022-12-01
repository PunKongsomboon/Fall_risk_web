// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "/firebase/firebaseinit.js";
import { doc, getDoc, setDoc, runTransaction, query, where, collection, getDocs, orderBy } from "firebase/firestore";

import { ref } from 'vue'
import moment from 'moment';

const ex4CurrentPage = ref(1)
const ex4Rows = ref(100)

export default ({
    setup() {


    },
    data() {
        return {
            isBusy: true,
            pt_data: null,
            perPage: 3,
            currentPage: 1,
            popupdeviceTime: [0, 0, 0, 0],
            popupdeviceScore: [0, 0, 0],
            popupiduser: null,
            popupidpt: null,
            popupdate: null,
            popupTotalscore: null,
            items: [],
            items_header: ['No', 'Patient ID', 'Total score', 'Result', 'Date'],
            data_user: [],
            popupDetail: false,
        }
    },
    beforeCreate() {

    },
    // beforeRouteEnter (to, from, next) {
    //     // ...
    // },
    component: {

    },
    async created() {
        let loader = this.$loading.show({
            // Optional parameter 
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: false,
            onCancel: this.onCancel,
            loader: 'bars',
            color: '#9440f5',
            transition: 'bounce',
        });
        document.querySelector('body').setAttribute('style', 'background: linear-gradient(180deg, #FCE2DB 0%, #FFCEF3 100%)');

        this.pt_data = JSON.parse(sessionStorage.getItem("pt_data"));

        const q = query(collection(db, "Testresult"), where("PTID", "==", this.pt_data.personal_ID));

        const queryTestresult = await getDocs(q);
        if (queryTestresult.size == 0) {
            // this.items.push({});
            loader.hide();
        } else {

            queryTestresult.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());

                this.data_user.push({ "docid": [doc.id], "datadoc": [doc.data()] });
            });
            loader.hide();
        }


        for (let i = (this.data_user.length - 1); i >= 0; i--) {
            // console.log(this.data_user[i]);
            if (this.items.length == 0) {
                this.items.push({
                    "No": 1,
                    "Patient ID": this.data_user[i].datadoc[0].userID,
                    "Total score": this.data_user[i].datadoc[0].score,
                    "Result": "More detail",
                    "Date": moment(String((this.data_user[i].datadoc[0].timeUpload).toDate())).format('DD-MMM-YYYY'),
                });
            } else {
                for (let j = 0; j < this.items.length; j++) {
                    if (this.items[j]["Patient ID"] == this.data_user[i].datadoc[0].userID && this.items[j]["Date"] == moment(String((this.data_user[i].datadoc[0].timeUpload).toDate())).format('DD-MMM-YYYY')) {
                        this.items[j]["Total score"] += this.data_user[i].datadoc[0].score;
                    } else {
                        this.items.push({
                            "No": this.items.length + 1,
                            "Patient ID": this.data_user[i].datadoc[0].userID,
                            "Total score": this.data_user[i].datadoc[0].score,
                            "Result": "More detail",
                            "Date": moment(String((this.data_user[i].datadoc[0].timeUpload).toDate())).format('DD-MMM-YYYY'),
                        });
                    }

                }
            }
        }


        // console.log(this.data_user[0].datadoc[0]);



        // const querySnapshot = await getDocs(collection(db, "PTuser", "PT" + this.pt_data.personal_ID, "Testresult"));
        // let index = 0;
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     let data = doc.data();
        //     let userid = data.userID;
        //     let score = data.score;
        //     let device = data.device;
        //     console.log(doc.id, " => ", doc.data());
        // this.items.push({
        //     "No": index + 1,
        //     "Patient ID": userid,
        //     "Total score": score,
        //     "Result": "More detail",
        //     "Date": "",
        // });

        //     index++;

        // });

        this.isBusy = false;

    },
    methods: {
        onRowSelected(items, index, event) {
            // console.log(items, index);
            this.popupdate = items['Date'];
            this.popupiduser = items['Patient ID'];
            this.popupTotalscore = items['Total score'];
            // console.log(moment(items["Date"]).format());
            // let test = new Date(items["Date"]);
            // console.log(this.data_user[0].datadoc[0]);
            // this.popupDetail = true;
            for (let i = 0; i < this.data_user.length; i++) {
                if (moment(String((this.data_user[i].datadoc[0].timeUpload).toDate())).format('DD-MMM-YYYY') == items['Date'] && this.data_user[i].datadoc[0].userID == items['Patient ID']) {
                    this.popupidpt = this.data_user[i].datadoc[0]['PTID'];
                    if (this.data_user[i].datadoc[0].device == "Chair stand test device") {
                        this.popupdeviceScore[0] = this.data_user[i].datadoc[0].score;
                        this.popupdeviceTime[0] = this.data_user[i].datadoc[0].timeTest_Millis;
                    } else if (this.data_user[i].datadoc[0].device == "Time up and go test device") {
                        this.popupdeviceScore[1] = this.data_user[i].datadoc[0].score;
                        this.popupdeviceTime[1] = this.data_user[i].datadoc[0].timeTest_Millis;
                    }

                }
            }


            this.popupDetail = !this.popupDetail;

        },
        router(Rname) {
            // sessionStorage.setItem('uinfo_name', datauser.name);
            // sessionStorage.setItem('uinfo_email', datauser.email);
            if (Rname == "logout") {
                this.$router.push({ name: 'login', params: { sidebar: 'homePT' } })
            }

            // if (datauser.role == 1) {
            //     this.$router.push({ name: 'student_practice', params: { router_name: 'student_practice', sidebar: 'student' } })
            // } else if (datauser.role == 0) {
            //     this.$router.push({ name: 'admin_dashboard', params: { router_name: 'admin_dashboard', sidebar: 'admin' } })
            // }
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    }

})

