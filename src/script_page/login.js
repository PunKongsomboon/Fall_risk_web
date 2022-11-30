import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "/firebase/firebaseinit.js";
import { doc, getDoc, setDoc, runTransaction, query, where, collection, getDocs } from "firebase/firestore";

export default {
    setup() {

    },
    data() {
        return {
            email: "",
            pass: "",
            name: "",
            stateSignUp: false,
            Hospital: "MFU Hospistal",
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





        // const docRef = doc(db, "cities", "SF");
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }

        document.querySelector('body').setAttribute('style', 'background: rgb(237, 242, 247);');
    },
    methods: {
        selectHospital(event) {
            this.Hospital = event.target.value;

        },

        ChangeStateSignUp() {
            this.stateSignUp = true;
        },

        Signin() {
            let loader = this.$loading.show({
                // Optional parameter 
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: false,
                onCancel: this.onCancel,
                loader: 'bars',
                color: '#9440f5',
                transition: 'bounce',
            });
            // console.log(this.email);
            // console.log(this.pass);
            if (this.email != "" && this.pass != "") {
                signInWithEmailAndPassword(auth, this.email, this.pass)
                    .then(async (userCredential) => {
                        // Signed in 
                        const user = userCredential.user;

                        const q = query(collection(db, "PTuser"), where("email", "==", this.email));

                        const querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => {
                            // doc.data() is never undefined for query doc snapshots
                            // console.log(doc.id, " => ", doc.data());
                            sessionStorage.setItem("pt_data", JSON.stringify(doc.data()));
                        });
                        loader.hide();
                        this.$router.push({ name: 'homePT', params: { sidebar: 'homePT' } })
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                    });
            } else {
                loader.hide();
            }


        },


        async signup() {

            let loader = this.$loading.show({
                // Optional parameter 
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: false,
                onCancel: this.onCancel,
                loader: 'bars',
                color: '#9440f5',
                transition: 'bounce',
            });

            console.log(this.email, this.pass, this.name);

            if (this.email != "" && this.pass != "" && this.name) {

                // loader.hide();
                createUserWithEmailAndPassword(auth, this.email, this.pass)
                    .then(async (userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // Add a new document in collection "cities"

                        const queryPT = await getDocs(collection(db, "PTuser"));

                        await setDoc(doc(db, "PTuser", "PT" + queryPT.size + 1), {
                            Hospital: this.Hospital,
                            email: this.email,
                            name: this.name,
                            personal_ID: queryPT.size + 1
                        });

                        loader.hide();
                        this.$router.push({ name: 'homePT', params: { sidebar: 'homePT' } })
                        // ...
                    })
                    .catch((error) => {
                        loader.hide();
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        // ..
                    });
            } else {
                loader.hide();
            }

        },

        router(datauser) {
            // sessionStorage.setItem('uinfo_name', datauser.name);
            // sessionStorage.setItem('uinfo_email', datauser.email);
            this.$router.push({ name: 'homePT', params: { sidebar: 'homePT' } })
            // if (datauser.role == 1) {
            //     this.$router.push({ name: 'student_practice', params: { router_name: 'student_practice', sidebar: 'student' } })
            // } else if (datauser.role == 0) {
            //     this.$router.push({ name: 'admin_dashboard', params: { router_name: 'admin_dashboard', sidebar: 'admin' } })
            // }
        }
    },

}

