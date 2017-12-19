// const getInput = document.querySelector('#searchUser');
// let request = new XMLHttpRequest();
//
// getInput.addEventListener('keyup', function() {
//     console.log(getInput.value);
// // $.ajax({
// //     url: 'https://api.github.com/users/adambugaj',
// //     data:{
// //       client_id: '274ae1a9f7f12319d84e',
// //       client_secret: 'e39a65f8555c7b5f1b4bedfc585184e931046150'
// //     }.done(function(user){
// //       console.log(user);
// //     })
// // });
//
//
    // request.open('POST','https://api.github.com/users/adambugaj', true);
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // let data = {client_id: '274ae1a9f7f12319d84e',
    // client_secret: 'e39a65f8555c7b5f1b4bedfc585184e931046150'}
    // request.send(data);
//
// });

const getInput = document.querySelector('#searchUser');
$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // Make request to Github
    $.ajax({
      url:'https://api.github.com/users/'+username,
      data:{
        client_id:'274ae1a9f7f12319d84e',
        client_secret:'e39a65f8555c7b5f1b4bedfc585184e931046150'
      }
    }).done(function(user){
        console.log(user);
        $('#profileData').html(`${user.location}`);
        document.querySelector('.card-img-top').src = user.avatar_url;
        document.querySelector('.card-title').innerHTML = user.name;
        document.querySelector('.card-text').innerHTML = user.bio;
        document.querySelector('.list-group > li > a').innerHTML = user.blog;
        document.querySelector('.list-group > li > a').href = user.blog;
        document.querySelector('.list-group > li:first-of-type + li').innerHTML = user.location;
        document.querySelector('.list-group > li:last-child').innerHTML = user.email;
    })
  });
});
