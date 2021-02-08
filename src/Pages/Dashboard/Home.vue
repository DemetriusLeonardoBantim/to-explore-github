<template>
  <div class="dash">
    <img src="../../Assets/dash.svg"/>
    <div class="title">
      <h1>Explore repositorios no GitHub</h1>
    </div>
    <div class="form">
      <form action="">
        <input  v-model="usuario" type="text" placeholder="Digite o nome do usuario"/>
        <button @click.prevent="getProdutos" type="submit">Pesquisar</button>
      </form>
    </div>
    <div class="repository" v-for="(dados, id) in repos" :key="id">
      <ul>
        <li><img :src="dados.owner.avatar_url" alt=""></li>
        <li class="full-name">{{dados.full_name}}</li>
        <li class="name"> Nome do projeto: {{dados.name}}</li>
        <li> Descricao: {{dados.description}}</li>
        <li><a :href="dados.html_url">Visitar repositorio -> </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home.vue',
  data(){
    return {
      usuario: '',
      repos: {}
    }
  },
  methods:{
    getProdutos(){
      fetch(`https://api.github.com/users/${this.usuario}/repos`)
      .then(r=> r.json())
      .then(r => {
        this.repos = r
      })
    }
  }
}
</script>

<style>
li{
  list-style: none;
  padding: 5px;
}

a{
  text-decoration: none;
  color: #333;
}

ul{
  transition: 1s;
}

ul:hover{
  transform: translateX(10px);
}

.full-name{
  color: #333;
  font-size: 1.5rem;
}


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

div li{
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


 .repository img{
  widows: 64px;
  height: 64px;
  border-radius: 50%;
}



</style>
