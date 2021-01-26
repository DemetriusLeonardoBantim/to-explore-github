<template>
  <div class="dash">
    <img src="../../Assets/dash.svg"/>
    <div class="title">
      <h1>Explore repositorios no GitHub</h1>
    </div>
    <div class="form">
      <form action="">
        <input type="text" v-model="message" placeholder="Digite o nome do repositorio"/>
        <button type="submit">Pesquisar</button>
      </form>
    </div>
    <div class="repository">
      <a  href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/67908082?s=400&u=3a6871a4bc040c89eae1161a28eac780f2f1703a&v=4"
          alt="Demetrius"
        />
        <div>
          <strong>DemetriusLeonardoBantim/fpgame</strong>
          <p>Flappy bird game com js =)</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>



export default {

}
</script>

<style>
.title h1{
  font-size: 35px;
  color: #3A3A3A;
  margin-top: 80px;
  line-height: 56px;
  max-width: 450px;
}

.form form{
  margin-top: 40px;
  max-width: 700px;
  display: flex;
}

.form input{
  flex: 1;
  height: 50px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px ;
  color: #333;
}

input::placeholder{
  color: #A8A8B3;
}

.form button{
  width: 210px;
  height: 50px;
  border: 0;
  background: #04d631;
  border-radius: 0px 5px 5px 0px;
  color: #fff;
  font-weight: bold;
  transition: 0.8s;
}

button:hover{
  background: #038614;
}

div{
  margin-left: 20px ;
  flex: 1;
}

strong{
  font-size: 20px;
  color: #3D3D4D;
}

p{
  font-size: 18px;
  color: #A8A8B3;
  margin-top: 8px;
}

div .repository{
  margin-top: 80px;
  max-width: 700px;
}

div a{
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  color: #3A3A3A;

  display: flex;
  align-items: center;
  transition: 1s;


}
a + a{
  margin: 16px;
}

a:hover{
  transform: translateX(10px);
}

 .repository img{
  widows: 64px;
  height: 64px;
  border-radius: 50%;
}



</style>
