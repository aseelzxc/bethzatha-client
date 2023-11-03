<template>
   <header class="main-head">
      <nav class="head-nav">
        <ul class="menu">
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669zM16 15h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"></path></svg>
              <span>Dashboard</span></a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg>
              <span>Register a patient</span></a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"></path></svg>
              <span>Manage patients</span></a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path><path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
              <span>Manage prices</span></a>
          </li>
        </ul>
      </nav>
  </header>
</template>
  
<script lang="ts">

</script>

<style lang="scss">

@import url(https://fonts.googleapis.com/css?family=Roboto:300);

$color-1: rgb(22, 53, 104);
$color-2: #fefefe;
$pad:     0.925rem;

html,
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: Roboto;
  height: 100%;
}
.icon{
  width: 50;
  height: 50;
  fill: #fff;
}
.hide{
  display: none;
}
.head-nav {
  li{
    &:hover{
        background-color: $color-1;
        &:before{
            background-color: $color-1;
        }
    }
    &:before{
        position: absolute;
        left: -$pad;
        top: 0;
        width: $pad;
        height: 100%;
        content: "";
        background: #ED1C5B;
        z-index: 1;
        transition: background 400ms;
    }
  }
  ul{
      margin: {top:$pad*2;right:0;bottom:0;left:0;}
      padding: 0;
      list-style: none;
  }
  li{
      position: relative;
      clear: both;
      width: 100%;
      padding: 0;
      transition: background 400ms;
      a{
          display: flex;
          padding: {top:2vh;bottom:2vh;}
      }
  }
  a{
      align-items: center;
      width: 100%;
      color: $color-2;
      text-decoration: none;
      transition: color 400ms;
      span{
          position: relative;
          display: block;
          z-index: 0;
          font-family: Roboto;
          text-indent: -20em;
          white-space: nowrap;
          transition: text-indent 400ms ease-in-out;
      }
  }
  svg{
      position: relative;
      max-width: 30px;
      max-height: 30px;
      padding-left: 20px;
      padding-right: 20px;
      z-index: 1;
      fill: $color-2;
      transition: 400ms;
  }
  @media screen and (max: 768px){
      ul{
          margin: {top:$pad/4}
      }
      svg{
          max-width: 20px;
      }
  }
}
.main-head{
  position: fixed;
  bottom: 0;
  width: 83px;
  height: 100%;
  z-index: 1;
  background: rgb(26, 59, 112);
  transition: width 400ms;
  &:hover{
      width: 436px;
      & + .wrap-all-the-things{
          transform: translateX(336px);
          max-width: 100%;
      }
      .head-nav{
          li{
              @for $i from 1 through 4 {
                  &:nth-of-type(#{$i}){
                      span{
                          transition-delay: 100ms * $i;
                      }
                  }
              }
          }
          span{
              text-indent: 0;
          }
      }
  }
  @media screen and (max: 768px){
      width: 70px;
      padding: 0 $pad;
      .head-nav{
          padding: {left:7px;}
      }
      &:hover{
          .head-nav{
              span{
                  text-indent: 1em;
              }
          }
      }
  }
}
.wrap-all-the-things{
  min-height: 100%;
  height: 100%;
  padding: {left:140px;}
  margin: {top: 0;}
  transition: transform 400ms, opacity 400ms;
  @media screen and (max: 480px){
      padding: {left:70px;}
  }
}

</style>
  