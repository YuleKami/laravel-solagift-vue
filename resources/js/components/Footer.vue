<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__info">
                        <img class="footer__info-logo" :src="`${ img }`" alt="qwe">
                        <div class="footer__info-image">
                            <div v-for="link in links">
                                <img class="footer__info-link" :src="link.img">
                            </div>
                        </div>
                        <h6 class="footer__info-title">
                            Свяжитесь с нами:
                        </h6>
                        <img class="footer__info-ico" :src="phone">
                        <p class="footer__info-phone">+7 (923) 409-7590</p>
                        <img class="footer__info-ico" :src="email">
                        <p class="footer__info-email">sales@solagift.ru</p>
                    </div>
                    <ul class="footer__social">
                        <li class="footer__social-title">
                            <p>Документы</p>
                        </li>
                        <li class="footer__social-item">
                            <a class="footer__social-link">Реквизиты</a>
                        </li>
                        <li class="footer__social-item">
                            <a class="footer__social-link">Политика конфиденциальности</a>
                        </li>
                        <li class="footer__social-item">
                            <a class="footer__social-link">Обработка персональных данных</a>
                        </li>
                    </ul>
                    <nav class="footer__info"><!--Ссылки футера-->
                        <p class="footer__menu-title">Инфомрация</p>
                        <ul class="footer__menu-list">

                            <li class="footer__menu-item">
                                <a class="footer__menu-link" href="#">
                                    Оплата и доставка
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-link" href="#">
                                Гарантии и возврат
                            </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-link" href="#">
                                    Как сделать заказ
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-link" href="#">
                                    Статьи
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-link" href="#">
                                    Оптом
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-link" href="#">
                                Ищем партнеров
                            </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-link" href="#">
                                    Где купить
                                </a>
                            </li>

                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                img: '../../../assets/images/logo2.png',
                phone: '../../../assets/images/icon/Call.svg',
                email: '../../../assets/images/icon/Send.svg',
                links: [
                    {
                        img: '../../../assets/images/icon/Vector4.svg'// inst
                    },
                    {
                        img: '../../../assets/images/icon/Vector.svg'
                    },
                    {
                        img: '../../../assets/images/icon/Vector2.svg'
                    },
                    {
                        img: '../../../assets/images/icon/Vector3.svg' //facebook
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/footer";
</style>
