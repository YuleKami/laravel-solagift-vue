<template>
    <header class="header">
        <div class="container__nav">
            <div class="header__inner">
                <nav class="menu">
                    <ul class="menu__list">
                        <li class="menu__list-item">
                            <span>12345678977</span><br>
                            <span>email@email.ru</span>
                        </li>
                        <li class="menu__list-item">
                            <span class="menu__list-ico">
                                <img class="menu__list-ico-deep" :src="`${ search }`" alt="ico_search">
                                <p>RU/EN</p>
                            </span>
                        </li>
                        <li class="menu__list-item">
                            <a class="menu__list-link">Главная</a>
                        </li>
                        <li class="menu__list-item">
                            <a class="menu__list-link">Каталог</a>
                        </li>
                        <li class="menu__list-item">
                            <a class="menu__list-link">О нас</a>
                        </li>
                    </ul>
                </nav>
                <a class="logo">
                    <img :src="`${ img }`" alt="qwe">
                </a>
                <nav class="menu">
                    <ul class="menu__list">
                        <li class="menu__list-item">
                            <a class="menu__list-link">Сотрудничество</a>
                        </li>
                        <li class="menu__list-item">
                            <a class="menu__list-link">Контакты</a>
                        </li>
                        <li class="menu__list-item-left">
                            <a class="menu__list-link">Войти</a>
                        </li>
                        <li class="menu__list-item-right">
                            <a class="menu__list-link">Регистрация</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    </header>
</template>
<!--<li v-for="link in links">
    <router-link :to="link.href">{{ link.title }}</router-link>
</li>-->
<script>
    export default {
        name: "Header",
        data() {
            return {
                search: '../../../assets/images/search.svg',
                img: '../../../assets/images/logo.png',
                links: [
                    {
                        title: 'Главная',
                        href: '/'
                    },
                    {
                        title: 'Пользователи',
                        href: '/users'
                    },
                    {
                        title: 'Регистрация',
                        href: '/register'
                    },
                    {
                        title: 'Новости',
                        href: '/news'
                    },
                    {
                        title: 'Отзывы',
                        href: '/recall'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/header";
</style>
