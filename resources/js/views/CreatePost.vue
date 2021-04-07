<template>
    <div>

        <form @submit.prevent="registerUser" novalidate>

            <div v-show="step === 1" class="step">
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input @blur="$v.formReg.name.$touch()"
                           :class="{'uk-form-danger': $v.formReg.name.$error}"

                           v-model="formReg.name"
                           class="uk-input" type="text" placeholder="Логин" id="name">
                    <span v-if="!$v.formReg.name.alpha"> {{ msgNotNumber }}</span>
                </div>
            </div>

            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                    <input
                        @blur="$v.formReg.surname.$touch()"
                        :class="{'uk-form-danger': $v.formReg.surname.$error}"
                        v-model="formReg.surname"
                        class="uk-input"
                        type="text"
                        placeholder="ФИО"
                        id="surname">
                    <span v-if="!$v.formReg.surname.alpha"> {{ msgNotNumber }}</span>
                </div>
            </div>

            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                    <input  @blur="$v.formReg.phone.$touch()"
                            :class="{'uk-form-danger': $v.formReg.phone.$error}"
                            v-model="formReg.phone" class="uk-input" type="text" placeholder="Телефон" id="phone">
                </div>
            </div>


                <button @click.prevent="nextStep"
                        :disabled="disabledBtn1"
                        class="uk-button uk-button-primary">Далее</button>
            </div>
            <transition name="slide-fade">
            <div v-show="step === 2" class="step">

                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input  @blur="$v.formReg.password.$touch()"
                                :class="{'uk-form-danger': $v.formReg.password.$error}"
                                v-model="formReg.password" class="uk-input" type="password" placeholder="Пароль" id="password">

                    </div>
                </div>

                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input  @blur="$v.formReg.passwordConfirm.$touch()"
                                :class="{'uk-form-danger': $v.formReg.passwordConfirm.$error}"
                                v-model="formReg.passwordConfirm" class="uk-input" type="password" placeholder="Повторите пароль" id="passwordConfirm">
                        <span v-if="!$v.formReg.surname.alpha"> {{ msgPassword }}</span>
                    </div>
                </div>

                <button @click.prevent="backStep"

                        class="uk-button uk-button-default">Назад</button>
                <button @click.prevent="nextStep"
                        :disabled="disabledBtn2"
                        class="uk-button uk-button-primary">Далее</button>
            </div>
            </transition>
            <transition name="slide-fade">
            <div v-show="step === 3" class="step">
                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input  @blur="$v.formReg.country.$touch()"
                                :class="{'uk-form-danger': $v.formReg.country.$error}"
                                v-model="formReg.country" class="uk-input" type="text" placeholder="Страна" id="country">
                        <span v-if="!$v.formReg.surname.alpha"> {{ msgNotNumber }}</span>
                    </div>
                </div>

                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input  @blur="$v.formReg.city.$touch()"
                                :class="{'uk-form-danger': $v.formReg.city.$error}"
                                v-model="formReg.city" class="uk-input" type="text" placeholder="Город" id="city">
                        <span v-if="!$v.formReg.surname.alpha"> {{ msgNotNumber }}</span>
                    </div>
                </div>



                    <button @click.prevent="backStep" class="uk-button uk-button-default">Назад</button>
                    <button  @click.prevent="store"
                             :disabled="disabledBtn3"
                             class="uk-button uk-button-primary">Регистрация</button>

            </div>
            </transition>
        </form>
        <ImageUpload></ImageUpload>
    </div>
</template>

<script>
    import axios from 'axios';

    import ImageUpload from "../components/ImageUpload";

    import { required, helpers, sameAs} from 'vuelidate/lib/validators'
    const alpha = helpers.regex('alpha', /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
    export default {
        components: {ImageUpload},
        data: () => ({
            step: 1,
            msgNotNumber: 'Введите буквенные символы',
            msgPassword: 'Пароли не совпадают',
            formReg: {
                name:'',
                surname: '',
                phone: '',
                password: '',
                passwordConfirm: '',
                country: '',
                city:''
            }
        }),
        computed: {
            disabledBtn1(){
                return this.$v.formReg.name.$invalid ||
                    this.$v.formReg.surname.$invalid ||
                    this.$v.formReg.phone.$invalid
            },
            disabledBtn2(){
                return this.$v.formReg.password.$invalid ||
                    this.$v.formReg.passwordConfirm.$invalid

            },
            disabledBtn3(){
                return this.$v.formReg.city.$invalid ||
                    this.$v.formReg.country.$invalid

            }
        },

        methods: {
            nextStep(){
                if (this.step < 3) return this.step++
            },
            backStep(){
                if (this.step > 1) return this.step--
            },
            registerUser(){
                console.log('Успех');
                console.log(this.formReg);

                this.step = 1;
            },
            store() {
                console.log(this.formReg);
                this.loading = true;
                axios.post('/api/posts', this.formReg, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(res => {
                        if (res.data.status) {
                            this.$router.push('/post/' + res.data.post.id);
                        } else {
                            setTimeout(() => {
                                this.loading = false;
                            }, 300);
                            this.error = true;
                        }
                    })
            }

        },
        validations:{
            formReg: {
                name: {
                    required,
                    alpha
                },
                surname:{
                    required,
                    alpha
                },
                phone: {
                    required,
                },
                password: {
                    required,
                },
                passwordConfirm: {
                    required,
                    sameAs: sameAs('password')
                },
                country: {
                    required,
                    alpha
                },
                city: {
                    required,
                    alpha
                }
            }
        }
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.8s ease;
    }

    .slide-fade-enter {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
