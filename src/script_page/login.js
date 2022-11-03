import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, signInWithEmail } from "/firebase/firebaseinit.js";
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
            Hospital: "Select hospital",
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

            }


        },


        signup() {


            createUserWithEmailAndPassword(auth, this.email, this.pass)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // Add a new document in collection "cities"

                    let checkIdpass = false;

                    while (checkIdpass == false) {

                        let ramID = Math.floor(Math.random() * 10000);

                        const docRef = doc(db, "PTuser", "PT" + ramID);
                        const docSnap = await getDoc(docRef);

                        if (docSnap.exists()) {
                            // console.log("Document data:", docSnap.data());

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");

                            await setDoc(doc(db, "PTuser", "PT" + ramID), {
                                Hospital: this.Hospital,
                                countRecord: 0,
                                email: this.email,
                                name: this.name,
                                personal_ID: ramID
                            });

                            checkIdpass = true;
                            break;

                        }
                    }


                    this.$router.push({ name: 'homePT', params: { sidebar: 'homePT' } })
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    // ..
                });




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

