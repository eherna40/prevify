<template lang="pug">
    nav.menu
        ul.menu-list
            li.navbar-item.active
                i.material-icons search
                p Buscar
            li.navbar-item
                i.material-icons settings
                p Setting
</template>
<style lang="scss">
    nav{
        position: fixed;
    }
    nav{
        height: 100vh;
        min-width: 90px;
        padding-right: 0;
        -webkit-box-shadow: inset -16px 2px 21px -17px rgba(0,0,0,0.75);
        -moz-box-shadow: inset -16px 2px 21px -17px rgba(0,0,0,0.75);
        box-shadow: inset -16px 2px 21px -17px rgba(0,0,0,0.75);
    }
    .search nav ul{
        width: 100%;
        font-weight: 900;
    }
    .navbar-item{
        flex-direction: column;
        text-align: center;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .navbar-item p{
        width: 100%;
    }
    .navbar-item i{
        font-size: 50px;
        line-height: 40px;
        padding-top: 10px;
    }
    .active{
        color:white;
        border-left: solid 2px #1db954;
    }
    .navbar-item:hover{
        color: white;
        border-left: solid 4px #1db954; 
    }

</style>
