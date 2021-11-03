$(document).ready(function(){
   $('.feed-form').validate({
       rules: {
    // simple rule, converted to {required:true}
    name: "required",
    // compound rule
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Пожалуйста, укажите своё имя",
    email: {
      required: "Нам нужна Ваша почта, чтобы связаться с Вами",
      email: "Почта должна быть в формате: somemail@mail.ru or com"
    }
}
   });
});