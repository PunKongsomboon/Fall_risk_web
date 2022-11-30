// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "/firebase/firebaseinit.js";
import { doc, getDoc, setDoc, runTransaction, query, where, collection, getDocs } from "firebase/firestore";

import { ref } from 'vue'

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
            items: [],
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
        document.querySelector('body').setAttribute('style', 'background: linear-gradient(180deg, #FCE2DB 0%, #FFCEF3 100%)');

        this.pt_data = JSON.parse(sessionStorage.getItem("pt_data"));

        const querySnapshot = await getDocs(collection(db, "PTuser", "PT" + this.pt_data.personal_ID, "Testresult"));
        let index = 0;
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let data = doc.data();
            let userid = data.userID;
            let score = data.score;
            let device = data.device;
            console.log(doc.id, " => ", doc.data());
            this.items.push({
                "No": index + 1,
                "Patient ID": userid,
                "Total score": score,
                "Result": "More detail",
                "Date": "",
            });

            index++;

        });

        this.isBusy = false;

    },
    methods: {
        onRowSelected(items, index, event) {
            // console.log(items, index);
            // this.popupDetail = true;
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

